import React, { useState, useEffect } from 'react';
import '../styles/IntroScreen.css';

const IntroScreen = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Otomatik 8 saniye sonra geçiş yapması için
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setAnimationComplete(true);
    }, 300);
  };

  const handleTransitionEnd = () => {
    if (animationComplete) {
      onComplete();
    }
  };

  return (
    <div 
      className={`intro-screen ${animationComplete ? 'fade-out' : ''} ${clicked ? 'clicked' : ''}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="intro-content">
        <h1 className="intro-title">Hayallerin Var</h1>
        <h2 className="intro-subtitle">ve Nasıl Ulaşacağını Bilmiyor Musun?</h2>
        <div className="intro-divider"></div>
        <p className="intro-text">Doğru Yerdesin.</p>
        <button 
          className={`intro-button ${clicked ? 'pulse' : ''}`}
          onClick={handleClick}
        >
          Keşfet
        </button>
      </div>
      <div className="intro-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
};

export default IntroScreen; 