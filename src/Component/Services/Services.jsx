import React from "react";
import "../../style/Services.css";
import ser1 from "../../assets/img/bg.avif"; // Import your images
import ser2 from "../../assets/img/Dr-Aya-Ibrahim.png"; // Import your images
import ser3 from "../../assets/img/Dr-Hadear-Elfiky.png"; // Import your images
import ser4 from "../../assets/img/Dr-Hadear-Elfiky.png"; // Import your images
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Slider from "react-slick";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "حشو وتنظيف الأسنان",
      image: ser1,
      description:
        "نقدم خدمات حشو الأسنان عالية الجودة باستخدام أحدث المواد والتقنيات. كما نوفر خدمات تنظيف احترافية لإزالة الجير والبلاك للحفاظ على صحة أسنانك ولثتك.",
      features: ["حشو تجميلي", "تنظيف عميق", "إزالة الجير", "تلميع الأسنان"],
    },
    {
      id: 2,
      title: "زراعة وتركيب أطقم الأسنان",
      image: ser2,
      description:
        "نتخصص في زراعة الأسنان بأحدث التقنيات العالمية مع ضمان نتائج مذهلة. كما نقدم خدمات تركيب أطقم الأسنان الثابتة والمتحركة المصممة خصيصًا لكل مريض.",
      features: [
        "زراعة أسنان متطورة",
        "تركيبات ثابتة",
        "أطقم متحركة",
        "تيجان وجسور",
      ],
    },
    {
      id: 3,
      title: "تقويم الأسنان والعناية بها",
      image: ser3,
      description:
        "نوفر خدمات تقويم الأسنان بمختلف أنواعها لتصحيح مشاكل الإطباق وتحسين شكل ابتسامتك. فريقنا من المتخصصين يضمن لك الحصول على أفضل النتائج الممكنة.",
      features: ["تقويم معدني", "تقويم شفاف", "تقويم خزفي", "استشارات مجانية"],
    },
    {
      id: 4,
      title: "طب أسنان الأطفال",
      image: ser4,
      description:
        "قسم متخصص لعلاج أسنان الأطفال في بيئة مريحة وصديقة تناسب احتياجاتهم. يتميز فريقنا بخبرة واسعة في التعامل مع الأطفال وتقديم رعاية لطيفة وفعالة.",
      features: [
        "علاج ودي للأطفال",
        "حشوات للأسنان اللبنية",
        "تثقيف صحي",
        "وقاية من التسوس",
      ],
    },
  ];

  const NextArrow = ({ onClick }) => (
    <button className="slick-arrow next-arrow" onClick={onClick}>
      <FaChevronRight />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="slick-arrow prev-arrow" onClick={onClick}>
      <FaChevronLeft />
    </button>
  );

  // Updated slider settings for 4 cards with centerMode
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides
    slidesToScroll: 1,
    centerMode: true, // Enable center mode for zoom effect
    centerPadding: '0', // No padding to keep cards aligned
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false, // Disable center mode on medium screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true, // Re-enable center mode on mobile
        }
      }
    ]
  };

  // Non-slider version with col-md-3 for reference
  const renderGridCards = () => {
    return services.map((service) => (
      <div className="col-md-3 col-sm-6 mb-4" key={service.id}>
        <div className="service-card">
          <div className="service-img">
            <img src={service.image} alt={service.title} />
            <div className="service-overlay">
              <a href="#" className="service-details-btn">
                <i className="fas fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-features">
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#" className="service-btn">
              اقرأ المزيد <i className="fas fa-arrow-left"></i>
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className="dental-services section-gap bg-light">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>خــدماتنا</h2>
                <p className="subtitle">
                  نقدم مجموعة متكاملة من خدمات طب الأسنان بأعلى معايير الجودة
                </p>
              </div>
            </div>
          </div>

          {/* Slider version with centerMode for zoom effect */}
          <div className="row">
            <div className="col-12">
              <Slider {...settings} className="services-slider">
                {services.map((service) => (
                  <div key={service.id}>
                    <div className="px-2">
                      <div className="service-card">
                        <div className="service-img">
                          <img src={service.image} alt={service.title} />
                          <div className="service-overlay">
                            <a href="#" className="service-details-btn">
                              <i className="fas fa-plus"></i>
                            </a>
                          </div>
                        </div>
                        <div className="service-content">
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                          <div className="service-features">
                            <ul>
                              {service.features.map((feature, index) => (
                                <li key={index}>
                                  <i className="fas fa-check"></i> {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <a href="#" className="service-btn">
                            اقرأ المزيد <i className="fas fa-arrow-left"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Keep your existing appointment button section */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <button className="appointment-btn">
                احجز موعدًا الآن <i className="far fa-calendar-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}