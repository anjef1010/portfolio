import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Dock from './components/Dock/Dock';
import SocialLinks from './components/SocialLinks/SocialLinks';
import SplineScene from './components/SplineScene/SplineScene';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // loading state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {isLoading ? (
        <div className="loading-screen">
          <h1> Anjef's Portfolio
            Loading...</h1>
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
