import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 footer-content">
        <div>
          <div className="footer-brand">sanma.dev_</div>
          <p className="footer-copy">© {new Date().getFullYear()} Juan David Sanmartin Gómez. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/JuanSanmartinG" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub ↗
          </a>
          <a href="mailto:juansanmarting@gmail.com" className="footer-link">
            Email ↗
          </a>
          <a href="https://www.udemy.com/certificate/UC-998cb141-8c76-4108-af3b-d7d76a5551b6/" target="_blank" rel="noopener noreferrer" className="footer-link">
            Certification ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;