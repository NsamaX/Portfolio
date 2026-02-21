import { useCallback } from "react";

import profile from "/profile.png";

import pointing from "../assets/collages/pointing.png";
import sunburst from "../assets/collages/sunburst.png";
import arrow from "../assets/icons/arrow.svg";

import { useI18n } from "../locales/i18n";

import "../styles/home.css";

function Home() {
  const { t } = useI18n();

  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <section id="home">
      <img
        id="pointing"
        src={pointing}
        alt="Pointing gesture decoration"
        className="collage"
      />

      <div className="collage-container">
        <img
          id="profile"
          src={profile}
          alt="Vijuksama Hongthongdaeng profile picture"
        />
        <img
          id="sunburst"
          src={sunburst}
          alt="Sunburst decoration"
          className="collage"
        />
      </div>

      <div className="content">
        <p>{t("home.role")}</p>
        <h2>{t("home.name")}</h2>
        <div className="description">
          {t("home.descriptionLines").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>

      <div
        id="scroll-down"
        onClick={scrollToAbout}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            scrollToAbout();
          }
        }}
        aria-label={t("home.scrollDownAria")}
      >
        <img src={arrow} alt="" aria-hidden="true" />
        <h4>{t("home.scrollDown")}</h4>
      </div>
    </section>
  );
}

export default Home;
