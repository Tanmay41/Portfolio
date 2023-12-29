// ProjectCard.js
import React from "react";

const ProjectCard = ({ project, index }) => {
  return (
    <div className="col" key={index}>
      <div className="card shadow-sm">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            className="bd-placeholder-img card-img-top"
            src={project.imageUrl}
            alt={`Project ${index + 1}`}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.link} target="_blank" className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
