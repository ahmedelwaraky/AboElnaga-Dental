import React from "react";
import "../../style/Services.css";
import ser1 from "../../assets/img/طقم.webp";
import ser2 from "../../assets/img/حشو.png";
import ser3 from "../../assets/img/تقويم.webp";
import ser4 from "../../assets/img/اطفال.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Slider from "react-slick";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "حشو وتنظيف الأسنان",
      image: ser2,
      description:
        "نقدم خدمات حشو الأسنان عالية الجودة باستخدام أحدث المواد والتقنيات. كما نوفر خدمات تنظيف احترافية لإزالة الجير والبلاك للحفاظ على صحة أسنانك ولثتك.",
      features: ["حشو تجميلي", "تنظيف عميق", "إزالة الجير", "تلميع الأسنان"],
    },
    {
      id: 2,
      title: "زراعة وتركيب أطقم الأسنان",
      image: ser1,
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

  // تحديث إعدادات السلايدر مع تفعيل وضع التمركز للحصول على تأثير التكبير
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // تفعيل وضع التمركز لتكبير الكرت النشط
    centerPadding: "0", // بدون padding إضافي
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
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="dental-services bg-light">
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

          {/* سلايدر الخدمات المُحدث */}
          <div className="row">
            <div className="col-12">
              <div className="services-slider-container">
                <Slider {...settings} className="services-slider">
                  {services.map((service) => (
                    <div key={service.id} className="service-slide">
                      <div className="service-card-wrapper">
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
          </div>

          <div className="row mt-5">
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
