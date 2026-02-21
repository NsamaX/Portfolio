import { useState, useEffect, useRef, useCallback } from "react";
import { Moon, Sun, Languages } from "lucide-react";

import { useI18n } from "../locales/i18n";

import "../styles/menu.css";

const MENU_ITEMS = ["home", "about", "experience", "skill", "project", "contact"];

const SCREEN_BREAKPOINT = 720;

const getInitialTheme = () => {
  const currentHour = new Date().getHours();
  return currentHour >= 6 && currentHour < 19 ? "light" : "dark";
};

const useScreenAndScroll = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const isWideScreen = window.innerWidth >= SCREEN_BREAKPOINT;
      setShowNavBar(isWideScreen);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return showNavBar;
};

const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return currentPage;
};

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return [theme, toggleTheme];
};

const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const buttonRef = useRef(null);

  const closeDrawer = useCallback(() => setIsOpen(false), []);
  const toggleDrawer = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        drawerRef.current &&
        buttonRef.current &&
        !drawerRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        closeDrawer();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeDrawer]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toggleDrawer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleDrawer]);

  return {
    isOpen,
    drawerRef,
    buttonRef,
    closeDrawer,
    toggleDrawer,
  };
};

const MenuButton = ({ isOpen, buttonRef, onToggle }) => (
  <div id="menu-container">
    <div
      id="menu-btn"
      className={isOpen ? "close" : ""}
      ref={buttonRef}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

const ThemeButton = ({ theme, onToggle }) => {
  const IconComponent = theme === "light" ? Moon : Sun;
  return (
    <IconComponent
      id="theme-btn"
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    />
  );
};

const LanguageButton = ({ language, onToggle }) => (
  <Languages
    id="language-btn"
    onClick={onToggle}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle();
      }
    }}
    aria-label={`Switch language to ${language === "en" ? "Thai" : "English"}`}
  />
);

const MenuItem = ({ item, isActive, onScroll }) => {
  const { t } = useI18n();
  const label = t(`nav.${item}`);

  return (
    <li key={item}>
      <a
        className={isActive ? "active" : ""}
        onClick={(e) => onScroll(e, item)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onScroll(e, item);
          }
        }}
        aria-label={`Navigate to ${label} section`}
      >
        {label}
      </a>
    </li>
  );
};

const MobileMenu = ({
  isOpen,
  drawerRef,
  currentPage,
  onScroll,
  theme,
  onThemeToggle,
  language,
  onLanguageToggle,
}) => (
  <ul id="menu-drawer" ref={drawerRef} className={isOpen ? "open" : ""}>
    {MENU_ITEMS.map((item) => (
      <MenuItem
        key={item}
        item={item}
        isActive={currentPage === item}
        onScroll={onScroll}
      />
    ))}
    <div id="menu-drawer-controls">
      <ThemeButton theme={theme} onToggle={onThemeToggle} />
      <LanguageButton language={language} onToggle={onLanguageToggle} />
    </div>
  </ul>
);

const DesktopMenu = ({
  currentPage,
  onScroll,
  theme,
  onThemeToggle,
  language,
  onLanguageToggle,
}) => (
  <ul id="menu-bar">
    {MENU_ITEMS.filter((item) => item !== "home").map((item) => (
      <MenuItem
        key={item}
        item={item}
        isActive={currentPage === item}
        onScroll={onScroll}
      />
    ))}
    <ThemeButton theme={theme} onToggle={onThemeToggle} />
    <LanguageButton language={language} onToggle={onLanguageToggle} />
  </ul>
);

function Menu() {
  const showNavBar = useScreenAndScroll();
  const currentPage = useCurrentPage();
  const [theme, toggleTheme] = useTheme();
  const { language, toggleLanguage, t } = useI18n();
  const { isOpen, drawerRef, buttonRef, closeDrawer, toggleDrawer } =
    useDrawer();

  useEffect(() => {
    if (showNavBar) {
      closeDrawer();
    }
  }, [showNavBar, closeDrawer]);

  const scrollToSection = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: sectionId === "project" ? "start" : "center",
        });
      }

      closeDrawer();
    },
    [closeDrawer],
  );

  return (
    <div id="nav-bar">
      <h2>{t("nav.portfolioTitle")}</h2>

      {!showNavBar && (
        <MenuButton
          isOpen={isOpen}
          buttonRef={buttonRef}
          onToggle={toggleDrawer}
        />
      )}

      <nav>
        {!showNavBar ? (
          <MobileMenu
            isOpen={isOpen}
            drawerRef={drawerRef}
            currentPage={currentPage}
            onScroll={scrollToSection}
            theme={theme}
            onThemeToggle={toggleTheme}
            language={language}
            onLanguageToggle={toggleLanguage}
          />
        ) : (
          <DesktopMenu
            currentPage={currentPage}
            onScroll={scrollToSection}
            theme={theme}
            onThemeToggle={toggleTheme}
            language={language}
            onLanguageToggle={toggleLanguage}
          />
        )}
      </nav>
    </div>
  );
}

export default Menu;
