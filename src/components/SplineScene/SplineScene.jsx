import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Re-check on resize

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      {isMobile ? (
        <Spline
          scene="https://prod.spline.design/PYIRjA2qPQaiN2hE/scene.splinecode"
          style={{
            width: '100%',
            height: '100vh',
            maxWidth: '390px',
            maxHeight: '844px',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        />
      ) : (
        <Spline
          scene="https://prod.spline.design/3fmTYXf7rywFj4bG/scene.splinecode"
          style={{
            background: 'transparent',
            position: 'absolute',
            width: '100%',
            height: '91%',
            transform: 'scale(1.2)',
            zIndex: 1,
          }}
        />
      )}
    </>
  );
};

export default SplineScene;