import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMap, Circle, GeoJSON } from 'react-leaflet';
import { Star, Clock, MapPin, ChevronRight, History, X, Shield } from 'lucide-react';
import L from 'leaflet';
import type { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';
import 'leaflet/dist/leaflet.css';
import historicalEvents, { phaseLabels, type HistoricalEvent } from '@/data/historicalEvents';

// --- PHASE FILTER CONFIG ---
const phases = [
  { key: 'all', label: 'Tất cả' },
  { key: 'pre-party', label: 'Trước Đảng' },
  { key: 'struggle-1930-1945', label: '1930–1945' },
  { key: 'resistance-1945-1954', label: 'Chống Pháp' },
  { key: 'sovereignty', label: 'Chủ quyền' },
] as const;

// --- MARKER ICONS ---
const createIcon = (isSovereignty: boolean, isSelected: boolean) => {
  const fill = isSelected ? '#ffcd00' : (isSovereignty ? '#ffcd00' : '#da251d');
  const stroke = isSelected ? '#1a0f0f' : (isSovereignty ? '#da251d' : '#ffcd00');
  const pulseClass = isSovereignty ? 'pulse-gold' : '';

  return L.divIcon({
    className: 'custom-marker',
    html: `<div class="flex items-center justify-center ${pulseClass}">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
};

// --- Vietnamese sovereignty labels ---
const sovereigntyLabels = [
  { name: 'Quần đảo Hoàng Sa\n(Việt Nam)', coordinates: [16.5, 112.0] as [number, number], radius: 80000 },
  { name: 'Quần đảo Trường Sa\n(Việt Nam)', coordinates: [10.0, 114.0] as [number, number], radius: 120000 },
  { name: 'Đảo Phú Quốc\n(Việt Nam)', coordinates: [10.2753, 103.9773] as [number, number], radius: 30000 },
];

const createLabelIcon = (text: string) => {
  return L.divIcon({
    className: 'sovereignty-label',
    html: `<div style="
      color: hsl(48, 100%, 50%);
      font-family: var(--font-display);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      text-shadow: 0 0 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.6);
      white-space: pre-line;
      text-align: center;
      pointer-events: none;
      line-height: 1.4;
    ">${text}</div>`,
    iconSize: [180, 50],
    iconAnchor: [90, 25],
  });
};

// --- MAP CONTROLLER ---
const MapController = ({ center }: { center?: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 7, { duration: 1.5 });
    }
  }, [center, map]);
  return null;
};

// --- SIDE PANEL ---
const SidePanel = ({ event, isOpen, onClose }: { event: HistoricalEvent | null; isOpen: boolean; onClose: () => void }) => {
  if (!event) return null;

  return (
    <aside
      className={`absolute top-0 right-0 z-[1001] h-full w-full md:w-96 bg-card/95 backdrop-blur-xl border-l border-border transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ transitionTimingFunction: 'var(--ease-expo)' }}
    >
      <div className="p-8 h-full flex flex-col">
        <button
          onClick={onClose}
          className="self-end p-2 hover:bg-muted rounded-full transition-colors text-foreground"
        >
          <X size={20} />
        </button>

        <div className="mt-6">
          <span className="inline-block px-2.5 py-1 bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/30 rounded-sm">
            {phaseLabels[event.phase]}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-tight text-secondary tracking-tight font-display">
            {event.title}
          </h2>

          <div className="flex items-center gap-4 mt-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="mt-8 h-px w-12 bg-primary" />

          <p className="mt-8 text-foreground/80 leading-relaxed text-lg font-serif italic">
            "{event.description}"
          </p>

          {event.phase === 'sovereignty' && (
            <div className="mt-8 flex items-center gap-3 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
              <Shield size={20} className="text-secondary flex-shrink-0" />
              <p className="text-xs text-secondary/90 uppercase tracking-wider font-semibold">
                Lãnh thổ thiêng liêng — Chủ quyền không thể tranh cãi
              </p>
            </div>
          )}
        </div>

        <div className="mt-auto pt-8 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          Dữ liệu Lịch sử Đảng Cộng sản Việt Nam
        </div>
      </div>
    </aside>
  );
};

// --- TIMELINE ---
const timelineYears = [1858, 1900, 1930, 1940, 1945, 1950, 1954];

const Timeline = ({ selectedYear, onChange }: { selectedYear: number; onChange: (y: number) => void }) => (
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] w-[92%] max-w-2xl">
    <div className="bg-card/85 backdrop-blur-md p-5 rounded-xl border border-border shadow-2xl">
      <div className="flex justify-between mb-3 px-1">
        {timelineYears.map(year => (
          <button
            key={year}
            onClick={() => onChange(year)}
            className={`text-[10px] font-bold tracking-tight transition-colors ${selectedYear >= year ? 'text-secondary' : 'text-muted-foreground/40'}`}
          >
            {year}
          </button>
        ))}
      </div>
      <input
        type="range"
        min="1858"
        max="1954"
        step="1"
        value={selectedYear}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="timeline-slider w-full"
      />
      <div className="mt-3 text-center">
        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.25em]">Hiển thị đến năm </span>
        <span className="text-base font-bold text-secondary ml-1">{selectedYear}</span>
      </div>
    </div>
  </div>
);

// --- MAIN ---
export default function Index() {
  const [selectedYear, setSelectedYear] = useState(1954);
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [vietnamBoundaryGeoJson, setVietnamBoundaryGeoJson] = useState<FeatureCollection<Geometry, GeoJsonProperties> | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadVietnamBoundary = async () => {
      try {
        const response = await fetch('/vietnam-boundary.geojson', {
          signal: controller.signal,
        });

        if (!response.ok) return;
        const data = (await response.json()) as FeatureCollection<Geometry, GeoJsonProperties>;
        setVietnamBoundaryGeoJson(data);
      } catch {
        // Keep map usable even if the detailed boundary layer cannot be fetched.
      }
    };

    void loadVietnamBoundary();
    return () => controller.abort();
  }, []);

  const getYearFromDate = (date: string): number => {
    const match = date.match(/\d{4}/);
    return match ? parseInt(match[0]) : 1945;
  };

  const filteredEvents = useMemo(() => {
    return historicalEvents.filter(e => {
      if (e.phase === 'sovereignty') return true;
      const year = getYearFromDate(e.date);
      const yearOk = year <= selectedYear;
      const phaseOk = selectedPhase === 'all' || e.phase === selectedPhase;
      return yearOk && phaseOk;
    });
  }, [selectedYear, selectedPhase]);

  const handleMarkerClick = useCallback((event: HistoricalEvent) => {
    setSelectedEvent(event);
    setSidebarOpen(true);
  }, []);

  const vietnamBoundaryStyle = useMemo(() => ({
    fillColor: '#b91c1c',
    fillOpacity: 0.28,
    color: '#ffcd00',
    weight: 2,
    opacity: 0.95,
    lineJoin: 'round' as const,
    lineCap: 'round' as const,
  }), []);

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden antialiased">
      {/* Header */}
      <header className="absolute top-0 left-0 z-[1000] w-full p-4 md:p-6 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none">
        <div className="flex items-center gap-3 md:gap-4 pointer-events-auto">
          <div className="p-2.5 md:p-3 bg-primary rounded-sm shadow-lg" style={{ boxShadow: 'var(--shadow-glow-red)' }}>
            <History size={22} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-bold tracking-tighter uppercase text-secondary font-display">
              Bản đồ Lịch sử Kháng chiến
            </h1>
            <p className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Giai đoạn 1858 — 1954
            </p>
          </div>
        </div>

        {/* Phase Filters */}
        <div className="flex flex-wrap gap-2 mt-4 pointer-events-auto">
          {phases.map(p => (
            <button
              key={p.key}
              onClick={() => setSelectedPhase(p.key)}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border rounded-sm transition-all duration-300 ${
                selectedPhase === p.key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card/60 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </header>

      {/* Map */}
      <div className="w-full h-full vintage-map">
        <MapContainer
          center={[16.0, 107.0]}
          zoom={6}
          zoomControl={false}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          />
          {vietnamBoundaryGeoJson && (
            <GeoJSON
              data={vietnamBoundaryGeoJson}
              style={vietnamBoundaryStyle}
              interactive={false}
            />
          )}
          {/* Vietnam territory highlight circles */}
          {sovereigntyLabels.map(area => (
            <Circle
              key={area.name}
              center={area.coordinates}
              radius={area.radius}
              pathOptions={{
                color: 'hsl(48, 100%, 50%)',
                fillColor: 'hsl(1, 78%, 49%)',
                fillOpacity: 0.08,
                weight: 1.5,
                dashArray: '6, 4',
                opacity: 0.6,
              }}
            />
          ))}
          {/* Vietnamese sovereignty labels */}
          {sovereigntyLabels.map(area => (
            <Marker
              key={`label-${area.name}`}
              position={[area.coordinates[0] + 0.6, area.coordinates[1]]}
              icon={createLabelIcon(area.name)}
              interactive={false}
            />
          ))}
          {filteredEvents.map(event => (
            <Marker
              key={event.id}
              position={event.coordinates}
              icon={createIcon(event.phase === 'sovereignty', selectedEvent?.id === event.id)}
              eventHandlers={{ click: () => handleMarkerClick(event) }}
            />
          ))}
          <MapController center={selectedEvent?.coordinates} />
        </MapContainer>
      </div>

      {/* Side Panel */}
      <SidePanel event={selectedEvent} isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Timeline */}
      <Timeline selectedYear={selectedYear} onChange={setSelectedYear} />

      {/* Legend */}
      <div className="absolute bottom-28 left-4 md:bottom-10 md:left-10 z-[1000]">
        <div className="flex flex-col gap-2 p-3 md:p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Di tích Kháng chiến</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Chủ quyền Biển đảo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
