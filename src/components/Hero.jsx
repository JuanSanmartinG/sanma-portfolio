import React from 'react';

function Hero() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      <div className="inline-block text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-800/50 rounded-full px-4 py-1.5 mb-6">
        available_for_opportunities = true
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
        Building high-performance web experiences from the ground up.
      </h1>

      <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
        I am Juan David Sanmartin Gómez, a Full Stack Web Developer leveraging a professional background in global communications and languages to author clean, maintainable, and user-focused code.
      </p>

      <div>
        <a
          href="#projects"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg text-sm font-mono transition-colors shadow-sm inline-block"
        >
          Explore Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;