import React, { useState } from "react";
import data from "../assets/data.json";

function Projects() {
  // Track which category is selected
  const [activeCategory, setActiveCategory] = useState("professional");

  // Pick data based on category
  const projects =
    activeCategory === "personal"
      ? data.personalProjects
      : data.professionalProjects;

  return (
    <div className="page-content">
      {/* Heading Row */}
      <div className="project-heading">
        <h2
          className={`glass ${activeCategory === "professional" ? "active-tab" : ""}`}
          onClick={() => setActiveCategory("professional")}
        >
          Professional
        </h2>
        <h2
          className={`glass ${activeCategory === "personal" ? "active-tab" : ""}`}
          onClick={() => setActiveCategory("personal")}
        >
          Personal
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="glass project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
