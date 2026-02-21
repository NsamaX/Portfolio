import { GraduationCap, FileText } from "lucide-react";

import doubleQuotes from "../assets/collages/double-quotes.png";
import writing from "../assets/collages/writting.png";

import { useI18n } from "../locales/i18n";

import "../styles/about.css";

const DOCUMENTS = [
  {
    href: "/transcript.pdf",
    IconComponent: GraduationCap,
    labelKey: "about.documents.transcript",
    ariaKey: "about.documents.transcriptAria",
  },
  {
    href: "/resume.pdf",
    IconComponent: FileText,
    labelKey: "about.documents.resume",
    ariaKey: "about.documents.resumeAria",
  },
];

function About() {
  const { t } = useI18n();

  return (
    <section id="about">
      <h2>{t("about.sectionTitle")}</h2>

      <div className="content collage-container">
        <img
          id="double-quotes"
          src={doubleQuotes}
          alt="Double quotes decoration"
          className="collage"
        />

        <p>{t("about.description")}</p>

        <p>{t("about.education")}</p>

        <hr />
      </div>

      <img
        id="writing"
        src={writing}
        alt="Writing decoration"
        className="collage"
      />

      <div className="svg-flex">
        {DOCUMENTS.map((doc) => (
          <a
            key={doc.href}
            href={doc.href}
            target="_blank"
            rel="noreferrer"
            aria-label={t(doc.ariaKey)}
          >
            <doc.IconComponent />
            <span className="document-label">{t(doc.labelKey)}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default About;
