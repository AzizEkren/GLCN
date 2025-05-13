import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('anasayfa');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    
    
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${hasScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1>GLCN Eğitim Danışmanlık</h1>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a 
                href="#anasayfa" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick('anasayfa');
                }}
                className={activeSection === 'anasayfa' ? 'active' : ''}
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a 
                href="#hakkimda" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick('hakkimda');
                }}
                className={activeSection === 'hakkimda' ? 'active' : ''}
              >
                Hakkımda
              </a>
            </li>
            <li>
              <a 
                href="#hizmetler" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick('hizmetler');
                }}
                className={activeSection === 'hizmetler' ? 'active' : ''}
              >
                Hizmetler
              </a>
            </li>
            <li>
              <a 
                href="#basarilar" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick('basarilar');
                }}
                className={activeSection === 'basarilar' ? 'active' : ''}
              >
                Başarılar
              </a>
            </li>
            <li>
              <a 
                href="#iletisim" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick('iletisim');
                }}
                className={activeSection === 'iletisim' ? 'active' : ''}
              >
                İletişim
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 