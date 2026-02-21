import { useI18n } from "../locales/i18n";

import "../styles/experience.css";

function Experience() {
  const { t } = useI18n();
  const bullets = t("experience.current.bullets") || [];

  return (
    <section id="experience">
      <h2>{t("experience.sectionTitle")}</h2>

      <div className="content">
        <p>{t("experience.current.title")}</p>
        <ul>
          {bullets.map((item, index) => (
            <li key={index}><p>{item}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
