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
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    document.documentElement.setAttribute('data-dark', darkMode ? 'true' : 'false');
  }, [darkMode]);

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
