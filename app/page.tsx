import type { CSSProperties } from 'react';
import Work from '@/components/Work';
import Reveal from '@/components/Reveal';
import { Handles, Mark, Placeholder, Scribble, Stripes } from '@/components/Decor';
import { PORTRAIT, PROJECTS, SKILLS, STATS, TOOLS } from '@/lib/content';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': '#me',
      name: 'Vijuksama Hongthongdaeng',
      jobTitle: 'IT Coordinator',
      description: 'Sole IT for a 230-person factory. Making the complex simple.',
      email: 'mailto:vijuksama@gmail.com',
      sameAs: ['https://github.com/NsamaX'],
      worksFor: { '@type': 'Organization', name: 'Nozomi Enterprise (Thailand)' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Silpakorn University' },
      knowsAbout: ['Linux', 'Proxmox', 'Docker', 'Git', 'Vercel', 'PostgreSQL', 'Next.js', 'Claude', 'Wazuh', 'WireGuard', 'Nginx', 'Uptime Kuma', 'n8n'],
      seeks: 'Not looking, happy to chat.',
    },
    {
      '@type': 'ItemList',
      name: 'Work',
      itemListElement: PROJECTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: p.title,
          creator: { '@id': '#me' },
          abstract: p.summary,
          description: `Problem: ${p.problem} Solution: ${p.solution} Result: ${p.result}`,
          keywords: p.tags.join(', '),
        },
      })),
    },
    {
      '@type': 'ItemList',
      name: 'Small Tools',
      itemListElement: TOOLS.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'SoftwareSourceCode',
          name: t.name,
          description: `${t.name} — ${t.description}`,
          codeRepository: t.url,
          programmingLanguage: t.tags.join(', '),
        },
      })),
    },
  ],
};

const FOLDERS = [
  {
    label: 'STAGE 01: IT SUPPORT', color: 'var(--sage)', tabX: '3%', ml: '0px', rot: '-0.7deg',
    text: 'Looking after computers and helping people work without interruptions.',
    icon: <><rect x="4" y="6" width="24" height="16" rx="2" /><line x1="12" y1="27" x2="20" y2="27" /><line x1="16" y1="22" x2="16" y2="27" /></>,
  },
  {
    label: 'STAGE 02: SERVER', color: 'var(--amber)', tabX: '55%', ml: 'clamp(0px,1.6vw,18px)', rot: '0.6deg',
    text: 'Setting up and running servers so systems stay reliable.',
    icon: <><rect x="5" y="5" width="22" height="9" rx="1.5" /><rect x="5" y="18" width="22" height="9" rx="1.5" /><circle cx="10" cy="9.5" r="1" fill="#2A1D17" /><circle cx="10" cy="22.5" r="1" fill="#2A1D17" /></>,
  },
  {
    label: 'STAGE 03: DEVELOPER', color: 'var(--coral)', tabX: '27%', ml: 'clamp(0px,.6vw,8px)', rot: '-0.35deg',
    text: 'Building practical tools people use every day.',
    icon: <><polyline points="11,9 4,16 11,23" /><polyline points="21,9 28,16 21,23" /><line x1="18" y1="7" x2="14" y2="25" /></>,
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="hero">
        <div className="hero-main">
          <h1 data-reveal="1" className="hero-name" aria-label="Vijuksama Hongthongdaeng">
            <span>Vijuksama</span>
            <span className="indent-hero">
              <span className="scribble-host">Hong<span className="it">thong</span>daeng<Scribble color="#F0B85E" /></span>
            </span>
          </h1>

          <div className="hero-row">
            <div className="hero-left indent-hero">
              <div data-reveal="1" className="tagline-group">
                <p className="hero-kicker">IT COORDINATOR</p>
                <p className="tagline">
                Making the complex{' '}
                <span className="selected">
                  simple
                  <span aria-hidden="true" className="selected-box"><Handles /></span>
                  <svg aria-hidden="true" className="selected-cursor" width="20" height="26" viewBox="0 0 20 26"><polygon points="2,2 2,21 7,16.5 10.5,24.5 14,23 10.5,15 17,15" fill="#F0B85E" stroke="#BF3E1E" strokeWidth="1.2" strokeLinejoin="round" /></svg>
                </span>
                .
                </p>
              </div>
              <ul data-reveal="1" aria-label="Skills" className="skills">
                {SKILLS.map(s => (
                  <li key={s.icon}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/skills/${s.icon}.svg`} alt="" width={28} height={28} />
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal="1" aria-hidden="true" className="portrait">
              <div className="portrait-card">
                <span className="tape" />
                <div className="portrait-frame">
                  {PORTRAIT ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={PORTRAIT} alt="" />
                  ) : (
                    <Placeholder label="portrait · images/me.png" />
                  )}
                </div>
              </div>
              <div className="portrait-note">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#F0B85E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M30 30 C14 30 6 22 6 6" /><path d="M1 12 L6 5 L12 11" /></svg>
                <span>hi, that&apos;s me</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <svg aria-hidden="true" width="56" height="12" viewBox="0 0 56 12" fill="none" stroke="#F6EBD7" strokeWidth="1.3" strokeLinecap="round"><path d="M2 6 Q8 1 14 6 T26 6 T38 6 T50 6" /></svg>
        </div>
      </header>
      <Stripes />

      <section id="work" aria-labelledby="h-proj" className="band work">
        <h2 id="h-proj" data-reveal="1" className="band-title work-title">
          <span>Things</span>
          <span>I&apos;ve <Mark color="var(--amber)"><span className="it">built</span></Mark>.</span>
        </h2>

        <dl data-reveal="1" className="stats">
          {STATS.map(s => (
            <div key={s.value}>
              <dd>{s.value}</dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
        <div data-reveal="1" className="subhead">
          <h3>Work</h3>
        </div>
        <Work />
      </section>

      <section aria-labelledby="h-do" className="band skillset">
        <h2 id="h-do" data-reveal="1" className="band-title">
          <span>What I</span>
          <span>can <Mark color="var(--sage)"><span className="it">do</span></Mark>.</span>
        </h2>
        <div data-reveal="1" className="folders">
          <span aria-hidden="true" className="tape" />
          {FOLDERS.map((f, i) => (
            <div
              key={f.label}
              className="folder"
              style={{ zIndex: i + 1, marginLeft: f.ml, transform: `rotate(${f.rot})`, '--folder': f.color, '--tab-x': f.tabX } as CSSProperties}
            >
              <div className="folder-tab"><span>{f.label}</span></div>
              <div className="folder-body">
                <svg aria-hidden="true" width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="#2A1D17" strokeWidth="1.4">{f.icon}</svg>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="h-exp" className="band experience">
        <h2 id="h-exp" data-reveal="1" className="band-title">
          <span>Where I&apos;ve</span>
          <span>been <span className="it">so far</span>.</span>
        </h2>
        <ol className="timeline">
          <li data-reveal="1">
            <p className="timeline-date">Nov 2025 – <span className="scribble-host it">Present<Scribble color="#F0B85E" /></span></p>
            <div className="timeline-body">
              <span>IT COORDINATOR</span>
              <h3>Nozomi Enterprise (Thailand)</h3>
              <p>Sole IT for a 230-person factory, cutting total IT costs by 45,200฿/year.</p>
            </div>
          </li>
          <li data-reveal="1">
            <p className="timeline-date">2021 – 2025</p>
            <div className="timeline-body">
              <h3>Silpakorn University</h3>
              <p>B.Sc. Information Technology — graduation project: an NFC card-tracking app.</p>
            </div>
          </li>
        </ol>
      </section>

      <Stripes />
      <section aria-labelledby="h-contact" className="contact">
        <div className="contact-grid">
          <div data-reveal="1" className="contact-left">
            <h2 id="h-contact" className="band-title contact-title">
              <span>Want to</span>
              <span><Mark color="var(--coral)">work</Mark> <span className="it">to</span>gether?</span>
            </h2>
            <p className="status">
              <span aria-hidden="true" className="status-dot" />
              <span>Not looking, <span className="it">happy to chat</span>.</span>
            </p>
          </div>
          <div data-reveal="1" className="contact-right">
            <a href="mailto:vijuksama@gmail.com" className="email">vijuksama@gmail.com<Scribble color="#BF3E1E" /></a>
            <a href="/resume.html#print" target="_blank" rel="noopener" className="resume-btn">
              DOWNLOAD RESUME (PDF)
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="1.5" x2="7" y2="10" /><polyline points="3,6.5 7,10.5 11,6.5" /><line x1="2" y1="13" x2="12" y2="13" /></svg>
            </a>
          </div>
        </div>
        <footer className="footer">
          <span>© 2026</span>
          <a href="https://github.com/NsamaX" target="_blank" rel="noopener">github.com/NsamaX</a>
        </footer>
      </section>

      <div aria-hidden="true" className="grain" />
      <Reveal />
    </>
  );
}
