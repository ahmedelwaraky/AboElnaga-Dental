import React from "react";
import "../../style/Partners.css";

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
          altText: "شركة التأمين الصحي المتحدة",
          name: "شركة التأمين الصحي المتحدة",
        },
        {
          logo: We,
          altText: "مجموعة الضمان للتأمين الصحي",
          name: "مجموعة الضمان للتأمين الصحي",
        },
        {
          logo: Vodafone,
          altText: "الشركة العربية للتأمين الصحي",
          name: "الشركة العربية للتأمين الصحي",
        },
      ],
    },
    // {
    //   category: "الشركات والمؤسسات",
    //   partners: [
    //     {
    //       logo: We,
    //       altText: "مجموعة الخليج للاستثمار",
    //       name: "مجموعة الخليج للاستثمار",
    //     },
    //     {
    //       logo: Arabi,
    //       altText: "شركة المستقبل للتقنية",
    //       name: "شركة المستقبل للتقنية",
    //     },
    //     {
    //       logo: Vodafone,
    //       altText: "مجموعة النخبة التعليمية",
    //       name: "مجموعة النخبة التعليمية",
    //     },
    //   ],
    // },
    // {
    //   category: "موردي المستلزمات الطبية",
    //   partners: [
    //     {
    //       logo: Arabi,
    //       altText: "شركة الأمل للمستلزمات الطبية",
    //       name: "شركة الأمل للمستلزمات الطبية",
    //     },
    //     {
    //       logo: We,
    //       altText: "المجموعة المتحدة للتوريدات الطبية",
    //       name: "المجموعة المتحدة للتوريدات الطبية",
    //     },
    //   ],
    // },
  ];

  return (
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
              <div className="row">
                {categoryData.partners.map((partner, partnerIndex) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={`partner-${categoryIndex}-${partnerIndex}`}>
                    <div className="partner-logo-inner">
                      <img src={partner.logo} alt={partner.altText} />
                      <p className="partner-name">{partner.name}</p>
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
  );
}