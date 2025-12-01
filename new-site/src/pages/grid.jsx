import { useState } from "react";

const PROJECTS = [
    {
        id: 1,
        title: "Portfolio Website",
        type: "code",
        description: "React + Sass portfolio site.",
    },
    {
        id: 2,
        title: "Brand Style Guide",
        type: "design",
        description: "Typography, color, and component guidelines.",
    },
    {
        id: 3,
        title: "Dog API App",
        type: "code",
        description: "API-driven app to browse and favorite dog images.",
    },
    {
        id: 4,
        title: "UI Component Library",
        type: "design",
        description: "Button, card, and form components in Figma.",
    }
];

const FILTERS = ["all", "code", "design"];

export default function Grid() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects = activeFilter === "all" ? PROJECTS : PROJECTS.filter((project) => project.type === activeFilter);

    return (
        <main>
            <h1>Projects</h1>
                <p>filter by type to see different kinds of work.</p>
            <div>
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        className={
                            filter === activeFilter
                                ? "filter-btn filter-btn--active"
                                : "filter-btn"
                        }
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter === "all"
                            ? "ALL"
                            : filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
               ))}     
            </div>
        <section className="project-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-body">
              <h2 className="project-card-title">{project.title}</h2>
              <p className="project-card-type">
                {project.type === "code" ? "Code Project" : "Design Project"}
              </p>
              <p className="project-card-description">{project.description}</p>
            </div>
          </article>
        ))}

        {filteredProjects.length === 0 && (
          <p className="project-grid-empty">No projects match this filter.</p>
        )}
      </section>

        </main>
    )
}