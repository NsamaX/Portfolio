export type Lang = 'en' | 'th';
export type TextSegment = string | { text: string; mark: true };

export interface SkillItem {
  name: string;
  icon: string;
  desc: string;
}

export interface SkillCategory {
  label: string;
  skills: SkillItem[];
}

export interface Translations {
  nav: { about: string; experience: string; skills: string; projects: string; contact: string };
  hero: { role: string; tagline: string; sub: string; cta_work: string; cta_resume: string };
  about: { label: string; body1: TextSegment[]; body2: TextSegment[]; resume: string; transcript: string; stats: { val: string; label: string }[] };
  experience: { label: string; jobs: { tag: string; company: string; role: string; year: string; bullets: string[] }[] };
  skills: { label: string; categories: SkillCategory[] };
  projects: { label: string; filters: string[]; filterMap?: Record<string, string> };
  contact: { label: string; intro: string; name: string; email: string; message: string; name_ph: string; email_ph: string; message_ph: string; send: string; sent: string };
  footer: string;
}

const translations: Record<Lang, Translations> = {
  en: {
    nav: { about: 'About', experience: 'Experience', skills: 'Skill', projects: 'Project', contact: 'Contact' },
    hero: {
      role: 'Full-Stack / Infra Engineer',
      tagline: 'Digital transformation for manufacturing',
      sub: 'Operating on-premise infrastructure and building factory ERP systems',
      cta_work: 'View Work',
      cta_resume: 'Resume ↗',
    },
    about: {
      label: 'ABOUT ME',
      body1: [
        'I build the systems that keep factories running — from ',
        { text: 'bare-metal servers', mark: true },
        ' to the interfaces operators use on the floor. My work sits at the intersection of ',
        { text: 'infrastructure reliability', mark: true },
        ' and software that actually gets used.',
      ],
      body2: [
        'Background in ',
        { text: 'Computer Engineering', mark: true },
        ', currently focused on ERP systems for discrete manufacturing. I care about software that lasts, hardware that doesn\'t fail quietly, and ',
        { text: 'documentation that future-you will thank you for', mark: true },
        '.',
      ],
      resume: 'Résumé PDF',
      transcript: 'Transcript',
      stats: [
        { val: 'B.Eng.', label: 'Computer Engineering' },
        { val: '5 yrs', label: 'Industry experience' },
        { val: 'On-site', label: 'Manufacturing focus' },
      ],
    },
    experience: {
      label: 'EXPERIENCE',
      jobs: [
        {
          tag: 'CURRENT',
          company: 'Nozomi Enterprise (Thailand)',
          role: 'IT & Developer',
          year: '2025 — Present',
          bullets: [
            'Designed and maintained on-premise server infrastructure for factory sites',
            'Built ERP modules for production scheduling, inventory, and quality control',
            'Reduced line-downtime incidents through real-time monitoring pipelines',
          ],
        },
      ],
    },
    skills: {
      label: 'SKILLS',
      categories: [
        {
          label: 'FRONTEND / BACKEND',
          skills: [
            { name: 'Next.js', icon: 'nextjs', desc: 'React framework with server-side rendering, file-based routing, and built-in optimizations for production.' },
            { name: 'Tailwind', icon: 'tailwind', desc: 'Utility-first CSS framework — style elements directly in HTML using small, composable class names.' },
            { name: 'PostgreSQL', icon: 'postgresql', desc: 'Powerful open-source relational database. Reliable, feature-rich, and handles complex queries well.' },
            { name: 'Docker', icon: 'docker', desc: 'Packages apps and their dependencies into containers so they run identically on any machine.' },
          ],
        },
        {
          label: 'DEVOPS & TOOLS',
          skills: [
            { name: 'Proxmox', icon: 'proxmox', desc: 'Open-source virtualization platform for managing VMs and containers on bare-metal servers.' },
            { name: 'Git', icon: 'git', desc: 'Version control system. Tracks every change to code, enables collaboration, and prevents losing work.' },
            { name: 'Figma', icon: 'figma', desc: 'Collaborative design tool for building UI mockups, prototypes, and design systems.' },
          ],
        },
      ],
    },
    projects: {
      label: 'PROJECTS',
      filters: ['all', 'website', 'mobile', 'tool'],
    },
    contact: {
      label: 'GET IN TOUCH',
      intro: 'Have a project or opportunity in mind? Let\'s talk.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      name_ph: 'Your name',
      email_ph: 'you@example.com',
      message_ph: 'What\'s on your mind?',
      send: 'Send Message',
      sent: 'Sent ✓',
    },
    footer: 'Built with Next.js',
  },

  th: {
    nav: { about: 'เกี่ยวกับ', experience: 'ประสบการณ์', skills: 'ทักษะ', projects: 'ผลงาน', contact: 'ติดต่อ' },
    hero: {
      role: 'นักพัฒนา Full-Stack / โครงสร้างพื้นฐาน',
      tagline: 'ขับเคลื่อนการเปลี่ยนแปลงดิจิทัลในอุตสาหกรรมการผลิต',
      sub: 'ดูแลโครงสร้างพื้นฐานเซิร์ฟเวอร์ภายในองค์กร และพัฒนาระบบ ERP สำหรับโรงงาน',
      cta_work: 'ดูผลงาน',
      cta_resume: 'เรซูเม่ ↗',
    },
    about: {
      label: 'เกี่ยวกับฉัน',
      body1: [
        'ฉันสร้างระบบที่ทำให้โรงงานดำเนินงานได้อย่างต่อเนื่อง — ตั้งแต่เซิร์ฟเวอร์ ',
        { text: 'bare-metal', mark: true },
        ' ไปจนถึงหน้าจอที่ผู้ปฏิบัติงานใช้งานบนพื้นงาน',
      ],
      body2: [
        'จบการศึกษาด้าน',
        { text: 'วิศวกรรมคอมพิวเตอร์', mark: true },
        ' ปัจจุบันเน้นพัฒนาระบบ IT และ ERP สำหรับอุตสาหกรรม',
      ],
      resume: 'ดาวน์โหลด CV',
      transcript: 'ผลการเรียน',
      stats: [
        { val: 'วศ.บ.', label: 'วิศวกรรมคอมพิวเตอร์' },
        { val: 'On-site', label: 'เน้นอุตสาหกรรมการผลิต' },
        { val: '2025', label: 'เริ่มทำงาน' },
      ],
    },
    experience: {
      label: 'ประสบการณ์',
      jobs: [
        {
          tag: 'ปัจจุบัน',
          company: 'Nozomi Enterprise (Thailand)',
          role: 'IT & Developer',
          year: '2025 — ปัจจุบัน',
          bullets: [
            'ออกแบบและดูแลโครงสร้างพื้นฐานเซิร์ฟเวอร์ภายในองค์กร',
            'พัฒนาโมดูล ERP สำหรับการจัดตารางการผลิต คลังสินค้า และการควบคุมคุณภาพ',
            'ลดเหตุการณ์หยุดทำงานผ่านระบบ monitoring แบบ real-time',
          ],
        },
      ],
    },
    skills: {
      label: 'ทักษะ',
      categories: [
        {
          label: 'FRONTEND / BACKEND',
          skills: [
            { name: 'Next.js', icon: 'nextjs', desc: 'Framework ของ React ที่มี server-side rendering, routing แบบ file-based และการ optimize สำหรับ production' },
            { name: 'Tailwind', icon: 'tailwind', desc: 'CSS framework แบบ utility-first — จัดสไตล์โดยตรงใน HTML ด้วย class ขนาดเล็กที่ประกอบกันได้' },
            { name: 'PostgreSQL', icon: 'postgresql', desc: 'ฐานข้อมูล relational open-source ที่มีประสิทธิภาพ น่าเชื่อถือและรองรับ query ที่ซับซ้อนได้ดี' },
            { name: 'Docker', icon: 'docker', desc: 'บรรจุแอปและ dependencies ลงใน container ให้รันได้เหมือนกันทุกเครื่อง' },
          ],
        },
        {
          label: 'DEVOPS & TOOLS',
          skills: [
            { name: 'Proxmox', icon: 'proxmox', desc: 'แพลตฟอร์ม virtualization open-source สำหรับจัดการ VM และ container บน bare-metal server' },
            { name: 'Git', icon: 'git', desc: 'ระบบควบคุมเวอร์ชัน ติดตามการเปลี่ยนแปลงโค้ดทุกครั้ง รองรับการทำงานร่วมกัน' },
            { name: 'Figma', icon: 'figma', desc: 'เครื่องมือออกแบบ UI แบบ collaborative สำหรับสร้าง mockup, prototype และ design system' },
          ],
        },
      ],
    },
    projects: {
      label: 'ผลงาน',
      filters: ['ทั้งหมด', 'เว็บไซต์', 'มือถือ', 'เครื่องมือ'],
      filterMap: { 'ทั้งหมด': 'all', 'เว็บไซต์': 'website', 'มือถือ': 'mobile', 'เครื่องมือ': 'tool' },
    },
    contact: {
      label: 'ติดต่อ',
      intro: 'มีโปรเจคหรือโอกาสดีๆ อยากคุยไหม?',
      name: 'ชื่อ',
      email: 'อีเมล',
      message: 'ข้อความ',
      name_ph: 'ชื่อของคุณ',
      email_ph: 'you@example.com',
      message_ph: 'มีอะไรอยากบอก?',
      send: 'ส่งข้อความ',
      sent: 'ส่งแล้ว ✓',
    },
    footer: 'พัฒนาด้วย Next.js',
  },
};

export default translations;
