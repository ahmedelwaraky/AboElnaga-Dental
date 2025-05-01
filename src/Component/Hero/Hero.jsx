import React, { useEffect, useState, useRef } from "react";
import "../../style/Hero.css"; // Make sure to create this CSS file with the styles provided
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Import your images
import hero1 from "../../assets/img/Hero1.jpg";
import hero2 from "../../assets/img/Hero2.jpg";
import hero3 from "../../assets/img/Hero3.jpg";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const contentRef = useRef(null);

  const slides = [
    {
      image: hero1,
      badge: "خبرة أكثر من 15 عام",
      title: "رعاية أسنان متميزة لابتسامة واثقة",
      description:
        "نقدم لك أفضل خدمات طب الأسنان بأحدث التقنيات العالمية وفريق من الأطباء المتخصصين لضمان ابتسامة صحية وجميلة",
      features: ["زراعة الأسنان", "تجميل الابتسامة", "تقويم الأسنان"],
    },
    {
      image: hero2,
      badge: "علاجات متطورة بأيدي خبيرة",
      title: "أحدث التقنيات لعلاجات فعالة",
      description:
        "نستخدم أحدث الأجهزة والمعدات العالمية لتقديم علاجات آمنة وفعالة بأقل ألم وأسرع وقت للتعافي",
      features: ["أشعة ثلاثية الأبعاد", "علاج بالليزر", "تبييض متطور"],
    },
    {
      image: hero3,
      badge: "رعاية مخصصة لكل مريض",
      title: "فريق طبي متخصص لخدمتك",
      description:
        "يضم مركزنا نخبة من أمهر أطباء الأسنان في جميع التخصصات لتوفير رعاية شاملة تلبي احتياجاتك الخاصة",
      features: ["استشارات مجانية", "خطط علاجية متكاملة", "متابعة دورية"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToNextSlide = () => {
    if (animating) return;

    fadeOutContent();

    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      fadeInContent();
    }, 500);
  };

  const goToPrevSlide = () => {
    if (animating) return;

    fadeOutContent();

    setTimeout(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      fadeInContent();
    }, 500);
  };

  const goToSlide = (index) => {
    if (animating || index === activeIndex) return;

    fadeOutContent();

    setTimeout(() => {
      setActiveIndex(index);
      fadeInContent();
    }, 500);
  };

  const fadeOutContent = () => {
    setAnimating(true);
    if (contentRef.current) {
      contentRef.current.classList.add("content-fade-out");
    }
  };

  const fadeInContent = () => {
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.remove("content-fade-out");
        contentRef.current.classList.add("content-fade-in");

        setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.classList.remove("content-fade-in");
            setAnimating(false);
          }
        }, 500);
      }
    }, 100);
  };

  return (
    <section className="hero-section">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-bg ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="content-container" ref={contentRef}>
          <div className="slide-badge">{slides[activeIndex].badge}</div>
          <h1 className="slide-title">{slides[activeIndex].title}</h1>
          <span className="title-line"></span>
          <p className="slide-description">{slides[activeIndex].description}</p>

          <div className="features-list">
            {slides[activeIndex].features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <span className="feature-dot"></span>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <>
              <a
                href="https://wa.me/+201227599182"
                className="hero-btn primary-btn"
                target="_blank"
              >
                <FaCalendarAlt />
                احجز موعدًا الآن
              </a>

              <a href="tel:+201227599182" className="hero-btn secondary-btn">
                <FaPhoneAlt />
                عيادة قويسنا{" "}
              </a>

              <a href="tel:+201040467770" className="hero-btn secondary-btn">
                <FaPhoneAlt />
                عيادة طة شبرا{" "}
              </a>
            </>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="nav-arrows">
        <div className="nav-arrow" onClick={goToPrevSlide}>
          <FaChevronRight />
        </div>
        <div className="nav-arrow" onClick={goToNextSlide}>
          <FaChevronLeft />
        </div>
      </div>

      {/* Slide Indicators */}
      {/* <div className="slide-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div> */}
    </section>
  );
}
