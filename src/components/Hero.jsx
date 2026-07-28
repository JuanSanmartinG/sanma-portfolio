import React from 'react';

function Hero({ t }) {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      <div className="inline-block text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-800/50 rounded-full px-4 py-1.5 mb-6">
        {t.badge}
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
        {t.title}
      </h1>

      <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
        {t.pitch}
      </p>

      <div>
        <a
          href="#projects"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg text-sm font-mono transition-colors shadow-sm inline-block"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}

export default Hero;