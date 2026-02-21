import penMarked from "../assets/collages/pen-marked.png";

import { useI18n } from "../locales/i18n";

import "../styles/experience.css";

function Experience() {
  const { t } = useI18n();
  const bullets = t("experience.current.bullets") || [];

  return (
    <section id="experience">
      <h2>{t("experience.sectionTitle")}</h2>

      <div className="content collage-container">
        <img
          id="experience-scribble"
          src={penMarked}
          alt="Pen marked collage decoration"
          className="collage"
        />

        <div className="experience-header">
          <p className="experience-label">{t("experience.current.label")}</p>
          <h3>{t("experience.current.title")}</h3>
        </div>

        <ul className="experience-list">
          {bullets.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
