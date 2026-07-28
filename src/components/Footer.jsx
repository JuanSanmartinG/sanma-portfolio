import React from 'react';

function Footer({ t }) {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 bg-slate-100 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-600 dark:text-slate-400">
        <div>
          <div className="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1">
            sanma.dev_
          </div>
          <p>© {new Date().getFullYear()} Juan David Sanmartin Gómez. {t.rights}</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/JuanSanmartinG"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="mailto:juansanmarting@gmail.com"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Email ↗
          </a>
          <a
            href="https://www.udemy.com/certificate/UC-998cb141-8c76-4108-af3b-d7d76a5551b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            {t.cert}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;