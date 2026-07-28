import React from 'react';

export default function Navbar({ darkMode, toggleTheme, lang, toggleLang, t }) {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <div className="text-purple-600 dark:text-purple-400 font-mono font-bold">
        sanma.dev_
      </div>

      <div className="flex items-center gap-6">
        <ul className="flex gap-6 text-sm font-mono text-slate-700 dark:text-slate-300">
          <li><a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{t.about}</a></li>
          <li><a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{t.projects}</a></li>
          <li><a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{t.skills}</a></li>
          <li><a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{t.contact}</a></li>
        </ul>

        <div className="flex items-center gap-2">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors font-bold uppercase"
          >
            {lang === 'en' ? 'ES 🌐' : 'EN 🌐'}
          </button>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors text-sm"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}