import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight,FaChevronLeft, FaArrowLeft, FaWhatsapp,FaPlus, FaCheck,} from "react-icons/fa";
import "../../style/Services.css";
// استيراد الصور
import ser1 from "../../assets/img/طقم.webp";
import ser2 from "../../assets/img/حشو.png";
import ser3 from "../../assets/img/تقويم.webp";
import ser4 from "../../assets/img/اطفال.jpg";
import bg1 from "../../assets/img/bg1.jpg";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "حشو وتنظيف الأسنان",
      image: ser2,
      description:
        "نقدم خدمات حشو الأسنان عالية الجودة باستخدام أحدث المواد والتقنيات.",
      features: ["حشو تجميلي", "تنظيف عميق", "إزالة الجير", "تلميع الأسنان"],
    },
    {
      id: 2,
      title: "زراعة وتركيب أطقم الأسنان",
      image: ser1,
      description:
        "نتخصص في زراعة الأسنان بأحدث التقنيات العالمية مع ضمان نتائج مذهلة.",
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
        "نوفر خدمات تقويم الأسنان بمختلف أنواعها لتصحيح مشاكل الإطباق.",
      features: ["تقويم معدني", "تقويم شفاف", "تقويم خزفي", "استشارات مجانية"],
    },
    {
      id: 4,
      title: "طب أسنان الأطفال",
      image: ser4,
      description:
        "قسم متخصص لعلاج أسنان الأطفال في بيئة مريحة وصديقة تناسب احتياجاتهم.",
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className="dental-services" style={{ backgroundImage: `url(${bg1})` }}>
      <div className="container">
        <div className="section-title text-center">
          <h2>خــدماتنا</h2>
          <p className="subtitle">
            نقدم مجموعة متكاملة من خدمات طب الأسنان بأعلى معايير الجودة
          </p>
        </div>

        <div className="services-slider-container">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="service-slide">
                <div className="service-card">
                  <div className="service-img">
                    <img src={service.image} alt={service.title} />
                    <div className="service-overlay">
                      <a href="#" className="service-details-btn">
                        <FaPlus />
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
                            <FaCheck /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href="#" className="service-btn">
                      <FaArrowLeft />
                      اقرأ المزيد{" "}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

         
        </div>
        <div className="text-center pt-5">
          <a
            href="https://wa.me/+201227599182"
            className="appointment-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            احجز موعدًا الآن <FaWhatsapp />
          </a>
        </div>

        
      </div>
    </div>
  );
}
