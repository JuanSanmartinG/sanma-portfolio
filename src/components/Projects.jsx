import React from 'react';

function Projects({ t }) {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.items.map((project) => (
          <article
            key={project.id}
            className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {project.badge && (
                <span className="inline-block text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/50 rounded-full px-3 py-1 mb-3">
                  {project.badge}
                </span>
              )}

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg text-xs font-mono transition-colors"
              >
                {t.liveDemo}
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 px-4 py-2 rounded-lg text-xs font-mono transition-colors"
              >
                {t.viewCode}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;