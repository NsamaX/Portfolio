'use client';

import { useEffect } from 'react';

// Fades in [data-reveal] blocks below the fold and draws path[data-draw] scribbles on scroll.
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const show = (el: Element) => {
      const s = (el as HTMLElement | SVGElement).style;
      if (el.tagName === 'path') { s.strokeDashoffset = '0'; return; }
      s.opacity = '1';
      s.transform = 'none';
    };
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
    }), { threshold: 0.08 });

    const vh = window.innerHeight;
    const pending: Element[] = [];
    document.querySelectorAll<SVGPathElement>('path[data-draw]').forEach(p => {
      p.style.strokeDasharray = '1';
      p.style.strokeDashoffset = '1';
      p.style.transition = 'stroke-dashoffset 1.4s ease .3s';
      pending.push(p);
      io.observe(p);
    });
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
      if (el.getBoundingClientRect().top < vh) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .7s ease, transform .7s ease';
      pending.push(el);
      io.observe(el);
    });
    const fallback = setTimeout(() => pending.forEach(show), 4000);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
