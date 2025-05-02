import React, { useEffect, useRef, useState } from "react";
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
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [activeDoctor, setActiveDoctor] = useState(null);
  const pauseTimeoutRef = useRef(null);
  const dragSpeedRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const lastPositionRef = useRef(0);

  useEffect(() => {
    // Calculate dimensions based on card count
    const singleCardWidth = 250 + 30; // Card width + margins
    const cardsCount = doctorsData.length;
    const carouselWidth = singleCardWidth * cardsCount;
    
    // Set CSS variables
    document.documentElement.style.setProperty('--single-card-width', `${singleCardWidth}px`);
    document.documentElement.style.setProperty('--cards-count', `${cardsCount}`);
    document.documentElement.style.setProperty('--carousel-width', `${carouselWidth}px`);
    
    // Set animation duration based on card count
    const animationDuration = cardsCount * 5; // 5 seconds per card (slower for better viewing)
    document.documentElement.style.setProperty('--animation-duration', `${animationDuration}s`);

    // Make carousel responsive
    const updateDimensions = () => {
      const mobileWidth = window.innerWidth <= 768;
      const newSingleCardWidth = mobileWidth ? 220 : 280;
      document.documentElement.style.setProperty('--single-card-width', `${newSingleCardWidth}px`);
      document.documentElement.style.setProperty('--carousel-width', `${newSingleCardWidth * cardsCount}px`);
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  // Pause carousel animation
  const pauseCarousel = () => {
    if (trackRef.current) {
      const computedStyle = window.getComputedStyle(trackRef.current);
      const matrix = new DOMMatrixReadOnly(computedStyle.transform);
      
      // Save current position
      const currentX = matrix.m41 || 0;
      setCurrentTranslateX(currentX);
      
      // Pause animation
      trackRef.current.style.transform = `translateX(${currentX}px)`;
      trackRef.current.style.animationPlayState = 'paused';
      trackRef.current.style.animation = 'none';
      setIsPaused(true);
    }
  };

  // Resume carousel animation
  const resumeCarousel = () => {
    if (trackRef.current && isPaused) {
      // Reset animation and let it continue from current CSS position
      trackRef.current.style.transform = '';
      trackRef.current.style.animation = 'perfectScroll var(--animation-duration) linear infinite';
      trackRef.current.style.animationPlayState = 'running';
      setIsPaused(false);
      setActiveDoctor(null);
    }
  };

  // Mouse/Touch handlers
  const handleDragStart = (e) => {
    // Handle both mouse and touch events
    const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    
    // Pause carousel when user starts interaction
    if (!isPaused) {
      pauseCarousel();
    }
    
    setIsDragging(true);
    setStartX(clientX);
    lastPositionRef.current = clientX;
    lastDragTimeRef.current = Date.now();
    
    // Clear any existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    // Prevent default behavior for touch events
    if (e.type.includes('touch')) {
      e.preventDefault();
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    // Handle both mouse and touch events
    const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const deltaX = clientX - startX;
    
    // Calculate drag speed for momentum effect
    const currentTime = Date.now();
    const timeDiff = currentTime - lastDragTimeRef.current;
    if (timeDiff > 0) {
      const posDiff = clientX - lastPositionRef.current;
      dragSpeedRef.current = posDiff / timeDiff * 20; // Scaling factor for momentum
    }
    lastDragTimeRef.current = currentTime;
    lastPositionRef.current = clientX;
    
    // Update carousel position
    if (trackRef.current) {
      const newX = currentTranslateX + deltaX;
      trackRef.current.style.transform = `translateX(${newX}px)`;
    }
    
    // Prevent default for touch events to avoid scrolling the page
    if (e.type.includes('touch')) {
      e.preventDefault();
    }
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Apply momentum effect
    if (Math.abs(dragSpeedRef.current) > 1) {
      const momentum = dragSpeedRef.current * 30; // Amplify the momentum effect
      const newX = currentTranslateX + (e.type.includes('mouse') ? e.pageX : e.changedTouches[0].pageX - startX) + momentum;
      
      if (trackRef.current) {
        // Apply momentum with smooth transition
        trackRef.current.style.transition = 'transform 0.5s ease-out';
        trackRef.current.style.transform = `translateX(${newX}px)`;
        
        // Reset transition after momentum effect
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = '';
            setCurrentTranslateX(newX);
          }
        }, 500);
      }
    } else {
      // Update current position if no significant momentum
      setCurrentTranslateX(currentTranslateX + (e.type.includes('mouse') ? e.pageX : e.changedTouches[0].pageX - startX));
    }
    
    // Resume carousel after inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      resumeCarousel();
    }, 4000); // Resume after 4 seconds of inactivity
  };

  // Handle click on doctor card
  const handleDoctorClick = (doctor) => {
    // If already active, deactivate
    if (activeDoctor && activeDoctor.id === doctor.id) {
      setActiveDoctor(null);
      return;
    }
    
    // Pause carousel and activate doctor
    if (!isPaused) {
      pauseCarousel();
    }
    
    setActiveDoctor(doctor);
    
    // Clear any existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    // Set timeout to resume carousel
    pauseTimeoutRef.current = setTimeout(() => {
      resumeCarousel();
    }, 6000); // Resume after 6 seconds
  };

  // Render doctor cards with enhanced interactivity
  const renderDoctorSet = (keyPrefix) => {
    return doctorsData.map((doctor) => (
      <div 
        className={`doctor-card ${activeDoctor && activeDoctor.id === doctor.id ? 'active' : ''}`} 
        key={`${keyPrefix}-${doctor.id}`}
        onClick={() => handleDoctorClick(doctor)}
      >
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

      <div className="carousel-container"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div 
          className={`carousel-track ${isPaused ? 'paused' : ''}`} 
          ref={trackRef}
        >
          {/* First set of cards */}
          {renderDoctorSet('set1')}
          {/* Second set for infinite effect */}
          {renderDoctorSet('set2')}
          {/* Third set to ensure no gaps */}
          {renderDoctorSet('set3')}
        </div>
      </div>
      
      {/* Navigation controls */}
      {/* <div className="carousel-controls">
      <button 
          className="carousel-control next" 
          onClick={() => {
            if (!isPaused) pauseCarousel();
            
            if (trackRef.current) {
              const newX = currentTranslateX - 300;
              trackRef.current.style.transition = 'transform 0.3s ease';
              trackRef.current.style.transform = `translateX(${newX}px)`;
              
              setTimeout(() => {
                if (trackRef.current) {
                  trackRef.current.style.transition = '';
                  setCurrentTranslateX(newX);
                }
              }, 300);
            }
            
            // Clear and reset timeout
            if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
            pauseTimeoutRef.current = setTimeout(resumeCarousel, 4000);
          }}
        >
          &#10094;
        </button>
        <button 
          className="carousel-control prev" 
          onClick={() => {
            if (!isPaused) pauseCarousel();
            
            if (trackRef.current) {
              const newX = currentTranslateX + 300;
              trackRef.current.style.transition = 'transform 0.3s ease';
              trackRef.current.style.transform = `translateX(${newX}px)`;
              
              setTimeout(() => {
                if (trackRef.current) {
                  trackRef.current.style.transition = '';
                  setCurrentTranslateX(newX);
                }
              }, 300);
            }
            
            // Clear and reset timeout
            if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
            pauseTimeoutRef.current = setTimeout(resumeCarousel, 4000);
          }}
        >
          &#10095;
        </button>
       
      </div> */}
    </section>
  );
}