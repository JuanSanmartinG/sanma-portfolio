import React from 'react';

function About({ t }) {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-purple-600 dark:text-purple-400 font-mono text-xl">//</span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-wide">
            {t.title}
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 font-mono text-sm">
          {t.subtitle}
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-8 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed shadow-sm">
        <p>
          {t.p1_1}<span className="text-purple-600 dark:text-purple-400 font-semibold">{t.p1_highlight}</span>{t.p1_2}
        </p>
        <p>
          {t.p2_1}<span className="text-purple-600 dark:text-purple-400 font-semibold">{t.p2_highlight}</span>{t.p2_2}
        </p>
        <p>
          {t.p3}
        </p>
      </div>
    </section>
  );
}

export default About;