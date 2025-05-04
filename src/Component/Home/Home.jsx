import React, { useState, useEffect } from "react";
import "../../style/Home.css";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Naga from "../DrNaga/Naga";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Partners from "../Partners/Partners";
import Branches from "../Branches/Branches";
import Footer from "../Footer/Footer";
import Opinions from "../Opinions/Opinions"; 
import WhatsIcon from "../WhatsIcon/WhatsIcon";
import Loader from "../Loader/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Hide loader after 3 seconds
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Show content with a slight delay after loader disappears
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 3500);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="home">
      <Loader />
      
      <div className={`site-content ${contentVisible ? 'visible' : ''}`}>
        <Navbar />
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
        
        <WhatsIcon phoneNumber="201227599182" />
      </div>
    </div>
  );
}