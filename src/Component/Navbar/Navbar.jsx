import React, { useState } from "react";
import "../../style/Navbar.css";
import logo from "../../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("hero");

  // Simplified scroll function with no lag
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Use scrollIntoView with behavior: 'smooth'
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="تبديل القائمة"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-lg-0">
              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className={`nav-link ${
                      activeSection === "hero" ? "active" : ""
                    }`}
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("hero");
                    }}
                  >
                    الرئيسية
                  </a>
                ) : (
                  <Link className="nav-link" to="/">
                    الرئيسية
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className={`nav-link ${
                      activeSection === "about" ? "active" : ""
                    }`}
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                  >
                    من نحن
                  </a>
                ) : (
                  <Link className="nav-link" to="/#about">
                    من نحن
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className={`nav-link ${
                      activeSection === "services" ? "active" : ""
                    }`}
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("services");
                    }}
                  >
                    خدماتنا
                  </a>
                ) : (
                  <Link className="nav-link" to="/#services">
                    خدماتنا
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className={`nav-link ${
                      activeSection === "work" ? "active" : ""
                    }`}
                    href="#work"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("work");
                    }}
                  >
                    فريقينا
                  </a>
                ) : (
                  <Link className="nav-link" to="/#work">
                    فريقينا
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className={`nav-link ${
                      activeSection === "partners" ? "active" : ""
                    }`}
                    href="#partners"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("partners");
                    }}
                  >
                    شركاؤنا
                  </a>
                ) : (
                  <Link className="nav-link" to="/#partners">
                    شركاؤنا
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className={`nav-link ${
                      activeSection === "branches" ? "active" : ""
                    }`}
                    href="#branches"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("branches");
                    }}
                  >
                    فروعنا
                  </a>
                ) : (
                  <Link className="nav-link" to="/#branches">
                    فروعنا
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className={`nav-link ${
                      activeSection === "opinions" ? "active" : ""
                    }`}
                    href="#opinions"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("opinions");
                    }}
                  >
                    الأراء
                  </a>
                ) : (
                  <Link className="nav-link" to="/#opinions">
                    الأراء
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {isHomePage ? (
                  <a
                    className={`nav-link ${
                      activeSection === "contact-us" ? "active" : ""
                    }`}
                    href="#contact-us"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact-us");
                    }}
                  >
                    تواصل معنا
                  </a>
                ) : (
                  <Link className="nav-link" to="/#contact-us">
                    تواصل معنا
                  </Link>
                )}
              </li>
            </ul>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/AboelnagaDC"
                className="social-link"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/aboelnagadc/"
                className="social-link"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/+201227599182"
                class="social-link"
                target="_blank"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
