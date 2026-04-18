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
    id: "venue-sync-1",
    name: "Celebce Venue",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-2",
    name: "Oyard",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-3",
    name: "The Petal Garden & Studio",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-4",
    name: "วาระเวลา การ์เด้น ฮอลล์",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-5",
    name: "อากาเป้ การ์เด้น",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-6",
    name: "found venue",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-7",
    name: "The Tall Trees",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-8",
    name: "Inwood Garden",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-9",
    name: "The Botanical House Bangkok",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-10",
    name: "Rylyn Garden",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-11",
    name: "Silooet House",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-12",
    name: "Bua garden backyard cafe & studio",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-13",
    name: "Salut d’ Amour สถานที่จัดงานแต่งงาน /Event ต่างๆ",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-14",
    name: "บาร์น คลองสวน",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-15",
    name: "La novia studio",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-16",
    name: "PASADOKMAI GARDEN & CAFE",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-17",
    name: "ริน แอท เรนทรี",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-18",
    name: "The Crystal Studio เดอะ คริสตัล สตูดิโอ",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  },
  {
    id: "venue-sync-19",
    name: "ร้านอาหาร Take a Breath cafe & eatery",
    location: "พุทธมณฑลสาย 1, กรุงเทพมหานคร",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "Heart to Heart Morning Package (Oct - Mar) รองรับสูงสุด 200 ท่าน มี All Zone จัดงานและ Private Glasshouse สำหรับแต่งตัวและทำพิธี",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 279000, max: 299000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: [
      "สถานที่จัดงาน All Zone",
      "ห้อง Private Glasshouse สำหรับแต่งหน้าแต่งตัวและทำพิธี",
      "ข้าวต้ม 100 ที่ และ อาหาร Buffet สำหรับ 200 ท่าน",
      "เครื่องดื่ม Soft drink (น้ำเปล่า, น้ำอัดลม, น้ำแข็ง)",
      "พนักงานบริการเสริฟและเครื่องเสียง (ลำโพง+ไมค์)",
      "พิธีสงฆ์, พิธีขันหมาก 5 พาน, พิธีรับไหว้/ยกน้ำชา, พิธีรดน้ำสังข์",
      "นายพิธี 1 คน และทีมรันคิว 3 คน (1.5 คิว)",
      "งานตกแต่ง: Backdrop, ซุ้มดอกไม้, ป้าย Welcome, รูปบ่าวสาว, โต๊ะลงทะเบียน",
      "ดอกไม้ประดับตกแต่ง และช่อดอกไม้เจ้าสาว/เจ้าบ่าว/ประธาน/เพื่อนเจ้าสาว"
    ],
    servicesExcluded: [
      "อาหารถวายพระ, ชุดสังฆทาน, ปัจจัยถวายพระ",
      "พวงมาลัยคล้องคอบ่าวสาว",
      "ภาษีมูลค่าเพิ่ม 7% และค่าบริการ 10%",
      "ราคาอาหารและเครื่องดื่มเพิ่มเติม (950 บาท/ท่าน)"
    ],
    contactInfo: "093-583-7079 / Line: @takeabreath"
  },
  {
    id: "venue-sync-20",
    name: "Bloom Forest axis",
    location: "รอดำเนินการ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สถานที่จาก Google Maps List",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 100000, max: 300000 },
    capacity: { min: 50, max: 200 },
    servicesIncluded: ["สถานที่จัดงาน"],
    servicesExcluded: ["อาหารและเครื่องดื่ม"],
    contactInfo: "N/A"
  }
];
