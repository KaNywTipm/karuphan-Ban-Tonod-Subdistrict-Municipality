// ==============================
// TEMPORARY DEMO DATA (Mock)
// ใช้สำหรับแสดงผลฝั่ง Frontend
// ==============================admin" | "user"

// ------------------------------
// หมวดหมู่ครุภัณฑ์
// ------------------------------
export const categories = [
    {
        id: "1",
        name: "ครุภัณฑ์คอมพิวเตอร์",
    },
    {
        id: "2",
        name: "ครุภัณฑ์สำนักงาน",
    },
    {
        id: "3",
        name: "ครุภัณฑ์ไฟฟ้า",
    },
];

// ------------------------------
// สถานที่ตั้ง
// ------------------------------
export const locations = [
    "ห้องสำนักปลัด",
    "ห้องการเงิน",
    "ห้องประชาสัมพันธ์",
    "คลังพัสดุ",
];

// ------------------------------
// ข้อมูลครุภัณฑ์ (หลัก)
// ------------------------------
export const equipments = [
    {
        id: "1",
        code: "401-47-0001",
        name: "คอมพิวเตอร์ตั้งโต๊ะ",
        categoryId: "CAT-001",
        categoryName: "ครุภัณฑ์คอมพิวเตอร์",
        location: "ห้องสำนักปลัด",
        status: "ใช้งานได้", // ใช้งานได้ | ชำรุด | ระหว่างซ่อม
        receivedDate: "2022-05-10",
    },
    {
        id: "2",
        code: "401-47-0002",
        name: "เครื่องพิมพ์เอกสาร",
        categoryId: "CAT-001",
        categoryName: "ครุภัณฑ์คอมพิวเตอร์",
        location: "ห้องประชาสัมพันธ์",
        status: "ระหว่างซ่อม",
        receivedDate: "2021-11-22",
    },
    {
        id: "3",
        code: "401-47-0003",
        name: "โต๊ะทำงาน",
        categoryId: "CAT-002",
        categoryName: "ครุภัณฑ์สำนักงาน",
        location: "ห้องการเงิน",
        status: "ใช้งานได้",
        receivedDate: "2020-01-15",
    },
];

// ------------------------------
// ประวัติการซ่อมแซม
// ------------------------------
export const repairHistories = [
    {
        id: "1",
        equipmentId: "1",
        equipmentName: "เครื่องพิมพ์เอกสาร",
        problem: "พิมพ์แล้วกระดาษติด",
        repairDate: "2025-12-18",
        status: "กำลังดำเนินการ",
        note: "ส่งซ่อมร้านภายนอก",
    },
];
// ------------------------------

// /lib/data.ts
export type Role = "admin" | "user";

export const role: Role = "admin"; 
// ✅ ตอนใช้จริงให้ดึงจาก session/DB แล้วค่อย set เป็น "admin" หรือ "user"

export type MenuItem = {
  icon: string;     // path ใน public เช่น "/dashboard.png"
  label: string;    // ชื่อเมนูภาษาไทย
  href: string;
  visible: Role[];
};

export const menuItems: MenuItem[] = [
  // ====== Common ======
  {
    icon: "/dashboard.png",
    label: "แดชบอร์ด",
    href: "/dashboard",
    visible: ["admin", "user"],
  },
  {
    icon: "/karuphan.png",
    label: "รายการครุภัณฑ์",
    href: "/equipment",
    visible: ["admin", "user"],
  },
  {
    icon: "/mark.png",
    label: "สถานที่ตั้ง",
    href: "/locations",
    visible: ["admin", "user"],
  },
  {
    icon: "/history.png",
    label: "ประวัติการซ่อมแซม",
    href: "/repairs",
    visible: ["admin", "user"],
  },
  {
    icon: "/report.png",
    label: "รายงานสรุปผล",
    href: "/reports",
    visible: ["admin", "user"],
  },

  // ====== Admin only ======
  {
    icon: "/list.png",
    label: "จัดการครุภัณฑ์",
    href: "/admin/equipment/manage",
    visible: ["admin"],
  },
  {
    icon: "/plus.png",
    label: "เพิ่มประเภทครุภัณฑ์",
    href: "/admin/categories/new",
    visible: ["admin"],
  },
  {
    icon: "/plus.png",
    label: "เพิ่มหน่วยครุภัณฑ์",
    href: "/admin/units/new",
    visible: ["admin"],
  },
  {
    icon: "/pinperson.png",
    label: "จัดการรหัสการเข้าถึงระบบ",
    href: "/admin/access",
    visible: ["admin"],
  },

  // ====== Logout (Common) ======
  {
    icon: "/logout.png",
    label: "ออกจากระบบ",
    href: "/logout",
    visible: ["admin", "user"],
  },
];

