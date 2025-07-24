import React from 'react';
import './Hobbies.css';


const Hobbies = ({ onClose }) => {
  const hobbies = [
    {
      title: 'Photography',
      description: 'Capturing moments with creativity and emotion.',
      icon: '📷',
    },
    {
      title: 'Video Editing',
      description: 'Telling stories through motion and cuts.',
      icon: '🎬',
    },
    {
      title: 'Traveling',
      description: 'Exploring new cultures and landscapes.',
      icon: '🌍',
    },
    {
      title: 'Gaming',
      description: 'Immersing in digital worlds for fun and strategy.',
      icon: '🎮',
    },
    {
      title: 'Music',
      description: 'Enjoying different genres and rhythms.',
      icon: '🎧',
    },
    {
      title: 'Cooking',
      description: 'Creating delicious dishes and experimenting with flavors.',
      icon: '🍳',
    },
    {
      title: 'Reading',
      description: 'Diving into books to learn and relax.',
      icon: '📚',
    },
    {
      title: 'Drawing',
      description: 'Expressing creativity through sketches and art.',
      icon: '✏️',
    },
    {
      title: 'Trekking',
      description: 'Venturing into the wild and climbing trails.',
      icon: '🗻',
    },
    {
      title: 'Hiking',
      description: 'Exploring nature trails and enjoying fresh air.',
      icon: '🥾',
    },
    {
      title: 'Coding',
      description: 'Building digital experiences and solving problems.',
      icon: '💻',
    },
  ];

  return (
    <div
      className="hobbies-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hobbies-title"
    >
      <div className="hobbies-window">
        <div className="hobbies-header">
          <div id="hobbies-title" className="hobbies-title">
            🎨 My Hobbies
          </div>
          <div className="window-controls">
            <button className="window-btn yellow" title="Minimize" />
            <button className="window-btn green" title="Maximize" />
            <button className="window-btn red" onClick={onClose} title="Close" />
          </div>
        </div>

        <div className="hobbies-description">
          <p>
            Hobbies are more than just leisure activities,they’re a reflection of passion, curiosity, and personality.
            Each of these interests allows me to express creativity, find joy, and keep learning in different ways.
          </p>
        </div>

        <div className="hobbies-content">
          {hobbies.map((hobby, index) => (
            <div className="hobby-card" key={index}>
              <div className="hobby-icon">{hobby.icon}</div>
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
