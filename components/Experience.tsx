import translations, { Lang } from '@/lib/translations';

interface ExperienceProps {
  lang: Lang;
}

export default function Experience({ lang }: ExperienceProps) {
  const t = translations[lang].experience;
  return (
    <section id="experience" className="section experience-section">
      <div className="section-inner">
        <div className="section-label-wrap">
          <span className="mono-section-label">{t.label}</span>
          <div className="label-dashed-line"></div>
        </div>
        <div className="timeline">
          <div className="timeline-line"></div>
          {t.jobs.map((job, i) => (
            <div className="timeline-entry" key={i}>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <span className="exp-tag">{job.tag}</span>
                  <span className="exp-year">{job.year}</span>
                </div>
                <div className="exp-company">{job.company}</div>
                <div className="exp-role">{job.role}</div>
                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
