'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { PROJECTS, TILTS } from '@/lib/content';
import { Handles, Placeholder } from './Decor';

const pad = (n: number) => String(n).padStart(2, '0');
const total = pad(PROJECTS.length);
// Three explicit columns filled row by row, so the cards read 01 → 08 left to right.
const ROW_COLS = [0, 1, 2].map(c => PROJECTS.map((_, i) => i).filter(i => i % 3 === c));

export default function Work() {
  const [active, setActive] = useState(-1);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const closeRef = useRef<HTMLButtonElement>(null);
  const dlgRef = useRef<HTMLDivElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);

  const src = (image: string) => (image && !failed[image] ? encodeURI(image) : '');
  const fail = (image: string) => () => setFailed(f => ({ ...f, [image]: true }));

  const open = (i: number) => {
    returnRef.current = document.activeElement as HTMLElement | null;
    setActive(i);
  };
  const close = useCallback(() => {
    setActive(-1);
    const r = returnRef.current;
    if (r) setTimeout(() => r.focus(), 0);
  }, []);
  const go = useCallback((d: number) => setActive(a => (a + d + PROJECTS.length) % PROJECTS.length), []);

  const isOpen = active >= 0;

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Tab') {
        const dlg = dlgRef.current;
        if (!dlg) return;
        const f = [...dlg.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])')];
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        else if (!dlg.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close, go]);

  const cur = isOpen ? PROJECTS[active] : null;

  const renderProject = (i: number) => {
    const p = PROJECTS[i];
    const t = TILTS[i % TILTS.length];
    const card = p.thumb ?? p.image;
    const s = src(card);
    const alt = `${p.title} — diagram`;
    const [rw, rh] = p.ratio.split('/').map(Number);
    return (
      <div key={p.title} data-reveal="1" className="project">
        {p.fav && (
          <div aria-hidden="true" className="fav">
            <svg width="46" height="58" viewBox="0 0 46 58" fill="none" stroke="#BF3E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M42 10 C18 8 6 24 12 50" /><path d="M5 42 L12 51 L19 43" /></svg>
            <span>my favourite one</span>
          </div>
        )}
        <button
          type="button"
          className="card"
          onClick={() => open(i)}
          aria-label={`Open project: ${p.title}`}
          style={{ '--tilt': `${t}deg`, '--tape-tilt': `${t * -5}deg` } as CSSProperties}
        >
          <span aria-hidden="true" className="card-sel">
            <Handles />
            <span className="card-open">OPEN ↗</span>
          </span>
          <span aria-hidden="true" className="tape" />
          <div className="card-num">PROJECT {pad(i + 1)}</div>
          <div className="card-body">
            {s ? (
              <Image className="card-img" src={s} alt={alt} width={rw * 100} height={rh * 100} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" onError={fail(card)} />
            ) : (
              <div className="card-img placeholder" role="img" aria-label={alt} style={{ aspectRatio: p.ratio }}>
                <span>{card || 'image coming soon'}</span>
              </div>
            )}
            <div className="card-text">
              <h4>{p.title}</h4>
              <p>{p.summary}</p>
              <div className="card-foot">
                <div className="tags">
                  {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <span aria-hidden="true" className="card-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#2A1D17" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="8" x2="14" y2="8" /><polyline points="9,3 14,8 9,13" /></svg>
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  };

  return (
    <>
      {/* Both layouts are in the HTML and a container query shows one, so the first paint is already right on any screen. */}
      <div className="projects-wrap">
        <div className="projects-rows">
          {ROW_COLS.map((col, c) => <div key={c} className="projects-col">{col.map(renderProject)}</div>)}
        </div>
        <div className="projects">{PROJECTS.map((_, i) => renderProject(i))}</div>
      </div>

      {cur && (
        <div className="backdrop" onClick={close}>
          <div ref={dlgRef} className="dialog" role="dialog" aria-modal="true" aria-labelledby="m-title" onClick={e => e.stopPropagation()}>
            <div className="dialog-bar">
              <span>PROJECT {pad(active + 1)}</span>
              <div className="dialog-bar-right">
                <span>{cur.tags[0]}</span>
                <button type="button" ref={closeRef} className="round-btn close" onClick={close} aria-label="Close">
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" stroke="#2A1D17" strokeWidth="1.3" strokeLinecap="round"><line x1="2" y1="2" x2="12" y2="12" /><line x1="12" y1="2" x2="2" y2="12" /></svg>
                </button>
              </div>
            </div>
            <div className="dialog-media">
              <span aria-hidden="true" className="tape" />
              {src(cur.image) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src(cur.image)} alt={`${cur.title} — diagram`} onError={fail(cur.image)} />
              ) : (
                <Placeholder label={cur.image || 'image coming soon'} alt={`${cur.title} — diagram`} />
              )}
            </div>
            <h2 id="m-title" className="dialog-title">{cur.title}</h2>
            <div className="psr">
              <div><span>PROBLEM</span><p>{cur.problem}</p></div>
              <div><span>SOLUTION</span><p>{cur.solution}</p></div>
              <div><span>RESULT</span><p>{cur.result}</p></div>
            </div>
            <div className="dialog-nav">
              <span>VIJUKSAMA</span>
              <div>
                <button type="button" className="round-btn" onClick={() => go(-1)} aria-label="Previous project">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#2A1D17" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><line x1="14" y1="8" x2="2" y2="8" /><polyline points="7,3 2,8 7,13" /></svg>
                </button>
                <button type="button" className="round-btn" onClick={() => go(1)} aria-label="Next project">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#2A1D17" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="8" x2="14" y2="8" /><polyline points="9,3 14,8 9,13" /></svg>
                </button>
              </div>
              <span>{pad(active + 1)} / {total}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
