import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Naga from "../DrNaga/Naga";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Partners from "../Partners/Partners";
import "../../style/Home.css"; // Make sure you create this file
import Branches from "../Branches/Branches";
import Footer from "../Footer/Footer";
import Opinions from "../Opinions/Opinions";

export default function Home() {
  return (
    <div className="home">
      <Navbar /> {/* Move Navbar outside the hero section */}
      <div id="hero" className="hero section">
        <Hero />
      </div>
      <div id="about" className="about-section section">
        <Naga />
      </div>
      <div id="services" className="services-section section">
        <Services />
      </div>
      <div id="work" className="team-section section">
        <Team />
      </div>
      <div id="partners" className="partners-section section">
        <Partners />
      </div>
      <div id="branches" className="branches-section section">
        <Branches />
      </div>
      <div id="opinions" className="opinions-section section">
        <Opinions />
      </div>
      <div id="contact-us" className="contact-us-section section">
        <Footer />
      </div>
    </div>
  );
}
