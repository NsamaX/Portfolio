'use client';

import { useState, useEffect } from 'react';
import { Lang } from '@/lib/translations';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function ClientApp() {
  const [darkMode, setDarkMode] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [lang, setLang] = useState<Lang>('en');

  // Hydrate theme from the persisted preference (or system default) once on
  // mount — localStorage isn't available during render.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isDark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    setLoaded(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!loaded) return;
    document.documentElement.setAttribute('data-dark', darkMode ? 'true' : 'false');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode, loaded]);

  return (
    <>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />
      <main key={lang} className="lang-fade">
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
