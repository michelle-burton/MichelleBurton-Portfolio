// src/pages/Grid.jsx
import { projects } from "../data/projects";
// import { useState } from "react";

export default function Projects() {
    // const [filter, setFilter] = useState("all")
    
    // const filtered = projects.filter(p =>
    //     filter === "all" ? true : p.type === filter
    // );
  return (
    <section className="projects-section container">
          <h1 className="projects-title">Projects</h1>

          {/* <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("code")}>Code</button>
            <button onClick={() => setFilter("design")}>Design</button>

          </div> */}

          <div className="projects-grid">
              {projects.map((project) => (
                <div className="project-card">
                    <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-thumb"
                    aria-label={`Open live site for ${project.title}`}
                    >
                    <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
                      </a>
                    <div className="project-body">
                        <div className="project-meta">
                        <span className="project-type">{project.type}</span>
                          </div>
                           <h3 className="project-title">{project.title}</h3>
                           <p className="project-description">{project.description}</p>
                        <div className="project-links">
                            {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                Live
                            </a>
                            )}
                            {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank" rel="noreferrer">
                                Repo
                            </a>
                            )}
                        </div>
                    </div>
                </div>
                  
              ))}

      </div>
    </section>
  );
}
