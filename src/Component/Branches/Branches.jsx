import React, { useState, useEffect } from "react";
import "../../style/Branches.css";
import BranchQuisna from "../../assets/img/location.png";

import { FaMapMarkerAlt, FaPhone, FaClock, FaDirections } from 'react-icons/fa';

const branchesData = [
  {
    id: 1,
    name: "فرع قويسنا",
    address: "قويسنا، محافظة المنوفية",
    phone: "01227599182",
    workingHours: "السبت - الخميس: 11 صباحًا - 11 مساءً",
    image: BranchQuisna,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27702.478214921407!2d31.13391243632813!3d30.516564900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d67294f75e55%3A0xf9131838d2f541a0!2z2YLZiNmK2LPZhtinLCDYp9mE2YXZhtmI2YHZitip!5e0!3m2!1sar!2seg!4v1713789000000!5m2!1sar!2seg",
  },
  {
    id: 2,
    name: "فرع قرية طه شبرا",
    address: "قرية طه شبرا، مركز قويسنا، محافظة المنوفية",
    phone: "01040467770",
    workingHours: "السبت - الخميس: 11 صباحًا - 11 مساءً",
    image: BranchQuisna,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13851.233344433332!2d31.124908075359623!3d30.517752534693173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7df3e21523b57%3A0xdb10761e43fa3bad!2z2LfZhyDYtNio2LHYpywg2YLZiNmK2LPZhtinLCDYp9mE2YXZhtmI2YHZitip!5e0!3m2!1sar!2seg!4v1713789000000!5m2!1sar!2seg",
  },
];

export default function Branches() {

  const [activeBranch, setActiveBranch] = useState(branchesData[0]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBranchClick = (branch) => {
    if (branch.id !== activeBranch.id) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveBranch(branch);
        setMapLoaded(false);
      }, 300);
    }
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
    setIsAnimating(false);
  };

  useEffect(() => {
    // تأثير للتحميل الأولي
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
     <section className="branches-section">
      <div className="overlay"></div>

      <div className="section-heading">
        <h2>فروعنا</h2>
      </div>

      <div className="branches-container">
        <div className="branches-tabs">
          {branchesData.map((branch) => (
            <div
              key={branch.id}
              className={`branch-tab ${branch.id === activeBranch.id ? "active" : ""}`}
              onClick={() => handleBranchClick(branch)}
            >
              <div className="branch-tab-img-container">
                <div className="img-spinner"></div>
                <img src={branch.image} alt={branch.name} className="branch-tab-img" />
              </div>
              <h3>{branch.name}</h3>
            </div>
          ))}
        </div>

        <div className={`branch-details ${isAnimating ? "fade-out" : "fade-in"}`}>
          <div className="branch-info">
            <h3 className="branch-name">{activeBranch.name}</h3>
            
            <div className="branch-info-item">
              <FaMapMarkerAlt className="branch-icon" />
              <p>{activeBranch.address}</p>
            </div>
            
            <div className="branch-info-item">
              <FaPhone className="branch-icon" />
              <p>{activeBranch.phone}</p>
            </div>
            
            <div className="branch-info-item">
              <FaClock className="branch-icon" />
              <p>{activeBranch.workingHours}</p>
            </div>
            
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeBranch.name + ' ' + activeBranch.address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="directions-btn"
            >
              <FaDirections className="direction-icon" />
              <span>الاتجاهات</span>
            </a>
          </div>

          <div className="branch-map-container">
            <div className={`map-spinner ${mapLoaded ? "hidden" : ""}`}>
              <div className="spinner"></div>
            </div>
            <iframe
              src={activeBranch.map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`خريطة ${activeBranch.name}`}
              className={mapLoaded ? "visible" : ""}
              onLoad={handleMapLoad}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
