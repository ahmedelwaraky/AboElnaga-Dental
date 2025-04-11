import React, { useEffect, useState } from "react";
import "../../style/Hero.css";
import hero1 from '../../assets/img/Hero1.jpg';
import hero2 from '../../assets/img/Hero2.jpg';
import hero3 from '../../assets/img/Hero3.jpg';
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      image: hero1,
      title: 'رعاية أسنان متميزة',
      description: 'نهتم بصحة وجمال ابتسامتك',
      info: 'خبرة أكثر من 15 عام'
    },
    {
      image: hero2,
      title: 'تقنيات حديثة',
      description: 'أحدث الأجهزة والمعدات العالمية',
      info: 'علاجات متطورة بأيدي خبيرة'
    },
    {
      image: hero3,
      title: 'فريق طبي متخصص',
      description: 'أطباء ذوي خبرة في جميع تخصصات طب الأسنان',
      info: 'رعاية مخصصة لكل مريض'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="hero-section">
      <div className="slider-container">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === activeIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === activeIndex ? 'scale(1)' : 'scale(0.8)'
              }}
            >
              <div className="overlay"></div>
            </div>
          ))}
        </div>
        
        <div className="hero-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="content-box">
                  <h1 className="main-title">{slides[activeIndex].title}</h1>
                  <p className="main-description">{slides[activeIndex].description}</p>
                  <div className="info-badge">{slides[activeIndex].info}</div>
                  
                  <div className="hero-buttons">
                    <button className="btn appointment-btn">
                      <FaCalendarAlt /> احجز موعدًا الآن
                    </button>
                    <button className="btn contact-btn">
                      <FaPhoneAlt /> اتصل بنا
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="slider-controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}