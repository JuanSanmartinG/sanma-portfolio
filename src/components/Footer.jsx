import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('IDLE'); // IDLE | SUBMITTING | SUCCESS | ERROR

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
      {/* Section Title */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-purple-600 dark:text-purple-400 font-mono text-xl">//</span>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-wide">
          Contact Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-200 mb-3">
              Let's build something together!
            </h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
              I'm always open to discussing web development projects, tech collaborations, or new job opportunities.
            </p>
          </div>

          <div className="space-y-4 font-mono text-sm text-slate-700 dark:text-gray-300 mb-6 md:mb-0">
            <div className="flex items-center gap-3">
              <span className="text-purple-600 dark:text-purple-400">📧</span>
              <span>juansanmartingomez@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-purple-600 dark:text-purple-400">📍</span>
              <span>Bogotá, Colombia</span>
            </div>
          </div>
        </div>

        {/* Right Column: Formspree Form */}
        <div className="bg-white dark:bg-slate-900/60 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {status === 'SUCCESS' ? (
            <div className="text-center py-10 space-y-3">
              <div className="text-4xl">🚀</div>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Message Sent!</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm">
                Thanks for reaching out! Your message went straight to my inbox.
              </p>
              <button
                onClick={() => setStatus('IDLE')}
                className="mt-4 text-xs font-mono text-slate-500 dark:text-gray-400 underline hover:text-slate-900 dark:hover:text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-gray-400 mb-1">NAME</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-gray-200 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-gray-400 mb-1">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-gray-200 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-gray-400 mb-1">MESSAGE</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-gray-200 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors resize-none"
                ></textarea>
              </div>

              {status === 'ERROR' && (
                <p className="text-rose-500 dark:text-rose-400 text-xs font-mono">
                  Oops! Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'SUBMITTING'}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 font-mono text-sm"
              >
                {status === 'SUBMITTING' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}