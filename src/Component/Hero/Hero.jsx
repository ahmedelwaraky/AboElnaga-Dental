import React, { useEffect, useState } from "react";
import "../../style/Hero.css";
import hero1 from '../../assets/img/Hero1.jpg'; // Import your images
import hero2 from '../../assets/img/Hero2.jpg'; // Import your images
import hero3 from '../../assets/img/Hero3.jpg'; // Import your images




export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  
  const slides = [
    {
      image: hero1, // Use imported image
      title: 'Mountain Adventures',
      description: 'Discover the highest peaks',
      scale: 1.2,
      info: 'Elevation: 8,848m'
    },
    {
      image: hero2, // Different image
      title: 'Enchanted Forest',
      description: 'Explore mysterious woods',
      scale: 1.3,
      info: '500+ species'
    },
    {
      image: hero3, // Different image
      title: 'Ocean Depths',
      description: 'Dive into the blue',
      scale: 1.4,
      info: 'Depth: 3,700m'
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
    <>
          <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
          key={index}
          className={`slide ${index === activeIndex ? 'active' : ''}`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            transform: `translateX(${(index - activeIndex) * 100}%) scale(${index === activeIndex ? 1.1 : 0.8})`
          }}
        >
            <div className="slide-content">
              <h3 className="slide-title">{slide.title}</h3>
              <p className="slide-description">{slide.description}</p>
              <div className="slide-info">{slide.info}</div>
            </div>
          </div>
        ))}
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

    </>
  );
}
