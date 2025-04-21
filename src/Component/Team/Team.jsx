import React, { useEffect, useRef } from "react";
import "../../style/Team.css";

// Images
import Doc1 from "../../assets/img/Dr-Afnan-Hazem.png";
import Doc2 from "../../assets/img/Dr-Hadear-Elfiky.png";
import Doc3 from "../../assets/img/Dr-Mariam-Nagy.png";
import Doc4 from "../../assets/img/Dr-Mohamed-Abaas.png";
import Doc5 from "../../assets/img/Dr-Mohamed-salah.png";
import Doc6 from "../../assets/img/Dr-Nada-Farhat.png";
import Doc7 from "../../assets/img/Dr-Omar-Samir.png";
import Doc8 from "../../assets/img/Dr-Wafa-Kasem.png";
import Doc9 from "../../assets/img/Dr-Yousef-Osama.png";
import Doc10 from "../../assets/img/Dr-Aya-Ibrahim.png";
import Doc11 from "../../assets/img/Dr-A-Galal.png";

const doctorsData = [
  { id: 1, name: "د. أفنان حازم", specialty: "أمراض القلب", image: Doc1 },
  { id: 2, name: "د.  هدير الفقي", specialty: "أمراض المخ والأعصاب", image: Doc2 },
  { id: 3, name: "د.  مريم ناجي", specialty: "جراحة العظام", image: Doc3 },
  { id: 4, name: "د.محمد عباس", specialty: "طب الأطفال", image: Doc4 },
  { id: 5, name: "د.محمد صلاح", specialty: "الأمراض الجلدية", image: Doc5 },
  { id: 6, name: "د.ندي فرحات", specialty: "طب العيون", image: Doc6 },
  { id: 7, name: "د. عمر سمير", specialty: "الطب النفسي", image: Doc7 },
  { id: 8, name: "د. وفاء قاسم ", specialty: "أمراض النساء والتوليد", image: Doc8 },
  { id: 9, name: "د.  يوسف أسامة ", specialty: "جراحة المسالك البولية", image: Doc9 },
  { id: 10, name: "د. آية إبراهيم", specialty: "طب الأسنان", image: Doc10 },
  { id: 11, name: "د. أحمد جلال", specialty: "أمراض الباطنة", image: Doc11 },
];

export default function Team() {
  const trackRef = useRef(null);

  useEffect(() => {
    // حساب عرض العنصر الواحد (البطاقة + الهامش)
    const singleCardWidth = 250 + 30; // عرض البطاقة + الهوامش
    const cardsCount = doctorsData.length;
    const carouselWidth = singleCardWidth * cardsCount;
    
    // تعيين المتغيرات على مستوى CSS
    document.documentElement.style.setProperty('--single-card-width', `${singleCardWidth}px`);
    document.documentElement.style.setProperty('--cards-count', `${cardsCount}`);
    document.documentElement.style.setProperty('--carousel-width', `${carouselWidth}px`);
    
    // ضبط مدة الحركة بناءً على عدد البطاقات
    const animationDuration = cardsCount * 2; // 2 ثانية لكل بطاقة
    document.documentElement.style.setProperty('--animation-duration', `${animationDuration}s`);
  }, []);

  // كل مجموعة من البطاقات
  const renderDoctorSet = (keyPrefix) => {
    return doctorsData.map((doctor, index) => (
      <div className="doctor-card" key={`${keyPrefix}-${doctor.id}`}>
        <div className="doctor-img-container">
          <div className="img-spinner"></div>
          <img src={doctor.image} alt={doctor.name} className="doctor-img" />
        </div>
        <div className="doctor-info">
          <h3 className="doctor-name">{doctor.name}</h3>
          <p className="doctor-specialty">{doctor.specialty}</p>
        </div>
      </div>
    ));
  };

  return (
    <section className="team-section">
      <div className="overlay"></div>

      <div className="section-heading">
        <h2>فريقنا الطبي المتميز</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {/* المجموعة الأولى من البطاقات */}
          {renderDoctorSet('set1')}
          {/* المجموعة الثانية من البطاقات */}
          {renderDoctorSet('set2')}
          {/* المجموعة الثالثة من البطاقات (للتأكد من عدم وجود فجوات) */}
          {renderDoctorSet('set3')}
        </div>
      </div>
      
      {/* زر الانضمام إلى الفريق */}
      <div className="join-team-button-container">
        <button className="join-team-button">انضم إلى فريقنا</button>
      </div>
    </section>
  );
}