import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2 className="about-title">// About & Engineering Journey</h2>
        <p className="about-subtitle">The background driving my approach to software development.</p>
      </div>

      <div className="about-content">
        <p>
          I am a <span className="about-highlight">Full Stack Web Developer</span> with a strong foundation in modern JavaScript ecosystems, building production applications with React, Node.js, Express, and PostgreSQL.
        </p>
        <p>
          My background in <span className="about-highlight">multilingual global communications</span> brings a distinct perspective to software architecture. I view programming languages and frameworks through the same lens as natural languages: systems built on syntax, logic, and structure designed to express complex ideas clearly.
        </p>
        <p>
          Whether designing relational database schemas, engineering RESTful APIs, or crafting modular frontend UI components, I prioritize maintainability, clean separation of concerns, and intuitive user experiences.
        </p>
      </div>
    </section>
  );
}

export default About;