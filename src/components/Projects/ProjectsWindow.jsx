import React from 'react';
import './ProjectsWindow.css';
import Folder from './Folder';

const ProjectsWindow = ({ onClose }) => {
  return (
    <div className="projects-window">
      <div className="projects-header">
        <span>📁 My Projects</span>
        <div className="window-controls">
          <button className="window-btn yellow" title="Minimize" />
          <button className="window-btn green" title="Maximize" />
          <button className="window-btn red" onClick={onClose} title="Close" />
        </div>
      </div>

      <div className="projects-description">
        <p>Here are some of the projects I’ve built — each represents my learning journey, creativity, and technical implementation.</p>
      </div>

      <div className="projects-body">
        <div className="folder-row">
          <div className="folder-box">
            <Folder size={1.6} color="#5227FF" items={['Futsal', 'Booking', 'PHP']} />
            <span className="folder-title">Futsal Booking</span>
          </div>

          <div className="folder-box">
            <Folder size={1.6} color="#FF9F1C" items={['Game', 'React', 'JS']} />
            <span className="folder-title">Tic Tac Toe</span>
          </div>

          <div className="folder-box">
            <Folder size={1.6} color="#2EC4B6" items={['Tasks', 'React', 'Tailwind']} />
            <span className="folder-title">To-Do List</span>
          </div>

          <div className="folder-box">
            <Folder size={1.6} color="#FF595E" items={['More', 'Coming', 'Soon']} />
            <span className="folder-title">Portfolio Site</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsWindow;
