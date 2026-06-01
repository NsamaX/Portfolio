'use client';

import { useState, useEffect } from 'react';
import translations, { Lang, ENABLED_LANGS } from '@/lib/translations';

interface NavProps {
  darkMode: boolean;
  setDarkMode: (fn: (prev: boolean) => boolean) => void;
  lang: Lang;
  setLang: (fn: (prev: Lang) => Lang) => void;
}

const SECTION_IDS = ['about', 'experience', 'skills', 'projects', 'contact'] as const;

export default function Nav({ darkMode, setDarkMode, lang, setLang }: NavProps) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollPct, setScrollPct] = useState(0);

  const t = translations[lang].nav;
  const links = [
    { id: 'about', label: t.about },
    { id: 'experience', label: t.experience },
    { id: 'skills', label: t.skills },
    { id: 'projects', label: t.projects },
    { id: 'contact', label: t.contact },
  ];

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    const visibleSections = new Map<string, number>();
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibleSections.set(id, entry.intersectionRatio);
          let best = '';
          let bestRatio = 0;
          visibleSections.forEach((ratio, sid) => {
            if (ratio > bestRatio) { bestRatio = ratio; best = sid; }
          });
          if (best) setActiveSection(best);
        },
        { threshold: [0, 0.1, 0.3, 0.5], rootMargin: '-64px 0px -30% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observers.forEach(o => o.disconnect());
    };
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setOpen(false);
  }

  return (
    <>
      <div className="scroll-progress" style={{ width: scrollPct + '%' }} aria-hidden="true" />

      <nav className="nav-bar">
        <a
          className="nav-logo"
          href="#hero"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <span className="nav-logo-text">Portfolio</span>
        </a>

        <div className="nav-desktop-links">
          {links.map((link, i) => (
            <button
              key={i}
              className={`nav-desktop-link${activeSection === link.id ? ' nav-link-active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="nav-right">
          <button className="nav-icon-btn" onClick={() => setDarkMode(d => !d)} aria-label="Toggle dark mode">
            {darkMode
              ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              : <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            }
          </button>

          <button className="nav-lang-btn" onClick={() => setLang(l => { const i = ENABLED_LANGS.indexOf(l); return ENABLED_LANGS[(i + 1) % ENABLED_LANGS.length]; })} aria-label="Toggle language">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <span className="nav-lang-text">{ENABLED_LANGS[(ENABLED_LANGS.indexOf(lang) + 1) % ENABLED_LANGS.length].toUpperCase()}</span>
          </button>

        </div>
      </nav>

      <div className={`nav-panel${open ? ' panel-open' : ''}`}>
        <ul className="panel-links">
          {links.map((link, i) => (
            <li key={i}>
              <button
                className={`panel-link${activeSection === link.id ? ' panel-link-active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="panel-footer">
          <button className="panel-icon-btn" onClick={() => setDarkMode(d => !d)} aria-label="Toggle dark mode">
            {darkMode
              ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              : <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            }
          </button>
          <button className="panel-icon-btn" onClick={() => setLang(l => { const i = ENABLED_LANGS.indexOf(l); return ENABLED_LANGS[(i + 1) % ENABLED_LANGS.length]; })} aria-label="Toggle language">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="menu-btn-container">
        <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
