import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section id="iletisim" className="contact-section">
      <div className="content-container">
        <h2>İletişim</h2>
        <div className="contact-content">
          <div className="contact-text">
            <h3>Detaylı Bilgi İçin Bana Ulaşın</h3>
            <p>Koçluk hizmetlerim, çalışma metodlarım ve ücretlendirme hakkında detaylı bilgi almak için aşağıdaki iletişim kanallarından bana ulaşabilirsiniz.</p>
          </div>
          
          <div className="contact-cards-container">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>E-posta</h3>
              <p>glcnn27@gmail.com</p>
              <a href="mailto:glcnn27@gmail.com" className="contact-button">E-posta Gönder</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Instagram</h3>
              <p>@egitimkocum.gulcinhoca</p>
              <a href="https://www.instagram.com/egitimkocum.gulcinhoca/" target="_blank" rel="noopener noreferrer" className="contact-button">Profili Görüntüle</a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 