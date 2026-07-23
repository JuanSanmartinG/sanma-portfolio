import React from 'react';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-badge">available_for_opportunities = true</div>
      
      <h1 className="hero-title">
        Building high-performance web experiences from the ground up.
      </h1>
      
      <p className="hero-pitch">
        I am Juan David Sanmartin Gómez, a Full Stack Web Developer leveraging a professional background in global communications and languages to author clean, maintainable, and user-focused code.
      </p>

      <div className="hero-cta-group">
        <a href="#projects" className="nav-cta px-6 py-3 text-sm font-sans font-medium">
          Explore Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;