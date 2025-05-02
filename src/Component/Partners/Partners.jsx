import React from "react";
import "../../style/Partners.css";

import Arabi from "../../assets/img/elaraby-01.webp";
import We from "../../assets/img/We_logo.svg.png";
import Vodafone from "../../assets/img/Vodafone_Logo.png";

export default function Partners() {
  // بيانات الشركاء في مصفوفة واحدة لعرض أبسط
  const partners = [
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
    // يمكنك إضافة المزيد من الشركاء هنا عند الحاجة
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="section-title">
          <h2>شركاؤنا</h2>
          <p>
            نفخر بالتعاون مع أفضل الشركات والمؤسسات لتقديم أعلى مستويات الخدمة والجودة لعملائنا
          </p>
        </div>

        <div className="partners-logos">
          {partners.map((partner, index) => (
            <div className="partner-logo-wrapper" key={`partner-${index}`}>
              <div className="partner-logo">
                <img src={partner.logo} alt={partner.altText} />
              </div>
            </div>
          ))}
        </div>

        {/* <div className="cta-container">
          <p className="cta-text">هل ترغب في أن تصبح أحد شركائنا المميزين؟</p>
          <a href="#contact" className="cta-button">
            تواصل معنا الآن
          </a>
        </div> */}
      </div>
    </section>
  );
}