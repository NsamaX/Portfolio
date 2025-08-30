import { useState, useEffect, useRef } from "react";

import Icon from "./icon.jsx";

import "../styles/menu.css";

function Menu() {
  const menu = ["home", "about", "skill", "project", "contact"];

  const [showNavBar, setNavBar] = useState(false);
  const [openDrawer, setDrawer] = useState(false);
  const [currentPage, setPage] = useState("home");

  const getInitialTheme = () => {
    const currentHour = new Date().getHours();
    return (currentHour >= 6 && currentHour < 19) ? "light" : "dark";
  };
  const [currentTheme, setTheme] = useState(getInitialTheme);

  const menuDrawerRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const checkScreenAndScroll = () => {
      const isWideScreen = window.innerWidth >= 720;
      const isScrolled = window.scrollY <= 40;

      const shouldShowNavBar = isWideScreen && isScrolled;
      setNavBar(shouldShowNavBar);

      if (!shouldShowNavBar) {
        setDrawer(false);
      }
    };

    checkScreenAndScroll();

    window.addEventListener("resize", checkScreenAndScroll);
    window.addEventListener("scroll", checkScreenAndScroll);

    return () => {
      window.removeEventListener("resize", checkScreenAndScroll);
      window.removeEventListener("scroll", checkScreenAndScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        openDrawer &&
        menuDrawerRef.current &&
        !menuDrawerRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setDrawer(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDrawer]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPage(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    body.className = currentTheme;
  }, [currentTheme]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: targetSection.id === "project" ? "start" : "center",
      });
    }
    setDrawer(false);
  };

  const getMenu = () => {
    return showNavBar ? menu.filter(item => item !== "home") : menu;
  }

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div id="nav-bar">
      <h2>Portfolio</h2>
      { !showNavBar && (
        <div id="menu-btn" className={openDrawer ? "close" : ""} ref={menuButtonRef} onClick={() => setDrawer(!openDrawer)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <nav>
        { !showNavBar && (
          <ul 
            id="menu-drawer" 
            ref={menuDrawerRef} 
            className={openDrawer ? "open" : ""}
          >
            {menu.map((item) => (
              <li key={item}>
                <a className={currentPage === item ? "active" : ""} onClick={(e) => scrollToSection(e, item)}>{item}</a>
              </li>
            ))}
            <Icon id="theme-btn" iconKey={currentTheme === "light" ? "moon" : "sun"} onClick={toggleTheme} />
          </ul>
        )}
        { showNavBar && (
          <ul id="menu-bar">
            {menu.filter(item => item !== "home").map((item) => (
              <li key={item}>
                <a className={currentPage === item ? "active" : ""} onClick={(e) => scrollToSection(e, item)}>{item}</a>
              </li>
            ))}
            <Icon id="theme-btn" iconKey={currentTheme === "light" ? "moon" : "sun"} onClick={toggleTheme} />
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Menu;