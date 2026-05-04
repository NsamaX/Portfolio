import translations, { Lang, TextSegment } from '@/lib/translations';

interface AboutProps {
  lang: Lang;
}

function renderSegments(segments: TextSegment[]) {
  return segments.map((seg, i) =>
    typeof seg === 'string' ? seg : <mark key={i} className="text-mark">{seg.text}</mark>
  );
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;
  return (
    <section id="about" className="section about-section">
      <div className="section-inner">
        <div className="section-label-wrap">
          <span className="mono-section-label">{t.label}</span>
          <div className="label-dashed-line"></div>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-body">{renderSegments(t.body1)}</p>
            <p className="about-body">{renderSegments(t.body2)}</p>
          </div>
          <div className="about-collage">
            {t.stats.map((s, i) => (
              <div className={`collage-torn-block block-${i + 1}`} key={i}>
                <span className="collage-mono">{s.val}</span>
                <span className="collage-sub">{s.label}</span>
              </div>
            ))}
            <div className="collage-ink-dot"></div>
            <div className="collage-dash-group"><span>— — —</span></div>
            <span className="collage-asterisk ast-1">✳</span>
            <span className="collage-asterisk ast-2">·</span>
          </div>
        </div>
      </div>
    </section>
  );
}
