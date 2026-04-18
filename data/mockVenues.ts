export interface Venue {
  id: string;
  name: string;
  location: string;
  googleMapsUrl: string;
  description: string;
  images: string[];
  priceRange: {
    min: number;
    max: number;
  };
  capacity: {
    min: number;
    max: number;
  };
  servicesIncluded: string[];
  servicesExcluded: string[];
  contactInfo: string;
}

export const mockVenues: Venue[] = [
  {
    id: "venue-1",
    name: "The Grand Ballroom Bangkok",
    location: "สุขุมวิท, กรุงเทพฯ",
    googleMapsUrl: "https://maps.google.com/?q=The+Grand+Ballroom+Bangkok",
    description: "ห้องจัดเลี้ยงสุดหรูพร้อมแชนเดอเลียร์คริสตัลขนาดใหญ่ เหมาะสำหรับงานแต่งงานระดับพรีเมียมที่ต้องการความอลังการ",
    images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 350000, max: 800000 },
    capacity: { min: 200, max: 800 },
    servicesIncluded: ["สถานที่จัดงาน", "ระบบแสงสีเสียงมาตรฐาน", "โต๊ะเก้าอี้จัดเลี้ยง", "ดอกไม้ตกแต่งเวที", "จอ LED ขนาดใหญ่"],
    servicesExcluded: ["อาหารและเครื่องดื่ม (มีค่าเปิดขวด)", "วงดนตรีสด", "ออร์แกไนเซอร์"],
    contactInfo: "02-XXX-XXXX"
  },
  {
    id: "venue-2",
    name: "River Front Garden Resort",
    location: "ริมแม่น้ำเจ้าพระยา, นนทบุรี",
    googleMapsUrl: "https://maps.google.com/?q=River+Front+Garden+Resort",
    description: "รีสอร์ทริมน้ำบรรยากาศร่มรื่น โดดเด่นด้วยสวนสวยริมแม่น้ำ เหมาะสำหรับงานแต่งงานสไตล์อบอุ่นเป็นกันเองในสวน",
    images: ["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 150000, max: 350000 },
    capacity: { min: 50, max: 250 },
    servicesIncluded: ["สถานที่สวนริมน้ำและห้องแอร์", "เก้าอี้ชิวารี", "ตกแต่งสถานที่พื้นฐาน", "อาหารบุฟเฟ่ต์สำหรับ 100 ท่าน"],
    servicesExcluded: ["ระบบแสงเสียงแบบเต็มรูปแบบ", "เครื่องดื่มแอลกอฮอล์"],
    contactInfo: "08X-XXX-XXXX"
  },
  {
    id: "venue-3",
    name: "Minimalist Studio BKK",
    location: "อารีย์, กรุงเทพฯ",
    googleMapsUrl: "https://maps.google.com/?q=Minimalist+Studio+BKK",
    description: "สตูดิโอจัดงานแต่งงานสไตล์มินิมอล แสงธรรมชาติสวยงาม เหมาะสำหรับงานขนาดเล็กและอบอุ่น เน้นความเรียบง่ายแต่เก๋ไก๋",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 80000, max: 150000 },
    capacity: { min: 30, max: 100 },
    servicesIncluded: ["สถานที่สไตล์มินิมอล", "ชุดโต๊ะเก้าอี้ไม้", "มุมถ่ายรูปสวยงาม", "เครื่องเสียงชุดเล็ก"],
    servicesExcluded: ["อาหารและเครื่องดื่ม", "การตกแต่งดอกไม้ (ต้องนำมาเอง)"],
    contactInfo: "Line: @minimaliststudio"
  }
];
