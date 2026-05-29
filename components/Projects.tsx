'use client';

import { useState, useEffect } from 'react';
import translations, { Lang } from '@/lib/translations';
import projectsData, { ProjectItem } from '@/lib/projects';

interface ProjectsProps {
  lang: Lang;
}

function TornTop() {
  return (
    <svg className="torn-top" viewBox="0 0 400 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,20 L0,8 C20,14 40,4 65,10 C90,16 110,5 140,9 C170,13 195,3 220,8 C245,13 270,5 295,9 C320,13 345,4 370,8 C385,11 395,6 400,9 L400,20 Z" fill="var(--bg)"/>
    </svg>
  );
}

function ProjectDetail({ project, onClose, lang }: { project: ProjectItem; onClose: () => void; lang: Lang }) {
  const [activeImg, setActiveImg] = useState(0);
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setEntering(false), 20);
    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setEntering(true);
    setTimeout(onClose, 280);
  }

  const repoLabel = lang === 'th' ? 'ดู Repository' : 'View Repository';

  return (
    <div
      className={`pd-backdrop${entering ? ' pd-hidden' : ''}`}
      onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className={`pd-sheet${entering ? ' pd-sheet-hidden' : ''}`}>
        <button className="pd-close" onClick={handleClose} aria-label="Close">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 4 L18 18 M18 4 L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="pd-hero-img" style={{ position: 'relative' }}>
          <img src={project.images[activeImg].src} alt={project.images[activeImg].label} style={{ width: '100%', height: 'auto', display: 'block' }} />
          <svg className="pd-torn-bottom" viewBox="0 0 1200 28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <path d="M0,0 L0,28 L1200,28 L1200,10 C1160,18 1110,6 1060,14 C1010,22 970,8 920,14 C870,20 830,6 780,12 C730,18 680,4 630,10 C580,16 530,4 480,10 C430,16 380,4 330,12 C280,20 230,6 180,12 C130,18 80,6 40,12 C20,15 8,8 0,10 Z" fill="var(--bg)"/>
          </svg>
        </div>

        <div className="pd-thumbs">
          {project.images.map((img, i) => (
            <button
              key={i}
              className={`pd-thumb${activeImg === i ? ' pd-thumb-active' : ''}`}
              onClick={() => setActiveImg(i)}
              aria-label={img.label}
            >
              <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>

        <div className="pd-content">
          <div className="pd-content-left">
            <div className="pd-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="proj-tag">{tag}</span>
              ))}
            </div>
            <h2 className="pd-title">{project.title}</h2>
            <p className="pd-desc">{project.longDesc}</p>
          </div>
          <div className="pd-content-right">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="pd-repo-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                {repoLabel}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
            <span className="pd-chip pd-chip-year">{project.year}</span>
            <div className="pd-deco-line">— — —</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ lang }: ProjectsProps) {
  const t = translations[lang].projects;
  const items = projectsData[lang];
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  useEffect(() => { setFilter('all'); setSelected(null); }, [lang]);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setSelected(null); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function filterValue(f: string): string {
    if (t.filterMap) return t.filterMap[f] || f;
    return f;
  }

  const filtered = filter === 'all' ? items : items.filter(p => p.type === filter);

  return (
    <>
      <section id="projects" className="section projects-section">
        <div className="section-inner">
          <div className="section-label-wrap">
            <span className="mono-section-label">{t.label}</span>
            <div className="label-dashed-line"></div>
          </div>

          <div className="filter-tabs">
            {t.filters.map((f, i) => {
              const val = filterValue(f);
              const isActive = filter === val;
              return (
                <button
                  key={i}
                  className={`filter-stamp${isActive ? ' active' : ''}`}
                  onClick={() => setFilter(val)}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <div className="projects-grid">
            {filtered.map((proj) => (
              <div
                className="project-card"
                key={proj.id}
                onClick={() => setSelected(proj)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setSelected(proj)}
                aria-label={`View ${proj.title}`}
              >
                <div className="project-img-wrap">
                  <TornTop />
                  <div className="project-img-inner">
                    <img src={proj.images[0].src} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-tags">
                    {proj.tags.map((tag, ti) => (
                      <span key={ti} className="proj-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.desc}</p>
                  <span className="project-link">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ProjectDetail project={selected} onClose={() => setSelected(null)} lang={lang} />
      )}
    </>
  );
}
