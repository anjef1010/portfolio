import React from "react";
import "./SkillsModal.css";

const skills = [
  { title: "HTML5", description: "Markup language for structuring content.", emoji: "📄" },
  { title: "CSS3", description: "Styling web pages with responsive designs.", emoji: "🎨" },
  { title: "JavaScript", description: "Adding interactivity and logic to web pages.", emoji: "⚙️" },
  { title: "React.js", description: "Modern UI framework for building SPAs.", emoji: "⚛️" },
  { title: "Node.js", description: "Back-end runtime for JavaScript on servers.", emoji: "🌐" },
  { title: "Express.js", description: "Lightweight Node.js web framework.", emoji: "🚂" },
  { title: "MongoDB", description: "NoSQL database for flexible data models.", emoji: "🗃️" },
  { title: "Framer Motion", description: "Animation library for React components.", emoji: "🎞️" },
  { title: "Figma", description: "UI/UX design and prototyping tool.", emoji: "🖌️" },
  { title: "Git & GitHub", description: "Version control and code collaboration.", emoji: "🐙" },
  { title: "Photography", description: "Capturing visual stories creatively.", emoji: "📷" },
  { title: "Video Editing", description: "Creating engaging motion visuals.", emoji: "🎬" },
  
];

const SkillsModal = ({ onClose }) => {
  return (
    <div className="skills-modal-overlay">
      <div className="skills-modal-container">
        <div className="skills-modal-header">
          <span className="skills-title">🧠 My Professional Skills</span>
          <div className="window-controls">
            <button className="window-btn yellow" title="Minimize" />
            <button className="window-btn green" title="Maximize" />
            <button className="window-btn red" onClick={onClose} title="Close" />
          </div>
        </div>

        <p className="skills-description">
          Below is a showcase of my technical and creative skills. Each card represents a different skill with a fun, visual format inspired by Pokémon cards. Explore how I blend code, design, and creativity into everything I do.
        </p>

        <div className="skills-card-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-emoji">{skill.emoji}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;
