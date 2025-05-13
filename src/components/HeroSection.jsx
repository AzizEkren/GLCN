import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('iletisim');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="anasayfa" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-subtitle">LGS ve YKS Koçluğu</div>
          <h1>Hedefinize Giden Yolda Profesyonel Rehberlik</h1>
          <p className="hero-description">
            Size özel hazırladığım bireysel koçluk ve danışmanlık programlarımla sınav başarısını
            destekliyor, öğrencilerime özel stratejiler geliştirerek hedeflerine ulaşmalarında yanlarında oluyorum.
          </p>
          <div className="contact-link-container" onClick={scrollToContact}>
            <p className="contact-info-text">Detaylı bilgi için bana ulaşabilirsiniz</p>
            <span className="contact-arrow">→</span>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Eğitim Koçluğu" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;