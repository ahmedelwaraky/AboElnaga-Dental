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
  { id: 1, name: "د. أحمد حسن", specialty: "أمراض القلب", image: Doc1 },
  { id: 2, name: "د. سارة علي", specialty: "أمراض المخ والأعصاب", image: Doc2 },
  { id: 3, name: "د. محمد كمال", specialty: "جراحة العظام", image: Doc3 },
  { id: 4, name: "د. ليلى عمر", specialty: "طب الأطفال", image: Doc4 },
  { id: 5, name: "د. هاني فريد", specialty: "الأمراض الجلدية", image: Doc5 },
  { id: 6, name: "د. نور محمود", specialty: "طب العيون", image: Doc6 },
  { id: 7, name: "د. طارق سمير", specialty: "الطب النفسي", image: Doc7 },
  { id: 8, name: "د. أميرة صالح", specialty: "أمراض النساء والتوليد", image: Doc8 },
  { id: 9, name: "د. يوسف أسامة", specialty: "جراحة المسالك البولية", image: Doc9 },
  { id: 10, name: "د. آية إبراهيم", specialty: "طب الأسنان", image: Doc10 },
  { id: 11, name: "د. أحمد جلال", specialty: "أمراض الباطنة", image: Doc11 },
];

export default function Team() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const calculateCarouselWidth = () => {
      const cardWidth = 250 + 30; // width + margin
      return cardWidth * doctorsData.length;
    };

    const updateScrollDistance = () => {
      const scrollWidth = calculateCarouselWidth();
      document.documentElement.style.setProperty('--scroll-width', `${scrollWidth}px`);
    };

    window.addEventListener("resize", updateScrollDistance);
    updateScrollDistance(); // Initial call

    return () => {
      window.removeEventListener("resize", updateScrollDistance);
    };
  }, []);

  const renderDoctorCards = () => {
    const allCards = [];
    for (let i = 0; i < 2; i++) {
      doctorsData.forEach((doctor) => {
        allCards.push(
          <div className="doctor-card" key={`doctor-${doctor.id}-repeat-${i}`}>
            <div className="doctor-img-container">
              <div className="img-spinner"></div>
              <img src={doctor.image} alt={doctor.name} className="doctor-img" />
            </div>
            <div className="doctor-info">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
            </div>
          </div>
        );
      });
    }
    return allCards;
  };

  return (
    <section className="team-section">
      <div className="overlay"></div>

      <div className="section-heading">
        <h2>فريقنا الطبي المتميز</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {renderDoctorCards()}
        </div>
      </div>
    </section>
  );
}
