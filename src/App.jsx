// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Dock from './components/Dock/Dock';
import SocialLinks from './components/SocialLinks/SocialLinks';
import SplineScene from './components/SplineScene/SplineScene';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-icon">🚀</div>
          <div className="glitch-typewriter">
            <h1 className="typewriter-text">
              Portfolio Loading
              <span className="cursor">|</span>
            </h1>
          </div>
        </div>
      ) : (
        <>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <SplineScene />
          <Dock />
          <SocialLinks />
        </>
      )}
    </div>
  );
}

export default App;
