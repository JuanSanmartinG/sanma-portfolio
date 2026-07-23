import React from 'react';

function Navbar() {
  return (
    <header className="nav-header">
      <nav className="nav-container">
        <div className="nav-logo">sanma.dev_</div>
        
        <ul className="nav-menu">
          <li><a href="#about" className="nav-link">// about</a></li>
          <li><a href="#projects" className="nav-link">// projects</a></li>
          <li><a href="#skills" className="nav-link">// skills</a></li>
        </ul>

        <div>
          <a href="https://www.udemy.com/certificate/UC-998cb141-8c76-4108-af3b-d7d76a5551b6/" target="_blank" rel="noopener noreferrer" className="nav-cta">
            view_cert()
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;