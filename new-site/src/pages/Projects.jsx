// src/pages/Grid.jsx
import { projects } from "../data/projects";

export default function Projects() {
    
//     const filtered = projects.filter(p =>
//   filter === "all" ? true : p.type === filter
// );
  return (
    <section className="projects-section container">
          <h1 className="projects-title">Projects</h1>
          <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("code")}>Code</button>
            <button onClick={() => setFilter("design")}>Design</button>

          </div>

        <div className="projects-grid">
                 {/* {filtered.map(p => <ProjectCard key={p.id} data={p} />)} */}
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
