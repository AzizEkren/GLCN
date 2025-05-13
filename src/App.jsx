import React, { useState, useEffect } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import SuccessStoriesSection from './components/SuccessStoriesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import IntroScreen from './components/IntroScreen'

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    // const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    
    // if (hasVisitedBefore) {
    //   setShowIntro(false);
    // } else {
    //   setShowIntro(true);
    // }
    
    // Her zaman intro screen gösteriliyor
    setShowIntro(true);
    
    // Load the content in the background
    setContentLoaded(true);
  }, []);

  useEffect(() => {
    // Section geçişlerini gözlemlemek için
    if (!showIntro) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      // Tüm section'ları seç ve gözlemle
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }
  }, [showIntro]);

  const handleIntroComplete = () => {
    // Store that user has visited before
    // localStorage.setItem('hasVisitedBefore', 'true');
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <IntroScreen onComplete={handleIntroComplete} />
      ) : (
        <div className="app-container">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <SuccessStoriesSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
