import React, { useState } from 'react';

export default function Contact({ t }) {
  const [status, setStatus] = useState('IDLE');
  const [copied, setCopied] = useState(false);

  const email = 'juansanmartingomez@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xaqrpgoz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        e.target.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-purple-600 dark:text-purple-400 font-mono text-xl">//</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-wide">
          {t.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-200 mb-3">
              {t.heading}
            </h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
              {t.desc}
            </p>
          </div>

          <div className="space-y-4 font-mono text-sm text-slate-700 dark:text-gray-300 mb-6 md:mb-0">
            {/* Email Row with Copy Button */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-purple-600 dark:text-purple-400">📧</span>
              <span>{email}</span>
              <button
                type="button"
                onClick={handleCopy}
                className="px-2 py-0.5 text-xs rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:text-purple-600 dark:hover:text-purple-400 transition-all font-semibold active:scale-95"
                aria-label="Copy email"
              >
                {copied ? t.copiedBtn : t.copyBtn}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-purple-600 dark:text-purple-400">📍</span>
              <span>Bogotá, Colombia</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/60 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {status === 'SUCCESS' ? (
            <div className="text-center py-10 space-y-3">
              <div className="text-4xl">🚀</div>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">{t.successTitle}</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm">
                {t.successDesc}
              </p>
              <button
                onClick={() => setStatus('IDLE')}
                className="mt-4 text-xs font-mono text-slate-500 dark:text-gray-400 underline hover:text-slate-900 dark:hover:text-white"
              >
                {t.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-gray-400 mb-1">{t.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.namePlaceholder}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-gray-200 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-gray-400 mb-1">{t.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-gray-200 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-gray-400 mb-1">{t.messageLabel}</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder={t.msgPlaceholder}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-gray-200 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors resize-none"
                ></textarea>
              </div>

              {status === 'ERROR' && (
                <p className="text-rose-500 dark:text-rose-400 text-xs font-mono">
                  {t.errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'SUBMITTING'}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 font-mono text-sm"
              >
                {status === 'SUBMITTING' ? t.btnSending : t.btnSend}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}