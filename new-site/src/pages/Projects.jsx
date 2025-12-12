// src/pages/Grid.jsx
import { projects } from "../data/projects";
import { useState } from "react";

export default function Projects() {
    const [filter, setFilter] = useState("all")
    
    const filtered = projects.filter(p =>
        filter === "all" ? true : p.type === filter
    );
  return (
    <section className="projects-section container">
          <h1 className="projects-title">Projects</h1>
          // TODO: add filtering loginc for project types
          <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("code")}>Code</button>
            <button onClick={() => setFilter("design")}>Design</button>

          </div>

        <div className="projects-grid">

      </div>
    </section>
  );
}
