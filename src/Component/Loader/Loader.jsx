import React, { useEffect, useState } from "react";
import "../../style/Loader.css";
import logo from "../../assets/img/navback.png";


export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual page load event)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`dental-loader-container ${loading ? "active" : "fade-out"}`}
      >
        <div className="dental-loader">
        <div className="tooth-icon">
          <img src={logo} alt="Dental Clinic Tooth Icon" className="tooth-img" />
        </div>
          <div className="dental-pulse"></div>
          <h2 className="clinic-name">عيادات دكتور أحمد أبوالنجا</h2>
          <p className="loading-text">لتقويم وزراعة الأسنان</p>
        </div>
      </div>
    </>
  );
}
