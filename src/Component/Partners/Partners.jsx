import React from "react";
import "../../style/Partners.css";

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
import Arabi from "../../assets/img/elaraby-01.webp";
import We from "../../assets/img/We_logo.svg.png";
import Vodafone from "../../assets/img/Vodafone_Logo.png";

export default function Partners() {
  // Partner data array
  const partnersData = [
    {
      category: "شركات التأمين الطبي",
      partners: [
        {
          logo: Arabi,
          altText: "شركة التأمين الطبي أ",
          name: "شركة التأمين الصحي المتحدة",
          description:
            "نقدم خدمات طب الأسنان الشاملة لعملاء شركة التأمين الصحي المتحدة بميزات حصرية",
          services: ["علاج الأسنان الشامل", "تقويم الأسنان", "زراعة الأسنان"],
        },
        {
          logo: Arabi,
          altText: "شركة التأمين الطبي ب",
          name: "مجموعة الضمان للتأمين الصحي",
          description:
            "شريك استراتيجي في تقديم خدمات طب الأسنان المميزة لعملاء مجموعة الضمان",
          services: ["الكشف الدوري", "علاج جذور الأسنان", "تجميل الابتسامة"],
        },
        {
          logo: Arabi,
          altText: "شركة التأمين الطبي ج",
          name: "الشركة العربية للتأمين الصحي",
          description:
            "نتعاون مع الشركة العربية للتأمين الصحي لتوفير أفضل رعاية لصحة الفم والأسنان",
          services: ["جراحة الفم", "تركيبات الأسنان", "علاج اللثة"],
        },
      ],
    },
    {
      category: "الشركات والمؤسسات",
      partners: [
        {
          logo: We,
          altText: "شركة أ",
          name: "مجموعة الخليج للاستثمار",
          description:
            "نوفر خدمات طب الأسنان المميزة لموظفي مجموعة الخليج للاستثمار",
          services: [
            "الفحص الدوري",
            "العلاج الوقائي",
            "برامج العناية بالأسنان",
          ],
        },
        {
          logo: We,
          altText: "شركة ب",
          name: "شركة المستقبل للتقنية",
          description:
            "شراكة استراتيجية لتقديم خدمات طب الأسنان المتكاملة لموظفي شركة المستقبل",
          services: ["تبييض الأسنان", "العلاج التحفظي", "حشوات التجميلية"],
        },
        {
          logo: We,
          altText: "شركة ج",
          name: "مجموعة النخبة التعليمية",
          description:
            "نتعاون مع مجموعة النخبة التعليمية لتوفير برامج العناية بصحة الفم والأسنان للطلاب والموظفين",
          services: ["برامج توعوية", "فحوصات دورية", "خطط وقائية"],
        },
        {
          logo: We,
          altText: "شركة د",
          name: "شركة الاتصالات المتطورة",
          description:
            "نقدم خدمات طب الأسنان الشاملة لموظفي شركة الاتصالات المتطورة وعائلاتهم",
          services: ["باقات العناية الشاملة", "علاج الأطفال", "زراعة الأسنان"],
        },
      ],
    },
    {
      category: "موردي المستلزمات الطبية",
      partners: [
        {
          logo: Vodafone,
          altText: "شركة مستلزمات طبية أ",
          name: "شركة الأمل للمستلزمات الطبية",
          description:
            "نتعاون مع شركة الأمل للحصول على أحدث المستلزمات والأجهزة في مجال طب الأسنان",
          services: ["أجهزة متطورة", "مواد عالية الجودة", "تقنيات حديثة"],
        },
        {
          logo: Vodafone,
          altText: "شركة مستلزمات طبية ب",
          name: "المجموعة المتحدة للتوريدات الطبية",
          description:
            "شراكة استراتيجية مع المجموعة المتحدة لتوفير أفضل المواد والمستلزمات لعيادتنا",
          services: ["مواد تجميلية", "حشوات متطورة", "مستلزمات تقويم"],
        },
      ],
    },
  ];

  return (
    <>
      <section className="partners-section">
          <div className="container">
          <div className="section-title">
          <h2>شركاؤنا</h2>
          <p>
            نفخر بالتعاون مع أفضل الشركات والمؤسسات في مجال طب الأسنان لتقديم
            أعلى مستويات الخدمة والجودة لعملائنا
          </p>
        </div>

        <div className="partners-container">
          {partnersData.map((categoryData, categoryIndex) => (
            <div className="partner-category" key={`category-${categoryIndex}`}>
              <h3 className="category-title">{categoryData.category}</h3>
              <div className="partners-grid">
                {categoryData.partners.map((partner, partnerIndex) => (
                  <div
                    className="partner-card"
                    key={`partner-${categoryIndex}-${partnerIndex}`}
                  >
                    <div className="partner-card-inner">
                      <div className="partner-logo">
                        <img src={partner.logo} alt={partner.altText} />
                      </div>
                      <div className="partner-info">
                        <h3>{partner.name}</h3>
                        <p>{partner.description}</p>
                        <div className="partner-services">
                          {partner.services.map((service, serviceIndex) => (
                            <span
                              className="service-tag"
                              key={`service-${categoryIndex}-${partnerIndex}-${serviceIndex}`}
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <p className="cta-text">هل ترغب في أن تصبح أحد شركائنا المميزين؟</p>
          <a href="#contact" className="cta-button">
            تواصل معنا الآن
          </a>
        </div>
          </div>
     
      </section>
    </>
  );
}
