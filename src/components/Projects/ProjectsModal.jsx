import React, { useState } from 'react';
import './ProjectsModal.css';
import ProjectsCard from './ProjectsCard';
import ProjectShowcaseModal from './ProjectShowcaseModal';

const projectList = [
  {
    title: 'Futsal Booking System',
    tags: ['PHP', 'MySQL', 'XAMPP'],
    color: '#5227FF',
    link: 'https://github.com/anjef1010/futsal-booking-system',
  },
  {
    title: 'Tic Tac Toe',
    tags: ['React', 'Hooks', 'JSX'],
    color: '#27AE60',
    link: 'https://github.com/anjef1010/tic-tac-toe',
  },
  {
    title: 'To-Do List',
    tags: ['React', 'Tailwind', 'LocalStorage'],
    color: '#FF8C00',
    link: 'https://github.com/anjef1010/to-do-list',
  },
  {
    title: 'Cafe Online Menu',
    tags: ['PHP', 'MySQL', 'XAMPP'],
    color: '#5227FF',
    link: 'https://github.com/yourusername/futsal-booking-system',
  },
  {
    title: 'Protfolio Website ',
    tags: ['React', 'Hooks', 'JSX'],
    color: '#27AE60',
    link: 'https://github.com/anjef1010/portfolio-website',
  },
  {
    title: 'Ecommerce ',
    tags: ['React', 'Tailwind', 'LocalStorage'],
    color: '#FF8C00',
    link: 'https://github.com/anjef1010/ecommerce',
  },
  {
    title: 'Expenses Tracker',
    tags: ['PHP', 'MySQL', 'XAMPP'],
    color: '#5227FF',
    link: 'https://github.com/anjef1010/expenses-tracker',
  },
];

const ProjectsModal = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" aria-modal="true" role="dialog">
        <div className="modal-window">
          <div className="modal-header">
            <span>🚀 My Projects</span>
            <div className="window-controls">
              <button className="window-button window-minimize" title="Minimize" />
              <button className="window-button window-maximize" title="Maximize" />
              <button className="window-button window-close" onClick={onClose} title="Close" />
            </div>
          </div>

          <div className="projects-description">
            <p>
              These are the projects I’ve built so far. Each one reflects my journey in
              learning web development and applying technologies like React, PHP, MySQL,
              and more. Click each folder to explore what’s inside!
            </p>
          </div>

          <div className="modal-content">
            {projectList.map((project, index) => (
              <div key={index} className="project-folder-container">
                <p className="project-description">{project.description}</p>
                <div
                  className="folder-clickable"
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectsCard
                    title={project.title}
                    items={project.tags}
                    color={project.color}
                    size={1.4}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectShowcaseModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default ProjectsModal;
