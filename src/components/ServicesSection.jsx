import React, { useState } from 'react';
import '../styles/ServicesSection.css';

const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Bireysel Koçluk",
      description: "Öğrencinin ihtiyaçlarına ve hedeflerine göre özelleştirilmiş birebir danışmanlık.",
      icon: "🎯",
      details: "Bireysel koçluk programımda, her öğrencinin kendine özgü öğrenme stilini, güçlü ve geliştirilmesi gereken yönlerini analiz ederek başlıyorum. Düzenli görüşmelerle öğrencinin akademik ilerlemesini takip ediyor, motivasyonunu yüksek tutacak teknikler geliştiriyor ve kişiselleştirilmiş çalışma programları hazırlıyorum. Bu süreçte sadece akademik başarıya değil, öğrencinin kendini tanımasına, hedef belirlemesine ve bu hedeflere ulaşma konusunda karşılaştığı engelleri aşmasına da yardımcı oluyorum."
    },
    {
      title: "Sınav Stratejileri",
      description: "YKS ve LGS sınavlarında başarılı olmak için gereken stratejiler ve teknikler.",
      icon: "📝",
      details: "YKS ve LGS sınavları için geliştirdiğim stratejiler, yıllara dayanan deneyimim ve sınav sistemindeki değişikliklere göre sürekli güncellenmektedir. Öğrencilere soru tipleri, zaman yönetimi, odaklanma teknikleri ve sınavda doğru cevaba en hızlı şekilde ulaşma yöntemlerini öğretiyorum. Önceki yılların sınav analizleri, soru dağılımları ve puan hesaplama sistemini detaylı olarak inceleyerek, her öğrencinin en verimli şekilde hazırlanmasını sağlıyorum."
    },
    {
      title: "Motivasyon Desteği",
      description: "Sınav sürecinde mental ve psikolojik destek, motivasyon artırıcı seanslar.",
      icon: "💪",
      details: "Uzun ve zorlu sınav hazırlık sürecinde öğrencilerin en çok ihtiyaç duyduğu şeylerden biri de motivasyon desteğidir. Düzenli motivasyon görüşmelerimde, öğrencilerin hedeflerini canlı tutmalarına, zorluklarla baş etme becerilerini geliştirmelerine ve pozitif düşünme alışkanlıkları kazanmalarına yardımcı oluyorum. Stres yönetimi, kaygı kontrolü ve özgüven artırıcı tekniklerle, öğrencilerin sadece akademik değil, duygusal olarak da bu süreci sağlıklı bir şekilde geçirmelerini sağlıyorum."
    },
    {
      title: "Veli Danışmanlığı",
      description: "Velilere sınav sürecinde çocuklarına nasıl destek olabilecekleri konusunda rehberlik.",
      icon: "👨‍👩‍👧‍👦",
      details: "Sınav başarısında ailenin rolü çok önemlidir. Veli danışmanlığı hizmetimde, ailelere sınav döneminde çocuklarına nasıl en iyi şekilde destek olabilecekleri konusunda rehberlik ediyorum. Ev ortamının düzenlenmesi, doğru iletişim teknikleri, stres yönetimi ve çocuklarını motive etme yöntemleri hakkında bilgilendirmeler yapıyorum. Ayrıca düzenli veli görüşmeleriyle, öğrencinin gelişimi hakkında aileleri bilgilendiriyor ve sürece aktif katılımlarını sağlıyorum."
    },
    {
      title: "Zaman Yönetimi",
      description: "Verimli çalışma planları ve etkili zaman yönetimi teknikleri.",
      icon: "⏰",
      details: "Sınav hazırlık sürecinin en kritik unsurlarından biri de etkili zaman yönetimidir. Öğrencilere, günlük, haftalık ve aylık çalışma programları hazırlayarak verimli ders çalışma alışkanlıkları kazandırıyorum. Pomodoro tekniği, önceliklendirme yöntemleri, hedef belirleme ve planlama becerileri gibi konularda eğitimler vererek öğrencilerin zamanlarını en verimli şekilde kullanmalarını sağlıyorum. Böylece öğrenciler, hem derslere hem de sosyal ve kişisel gelişimlerine zaman ayırabiliyorlar."
    },
    {
      title: "Soru Çözüm Teknikleri",
      description: "Farklı soru tipleri için özel çözüm yöntemleri ve pratik yaklaşımlar.",
      icon: "🧩",
      details: "Her dersin ve her soru tipinin kendine özgü çözüm teknikleri vardır. Öğrencilere, farklı soru tiplerini tanıma, analiz etme ve en hızlı şekilde doğru cevaba ulaşma yöntemlerini öğretiyorum. Özellikle YKS ve LGS'de çıkan zorlayıcı soru tipleri için geliştirdiğim özel teknikler, öğrencilerin sınavda zaman kazanmalarını ve daha yüksek puan almalarını sağlıyor. Pratik çözüm yolları, şıkları eleme teknikleri ve soru tipine göre yaklaşım stratejileri ile öğrencilerin sınav performansını artırıyorum."
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="hizmetler" className="services-section">
      <div className="content-container">
        <h2>Hizmetlerimiz</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button 
                className="details-button"
                onClick={() => openModal(service)}
              >
                Detayları İncele
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <div className="modal-icon">{selectedService.icon}</div>
              <h3>{selectedService.title}</h3>
            </div>
            <div className="modal-body">
              <p>{selectedService.details}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;