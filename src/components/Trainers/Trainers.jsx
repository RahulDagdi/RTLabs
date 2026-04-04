

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Trainers2.css";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

const Trainers = () => {
  const TrainersList = [
    {
      id: 1,
      img: "/img/Persons/Aditi-Sharma.png",
      name: "Aditi Sharma",
      logo: "/img/Persons/emiactech.png",
      role: "Senior UI/UX Designer",
      experience: "8+ Years",
    },
    {
      id: 2,
      img: "/img/Persons/Aman-Dubey.png",
      name: "Aman Dubey",
      logo: "/img/Persons/emizentech.png",
      role: "Creative Director",
      experience: "10+ Years",
    },
    {
      id: 3,
      img: "/img/Persons/Dheeraj-Sharma.png",
      name: "Dheeraj Sharma",
      logo: "/img/Persons/growthsystem.png",
      role: "Motion Graphics Expert",
      experience: "6+ Years",
    },
    {
      id: 4,
      img: "/img/Persons/Dhanraj-Kumawat.png",
      name: "Dhanraj Kumawat",
      logo: "/img/Persons/getraisetechnologies.png",
      role: "Web Development Lead",
      experience: "9+ Years",
    },
    {
      id: 5,
      img: "/img/Persons/Prachi-Jain.png",
      name: "Prachi Jain",
      logo: "/img/Persons/monamour_gallery.png",
      role: "Brand Strategist",
      experience: "7+ Years",
    },
    {
      id: 6,
      img: "/img/Persons/Sidhvi-Kumari.png",
      name: "Sidhvi Kumari",
      logo: "/img/Persons/thebranddoor.png",
      role: "Digital Artist",
      experience: "5+ Years",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="trainers-section">
      {/* Ambient Glows */}
      <div className="trainers-ambient trainers-ambient--1" />
      <div className="trainers-ambient trainers-ambient--2" />

      <div className="trainers-container">
        <div className="trainers-header">
          <div className="trainers-badge">
            <span className="trainers-badge-icon">👥</span>
            <span>Expert Mentors</span>
          </div>
          <h2 className="trainers-title">
            Meet Our 
            <span className="trainers-highlight"> Industry Experts</span>
          </h2>
          <p className="trainers-subtitle">
            Learn from the best in the industry with years of hands-on experience
          </p>
        </div>

        <div className="trainers-carousel-wrapper">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            arrows={true}
            centerMode={true}
            className="trainers-carousel"
          >
            {TrainersList.map((item, index) => (
              <div key={item.id} className="trainers-carousel-item">
                <div className={`trainers-team-card ${index % 2 === 0 ? 'trainers-card-even' : 'trainers-card-odd'}`}>
                  {/* Card Corners */}
                  <div className="trainers-card-corner trainers-corner1"></div>
                  <div className="trainers-card-corner trainers-corner2"></div>
                  <div className="trainers-card-corner trainers-corner3"></div>
                  <div className="trainers-card-corner trainers-corner4"></div>
                  
                  {/* Image Section */}
                  <div className="trainers-img-wrap">
                    <div className="trainers-team-img">
                      <img
                        decoding="async"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    <img
                      decoding="async"
                      src={item.logo}
                      alt={item.name}
                      className="trainers-game-logo"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="trainers-team-card-content">
                    <h3 className="trainers-box-title">
                      <Link to="#">{item.name}</Link>
                    </h3>
                    <p className="trainers-role">{item.role}</p>
                    {/* <p className="trainers-experience">{item.experience} Experience</p> */}
                    
                    {/* Social Links */}
                    <div className="trainers-social">
                      <a href="#" className="trainers-social-link">
                        <FaLinkedinIn />
                      </a>
                      <a href="#" className="trainers-social-link">
                        <FaTwitter />
                      </a>
                      <a href="#" className="trainers-social-link">
                        <FaInstagram />
                      </a>
                      <a href="#" className="trainers-social-link">
                        <FaGlobe />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Trainers;