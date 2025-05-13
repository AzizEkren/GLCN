import React from 'react';
import '../styles/SuccessStoriesSection.css';

const SuccessStoriesSection = () => {
  const successStories = [
    {
      name: "Aziz E.",
      testimonial: "Gülçin hocayla tanışmadan öcne, yani ilk senemde 214bin sıralama yapmıştım.Gülçin hocayla tanışmak benim için büyük bir şans oldu.Ders çalışma teknikleri,deneme analizleri ve en önemlisi samimi gösterdiği ilginin sıralamamı 80bine çekmemde çok büyük katkısı oldu.Teşekkürler Gülçin Hocam. ",
      result: "Süleyman Demirel Uni,Bilgisayar Mühendisliği"
    },
    {
      name: "Rümeysa K.",
      testimonial: "Gülçin hocam sayesinde ilk sene 89.000 olan YKS sıralamamı mezun senemde 19.000'e çektim ve hedefim olan eczacılık fakültesini kazandım. Bana uygun çalışma programları ve düzenli takibi ile en bunaldığım zamanlarda bile pes etmememi sağladı. Kendimi tanıyıp eksiklerimi görme yolunda ve bu sürecimde en büyük destekçim oldu. Hedefi olan kişiler bu fırsatı kesinlikle kaçırmamalı. İyi ki Gülçin Hoca!",
      result: "Hacettepe Uni,Eczacılık"
    },
    {
      name: "Fatma K.",
      testimonial: "Gülçin Hocamın desteğiyle YKS'de ilk 300 bine girdim ve hayalim olan ÇOMÜ Sosyolojiyi bölümünü kazandım.Özellikle son 3 ayda uyguladığımız çalışma stretejisi hayatımı değiştirdi.İlk senemde 1 milyon olan sıralamamı ,Gülçin Hocam sayesinde,300 bine çektim.",
      result: "Çanakkale Onsekiz Mart Uni,Sosyoloji"
    },
    {
      name: "İkra K.",
      testimonial: "Gülçin Hoca bu yolculukta yanımda olduğu için ne kadar teşekkür etsem az.Desteği ve yönlendirmeleri sayesinde YKS’de ilk 10000’e girdim ve hayalini kurduğum tıp fakültesini kazandım. Özellikle son üç ayda beraber oluşturduğumuz çalışma planı, hem sınav sürecine bakış açımı değiştirdi hem de kendime olan güvenimi yeniden kazanmamı sağladı. Beni her zaman anlayan, motive eden ve elimden tutan bir rehber oldu. Sadece bir hoca değil, bu zorlu dönemde bana moral olan, yolumu aydınlatan gerçek bir destekçi. Emekleri ve inancı için sonsuz teşekkür ederim.",
      result: "İstanbul Aydın Uni,Tıp(%100 Burslu)"
    },
    {
      name: "Emir Ş.",
      testimonial: "Gülçin Hocam sayesinde ilk 100 bine girdim ve istediğim bölümü kazanmayı başardım. Bu süreçte verdiği destek, çalışma tarzı ve yönlendirmeleriyle bana gerçekten yol gösterdi. Zaman zaman motivasyonum düştüğünde bile, söylediği birkaç cümleyle yeniden toparlandım. Sadece akademik olarak değil, aynı zamanda nasıl planlı çalışmam gerektiğini de ondan öğrendim. Bana inandığı ve yanımda olduğu için minnettarım. Emekleri, sabrı ve desteği için kendisine teşekkür ederim.",
      result: "Tekirdağ Namık Kemal Uni,Bilgisayar Mühendisliği"
    },
    {
      name: "Yunus Emre Y.",
      testimonial: "Gülçin Hocam’la yollarımız kesiştiğinde sıralamam 100.000’di. Onunla geçirdiğim mezun senemde, doğru yönlendirme, bana özel hazırlanan programlar ve düzenli takip sayesinde eşit ağırlıkta 12.000 sıralama yaparak büyük bir ilerleme kaydettim.En zorlu zamanlarımda bile vazgeçmememi sağlayan yaklaşımı, sadece akademik anlamda değil, mental olarak da güçlenmemi sağladı. Hedeflerime olan inancımı tazeledi ve her adımda yanımda oldu. Bu süreçte bana kattıkları için ne kadar teşekkür etsem az.",
      result: "Yıldız Teknik Uni,İşletme"
    }
    
  ];

  return (
    <section id="basarilar" className="success-section">
      <div className="content-container">
        <h2>Başarılarımız</h2>
        <div className="success-stories">
          {successStories.map((story, index) => (
            <div className="story-card" key={index}>
              <h3>{story.name}</h3>
              <p>"{story.testimonial}"</p>
              <div className="story-result">{story.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection; 