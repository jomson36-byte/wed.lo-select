export interface ServiceCategory {
  category: string;
  items: string[];
}

export interface PriceRange {
  min: number;
  max: number;
  note?: string;
}

export interface CapacityRange {
  min: number;
  max: number;
}

export interface VenueOption {
  id: string;
  label: string;
  description?: string;
  packageType?: 'Half Day' | 'Full Day' | string;
  priceRange?: PriceRange;
  capacity?: CapacityRange;
  servicesIncluded?: string[];
  servicesExcluded?: string[];
  categorizedServices?: ServiceCategory[];
}

export interface Venue {
  id: string;
  name: string;
  location: string;
  googleMapsUrl: string;
  description: string;
  images: string[];
  priceRange: PriceRange;
  capacity: CapacityRange;
  servicesIncluded: string[];
  servicesExcluded: string[];
  categorizedServices?: ServiceCategory[];
  packageType?: 'Half Day' | 'Full Day' | string;
  options?: VenueOption[];
  contactInfo: string;
  status: 'ได้รับข้อมูล' | 'รอดำเนินการ';
  rawPackageUrl?: string;
}

export const mockVenues: Venue[] = [
  {
    id: "venue-sync-1",
    name: "Celebce Venue",
    status: "รอดำเนินการ",
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
    status: "รอดำเนินการ",
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
    status: "รอดำเนินการ",
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
    status: "รอดำเนินการ",
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
    status: "รอดำเนินการ",
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
    status: "รอดำเนินการ",
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
    status: "รอดำเนินการ",
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
    status: "ได้รับข้อมูล",
    location: "Inwood Garden",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "สวนจัดงานแต่งที่มีหลายโซนให้เลือกทั้ง Indoor, Garden, Waterfront และ All Area รองรับงานเต็มวันหรือครึ่งวัน",
    packageType: "Venue Rental / Full Day / Half Day",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: {
      min: 39000,
      max: 164000,
      note: "ราคาหลายโซน ยังไม่รวม Service Charge 10% และ VAT 7%; มีค่า Extra Hour 12,000 บาท/ชั่วโมง"
    },
    capacity: { min: 30, max: 200 },
    servicesIncluded: [
      "มีแพ็กเกจจัดงานเต็มวัน 06:00-22:00",
      "มีแพ็กเกจครึ่งวัน 8 ชั่วโมง",
      "เลือกโซนได้: Indoor Zone / Garden Zone / Waterfront / All Area",
      "มีพื้นที่และอุปกรณ์พื้นฐานสำหรับพิธีและงานเลี้ยง",
      "มีพาร์ตเนอร์ catering / organizer แนะนำ"
    ],
    servicesExcluded: [
      "ราคาไม่รวม Service Charge 10%",
      "ราคาไม่รวม VAT 7%",
      "ไม่รับชำระด้วยบัตรเครดิต",
      "ต้องวางเงินประกันสถานที่ 50,000 บาท",
      "อาหารและงานจัดเลี้ยงไม่ได้ระบุรวมในค่า Venue Fee"
    ],
    categorizedServices: [
      {
        category: "Ceremony",
        items: [
          "อุปกรณ์สำหรับงานพิธี",
          "โซฟาสำหรับพิธีหมั้น",
          "Long table",
          "Cocktail table",
          "เก้าอี้ชิวารีไม้"
        ]
      },
      {
        category: "Venue & Facilities",
        items: [
          "Indoor Zone",
          "Garden Zone",
          "Waterfront",
          "All Area",
          "พื้นที่ด้านนอก",
          "ห้องแต่งตัว",
          "โต๊ะสำหรับแต่งหน้า",
          "โซฟา",
          "พื้นที่สูบบุหรี่"
        ]
      },
      {
        category: "Lighting & Equipment",
        items: [
          "ไฟปิงปอง",
          "ไฟ LED spotlight",
          "ค่าใช้งานเพิ่มนอกเวลา 12,000 บาท/ชั่วโมง"
        ]
      },
      {
        category: "Payment Terms",
        items: [
          "ชำระ 50% เพื่อจองวัน",
          "ชำระส่วนที่เหลือ 50% ล่วงหน้า 2 สัปดาห์ก่อนวันงาน",
          "เงินประกันสถานที่ 50,000 บาท คืนหลังงานภายใน 5 วันทำการหากไม่มีความเสียหาย"
        ]
      },
      {
        category: "Restrictions",
        items: [
          "ทีมตกแต่งเข้าสถานที่ล่วงหน้าได้ประมาณ 5 ชั่วโมงหรือตามตกลง",
          "หลัง 21:00 ต้องลดระดับเสียงเหลือ 70 เดซิเบล",
          "ห้าม Paper Shoot หรืออุปกรณ์ที่ก่อประกายไฟ",
          "สูบบุหรี่ได้เฉพาะพื้นที่ที่จัดไว้",
          "ห้ามย้ายของภายในสถานที่โดยไม่ได้รับอนุญาต"
        ]
      }
    ],
    options: [
      {
        id: "indoor-zone",
        label: "Indoor Zone",
        description: "โซน indoor สำหรับงานขนาดเล็ก เหมาะกับงานเต็มวันหรือครึ่งวัน",
        packageType: "Indoor Zone",
        priceRange: {
          min: 39000,
          max: 55000,
          note: "รองรับประมาณ 30 ท่าน; ราคาในโบรชัวร์แยกตามเต็มวัน/ครึ่งวัน และยังไม่รวม SC/VAT"
        },
        capacity: { min: 30, max: 50 },
        categorizedServices: [
          {
            category: "Venue & Facilities",
            items: [
              "Indoor Zone",
              "ห้องแต่งตัว",
              "โต๊ะสำหรับแต่งหน้า",
              "โซฟา"
            ]
          },
          {
            category: "Ceremony",
            items: [
              "อุปกรณ์สำหรับงานพิธี",
              "โซฟาสำหรับพิธีหมั้น",
              "เก้าอี้ชิวารีไม้"
            ]
          },
          {
            category: "Lighting & Equipment",
            items: ["ไฟ LED spotlight", "ค่าใช้งานเพิ่มนอกเวลา 12,000 บาท/ชั่วโมง"]
          }
        ]
      },
      {
        id: "garden-zone",
        label: "Garden Zone",
        description: "โซนสวนหลักสำหรับงานพิธีและงานเลี้ยงกลางแจ้ง",
        packageType: "Garden Zone",
        priceRange: {
          min: 99000,
          max: 129000,
          note: "รองรับเริ่มต้น 100 ท่าน; ราคาขึ้นกับเต็มวัน/ครึ่งวันและจำนวนแขกเพิ่ม"
        },
        capacity: { min: 100, max: 200 },
        categorizedServices: [
          {
            category: "Venue & Facilities",
            items: [
              "Garden Zone",
              "พื้นที่ด้านนอก",
              "พื้นที่สูบบุหรี่",
              "ห้องแต่งตัว"
            ]
          },
          {
            category: "Ceremony",
            items: [
              "อุปกรณ์สำหรับงานพิธี",
              "Long table",
              "Cocktail table",
              "เก้าอี้ชิวารีไม้"
            ]
          },
          {
            category: "Lighting & Equipment",
            items: ["ไฟปิงปอง", "ไฟ LED spotlight", "ค่าใช้งานเพิ่มนอกเวลา 12,000 บาท/ชั่วโมง"]
          }
        ]
      },
      {
        id: "waterfront",
        label: "Waterfront",
        description: "โซนริมน้ำสำหรับงานบรรยากาศ outdoor",
        packageType: "Waterfront",
        priceRange: {
          min: 95000,
          max: 135000,
          note: "รองรับเริ่มต้น 100 ท่าน; ราคาขึ้นกับช่วงเวลาและจำนวนแขกเพิ่มเติม"
        },
        capacity: { min: 100, max: 200 },
        categorizedServices: [
          {
            category: "Venue & Facilities",
            items: [
              "Waterfront",
              "พื้นที่ด้านนอก",
              "ห้องแต่งตัว",
              "พื้นที่สูบบุหรี่"
            ]
          },
          {
            category: "Ceremony",
            items: [
              "อุปกรณ์สำหรับงานพิธี",
              "Long table",
              "Cocktail table",
              "เก้าอี้ชิวารีไม้"
            ]
          },
          {
            category: "Lighting & Equipment",
            items: ["ไฟปิงปอง", "ไฟ LED spotlight", "ค่าใช้งานเพิ่มนอกเวลา 12,000 บาท/ชั่วโมง"]
          }
        ]
      },
      {
        id: "all-area",
        label: "All Area",
        description: "ใช้พื้นที่รวมทุกโซนของ Inwood Garden",
        packageType: "All Area",
        priceRange: {
          min: 149000,
          max: 164000,
          note: "เหมาะกับงานใหญ่ 100-200 ท่าน; ราคาแยกเต็มวัน/ครึ่งวัน และยังไม่รวม SC/VAT"
        },
        capacity: { min: 100, max: 200 },
        categorizedServices: [
          {
            category: "Venue & Facilities",
            items: [
              "Indoor Zone",
              "Garden Zone",
              "Waterfront",
              "All Area access",
              "ห้องแต่งตัว",
              "พื้นที่สูบบุหรี่"
            ]
          },
          {
            category: "Ceremony",
            items: [
              "อุปกรณ์สำหรับงานพิธี",
              "โซฟาสำหรับพิธีหมั้น",
              "Long table",
              "Cocktail table",
              "เก้าอี้ชิวารีไม้"
            ]
          },
          {
            category: "Lighting & Equipment",
            items: ["ไฟปิงปอง", "ไฟ LED spotlight", "ค่าใช้งานเพิ่มนอกเวลา 12,000 บาท/ชั่วโมง"]
          }
        ]
      }
    ],
    contactInfo: "+66 65 239 8935 / inwood.garden.th@gmail.com",
    rawPackageUrl: "/packages/inwood-garden/package.pdf"
  },
  {
    id: "venue-sync-9",
    name: "The Botanical House Bangkok",
    status: "รอดำเนินการ",
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
    status: "รอดำเนินการ",
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
    name: "Silooet House (siloo'et)",
    status: "ได้รับข้อมูล",
    location: "Siloo'et Venue",
    googleMapsUrl: "https://maps.app.goo.gl/aKp6xBToWFcq9Sj5A",
    description: "Wedding venue และแพ็กเกจแต่งงานครบชุด รองรับทั้ง reception, ceremony และ venue rental แบบ half day / all day",
    packageType: "Wedding Package / Venue Rental",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: {
      min: 120000,
      max: 550000,
      note: "มีหลายแพ็กเกจตั้งแต่ Venue Rental 120,000 บาท ถึง Wedding Ceremony (All Day) 550,000 บาท"
    },
    capacity: { min: 80, max: 300 },
    servicesIncluded: [
      "มีแพ็กเกจ Reception, Wedding Ceremony (Half Day / All Day) และ Venue Rental",
      "รวมสถานที่ ตกแต่ง อาหารและทีมบริการตามแพ็กเกจ",
      "Venue เปิดให้เข้าเตรียมตัวล่วงหน้า 2 ชั่วโมงโดยไม่คิดค่าใช้จ่าย",
      "มี Organizer, MC และทีมสนับสนุนในแพ็กเกจหลัก"
    ],
    servicesExcluded: [
      "Bring in Flower and Decoration 30,000 บาท (+20,000 dps)",
      "Bring in Catering 30,000 บาท",
      "Bring in Food station 10,000 บาท/สถานี/รายการ",
      "Bring in Lighting 15,000 บาท (รวม generator)",
      "Bring in Music band 8,000 บาท",
      "Bring in Photobooth 3,000 บาท",
      "Corkage charge 5,000 บาท/ประเภท",
      "Mixer charge 500 บาท/ขวดแอลกอฮอล์",
      "Extra hours 20,000 บาท/ชั่วโมง"
    ],
    categorizedServices: [
      {
        category: "Equipment",
        items: [
          "Engagement Sofa Set",
          "150 Cross back Chair",
          "6 Round tables",
          "10 High stool tables",
          "2 Microphones",
          "Standard sound system (JBL)"
        ]
      },
      {
        category: "Decoration",
        items: [
          "Welcome Board",
          "Initial logo",
          "Envelope box",
          "Greeting book",
          "Flower stands",
          "Corsage",
          "Bouquet",
          "Champagne Tower"
        ]
      },
      {
        category: "Staff & Organizer",
        items: [
          "Organizer team & MC",
          "Event manager & Supporting team",
          "Technical staff",
          "Cleaning Staff",
          "Security"
        ]
      },
      {
        category: "Venue & Facilities",
        items: [
          "Avenue",
          "Lightbrary / Skylight / Glasshouse / Outdoor",
          "Dress room for bride & groom",
          "Restroom & Wheelchair restroom"
        ]
      },
      {
        category: "Catering",
        items: [
          "Reception: Lunch/Dinner 4 Food Stations + 3 Soft Drinks & Water (100 Guests)",
          "Half Day Ceremony: Coffee Break 50 Guests + Lunch/Dinner 100 Guests",
          "All Day Ceremony: Coffee Break 50 Guests + Lunch 80 Guests + Dinner 100 Guests"
        ]
      }
    ],
    options: [
      {
        id: "reception-package",
        label: "Reception Package",
        description: "แพ็กเกจงานเลี้ยง Lunch หรือ Dinner สำหรับแขก 100 ท่าน",
        packageType: "Reception",
        priceRange: { min: 350000, max: 350000, note: "4 ชั่วโมง 10:00-14:00 หรือ 18:00-22:00 / 100 Guests" },
        capacity: { min: 100, max: 100 },
        categorizedServices: [
          {
            category: "Catering",
            items: [
              "Lunch / Dinner",
              "4 Food Stations",
              "3 Soft Drinks & Water",
              "Additional guest 890 บาท/ท่าน"
            ]
          },
          {
            category: "Decoration",
            items: [
              "Welcome Board",
              "Initial logo",
              "Registration desk",
              "Envelope box",
              "Greeting book",
              "Flower stands",
              "Corsage",
              "Bouquet",
              "Confetti",
              "Champagne tower"
            ]
          },
          {
            category: "Staff & Organizer",
            items: [
              "Organizer team & MC",
              "Event manager & Supporting team",
              "Technical staff",
              "Cleaning Staff",
              "Security"
            ]
          }
        ]
      },
      {
        id: "ceremony-half-day",
        label: "Wedding Ceremony (Half Day)",
        description: "แพ็กเกจพิธีแต่งงานครึ่งวัน 7 ชั่วโมง เลือกเช้าถึงบ่ายหรือบ่ายถึงเย็น",
        packageType: "Wedding Ceremony (Half Day)",
        priceRange: { min: 450000, max: 450000, note: "07:00-14:00 หรือ 15:00-22:00 / 100 Guests" },
        capacity: { min: 100, max: 100 },
        categorizedServices: [
          {
            category: "Ceremony",
            items: [
              "Thai Set หรือ Chinese Set สำหรับพิธีหมั้น",
              "Chinese Tea Ceremony",
              "Thai Water Blessing Ceremony",
              "Vow Ceremony",
              "Monk Ceremony เพิ่ม 30,000 บาท / ตักบาตรเพิ่ม 15,000 บาท / Christian Vow เพิ่ม 25,000 บาท"
            ]
          },
          {
            category: "Catering",
            items: [
              "Coffee Break 50 Guests",
              "3 Coffee Break + 1 Pork boiled rice",
              "Coffee + Tea + Water",
              "Lunch / Dinner 100 Guests",
              "3 Food Stations",
              "3 Soft Drinks & Water",
              "Additional guest 350 บาท (coffee break) / 890 บาท (meal)"
            ]
          },
          {
            category: "Equipment",
            items: [
              "Engagement Sofa Set",
              "150 Cross back Chair",
              "6 Round tables",
              "10 High stool tables",
              "2 Microphones",
              "Standard sound system (JBL)"
            ]
          }
        ]
      },
      {
        id: "ceremony-all-day",
        label: "Wedding Ceremony (All Day)",
        description: "แพ็กเกจพิธีแต่งงานเต็มวัน รวม Lunch และ Dinner",
        packageType: "Wedding Ceremony (All Day)",
        priceRange: { min: 550000, max: 550000, note: "All day 07:00-12:00 and 18:00-22:00 / 80-100 Guests" },
        capacity: { min: 80, max: 100 },
        categorizedServices: [
          {
            category: "Ceremony",
            items: [
              "Thai Set หรือ Chinese Set สำหรับพิธีหมั้น",
              "Chinese Tea Ceremony",
              "Thai Water Blessing Ceremony",
              "Vow Ceremony",
              "Monk Ceremony เพิ่ม 30,000 บาท / ตักบาตรเพิ่ม 15,000 บาท / Christian Vow เพิ่ม 25,000 บาท"
            ]
          },
          {
            category: "Catering",
            items: [
              "Coffee Break 50 Guests",
              "Lunch 80 Guests",
              "3 Food Stations",
              "3 Soft Drinks & Water",
              "Dinner 100 Guests",
              "4 Food Stations",
              "3 Soft Drinks & Water",
              "Additional guest 350 บาท (coffee break) / 890 บาท (meal)"
            ]
          },
          {
            category: "Staff & Organizer",
            items: [
              "Organizer team & MC",
              "Event manager & Supporting team",
              "Technical staff",
              "Cleaning Staff",
              "Security"
            ]
          }
        ]
      },
      {
        id: "venue-rental-half-day",
        label: "Venue Rental (Half Day)",
        description: "ค่าเช่าสถานที่แบบ All Area ครึ่งวัน แยกราคาวันธรรมดาและเสาร์อาทิตย์",
        packageType: "Venue Rental (Half Day)",
        priceRange: { min: 120000, max: 150000, note: "Mon-Fri 120,000 บาท / Sat-Sun 150,000 บาท / 06:00-13:00 หรือ 15:00-22:00" },
        capacity: { min: 180, max: 300 },
        categorizedServices: [
          {
            category: "Venue & Facilities",
            items: [
              "All Area",
              "8 Round Dining tables",
              "150 Cross back Chair",
              "20 Standing cocktail tables",
              "2 Microphones / Standard sound system",
              "Bride & Groom Dressing Room"
            ]
          },
          {
            category: "Restrictions",
            items: [
              "Minimum spend 200,000 บาท สำหรับ Half Day event"
            ]
          }
        ]
      },
      {
        id: "venue-rental-full-day",
        label: "Venue Rental (Full Day)",
        description: "ค่าเช่าสถานที่แบบ All Area เต็มวัน แยกราคาวันธรรมดาและเสาร์อาทิตย์",
        packageType: "Venue Rental (Full Day)",
        priceRange: { min: 180000, max: 220000, note: "Mon-Fri 180,000 บาท / Sat-Sun 220,000 บาท / 06:00-22:00" },
        capacity: { min: 180, max: 300 },
        categorizedServices: [
          {
            category: "Venue & Facilities",
            items: [
              "All Area",
              "8 Round Dining tables",
              "150 Cross back Chair",
              "20 Standing cocktail tables",
              "2 Microphones / Standard sound system",
              "Bride & Groom Dressing Room"
            ]
          },
          {
            category: "Restrictions",
            items: [
              "Minimum spend 300,000 บาท สำหรับ Full Day event"
            ]
          }
        ]
      }
    ],
    contactInfo: "Line: @silooet / โทร 064-665-5699"
  },
  {
    id: "venue-sync-12",
    name: "Bua garden backyard cafe & studio",
    status: "รอดำเนินการ",
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
    status: "ได้รับข้อมูล",
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
    status: "รอดำเนินการ",
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
    status: "รอดำเนินการ",
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
    status: "ได้รับข้อมูล",
    location: "ต.บางเมือง อ.เมือง จ.สมุทรปราการ",
    googleMapsUrl: "https://maps.app.goo.gl/search/Pasadokmai+garden+%26+cafe",
    description: "แพ็กเกจงานพิธีเช้าเลี้ยงเที่ยง (Morning & Lunch Session) 07.00 - 14.00 ครบวงจรพร้อมทีมงาน Organizer และการตกแต่งสถานที่",
    packageType: "Half Day (Morning & Lunch)",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: { 
      min: 229000, 
      max: 229000, 
      note: "สำหรับแขก 100 ท่าน; ส่วนเกินท่านละ 700 บาท; ต่ำกว่า 100 ท่านแจ้งจำนวนได้" 
    },
    capacity: { min: 50, max: 200 },
    servicesIncluded: [
      "สถานที่จัดงาน (07.00 - 14.00)",
      "อาหารบุฟเฟต์/ค็อกเทล/โต๊ะจีน สำหรับ 100 ท่าน",
      "อาหารว่างมื้อเช้า สำหรับ 50 ท่าน",
      "พิธีกรและทีมรันคิว 3 ท่าน",
      "งานตกแต่งสถานที่ (Backdrop พิธีการ + ถ่ายรูป)",
      "ระบบเครื่องเสียงมาตรฐาน",
      "เค้กจริง 3 ปอนด์ (หรือรินแชมเปญ/รดน้ำต้นไม้/โดนัท)",
      "ฟรีค่าเปิดสถานที่เตรียมตัวล่วงหน้า 3 ชั่วโมง"
    ],
    servicesExcluded: [
      "นิมนต์พระสงฆ์",
      "ภัตตาหารพระสงฆ์ และสังฆทาน",
      "ชุดแต่งงานเจ้าบ่าว-เจ้าสาว",
      "ช่างแต่งหน้าทำผม",
      "ช่างภาพและช่างวิดีโอ",
      "ของชำร่วย และของรับไหว้",
      "Extra hour 10,000 บาท/ชั่วโมง"
    ],
    categorizedServices: [
      {
        category: "Ceremony",
        items: [
          "พิธีปูเรียงสินสอด / สวมแหวนหมั้น",
          "พิธีไหว้ผู้ใหญ่ (ผูกข้อมือ/ยกน้ำชา)",
          "พิธีหลั่งน้ำพระพุทธมนต์ (ครบเซต)",
          "อุปกรณ์สำหรับใช้ในพิธีครบชุด",
          "พวงมาลัยสำหรับบ่าวสาว"
        ]
      },
      {
        category: "Catering",
        items: [
          "อาหารหลักสำหรับ 100 ท่าน (เลือก Buffet/Cocktail/โต๊ะจีน)",
          "บุฟเฟต์: คาว 7 รายการ + ขนม 1 + เครื่องดื่ม 1 + น้ำแข็ง",
          "โต๊ะจีน: อาหาร 9 อย่าง + เครื่องดื่มอัดลม + น้ำแข็ง",
          "ของว่างเช้า: อาหารเบรค + น้ำเปล่า/กาแฟซอง (50 ท่าน)",
          "จัดเตรียมภาชนะ อุปกรณ์การทานครบชุด"
        ]
      },
      {
        category: "Decoration",
        items: [
          "Backdrop พิธีการ และ Backdrop ถ่ายรูป",
          "Gallery ขาตั้งรูป 6 ขา (ลูกค้าเตรียมรูปมาเอง)",
          "โต๊ะลงทะเบียน, กล่องใส่ซอง, ชั้นวางของชำร่วย",
          "ตกแต่งแจกันดอกไม้หรือพุ่มดอกไม้",
          "เค้กจริง 3 ปอนด์ หรือทางเลือกอื่นๆ"
        ]
      },
      {
        category: "Staff & Organizer",
        items: [
          "พิธีกรและผู้ดูแลงานพิธี (รันคิว) 3 ท่าน",
          "เจ้าหน้าที่ดูแลความเรียบร้อยและแม่บ้าน",
          "เจ้าหน้าที่โบกรถดูแลความสะดวก"
        ]
      },
      {
        category: "Venue & Facilities",
        items: [
          "Venue Opens for preparation 3 hours before",
          "เครื่องเสียงมาตรฐานพร้อมคนควบคุม",
          "โต๊ะเก้าอี้ Long Table หรือโต๊ะกลม สำหรับ 100 ท่าน",
          "ที่จอดรถสะดวกสบาย"
        ]
      }
    ],
    contactInfo: "094-494-0171 / Pasadokmai Garden & Cafe"
  },
  {
    id: "venue-sync-17",
    name: "ริน แอท เรนทรี",
    status: "รอดำเนินการ",
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
    status: "รอดำเนินการ",
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
    status: "ได้รับข้อมูล",
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
    status: "รอดำเนินการ",
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
    status: "ได้รับข้อมูล",
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
  },
  {
    id: "venue-sherlyn",
    name: "SHERLYN",
    status: "ได้รับข้อมูล",
    location: "ยังไม่ระบุในโบรชัวร์",
    googleMapsUrl: "https://www.levivaxsherlyn.com/SHERLYN/67089eb22e569c001388aad3",
    description: "Full Package Promotion สำหรับงานหมั้นเช้าเลี้ยงเที่ยง หรือหมั้นบ่ายเลี้ยงเย็น รวมพิธีเช้า งานเลี้ยง และงานตกแต่งครบชุด",
    packageType: "Full Package",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"],
    priceRange: {
      min: 230000,
      max: 230000,
      note: "Full Package 100 ท่าน 230,000 บาท; เลี้ยงเย็นอย่างเดียว 220,000 บาท; โปรโมชั่นลดสูงสุดเหลือ 150,000 บาทเมื่อเข้าเงื่อนไข"
    },
    capacity: { min: 100, max: 100 },
    servicesIncluded: [
      "Full Package สำหรับแขก 100 ท่าน ราคา 230,000 บาท",
      "แพ็กเกจเลี้ยงเย็นอย่างเดียว (6-14 ท่าน) 18:00-22:00 ราคา 220,000 บาท",
      "พิธีสงฆ์พร้อมอุปกรณ์ครบเซต",
      "อาหารเช้าและเครื่องดื่มสำหรับแขก 50 ท่าน",
      "ชุดพานขันหมากเอก-โท",
      "ตกแต่งฉากหมั้นและฉากรดน้ำสังข์พร้อมป้ายชื่อ",
      "ห้องแต่งตัวและส่งตัวบ่าวสาว",
      "ช่อดอกไม้เจ้าสาวและพวงมาลัยบ่าวสาว",
      "อาหารงานเลี้ยงเลือกได้: โต๊ะจีน / บุฟเฟ่ต์ / ค็อกเทล",
      "นักร้องและดนตรีอะคูสติก 3 ชั่วโมง พร้อมเครื่องเสียง",
      "พิธีกรมืออาชีพและทีมงานรันคิวตลอดงาน",
      "ตกแต่งซุ้มทางเข้า เวที โต๊ะลงทะเบียน โต๊ะอาหาร แกลเลอรี่ และฉากถ่ายรูป",
      "จอโปรเจคเตอร์ ไฟปาร์ตี้ และไฟ Follow"
    ],
    servicesExcluded: [
      "Long table + เค้กจริง 3 ชั้น หากไม่รับลดได้ 10,000 บาท",
      "แพ็กเกจชุด + ช่างแต่งหน้า + พรีเวดดิ้ง หากไม่รับลดได้ 20,000 บาท",
      "ตกแต่งแบบพรีเมียม หากใช้แบบมาตรฐานลดได้ 30,000 บาท",
      "เปลี่ยนสีฉากหมั้นหรือฉากรดน้ำสังข์ เพิ่มฉากละ 10,000 บาท",
      "เปลี่ยนแบบฉากและดอกไม้ใหม่ เพิ่มฉากละ 25,000 บาทขึ้นไป"
    ],
    categorizedServices: [
      {
        category: "Ceremony",
        items: [
          "นิมนต์รับพระสงฆ์ พร้อมอุปกรณ์พิธีสงฆ์ครบเซต",
          "อาหารเช้า ชา กาแฟ โอวัลติน สำหรับแขก 50 ท่าน",
          "ชุดพานขันหมากเอก + โท ครบเซต",
          "ตกแต่งฉากหมั้น พร้อมป้ายชื่อบ่าวสาว",
          "ตกแต่งฉากรดน้ำสังข์ พร้อมอุปกรณ์ครบเซต"
        ]
      },
      {
        category: "Catering",
        items: [
          "Full Package 100 ท่าน ราคา 230,000 บาท",
          "ตัวเลือกเลี้ยงเย็นอย่างเดียว ราคา 220,000 บาท",
          "อาหารเลี้ยงแขกเลือกได้: โต๊ะจีน / บุฟเฟ่ต์ / ค็อกเทล",
          "ตกแต่งโต๊ะอาหารด้วยผ้าปูโต๊ะ แจกันดอกไม้ และเชิงเทียน"
        ]
      },
      {
        category: "Decoration",
        items: [
          "ตกแต่งซุ้มทางเข้า",
          "ตกแต่งเวทีพร้อมป้ายชื่อบ่าวสาว",
          "โต๊ะวางเค้กประดิษฐ์ 5 ชั้น + เค้กจริง 4 ชิ้น",
          "โต๊ะเทียนมงคล",
          "แกลเลอรี่ 6 ชิ้น พร้อมดอกไม้ตกแต่ง",
          "ตกแต่งฉากถ่ายรูปหน้างานแบบมาตรฐาน",
          "เลือกเปลี่ยนธีมและโทนสีมาตรฐานได้ฟรี"
        ]
      },
      {
        category: "Staff & Organizer",
        items: [
          "พิธีกรมืออาชีพ",
          "ทีมงานรันคิวตลอดงาน",
          "นักร้อง + ดนตรีอะคูสติก 3 ชั่วโมง"
        ]
      },
      {
        category: "Venue & Facilities",
        items: [
          "ห้องแต่งตัวและส่งตัวบ่าวสาว",
          "ระบบเครื่องเสียงครบเซต",
          "จอโปรเจคเตอร์",
          "ไฟปาร์ตี้เปลี่ยนสีได้",
          "ไฟ Follow สำหรับนายพิธี"
        ]
      },
      {
        category: "Photo & Beauty",
        items: [
          "ช่อดอกไม้เจ้าสาวและพวงมาลัยบ่าวสาว",
          "มีแพ็กเกจชุด + ช่างแต่งหน้า + พรีเวดดิ้งรวมในข้อเสนอ",
          "มีช่างภาพหรือช่างวิดีโอวันจริง 1 ท่าน ในแพ็กเกจเสริม"
        ]
      }
    ],
    contactInfo: "Line: @508eshrv / โทร 084-426-353",
    rawPackageUrl: "/packages/sherlyn/package.pdf"
  }
];
