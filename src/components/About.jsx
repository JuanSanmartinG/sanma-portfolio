import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-purple-600 dark:text-purple-400 font-mono text-xl">//</span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-wide">
            About & Engineering Journey
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 font-mono text-sm">
          The background driving my approach to software development.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-8 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed shadow-sm">
        <p>
          I am a <span className="text-purple-600 dark:text-purple-400 font-semibold">Full Stack Web Developer</span> with a strong foundation in modern JavaScript ecosystems, building production applications with React, Node.js, Express, and PostgreSQL.
        </p>
        <p>
          My background in <span className="text-purple-600 dark:text-purple-400 font-semibold">multilingual global communications</span> brings a distinct perspective to software architecture. I view programming languages and frameworks through the same lens as natural languages: systems built on syntax, logic, and structure designed to express complex ideas clearly.
        </p>
        <p>
          Whether designing relational database schemas, engineering RESTful APIs, or crafting modular frontend UI components, I prioritize maintainability, clean separation of concerns, and intuitive user experiences.
        </p>
      </div>
    </section>
  );
}

export default About;