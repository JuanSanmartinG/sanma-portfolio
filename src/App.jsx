import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './data/translations';

function App() {
  // Theme State
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Language State (por defecto 'en' o lo que esté guardado)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'en';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleLang = () => setLang(prev => (prev === 'en' ? 'es' : 'en'));

  // Objeto de traducción activo según el idioma seleccionado
  const t = translations[lang];

  return (
    <div className="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang} 
        t={t.nav}
      />
      <Hero t={t.hero} />
      <Projects t={t.projects} />
      <Skills t={t.skills} />
      <About t={t.about} />
      <Contact t={t.contact} />
      <Footer t={t.footer} />
    </div>
  );
}

export default App;