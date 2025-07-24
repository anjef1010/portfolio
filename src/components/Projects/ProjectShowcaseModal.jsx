import React from 'react';
import './ProjectShowcaseModal.css';

const ProjectShowcaseModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-showcase-overlay">
      <div className="project-showcase-modal">
        <div className="showcase-header">
          <h2>{project.title}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <p className="showcase-description">{project.description}</p>
        <div className="showcase-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-link"
        >
          Visit Project ↗
        </a>
      </div>
    </div>
  );
};

export default ProjectShowcaseModal;
