import React from 'react';
import '../styles/AboutSection.css';
import profileImage from '../assets/profil.jpg';

const AboutSection = () => {
  return (
    <section id="hakkimda" className="about-section">
      <div className="content-container">
        <h2>Hakkımda</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="Gülçin Koçluk Profil" className="profile-image" />
          </div>
          <div className="about-text">
            <p>Merhaba Sevgili sınav öğrencim, ben Gülçin hoca.10 yıllık eğitim deneyimimle YKS ve LGS'ye hazırlanan öğrencilere bireysel koçluk hizmeti veriyorum. Rehber öğretmen olarak, sınav başarısı için gerekli stratejileri ve teknikleri öğrencilerimle paylaşıyorum.</p>
            <p>Öğrencilerimin sadece akademik değil, kişisel gelişimlerini de destekleyerek onların potansiyellerini en üst düzeye çıkarmalarına yardımcı oluyorum. Her öğrencinin farklı öğrenme stiline olduğuna inanıyorum ve bu yüzden her birine özel ilgi ve yaklaşım geliştiriyorum.</p>
            <p>Kariyerim boyunca birçok sınav grubu öğrencimin hayallerindeki lise/üniversiteye yerleşmesine vesile oldum. Sınav maratonunda edindiğim bilgileri seninle paylaşmak isterim.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 