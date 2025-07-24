import React, { useState } from 'react';
import './Dock.css';
import Profile from '../Profile/Profile';
import ProjectsModal from '../Projects/ProjectsModal';
import SkillsModal from '../Skills/SkillsModal';
import Videos from '../Videos/Videos';
import Hobbies from '../Hobbies/Hobbies';
import Contact from '../Contact/Contact'


const Dock = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isVideosOpen, setIsVideosOpen] = useState(false);
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);




  const dockItems = [
    { id: 'home', icon: '🏠', label: 'Home', active: true },
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'project', icon: '📁', label: 'Project' },
    { id: 'skills', icon: '⚙️', label: 'Skills' },
    { id: 'videos', icon: '🎥', label: 'Videos' },
    { id: 'hobbies', icon: '🎮', label: 'Hobbies' },
    { id: 'contact', icon: '✉️', label: 'Contact' },
  ];

  const handleDockItemClick = (item) => {
    switch (item.id) {
      case 'profile':
        setIsProfileOpen(true);
        break;
      case 'project':
        setIsProjectsOpen(true);
        break;
      case 'skills':
        setIsSkillsOpen(true);
        break;
      case 'videos':
        setIsVideosOpen(true);
        break;

      case 'hobbies':
          setIsHobbiesOpen(true);
          break;

      case 'contact':
          setIsContactOpen(true);
          break;
          default:
        console.log(`Clicked on ${item.label}`);
    }
  };

  return (
    <>
      <div className="dock-container">
        <div className="dock">
          {dockItems.map((item) => (
            <div
              key={item.id}
              className={`dock-item ${item.active ? 'active' : ''}`}
              onClick={() => handleDockItemClick(item)}
              title={item.label}
            >
              <div className="dock-icon">{item.icon}</div>
              <span className="dock-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Components */}
      {isProfileOpen && (
        <Profile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      )}
      {isProjectsOpen && (
        <ProjectsModal isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)} />
      )}
      {isSkillsOpen && (
        <SkillsModal isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />)}
      {isVideosOpen && ( <Videos isOpen={isVideosOpen} onClose={() => setIsVideosOpen(false)} />)}
        
      {isHobbiesOpen && ( <Hobbies isOpen={isHobbiesOpen} onClose={() => setIsHobbiesOpen(false)} />)}
      
      {isContactOpen && ( <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />)}
    </>
  );
};

export default Dock;
