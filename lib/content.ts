export type Project = {
  title: string;
  image: string;
  ratio: string;
  tags: string[];
  fav?: boolean;
  summary: string;
  problem: string;
  solution: string;
  result: string;
};

export const PROJECTS: Project[] = [
  { title: 'Factory ERP', image: '/projects/Enterprise Resource Planning.png', ratio: '7/4', tags: ['Next.js', 'PostgreSQL'], fav: true,
    summary: 'Every department working from the same data.',
    problem: 'Each department kept its own Excel files, so the same product had different numbers depending on who you asked.',
    solution: 'Built a central system single-handedly: 14 modules, seven for department work from bill of materials and purchasing to production, store and delivery, and the rest for sign-in, user roles, settings and a record of who changed what. Bill of materials, marketing, purchasing and production are in daily use; delivery and store are being built. Developed with AI agents (Claude Code), kept on track by written architecture and decision records, project rules, checks that block a commit when they fail, and specialist subagents for review, database, UI and tests.',
    result: 'Line leaders record output every half-day, so planned and actual production sit side by side on one screen, and every department reads the same numbers.' },
  { title: 'Company Website', image: '/projects/Company Website.png', ratio: '16/10', tags: ['Next.js', 'TypeScript'],
    summary: "The company's public face for clients in Thailand and Japan.",
    problem: 'Clients needed one place to see products and certifications in English and Japanese.',
    solution: 'Built a bilingual site with a language switch; all text lives in two files outside the code.',
    result: 'Contacts, certifications and product photos can be updated in one place without touching code.' },
  { title: 'Server from Old PCs', image: '/diagrams/servers.svg', ratio: '41/28', tags: ['Proxmox', 'Linux', 'Docker'],
    summary: "Turning old computers into the company's servers.",
    problem: 'The company had no server and no budget, and was paying every month for cloud file storage.',
    solution: 'Turned two old desktops into a main server and a backup server, then added a standby server. Core systems are copied to the standby every 15 minutes, and everything is backed up nightly and checked weekly.',
    result: 'If the main server dies, core systems can be restarted on the standby from a copy no more than 15 minutes old, following a written recovery procedure. Dropping the paid storage saves 3,000฿/month.' },
  { title: 'Automated Monitoring', image: '/diagrams/monitoring.svg', ratio: '41/30', tags: ['Uptime Kuma', 'n8n'],
    summary: 'Knowing about problems before anyone calls.',
    problem: 'Outages were only noticed when staff phoned in, and disks and backups were checked by hand.',
    solution: 'Built four layers of alerts into one channel: 25 service checks every minute, a heartbeat watched from outside, security events, and failed server jobs. A health check every morning covers disks, storage and backups.',
    result: 'Quiet while everything is fine. Even if the whole factory loses power or internet, an outside service notices the silence and raises the alarm.' },
  { title: 'Work From Home', image: '/diagrams/remote-access.svg', ratio: '41/25', tags: ['WireGuard', 'Nginx'],
    summary: 'Safe access to company systems from anywhere.',
    problem: 'Staff needed to work off-site, but internal systems had to stay closed to outsiders.',
    solution: 'Set up an encrypted VPN with a key for each person that opens only the services they need, plus two internet lines that share the load.',
    result: 'People can work outside the factory, and work continues if one internet line goes down.' },
  { title: 'Antivirus Defense', image: '/diagrams/security.svg', ratio: '82/47', tags: ['Wazuh', 'Defender'],
    summary: 'One place to see the security of every computer.',
    problem: "The company paid for antivirus every year but couldn't see which machines had problems.",
    solution: "Moved 35 computers to Windows' built-in antivirus and connected them to a free, self-hosted security dashboard that only raises an alert for serious events.",
    result: 'Saves 9,200฿/year. In a test with a harmless sample file, the alert arrived within a minute.' },
  { title: 'IT Paperwork Bot', image: '/diagrams/paperwork.svg', ratio: '41/28', tags: ['n8n', 'Node.js', 'Claude'],
    summary: 'Records that fill themselves in, but only after a person says yes.',
    problem: 'Monthly backup checks, the computer register and the IT inbox all relied on someone remembering to check and type things in.',
    solution: "Built automation that checks each department's backups every month and drafts the entry for the quality register, and a chat bot that writes it only after one click to confirm. Tapping an NFC tag on a computer opens its record, and AI picks IT requests out of the inbox.",
    result: 'Less typing and fewer forgotten checks, while every change to a controlled document still has a person behind it, with a backup taken before each write.' },
  { title: 'Audit-Ready IT', image: '/diagrams/audit.svg', ratio: '41/28', tags: ['IATF 16949', 'ISO 9001'],
    summary: 'Quality records that are easy to find and easy to audit.',
    problem: 'IT quality records were paper forms and scattered files, hard to search and slow to show an auditor.',
    solution: "Moved nearly all IT quality documents to digital files in one searchable library, and reviewed the company against the automotive industry's information security checklist.",
    result: "Passed the first audit with no action requests, and turned the auditor's recommendations into a risk analysis and response plan." },
];

export const SKILLS = [
  { label: 'Linux', icon: 'linux' },
  { label: 'Proxmox', icon: 'proxmox' },
  { label: 'Docker', icon: 'docker' },
  { label: 'Git', icon: 'git' },
  { label: 'Vercel', icon: 'vercel' },
  { label: 'PostgreSQL', icon: 'postgresql' },
  { label: 'Next.js', icon: 'nextdotjs' },
  { label: 'Claude', icon: 'claude' },
];

export const STATS = [
  { value: '230', label: 'people supported as the only IT' },
  { value: '45,200฿', label: 'cut from IT costs every year' },
  { value: '15 min', label: 'max data loss if a server fails' },
];

export const PORTRAIT = '/profile-collage.jpg';

export const TILTS = [-1.2, 0.9, -0.6, 1.1, -0.9, 0.7];
