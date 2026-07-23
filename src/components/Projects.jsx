import React from 'react';
import { projectsData } from '../data/projectsData';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">// Featured Projects</h2>
        <p className="projects-subtitle">Production-ready applications built from scratch.</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <article key={project.id} className="project-card">
            <div>
              <span className="project-badge">{project.highlight}</span>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              
              <div className="project-tags-group">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-primary"
              >
                Live Demo ↗
              </a>
              <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-secondary"
              >
                View Code ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;