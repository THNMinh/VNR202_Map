export interface HistoricalEvent {
  id: number;
  title: string;
  location: string;
  coordinates: [number, number];
  date: string;
  phase: 'pre-party' | 'struggle-1930-1945' | 'resistance-1945-1954' | 'sovereignty';
  description: string;
  imageUrl?: string;
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
    description: "Liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà, mở đầu quá trình xâm lược Việt Nam.",
    imageUrl: "https://baotanglichsu.vn/DataFiles/Uploaded/image/Phap-tan-cong-vao--Hoi-An.gif"
  },
  {
    id: 2,
    title: "Khởi nghĩa Hương Khê",
    location: "Hà Tĩnh",
    coordinates: [18.1775, 105.7114],
    date: "1885–1896",
    phase: "pre-party",
    description: "Cuộc khởi nghĩa tiêu biểu nhất trong phong trào Cần Vương do Phan Đình Phùng lãnh đạo.",
    imageUrl: "https://bna.1cdn.vn/2024/11/07/tranh-ve-minh-hoat-mot-tran-danh-cua-nghia-quan-can-vuong.jpg"
  },
  {
    id: 3,
    title: "Khởi nghĩa Yên Thế",
    location: "Bắc Giang",
    coordinates: [21.4281, 106.1364],
    date: "1884–1913",
    phase: "pre-party",
    description: "Nhóm khởi nghĩa của Đề Thám (hình chụp của trung úy Romain-Desfossés)   Phong trào nông dân chống Pháp kiên cường ở vùng trung du phía Bắc do Hoàng Hoa Thám lãnh đạo.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ban_De_Tham.jpg/330px-Ban_De_Tham.jpg"
  },
  {
    id: 4,
    title: "Khởi nghĩa Yên Bái",
    location: "Yên Bái",
    coordinates: [21.7167, 104.9],
    date: "02/1930",
    phase: "pre-party",
    description: "Cuộc khởi nghĩa do Việt Nam Quốc dân Đảng lãnh đạo với khẩu hiệu 'Không thành công cũng thành nhân'.",
    imageUrl: ""
  },
  {
    id: 5,
    title: "Phong trào Xô viết Nghệ - Tĩnh",
    location: "Nghệ An - Hà Tĩnh",
    coordinates: [18.6734, 105.6924],
    date: "1930–1931",
    phase: "struggle-1930-1945",
    description: "Đỉnh cao của phong trào cách mạng 1930-1931, thiết lập chính quyền sơ khai của công nông.",
    imageUrl: "https://quocphongthudo.vn/upload/2001606/fck/files/xo%20viet.jpg"
  },
  {
    id: 6,
    title: "Khởi nghĩa Nam Kỳ",
    location: "Hóc Môn, Gia Định",
    coordinates: [10.8853, 106.5913],
    date: "23/11/1940",
    phase: "struggle-1930-1945",
    description: "Tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc, lần đầu tiên lá cờ đỏ sao vàng xuất hiện.",
    imageUrl: "https://baoquankhu4.com.vn/upload/18269/fck/files/Nh%E1%BB%AFng%20ng%C3%A0y%20%C4%91%E1%BA%A7u%20kh%E1%BB%9Fi%20ngh%C4%A9a%20%E1%BB%9F%20B%E1%BA%BFn%20Tre.jpg"
  },
  {
    id: 7,
    title: "Cách mạng Tháng Tám",
    location: "Hà Nội",
    coordinates: [21.0285, 105.8542],
    date: "19/08/1945",
    phase: "struggle-1930-1945",
    description: "Tổng khởi nghĩa giành chính quyền tại Thủ đô, dẫn đến sự ra đời của nước Việt Nam Dân chủ Cộng hòa.",
    imageUrl: "https://thvl.vn/wp-content/uploads/2016/09/1-1348.jpg"
  },
  {
    id: 8,
    title: "Nam Bộ Kháng Chiến",
    location: "Sài Gòn",
    coordinates: [10.7769, 106.7009],
    date: "23/09/1945",
    phase: "resistance-1945-1954",
    description: "Pháp quay lại xâm lược Nam Bộ, quân dân Sài Gòn - Chợ Lớn đồng loạt đứng lên chiến đấu.",
    imageUrl: "https://mediafile.qdnd.vn/images/2025/9/22/add.jpg"
  },
  {
    id: 9,
    title: "Lời kêu gọi Toàn quốc kháng chiến",
    location: "Vạn Phúc, Hà Nội",
    coordinates: [20.9764, 105.7761],
    date: "19/12/1946",
    phase: "resistance-1945-1954",
    description: "Chủ tịch Hồ Chí Minh ra lời kêu gọi: 'Thà hy sinh tất cả chứ nhất định không chịu mất nước'.",
    imageUrl: "https://imgnvsk.vnanet.vn/MediaUpload/Content/2023/12/18/tdls-btl-1654-tdls-19-12-loi-keu-goi-toan-quoc-khang-chien-cuong-linh-ve-khat-vong-hoa-binh-cua-dan-toc-hd-18-9-36-1018-9-36-41-427-240-18-9-37-16.jpg"
  },
  {
    id: 10,
    title: "Chiến dịch Việt Bắc Thu Đông",
    location: "Bắc Kạn",
    coordinates: [22.147, 105.832],
    date: "1947",
    phase: "resistance-1945-1954",
    description: "Đập tan kế hoạch 'đánh nhanh thắng nhanh' của Pháp, bảo vệ an toàn cơ quan đầu não kháng chiến.",
    imageUrl: "https://baotanglichsu.vn/DataFiles/Uploaded/image/VU%20THUY%20DUONG/Anh-3q.gif"
  },
  {
    id: 11,
    title: "Chiến dịch Biên giới Thu Đông",
    location: "Cao Bằng",
    coordinates: [22.666, 106.263],
    date: "1950",
    phase: "resistance-1945-1954",
    description: "Khai thông đường liên lạc với các nước xã hội chủ nghĩa, chuyển sang giai đoạn phản công.",
    imageUrl: "https://scontent.iocvnpt.com/resources/portal/Images/CBG/minhtiep/ChienDichBienGioi1950/636573960351342888_1.png"
  },
  {
    id: 12,
    title: "Chiến thắng Điện Biên Phủ",
    location: "Điện Biên",
    coordinates: [21.3891, 103.0217],
    date: "07/05/1954",
    phase: "resistance-1945-1954",
    description: "Đỉnh cao của cuộc kháng chiến, buộc Pháp ký Hiệp định Giơnevơ chấm dứt chiến tranh tại Đông Dương.",
    imageUrl: "https://thanhnien.mediacdn.vn/Uploaded/quochung-qc/2022_05_05/chien-thang-dbp-4976.jpg"
  },
  {
    id: 13,
    title: "Quần đảo Hoàng Sa",
    location: "Đà Nẵng",
    coordinates: [16.5, 112.0],
    date: "1945–1954",
    phase: "sovereignty",
    description: "Khu vực thực thi chủ quyền và duy trì các hoạt động bảo vệ lãnh thổ của Việt Nam trong thời kỳ kháng chiến.",
    imageUrl: "https://sps.ussh.vnu.edu.vn/uploads/fps/sinh-vien/2023_07/359827644_678535477636914_7667867458209938114_n.jpg"
  },
  {
    id: 14,
    title: "Quần đảo Trường Sa",
    location: "Khánh Hòa",
    coordinates: [10.0, 114.0],
    date: "1945–1954",
    phase: "sovereignty",
    description: "Phần lãnh thổ không tách rời của Việt Nam, gắn liền với lịch sử đấu tranh bảo vệ biển đảo quốc gia.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Spratly_Island.png"
  },
  {
    id: 15,
    title: "Đảo Phú Quốc",
    location: "Kiên Giang",
    coordinates: [10.2753, 103.9773],
    date: "1945–1954",
    phase: "sovereignty",
    description: "Nơi diễn ra nhiều cuộc đấu tranh kiên cường của các chiến sĩ cách mạng bị giam cầm trong các nhà tù thực dân.",
    imageUrl: "https://rootytrip.com/wp-content/uploads/2024/07/phu-quoc-1024x576.jpg"
  },
   {
    id: 16,
    title: "Hội nghị thành lập Đảng",
    location: "Hương Cảng, Trung Quốc",
    coordinates: [22.3193, 114.1694],
    date: "03/02/1930",
    phase: "struggle-1930-1945",
    description: "Hợp nhất các tổ chức cộng sản thành Đảng Cộng sản Việt Nam dưới sự chủ trì của Nguyễn Ái Quốc.",
    imageUrl: "https://imgnvsk.vnanet.vn/MediaUpload/Medium/2023/07/10/cau-3-hoi-nghi-thanh-lap-dang-10-16-20-13510-8-54-22.jpg"
  },
  {
    id: 17,
    title: "Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân",
    location: "Cao Bằng",
    coordinates: [22.666, 106.263],
    date: "22/12/1944",
    phase: "struggle-1930-1945",
    description: "Tiền thân của Quân đội nhân dân Việt Nam, ra đời tại khu rừng Trần Hưng Đạo.",
        imageUrl: "https://special.nhandan.vn/tuyen-truyen-VN-giai-phong-quan/assets/DrDIvNnCS8/unnamed-1-512x288.jpg"

  },
  {
    id: 18,
    title: "Ký kết Hiệp định Sơ bộ",
    location: "Hà Nội",
    coordinates: [21.0285, 105.8542],
    date: "06/03/1946",
    phase: "resistance-1945-1954",
    description: "Việt Nam ký với Pháp nhằm tạo thời gian hòa hoãn để chuẩn bị cho kháng chiến lâu dài.",
        imageUrl: "https://file3.qdnd.vn/data/images/0/2022/03/03/thutrang_la/bachovatongthongindonexia%205.jpg?dpi=150&quality=100&w=870"

  },
  {
    id: 19,
    title: "Hiệp nghị Giơ-ne-vơ",
    location: "Thụy Sỹ",
    coordinates: [46.2044, 6.1432],
    date: "21/07/1954",
    phase: "resistance-1945-1954",
    description: "Kết thúc thắng lợi cuộc kháng chiến chống Pháp, giải phóng hoàn toàn miền Bắc.",
        imageUrl: "https://bcp.cdnchinhphu.vn/334894974524682240/2024/4/25/1gionevoa-17140129931551422933117.jpg"

  },
  {
    id: 20,
    title: "Trận chiến đấu tại Bắc Bộ Phủ",
    location: "Hà Nội",
    coordinates: [21.0253, 105.8569],
    date: "20/12/1946",
    phase: "resistance-1945-1954",
    description: "Trận đánh ác liệt giữa quân ta và quân Pháp ngay sau khi Toàn quốc kháng chiến bùng nổ, tiêu biểu cho tinh thần 'Quyết tử cho Tổ quốc quyết sinh'.",
    imageUrl: "" 
  },
  {
    id: 21,
    title: "Đại hội đại biểu toàn quốc lần thứ II của Đảng",
    location: "Chiêm Hóa, Tuyên Quang",
    coordinates: [22.1444, 105.2633],
    date: "02/1951",
    phase: "resistance-1945-1954",
    description: "Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam, thông qua Chính cương xác định đường lối kháng chiến đến thắng lợi hoàn toàn.",
    imageUrl: ""
  },
  {
    id: 22,
    title: "Chiến thắng Hòa Bình",
    location: "Hòa Bình",
    coordinates: [20.8172, 105.3375],
    date: "12/1951–02/1952",
    phase: "resistance-1945-1954",
    description: "Ta đánh bại kế hoạch chiếm đóng Hòa Bình của Pháp, bảo vệ vững chắc đường liên lạc giữa căn cứ Việt Bắc với khu IV và Nam Bộ.",
    imageUrl: ""
  },
  {
    id: 23,
    title: "Chiến dịch Tây Bắc",
    location: "Sơn La, Lai Châu, Yên Bái",
    coordinates: [21.3259, 103.9119],
    date: "10/1952–12/1952",
    phase: "resistance-1945-1954",
    description: "Giải phóng một vùng rộng lớn ở Tây Bắc, phá âm mưu lập 'Xứ Thái tự trị' của thực dân Pháp.",
    imageUrl: ""
  },
  {
    id: 24,
    title: "Phong trào phá 'Tháp canh' tại Nam Bộ",
    location: "Bình Dương",
    coordinates: [11.0347, 106.745],
    date: "1948–1950",
    phase: "resistance-1945-1954",
    description: "Phát triển cách đánh đặc công (trận cầu Bà Kiên), phá vỡ chiến thuật 'mạng nhện' bằng hệ thống tháp canh dày đặc của Pháp ở Nam Bộ.",
    imageUrl: ""
  },
  {
    id: 25,
    title: "Chiến thắng La Ngà",
    location: "Đồng Nai",
    coordinates: [11.1969, 107.2344],
    date: "01/03/1948",
    phase: "resistance-1945-1954",
    description: "Trận phục kích lớn nhất của quân dân Nam Bộ thời kỳ đầu kháng chiến, tiêu diệt nhiều sinh lực và phương tiện chiến tranh của địch.",
    imageUrl: ""
  },
  {
    id: 26,
    title: "Chiến thắng trên mặt trận cực Nam Trung Bộ",
    location: "Nha Trang, Khánh Hòa",
    coordinates: [12.2451, 109.1943],
    date: "23/10/1945",
    phase: "resistance-1945-1954",
    description: "Mở đầu cuộc chiến đấu kiên cường của quân dân mặt trận Nam Trung Bộ và Tây Nguyên ngay sau khi Pháp quay lại xâm lược.",
    imageUrl: ""
  }
];

export default historicalEvents;
