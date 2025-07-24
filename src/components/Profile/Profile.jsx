import React from 'react';
import { X, FileText, Download } from 'lucide-react';
import './Profile.css';
import ProfileCard from './ProfileCard'; // already styled & static

const Profile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="profile-modal-overlay">
      <div className="profile-popup-window">
        {/* Header */}
        <div className="profile-header">
          <span>👤 About Me</span>
          <div className="profile-window-controls">
            <button className="window-button window-minimize" title="Minimize" />
            <button className="window-button window-maximize" title="Maximize" />
            <button
              className="window-button window-close"
              onClick={onClose}
              title="Close"
            />
          </div>
        </div>

        {/* Content */}
        <div className="profile-window-content">
          <div className="content-layout">
            {/* Left - Profile Card */}
            <div className="profile-section">
              <ProfileCard/>
            </div>

            {/* Right - About Section */}
            <div className="about-section">
              <div className="profile-card">
                <h1 className="about-title">Let me introduce myself</h1>
                <div className="about-content">
                  <p className="about-paragraph">
                    Hey there! I'm <strong>Anjef Dangol</strong>, a passionate Web Developer focused on creating engaging and dynamic web applications. If you're looking to build something amazing for the web, whether it's a new application or collaborating on an existing project, feel free to reach out. Let's connect and develop something incredible together!
                  </p>
                  <p className="about-paragraph">
                    Beyond the world of code, I'm also a creative professional with a keen eye for photography and videography. I love merging technical skills with artistic vision, and I'm proficient in the Adobe Creative Suite, including Premiere Pro for video editing, color grading, and motion graphics. Whether it's capturing stunning visuals or bringing stories to life through video, I'm always eager to explore new creative ventures.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
