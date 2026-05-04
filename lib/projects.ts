import type { Lang } from './translations';

export interface ProjectImage {
  label: string;
  src: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  type: string;
  repo: string | null;
  live: string | null;
  images: ProjectImage[];
  year: string;
  role: string;
}

const PH = 'https://t4.ftcdn.net/jpg/02/47/78/41/360_F_247784137_EOknrsH4UQ2yc0Rn1jrEaM839mWjtITx.jpg';

const projectsData: Record<Lang, ProjectItem[]> = {
  en: [
    {
      id: 'erp',
      title: 'Factory ERP System',
      desc: 'Production scheduling, inventory, and materials management for discrete manufacturing',
      longDesc:
        'A full-suite ERP system built for factory operations. Covers production order scheduling, bill of materials, real-time inventory management, purchase order planning, and forecast-driven MRP. Deployed on-premise with Docker and Portainer across factory sites — zero cloud dependency.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
      type: 'website',
      repo: null,
      live: null,
      images: [
        { label: 'Dashboard', src: PH },
        { label: 'Forecast Module', src: PH },
      ],
      year: '2025 — Present',
      role: 'IT & Developer',
    },
    {
      id: 'mas',
      title: 'Massage Administration System',
      desc: 'Web-based administration system for Thai massage parlors with booking and staff management',
      longDesc:
        'A modular monolith system for managing massage parlor operations. Features PIN-based login with role-based access, appointment scheduling and room assignment, staff and service management, and a real-time dashboard. Deployed on-premise on a Mini PC.',
      tags: ['Next.js', 'TypeScript', 'MariaDB', 'Drizzle ORM'],
      type: 'website',
      repo: null,
      live: null,
      images: [
        { label: 'Dashboard', src: PH },
        { label: 'Appointments', src: PH },
      ],
      year: '2025',
      role: 'Developer',
    },
    {
      id: 'nfc',
      title: 'NFC Deck Tracker',
      desc: 'Mobile app for managing TCG decks with real-time NFC card tracking',
      longDesc:
        "A Flutter mobile application for trading card game deck management, developed as a Bachelor's Thesis at Silpakorn University. Features deck creation and editing, card search via public game APIs, real-time NFC tag tracking, custom card support, and game analytics with match history.",
      tags: ['Flutter', 'Dart', 'Firebase'],
      type: 'mobile',
      repo: 'https://github.com/NsamaX/NFC-Deck-Tracker',
      live: null,
      images: [
        { label: 'App Overview', src: '/projects/nfc_deck_tracker/thumbnail.png' },
        { label: 'Deck Management', src: PH },
      ],
      year: '2024',
      role: 'Developer (Thesis)',
    },
    {
      id: 'payroll',
      title: 'Payroll System',
      desc: 'Web-based payroll management with automated salary calculation and financial reporting',
      longDesc:
        'A full-featured payroll system for calculating employee salaries, taxes, and welfare deductions. Supports overtime, absenteeism, diligence bonuses, social security, and provident fund processing. Generates e-slips and exports financial reports in CSV and DOCX. Role-based access for Accounting and Employee.',
      tags: ['PHP', 'Java', 'MySQL'],
      type: 'website',
      repo: 'https://github.com/NsamaX/Payroll-System',
      live: null,
      images: [
        { label: 'Dashboard', src: PH },
        { label: 'E-Slip', src: PH },
      ],
      year: '2023',
      role: 'Developer',
    },
    {
      id: 'astral',
      title: 'Astral Oracle',
      desc: 'Tarot card reading web app with AI-powered fortune telling via Groq',
      longDesc:
        'A web application for tarot card readings powered by an AI fortune teller. Draw 1, 3, or 5 cards at random with upright or reversed orientation, ask a question, and receive a mystical AI-generated reading via Groq. Saves reading history locally via cookies. Supports English and Thai.',
      tags: ['JavaScript', 'Vite', 'Groq AI'],
      type: 'website',
      repo: 'https://github.com/NsamaX/Astral-Oracle',
      live: 'https://astral-oracle.vercel.app',
      images: [
        { label: 'Card Draw', src: '/projects/astral_oracle/thumbnail.png' },
        { label: 'Card Detail', src: '/projects/astral_oracle/card.png' },
        { label: 'Reading History', src: '/projects/astral_oracle/cookie.png' },
      ],
      year: '2024',
      role: 'Developer',
    },
    {
      id: 'crossword',
      title: 'Crossword Solver',
      desc: 'Automated solver for Ludobros crossword puzzle using image recognition and backtracking',
      longDesc:
        "A Java program that solves the Ludobros crossword puzzle automatically from a screenshot. Extracts the grid and answer lengths via image recognition, simulates the game's gravity mechanic as words are consumed, then uses backtracking to find valid word combinations from a ~4,700-word English database.",
      tags: ['Java'],
      type: 'tool',
      repo: 'https://github.com/NsamaX/Crossword-Solver',
      live: null,
      images: [
        { label: 'Solver Output', src: '/projects/crossword_solver/thumbnail.png' },
        { label: 'Sample Puzzle', src: '/projects/crossword_solver/sample.png' },
      ],
      year: '2024',
      role: 'Developer',
    },
  ],

  th: [
    {
      id: 'erp',
      title: 'ระบบ ERP สำหรับโรงงาน',
      desc: 'จัดตารางการผลิต คลังสินค้า และวัตถุดิบสำหรับอุตสาหกรรมการผลิต',
      longDesc:
        'ระบบ ERP ครบชุดสำหรับการดำเนินงานโรงงาน ครอบคลุมการจัดตารางคำสั่งผลิต บัญชีรายการวัสดุ การจัดการสินค้าคงคลังแบบ real-time การวางแผนคำสั่งซื้อ และ MRP ที่ขับเคลื่อนด้วยการพยากรณ์ ติดตั้งภายในองค์กรด้วย Docker และ Portainer ไม่พึ่ง cloud',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
      type: 'website',
      repo: null,
      live: null,
      images: [
        { label: 'ภาพรวม Dashboard', src: PH },
        { label: 'โมดูลพยากรณ์', src: PH },
      ],
      year: '2025 — ปัจจุบัน',
      role: 'IT & Developer',
    },
    {
      id: 'mas',
      title: 'ระบบจัดการสปานวด',
      desc: 'ระบบจัดการเว็บสำหรับร้านนวดแผนไทย พร้อมการนัดหมายและจัดการพนักงาน',
      longDesc:
        'ระบบ Modular Monolith สำหรับจัดการการดำเนินงานร้านนวด มี PIN login พร้อม role-based access การนัดหมายและมอบหมายห้อง การจัดการพนักงานและบริการ และ dashboard ภาพรวมแบบ real-time ติดตั้งบน Mini PC ภายในองค์กร',
      tags: ['Next.js', 'TypeScript', 'MariaDB', 'Drizzle ORM'],
      type: 'website',
      repo: null,
      live: null,
      images: [
        { label: 'Dashboard', src: PH },
        { label: 'การนัดหมาย', src: PH },
      ],
      year: '2025',
      role: 'นักพัฒนา',
    },
    {
      id: 'nfc',
      title: 'NFC Deck Tracker',
      desc: 'แอปมือถือสำหรับจัดการสำรับไพ่ TCG พร้อมติดตามไพ่แบบ real-time ด้วย NFC',
      longDesc:
        'แอปพลิเคชัน Flutter สำหรับจัดการสำรับการ์ดเกม พัฒนาเป็นวิทยานิพนธ์ปริญญาตรีที่มหาวิทยาลัยศิลปากร มีฟีเจอร์สร้างและแก้ไขสำรับ ค้นหาการ์ดผ่าน API สาธารณะ ติดตาม NFC แบบ real-time รองรับการ์ด custom และวิเคราะห์เกมพร้อมประวัติการแข่งขัน',
      tags: ['Flutter', 'Dart', 'Firebase'],
      type: 'mobile',
      repo: 'https://github.com/NsamaX/NFC-Deck-Tracker',
      live: null,
      images: [
        { label: 'ภาพรวมแอป', src: '/projects/nfc_deck_tracker/thumbnail.png' },
        { label: 'จัดการสำรับ', src: PH },
      ],
      year: '2024',
      role: 'นักพัฒนา (วิทยานิพนธ์)',
    },
    {
      id: 'payroll',
      title: 'ระบบจัดการเงินเดือน',
      desc: 'ระบบจัดการเงินเดือนบนเว็บ พร้อมคำนวณเงินเดือนอัตโนมัติและออกรายงานการเงิน',
      longDesc:
        'ระบบเงินเดือนครบชุดสำหรับคำนวณเงินเดือน ภาษี และสวัสดิการพนักงาน รองรับโอที การขาดงาน โบนัสขยัน ประกันสังคม และกองทุนสำรองเลี้ยงชีพ ออก e-slip และส่งออกรายงานการเงินในรูปแบบ CSV และ DOCX มี role-based access สำหรับฝ่ายบัญชีและพนักงาน',
      tags: ['PHP', 'Java', 'MySQL'],
      type: 'website',
      repo: 'https://github.com/NsamaX/Payroll-System',
      live: null,
      images: [
        { label: 'Dashboard', src: PH },
        { label: 'E-Slip', src: PH },
      ],
      year: '2023',
      role: 'นักพัฒนา',
    },
    {
      id: 'astral',
      title: 'Astral Oracle',
      desc: 'เว็บแอปดูดวงไพ่ทาโรต์พร้อม AI ทำนายดวงผ่าน Groq',
      longDesc:
        'เว็บแอปพลิเคชันสำหรับอ่านไพ่ทาโรต์ด้วย AI ทำนายดวง จั่วไพ่ 1, 3 หรือ 5 ใบแบบสุ่มทั้งตั้งและกลับ ถามคำถามแล้วรับคำทำนายจาก AI ผ่าน Groq บันทึกประวัติการอ่านผ่าน cookie รองรับทั้งภาษาอังกฤษและภาษาไทย',
      tags: ['JavaScript', 'Vite', 'Groq AI'],
      type: 'website',
      repo: 'https://github.com/NsamaX/Astral-Oracle',
      live: 'https://astral-oracle.vercel.app',
      images: [
        { label: 'จั่วไพ่', src: '/projects/astral_oracle/thumbnail.png' },
        { label: 'รายละเอียดไพ่', src: '/projects/astral_oracle/card.png' },
        { label: 'ประวัติการอ่าน', src: '/projects/astral_oracle/cookie.png' },
      ],
      year: '2024',
      role: 'นักพัฒนา',
    },
    {
      id: 'crossword',
      title: 'Crossword Solver',
      desc: 'โปรแกรมแก้ปริศนาอักษรไขว้ Ludobros อัตโนมัติด้วย image recognition และ backtracking',
      longDesc:
        "โปรแกรม Java ที่แก้เกมปริศนาอักษรไขว้ Ludobros อัตโนมัติจาก screenshot ดึงตารางและความยาวคำตอบด้วย image recognition จำลองกลไก gravity ของเกมขณะใช้คำ แล้วใช้ backtracking ค้นหาการผสมคำที่ถูกต้องจากฐานข้อมูลคำภาษาอังกฤษ ~4,700 คำ",
      tags: ['Java'],
      type: 'tool',
      repo: 'https://github.com/NsamaX/Crossword-Solver',
      live: null,
      images: [
        { label: 'ผลลัพธ์', src: '/projects/crossword_solver/thumbnail.png' },
        { label: 'ตัวอย่างปริศนา', src: '/projects/crossword_solver/sample.png' },
      ],
      year: '2024',
      role: 'นักพัฒนา',
    },
  ],
};

export default projectsData;
