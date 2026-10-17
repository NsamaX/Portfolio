import type { CSSProperties, ReactNode } from 'react';

export function Scribble({ color }: { color: string }) {
  return (
    <svg aria-hidden="true" className="scribble" viewBox="0 0 1000 30" preserveAspectRatio="none" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
      <path data-draw="1" pathLength={1} vectorEffect="non-scaling-stroke" d="M4 12 C220 4 640 2 994 9 M60 22 C320 14 560 16 780 19 L720 27" />
    </svg>
  );
}

export function Handles() {
  return (
    <>
      <span className="handle" />
      <span className="handle" />
      <span className="handle" />
      <span className="handle" />
    </>
  );
}

export function Mark({ color, children }: { color: string; children: ReactNode }) {
  return (
    <span className="mark">
      {children}
      <span aria-hidden="true" className="mark-bg" style={{ background: color }} />
    </span>
  );
}

export function Placeholder({ label, alt, style }: { label: string; alt?: string; style?: CSSProperties }) {
  return (
    <div className="placeholder" role={alt ? 'img' : undefined} aria-label={alt} style={style}>
      <span>{label}</span>
    </div>
  );
}

export function Stripes() {
  return (
    <div aria-hidden="true" className="stripes">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
