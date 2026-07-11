import Image from 'next/image';
import translations, { Lang } from '@/lib/translations';

interface CaseStudiesProps {
  lang: Lang;
}

export default function CaseStudies({ lang }: CaseStudiesProps) {
  const t = translations[lang].caseStudies;
  return (
    <section id="cases" className="section cases-section">
      <div className="section-inner">
        <div className="section-label-wrap">
          <span className="mono-section-label">{t.label}</span>
          <div className="label-dashed-line"></div>
        </div>
        <div className="cases-list">
          {t.studies.map((s, i) => (
            <div className={`case-row${i % 2 === 1 ? ' case-row-flip' : ''}`} key={i}>
              <div className="case-diagram">
                <Image
                  className="diagram-light"
                  src={s.diagram}
                  alt={s.alt}
                  width={800}
                  height={560}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Image
                  className="diagram-dark"
                  src={s.diagram.replace('.svg', '-dark.svg')}
                  alt={s.alt}
                  width={800}
                  height={560}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="case-text">
                <span className="case-kicker">{s.kicker}</span>
                <h3 className="case-title">{s.title}</h3>
                <p className="case-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="cases-note">{t.note}</p>
      </div>
    </section>
  );
}
