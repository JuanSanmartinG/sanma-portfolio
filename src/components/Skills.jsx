import React from 'react';
import { skillsData } from '../data/skillsData';

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-purple-600 dark:text-purple-400 font-mono text-xl">//</span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-wide">
            Tech Stack & Capabilities
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 font-mono text-sm">
          Core technologies, frameworks, and tools I build with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((group, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 font-mono">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;