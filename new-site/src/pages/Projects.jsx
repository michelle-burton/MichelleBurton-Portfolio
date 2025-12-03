// src/pages/Grid.jsx
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="projects-section container">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            {/* Thumbnail */}
            <div className="project-thumb">
              <img
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
              />
            </div>

            {/* Content */}
            <div className="project-body">
              <h2 className="project-name">{project.title}</h2>
              <p className="project-type">{project.type}</p>
              <p className="project-description">{project.description}</p>

              {/* Buttons */}
              <div className="project-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
