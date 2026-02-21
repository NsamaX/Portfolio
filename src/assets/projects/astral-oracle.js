export const astralOracle = {
  id: "astral-oracle",
  slug: "astral_oracle",
  category: "website",
  thumbnail: "/projects/astral_oracle/home.png",
  gitrepo: "https://github.com/NsamaX/Astral-Oracle",
  demolink: "https://astral-oracle.vercel.app/",
  iconkey: [
    "react", 
    "mongodb",
  ],
  images: [
    "/projects/astral_oracle/home.png",
    "/projects/astral_oracle/card.png",
    "/projects/astral_oracle/cookie.png",
  ],
  translations: {
    en: {
      title: "Astral Oracle",
      short: "A tarot card reading web app designed for entertainment, combining traditional tarot draws with AI-powered fortune telling.",
      description: "Astral Oracle is a web-based tarot reading platform created out of my personal interest in tarot and the idea of asking meaningful questions through card draws. The app is designed for entertainment purposes only, allowing users to perform tarot spreads of 1, 3, or 5 cards. Each card can appear upright or reversed, making the reading more dynamic. \n\n Users can also type their own questions, which are then sent together with the drawn cards to an AI model (powered by GROQ). The AI is pre-prompted to act as a tarot reader, generating personalized interpretations for the user’s query.\n\nThe platform also keeps a history of readings by storing cookies and logs user questions in a database for future reference. Overall, Astral Oracle combines the mysticism of tarot with the interactive capability of modern AI technology.",
      feature: {
        "Interactive Tarot Draws": "Users can draw 1, 3, or 5 cards with both upright and reversed positions.",
        "AI-Powered Readings": "User questions and drawn cards are interpreted by an AI model trained to act as a tarot reader.",
        "Custom Questions": "Users can type their own queries and receive personalized readings.",
        "History Tracking": "Cookies store past readings so users can revisit their tarot journey.",
        "Database Logging": "User questions are securely stored in a database for analysis and reference.",
      },
      stack: {
        React: "Front-end framework for building the interactive user interface.",
        "Node.js": "JavaScript runtime used to power the backend logic.",
        Express: "Backend framework for handling routes and API requests.",
        MongoDB: "Database for storing user questions and history.",
        GROQ: "AI API for generating tarot-based fortune telling responses.",
      },
    },
    th: {
      title: "Astral Oracle",
      short: "เว็บแอปดูไพ่ทาโรต์เพื่อความบันเทิง ผสมผสานการจับไพ่แบบดั้งเดิมกับ AI ทำนายดวง",
      description: "Astral Oracle คือเว็บแพลตฟอร์มสำหรับดูดวงด้วยไพ่ทาโรต์ เกิดจากความสนใจส่วนตัวในเรื่องการตั้งคำถามและตีความผ่านการจับไพ่ ระบบออกแบบมาเพื่อความบันเทิง ผู้ใช้สามารถเลือกจับไพ่ได้ 1, 3 หรือ 5 ใบ โดยแต่ละใบอาจอยู่ในสถานะปกติหรือกลับหัว ทำให้การอ่านไพ่มีความหลากหลายและลึกมากขึ้น\n\nผู้ใช้สามารถพิมพ์คำถามของตัวเอง จากนั้นคำถามและชุดไพ่ที่จับได้จะถูกส่งไปยังโมเดล AI (ผ่าน GROQ) ซึ่งถูกตั้งค่าให้ทำหน้าที่เป็นหมอดูทาโรต์ ตอบกลับด้วยคำทำนายที่ปรับให้เข้ากับบริบทของผู้ใช้\n\nระบบยังเก็บประวัติการดูดวงผ่านคุกกี้ และบันทึกคำถามลงฐานข้อมูล เพื่อให้ผู้ใช้สามารถย้อนกลับไปดูการเดินทางของตัวเองได้ Astral Oracle จึงเป็นการผสมผสานระหว่างความลึกลับของไพ่ทาโรต์กับความสามารถเชิงโต้ตอบของเทคโนโลยี AI สมัยใหม่",
      feature: {
        การจับไพ่ทาโรต์แบบอินเทอร์แอคทีฟ: "ผู้ใช้เลือกจับไพ่ได้ 1, 3 หรือ 5 ใบ และรองรับทั้งไพ่ปกติและไพ่กลับหัว",
        "การอ่านไพ่ด้วย AI": "ใช้โมเดล AI ที่ถูกตั้งให้ทำหน้าที่เป็นหมอดูทาโรต์ วิเคราะห์คำถามและชุดไพ่ที่จับได้",
        รองรับคำถามแบบกำหนดเอง: "ผู้ใช้สามารถพิมพ์คำถามของตัวเอง และรับคำตอบที่ปรับตามบริบทเฉพาะบุคคล",
        ระบบบันทึกประวัติ: "ใช้คุกกี้ในการเก็บประวัติการดูดวง เพื่อให้ย้อนกลับมาดูการอ่านไพ่ครั้งก่อน ๆ ได้",
        บันทึกคำถามลงฐานข้อมูล: "จัดเก็บคำถามของผู้ใช้ลงฐานข้อมูลเพื่อใช้วิเคราะห์หรืออ้างอิงในอนาคต",
      },
      stack: {
        React: "ใช้สร้างส่วนติดต่อผู้ใช้แบบอินเทอร์แอคทีฟบนฝั่ง Front-end",
        "Node.js": "รันไทม์ JavaScript สำหรับประมวลผลฝั่งเซิร์ฟเวอร์และ logic เบื้องหลัง",
        Express: "เฟรมเวิร์กสำหรับจัดการเส้นทางและ API ต่าง ๆ ของระบบ",
        MongoDB: "ฐานข้อมูลสำหรับเก็บคำถามและประวัติการดูดวงของผู้ใช้",
        GROQ: "บริการ AI สำหรับสร้างคำทำนายและคำอธิบายผลการดูไพ่",
      },
    },
  },
};
