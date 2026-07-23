import React from 'react';
import { skillsData } from '../data/skillsData';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="skills-title">// Tech Stack & Capabilities</h2>
        <p className="skills-subtitle">Core technologies, frameworks, and tools I build with.</p>
      </div>

      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <div key={index} className="skills-card">
            <h3 className="skills-category-title">{group.category}</h3>
            <div className="skills-list">
              {group.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-pill">
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