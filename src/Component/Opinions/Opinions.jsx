import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import USER from "../../assets/img/user.JPG"; // Fixed the extra space in import path
import "../../style/Opinions.css";

export default function Opinions() {
  // Create a reference to the slider
  const sliderRef = useRef(null);

  // تعديل الارتفاع للكروت عندما تتغير الشاشة
  useEffect(() => {
    const equalizeCardHeights = () => {
      const cardElements = document.querySelectorAll(".testimonial-card");
      if (cardElements.length === 0) return;

      // Reset heights
      cardElements.forEach((card) => {
        card.style.height = "auto";
      });
    };

    // تنفيذ الدالة عند تحميل الصفحة وعند تغير حجم الشاشة
    equalizeCardHeights();
    window.addEventListener("resize", equalizeCardHeights);

    return () => {
      window.removeEventListener("resize", equalizeCardHeights);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      image: USER, // Using placeholder as we don't have the actual image
      testimonial:
        "كانت تجربتي مع عيادة دكتور أحمد أبوالنجا ممتازة. الدكاترة ممتازين ومريحين نفسيا والنتيجة كانت مرضية. أنصح بزيارتهم لأي مشكلة في الأسنان.",
      status: "علاج تسوس وتركيب تقويم",
    },
    {
      id: 2,
      name: "سارة أحمد",
      image: USER,
      testimonial:
        "أشكر الدكتور أحمد أبوالنجا وفريقه على الرعاية الممتازة. كنت خايفة من علاج الأسنان لكن خلوني أشعر بالراحة طوال الوقت. الوجع كان أقل بكثير مما توقعت والنتيجة ممتازة!",
      status: "زراعة أسنان",
    },
    {
      id: 3,
      name: "محمود عبد الرحمن",
      image: USER,
      testimonial:
        "الادوات المستخدمة في العيادة من أحدث الأجهزة. الدكتوره شرحت لي كل خطوات العلاج بالتفصيل. ابتسامتي دلوقتي أجمل بكتير.",
      status: "تبييض وتجميل أسنان",
    },
    {
      id: 4,
      name: "فاطمة علي",
      image: USER,
      testimonial:
        "أفضل عيادة أسنان زرتها بأمانة. النظافة والتعقيم على أعلى مستوى، والدكاترة ماشاء الله عليهم.",
      status: "علاج عصب وتركيب تاج",
    },
    {
      id: 5,
      name: "كريم محمود",
      image: USER,
      testimonial:
        "العيادة ممتازة من كل النواحي، الأسعار معقولة والخدمة ممتازة. الدكتور أحمد شخص محترم جدا ومتمكن في عمله.",
      status: "تركيبات ثابتة",
    },
    {
      id: 6,
      name: "منى حسن",
      image: USER,
      testimonial:
        "فعلا من أحسن العيادات اللي زرتها، الدكاترة متفهمين ومحترمين، وفي التزام بالمواعيد.",
      status: "تقويم أسنان",
    },
  ];

  // إعدادات السلايدر
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true, // مهم للعربية
    arrows: false, // Hide default arrows, we'll use custom ones
    adaptiveHeight: false, // لإيقاف التكييف التلقائي للارتفاع
    centerMode: false, // إيقاف وضع المركز لضمان عرض متجانس
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: () => {
      // يمكن استخدام هذا الحدث لعمل تأثيرات عند تغيير الشرائح
    },
    afterChange: () => {
      // للتأكد من ضبط الارتفاعات بعد تغيير الشرائح
      const cardElements = document.querySelectorAll(".testimonial-card");
      cardElements.forEach((card) => {
        card.style.opacity = 1;
      });
    },
  };

  // Custom navigation handlers
  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="testimonials-section py-5">
      <div className="testimonials-content">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">آراء المرضى</h2>
            <p className="section-subtitle">ماذا يقول عنا مرضانا الكرام</p>
            {/* <div className="divider mx-auto"></div> */}
          </div>

          <div className="testimonials-slider-container">
            {/* Custom previous button */}
            <button
              className="custom-slider-arrow custom-prev-arrow"
              onClick={goToPrevious}
              aria-label="Previous"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="testimonials-slider">
              <Slider ref={sliderRef} {...sliderSettings}>
                {testimonials.map((item) => (
                  <div key={item.id} className="slider-item">
                    <div className="testimonial-card">
                      <div className="testimonial-header">
                        <div className="patient-image">
                          <img src={item.image} alt={`المريض ${item.name}`} />
                        </div>
                        <div className="patient-info">
                          <h5 className="patient-name">{item.name}</h5>
                          <span className="patient-status">{item.status}</span>
                        </div>
                      </div>
                      <div className="testimonial-body">
                        <p className="testimonial-text">
                          <i className="fas fa-quote-right quote-icon"></i>
                          {item.testimonial}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Custom next button */}
            <button
              className="custom-slider-arrow custom-next-arrow"
              onClick={goToNext}
              aria-label="Next"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>

          {/* <div className="text-center mt-5">
            <a href="#" className="btn opinion-btn">
              عرض المزيد من الآراء
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}