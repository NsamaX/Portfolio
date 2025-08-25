import { useState, useEffect, useRef } from "react";

import Icon from "./icon.jsx";

import "../styles/menu.css";

function Menu() {
  const menu = ["home", "about", "skill", "project", "contact"];

  const [openDrawer, setDrawer] = useState(false);
  const [currentPage, setPage] = useState("home");
  const [currentTheme, setTheme] = useState("light");

  const menuDrawerRef = useRef(null);
  const menuButtonRef = useRef(null);

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
        block: "center",
      });
    }
    setDrawer(false);
  };

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div id="menu-btn" className={openDrawer ? "close" : ""} ref={menuButtonRef} onClick={() => setDrawer(!openDrawer)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul id="menu-drawer" ref={menuDrawerRef} style={openDrawer ? { transform: "translateX(0)" } : { transform: "translateX(100%)" }}>
          {menu.map((item) => (
            <li key={item}>
              <a className={currentPage === item ? "active" : ""} onClick={(e) => scrollToSection(e, item)}>{item}</a>
            </li>
          ))}
          <Icon id="theme-btn" iconKey={currentTheme === "light" ? "moon" : "sun"} onClick={toggleTheme} />
        </ul>
      </nav>
    </>
  );
}

export default Menu;