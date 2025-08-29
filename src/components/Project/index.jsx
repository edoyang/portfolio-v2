import React, { useState } from "react";
import projectsData from "../../assets/projects.json";

function Project() {
  const [showAll, setShowAll] = useState(false);

  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);

  const displayedProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, 6);

  const hasMoreProjects = sortedProjects.length > 6;

  return (
    <div className="project-list">
      {displayedProjects.map((project) => (
        <div className="project" key={project.id}>
          <div className="project-image">
            <img
              src={`/projects/${project.title}.png`}
              alt={`${project.title} Thumbnail`}
            />
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stacks">
              <span className="category">{project.category}</span>
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            <div className="availability">
              {project.links.demo && (
                <a href={project.links.demo} target="_blank">
                  <button className="btn-secondary">
                    <img src="/icons/link.svg" alt="link icon" />
                    Live Demo
                  </button>
                </a>
              )}
              {project.links.repository && (
                <a href={project.links.repository} target="_blank">
                  <button className="btn-primary">
                    <img src="/tech-stacks/github.svg" alt="link icon" />
                    View Repository
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {hasMoreProjects && !showAll && (
        <div className="view-more-container">
          <button className="btn-secondary" onClick={() => setShowAll(true)}>
            View more
          </button>
        </div>
      )}
    </div>
  );
}

export default Project;
