import { useState, useEffect, useCallback } from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";

import { useI18n } from "../locales/i18n";

import "../styles/footer.css";

const CONTACT_INFO = {
  email: "vijuksama@gmail.com",
  copyright: "© 2025 Vijuksama Hongthongdaeng",
};

const SOCIAL_LINKS = [
  {
    href: "https://github.com/NsamaX",
    iconKey: "github",
    label: "GitHub",
    ariaLabel: "View GitHub profile",
  },
  {
    href: "https://www.linkedin.com/in/vijuksama-hongthongdaeng-60642a380/",
    iconKey: "linkedin",
    label: "LinkedIn",
    ariaLabel: "View LinkedIn profile",
  },
];

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { t } = useI18n();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    const nearBottom = scrollTop + clientHeight >= scrollHeight * 0.96;
    setShowBackToTop(nearBottom);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <footer>
      <div id="contact-info">
        <h5>{CONTACT_INFO.email}</h5>
        <h5>{t("footer.location")}</h5>
      </div>

      <div className="svg-flex">
        {SOCIAL_LINKS.map((link, index) => (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            aria-label={link.ariaLabel}
          >
            {link.iconKey === "github" && <Github />}
            {link.iconKey === "linkedin" && <Linkedin />}
          </a>
        ))}
      </div>

      <p id="copyright">{CONTACT_INFO.copyright}</p>

      <ArrowUp
        id="back-to-top"
        onClick={scrollToTop}
        style={{
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
        aria-label={t("footer.backToTop")}
      />
    </footer>
  );
}

export default Footer;
