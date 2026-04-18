export interface ServiceCategory {
  category: string;
  items: string[];
}

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
    note?: string;
  };
  capacity: {
    min: number;
    max: number;
  };
  servicesIncluded: string[];
  servicesExcluded: string[];
  categorizedServices?: ServiceCategory[];
  packageType?: 'Half Day' | 'Full Day' | string;
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
    name: "Alut d'Amour",
    location: "แขวงทวีวัฒนา, เขตทวีวัฒนา, กรุงเทพมหานคร",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "Perfectly Package Half Day (เช้า-เที่ยง หรือ บ่าย-เย็น) แพ็กเกจครบวงจรพร้อมทีมงาน Organizer",
    packageType: "Half Day",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 199900, max: 199900, note: "Half Day Package" },
    capacity: { min: 100, max: 250 },
    servicesIncluded: [
      "สถานที่จัดงาน (เช้า-เที่ยง หรือ บ่าย-เย็น)",
      "Coffee Break 50 ท่าน และ โต๊ะจีน Set A 150 ท่าน (Free Upgrade จาก 100 ท่าน)",
      "โปรโมชั่น: เลือกรับส่วนลด 8,000 บาท (หากไม่รับอัปเกรดอาหาร)",
      "ส่วนลด On Top 10% สำหรับค่าอาหารส่วนเกิน (กรณีแขก 180 ท่านขึ้นไป)",
      "พิธีการ (ไทย/จีน/Vow) พร้อมอุปกรณ์ครบ",
      "วงดนตรี DUO BAND และเครื่องเสียงมาตรฐาน",
      "ทีมงาน Organizer (รันคิว, นายพิธี, พิธีกร)",
      "งานตกแต่ง (Backdrop, เวที, ดอกไม้, แกลเลอรี่)",
      "เค้กแต่งงาน (ปลอม) และ Bubble ฟองสบู่"
    ],
    servicesExcluded: [
      "เครื่องดื่มแอลกอฮอล์",
      "ชุดเจ้าบ่าว-เจ้าสาว และช่างแต่งหน้า",
      "ช่างภาพและวิดีโอ"
    ],
    categorizedServices: [
      {
        category: "Ceremony",
        items: ["พิธีการไทย/จีน/Vow", "อุปกรณ์ประกอบพิธีครบ-จบ", "นายพิธี (สำหรับพิธีการ)", "พิธีกร (สำหรับงานเลี้ยง)"]
      },
      {
        category: "Catering",
        items: [
          "Coffee Break 50 ท่าน", 
          "โต๊ะจีน Set A 150 ท่าน (Free Upgrade!)", 
          "ส่วนลด 10% อาหารส่วนเกิน (180+ ท่าน)",
          "Soft drink & น้ำแข็ง", 
          "เจ้าหน้าที่บริการตลอดงาน"
        ]
      },
      {
        category: "Decoration",
        items: ["Backdrop ถ่ายรูป และตกแต่งเวที", "ป้ายชื่อบ่าวสาว", "ซุ้มแกลเลอรี่ 4 จุด", "ช่อดอกไม้เจ้าสาว & มาลัยบ่าวสาว", "เค้กแต่งงาน (ปลอม)"]
      },
      {
        category: "Staff & Organizer",
        items: ["ทีมรันคิวดูแลพิธีการ", "ทีมดูแลบ่าวสาว", "ทีมประสานงานฝ่ายต่างๆ", "ทีมเครื่องเสียง & Projector"]
      },
      {
        category: "Venue & Facilities",
        items: ["ห้องรับรองเจ้าบ่าวเจ้าสาว", "เครื่องเสียงมาตรฐาน (250 ท่าน)", "วงดนตรี DUO BAND", "ที่จอดรถ 50 คัน", "Bubble ฟองสบู่"]
      }
    ],
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
    packageType: "Half Day (Morning)",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 279000, max: 299000, note: "Weekday 279k / Weekend 299k" },
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
    categorizedServices: [
      {
        category: "Ceremony",
        items: ["พิธีสงฆ์ (ครบชุด)", "พิธีขันหมาก 5 พาน", "พิธีรับไหว้ หรือพิธียกน้ำชา", "พิธีรดน้ำสังข์", "นายพิธี 1 คน"]
      },
      {
        category: "Catering",
        items: ["ข้าวต้ม 100 ที่", "Buffet สำหรับ 200 ท่าน", "Soft drink (น้ำเปล่า, น้ำอัดลม, น้ำแข็ง)", "พนักงานบริการ"]
      },
      {
        category: "Decoration",
        items: ["Backdrop 2.4 x 3.6 M", "ซุ้มดอกไม้ 3x2 M", "ป้าย Welcome", "รูปบ่าวสาว 50*70 พร้อมตกแต่ง", "ช่อดอกไม้เจ้าสาว & ช่อติดอก"]
      },
      {
        category: "Staff & Organizer",
        items: ["ทีมรันคิว 3 คน (1.5 คิว)", "นายพิธีมืออาชีพ"]
      },
      {
        category: "Venue & Facilities",
        items: ["All Zone (สถานที่จัดงานทั้งหมด)", "Private Glasshouse (แต่งหน้า/แต่งตัว)", "Private Glasshouse (สำหรับทำพิธี)", "เครื่องเสียง ลำโพง+ไมค์"]
      }
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
  },
  {
    id: "venue-mellow-garden",
    name: "Mellow Garden",
    location: "ซ.ประเสริฐมนูกิจ 33, นวลจันทร์, บึงกุ่ม, กรุงเทพ",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "Quotation สำหรับแขก 200 ท่าน + พิธีเช้า (High Season) พื้นที่สวน Garden Zone",
    packageType: "Half Day (Morning + Party)",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { min: 287100, max: 287100, note: "Net Price (Incl. VAT & Service Charge)" },
    capacity: { min: 120, max: 200 },
    servicesIncluded: [
      "สถานที่จัดงานช่วงพิธีเช้า (07:00-11:00)",
      "สถานที่จัดงานเลี้ยง (กลางวัน 11:00-15:00 หรือ เย็น 18:00-23:00)",
      "อาหารว่างมื้อเช้า สำหรับ 80 ท่าน",
      "Buffet มื้อหลัก สำหรับ 200 ท่าน",
      "ฟรีค่าค่านำเข้าดนตรีสด",
      "ฟรีค่าค่านำเข้าการตกแต่ง (ไม่รวมจอและไฟ)",
      "ฟรีค่าค่านำเข้าเหล้า (ตามเงื่อนไขทางร้าน)"
    ],
    servicesExcluded: [
      "จอ LCD LED (มีค่าใช้จ่ายเพิ่มเติม)",
      "อุปกรณ์ไฟ สปอตไลท์/ฟอลโล่ (มีค่าใช้จ่ายเพิ่มเติม)",
      "ห้ามใช้ไฟเย็นและสเปรย์สีภายในพื้นที่",
      "ห้ามนำอาหารและเครื่องดื่มทุกชนิดเข้ามาเอง (ยกเว้นเหล้าตามเงื่อนไข)"
    ],
    categorizedServices: [
      {
        category: "Ceremony",
        items: ["สถานที่ช่วงพิธีเช้า (07:00-11:00)", "ฟรีค่าสถานที่เมื่อจองงานเลี้ยง"]
      },
      {
        category: "Catering",
        items: ["มื้อเช้า: อาหารว่าง 80 ท่าน", "มื้อหลัก: Buffet 200 ท่าน", "ฟรีค่าค่านำเข้าเหล้า (ไวน์ เบียร์ โซดา ต้องใช้ของร้าน)"]
      },
      {
        category: "Decoration",
        items: ["ฟรีค่าค่านำเข้าการตกแต่ง", "ไม่รวมจอ LCD LED และไฟส่องสว่างพิเศษ"]
      },
      {
        category: "Venue & Facilities",
        items: ["สถานที่งานเลี้ยง (Garden Zone)", "ฟรีค่าค่านำเข้าดนตรีสด", "ที่จอดรถสะดวกสบาย"]
      },
      {
        category: "Staff & Organizer",
        items: ["เจ้าหน้าที่ประสานงานของร้าน", "พนักงานเสิร์ฟดูแลตลอดงาน"]
      }
    ],
    contactInfo: "088-227-3966"
  }
];
