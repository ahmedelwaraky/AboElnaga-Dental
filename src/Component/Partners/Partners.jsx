import React from "react";
import "../../style/Partners.css";
import Logo1 from "../../assets/img/1.png";
import Logo2 from "../../assets/img/2.png";
import Logo3 from "../../assets/img/3.png";
import Logo4 from "../../assets/img/4.png";
import Logo5 from "../../assets/img/5.png";
import Logo6 from "../../assets/img/6.png";
import Logo7 from "../../assets/img/7.png";
import Logo8 from "../../assets/img/8.png";

export default function Partners() {
  const partners = [
    { id: 1, logo: Logo1 },
    { id: 2, logo: Logo2 },
    { id: 3, logo: Logo3 },
    { id: 4, logo: Logo4 },
    { id: 5, logo: Logo5 },
    { id: 6, logo: Logo6 },
    // { id: 7, logo: Logo7 },
    // { id: 8, logo: Logo8 },
  ];

  return (
    <section className="partners-section bg-da">
      <div className="container">
        <div className="section-heading">
          <h2>عملاء وشركاء نجاح مميزين</h2>
        </div>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-card" key={partner.id}>
              <div 
                className="logo-container" 
                style={{ backgroundImage: `url(${partner.logo})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}