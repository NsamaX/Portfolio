'use client';

import { useState, useEffect, useRef } from 'react';
import translations, { Lang, SkillItem } from '@/lib/translations';

interface SkillsProps {
  lang: Lang;
}

export default function Skills({ lang }: SkillsProps) {
  const t = translations[lang].skills;
  const [active, setActive] = useState<SkillItem | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) setActive(null);
    }
    if (active) document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [active]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setActive(null); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => { setActive(null); }, [lang]);

  function handleSkillClick(e: React.MouseEvent, skill: SkillItem) {
    e.stopPropagation();
    if (active && active.name === skill.name) { setActive(null); return; }
    setActive({ ...skill });
  }

  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <div className="section-label-wrap">
          <span className="mono-section-label">{t.label}</span>
          <div className="label-dashed-line"></div>
        </div>
        {t.categories.map((cat, ci) => (
          <div className="skills-category" key={ci}>
            <div className="skills-divider">
              <div className="torn-divider-label">{cat.label}</div>
            </div>
            <div className="skills-grid">
              {cat.skills.map((skill, si) => {
                const isActive = active && active.name === skill.name;
                return (
                  <div
                    className={`skill-item${isActive ? ' skill-active' : ''}`}
                    key={si}
                    onClick={e => handleSkillClick(e, skill)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && handleSkillClick(e as unknown as React.MouseEvent, skill)}
                    aria-expanded={!!isActive}
                  >
                    <div
                      className="skill-icon skill-icon-img"
                      style={{
                        maskImage: `url('/skills/${skill.icon}.svg')`,
                        WebkitMaskImage: `url('/skills/${skill.icon}.svg')`,
                      }}
                    />
                    <span className="skill-label">{skill.name}</span>
                    {isActive && (
                      <div className="skill-popover" ref={popoverRef} onClick={e => e.stopPropagation()}>
                        <div className="skill-popover-arrow"></div>
                        <div className="skill-popover-name">{skill.name}</div>
                        <p className="skill-popover-desc">{skill.desc}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
