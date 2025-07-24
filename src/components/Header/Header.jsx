import React from 'react';
import lightLogo from './light-logo.jpg';
import darkLogo from './dark-logo.png';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="logo">
        <img
          src={darkMode ? darkLogo : lightLogo}
          alt="Anjef Dangol"
          className="logo-img"
        />
      </div>

      <div className="header-right">
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;
