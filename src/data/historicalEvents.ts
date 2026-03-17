export interface HistoricalEvent {
  id: number;
  title: string;
  location: string;
  coordinates: [number, number];
  date: string;
  phase: 'pre-party' | 'struggle-1930-1945' | 'resistance-1945-1954' | 'sovereignty';
  description: string;
}

export const phaseLabels: Record<string, string> = {
  'pre-party': 'Trước khi có Đảng',
  'struggle-1930-1945': 'Đấu tranh 1930–1945',
  'resistance-1945-1954': 'Kháng chiến chống Pháp',
  'sovereignty': 'Chủ quyền Biển đảo',
};

const historicalEvents: HistoricalEvent[] = [
  {
    id: 1,
    title: "Pháp nổ súng xâm lược Việt Nam",
    location: "Đà Nẵng",
    coordinates: [16.0544, 108.2022],
    date: "01/09/1858",
    phase: "pre-party",
    description: "Liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà, mở đầu quá trình xâm lược Việt Nam."
  },
  {
    id: 2,
    title: "Khởi nghĩa Hương Khê",
    location: "Hà Tĩnh",
    coordinates: [18.1775, 105.7114],
    date: "1885–1896",
    phase: "pre-party",
    description: "Cuộc khởi nghĩa tiêu biểu nhất trong phong trào Cần Vương do Phan Đình Phùng lãnh đạo."
  },
  {
    id: 3,
    title: "Khởi nghĩa Yên Thế",
    location: "Bắc Giang",
    coordinates: [21.4281, 106.1364],
    date: "1884–1913",
    phase: "pre-party",
    description: "Phong trào nông dân chống Pháp kiên cường ở vùng trung du phía Bắc do Hoàng Hoa Thám lãnh đạo."
  },
  {
    id: 4,
    title: "Khởi nghĩa Yên Bái",
    location: "Yên Bái",
    coordinates: [21.7167, 104.9],
    date: "02/1930",
    phase: "pre-party",
    description: "Cuộc khởi nghĩa do Việt Nam Quốc dân Đảng lãnh đạo với khẩu hiệu 'Không thành công cũng thành nhân'."
  },
  {
    id: 5,
    title: "Phong trào Xô viết Nghệ - Tĩnh",
    location: "Nghệ An - Hà Tĩnh",
    coordinates: [18.6734, 105.6924],
    date: "1930–1931",
    phase: "struggle-1930-1945",
    description: "Đỉnh cao của phong trào cách mạng 1930-1931, thiết lập chính quyền sơ khai của công nông."
  },
  {
    id: 6,
    title: "Khởi nghĩa Nam Kỳ",
    location: "Hóc Môn, Gia Định",
    coordinates: [10.8853, 106.5913],
    date: "23/11/1940",
    phase: "struggle-1930-1945",
    description: "Tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc, lần đầu tiên lá cờ đỏ sao vàng xuất hiện."
  },
  {
    id: 7,
    title: "Cách mạng Tháng Tám",
    location: "Hà Nội",
    coordinates: [21.0285, 105.8542],
    date: "19/08/1945",
    phase: "struggle-1930-1945",
    description: "Tổng khởi nghĩa giành chính quyền tại Thủ đô, dẫn đến sự ra đời của nước Việt Nam Dân chủ Cộng hòa."
  },
  {
    id: 8,
    title: "Nam Bộ Kháng Chiến",
    location: "Sài Gòn",
    coordinates: [10.7769, 106.7009],
    date: "23/09/1945",
    phase: "resistance-1945-1954",
    description: "Pháp quay lại xâm lược Nam Bộ, quân dân Sài Gòn - Chợ Lớn đồng loạt đứng lên chiến đấu."
  },
  {
    id: 9,
    title: "Lời kêu gọi Toàn quốc kháng chiến",
    location: "Vạn Phúc, Hà Nội",
    coordinates: [20.9764, 105.7761],
    date: "19/12/1946",
    phase: "resistance-1945-1954",
    description: "Chủ tịch Hồ Chí Minh ra lời kêu gọi: 'Thà hy sinh tất cả chứ nhất định không chịu mất nước'."
  },
  {
    id: 10,
    title: "Chiến dịch Việt Bắc Thu Đông",
    location: "Bắc Kạn",
    coordinates: [22.147, 105.832],
    date: "1947",
    phase: "resistance-1945-1954",
    description: "Đập tan kế hoạch 'đánh nhanh thắng nhanh' của Pháp, bảo vệ an toàn cơ quan đầu não kháng chiến."
  },
  {
    id: 11,
    title: "Chiến dịch Biên giới Thu Đông",
    location: "Cao Bằng",
    coordinates: [22.666, 106.263],
    date: "1950",
    phase: "resistance-1945-1954",
    description: "Khai thông đường liên lạc với các nước xã hội chủ nghĩa, chuyển sang giai đoạn phản công."
  },
  {
    id: 12,
    title: "Chiến thắng Điện Biên Phủ",
    location: "Điện Biên",
    coordinates: [21.3891, 103.0217],
    date: "07/05/1954",
    phase: "resistance-1945-1954",
    description: "Đỉnh cao của cuộc kháng chiến, buộc Pháp ký Hiệp định Giơnevơ chấm dứt chiến tranh tại Đông Dương."
  },
  {
    id: 13,
    title: "Quần đảo Hoàng Sa",
    location: "Đà Nẵng",
    coordinates: [16.5, 112.0],
    date: "1945–1954",
    phase: "sovereignty",
    description: "Khu vực thực thi chủ quyền và duy trì các hoạt động bảo vệ lãnh thổ của Việt Nam trong thời kỳ kháng chiến."
  },
  {
    id: 14,
    title: "Quần đảo Trường Sa",
    location: "Khánh Hòa",
    coordinates: [10.0, 114.0],
    date: "1945–1954",
    phase: "sovereignty",
    description: "Phần lãnh thổ không tách rời của Việt Nam, gắn liền với lịch sử đấu tranh bảo vệ biển đảo quốc gia."
  },
  {
    id: 15,
    title: "Đảo Phú Quốc",
    location: "Kiên Giang",
    coordinates: [10.2753, 103.9773],
    date: "1945–1954",
    phase: "sovereignty",
    description: "Nơi diễn ra nhiều cuộc đấu tranh kiên cường của các chiến sĩ cách mạng bị giam cầm trong các nhà tù thực dân."
  }
];

export default historicalEvents;
