import React, { useEffect, useState } from "react";
import "./AboutContent.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const AboutContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const exp = [
    { id: 1, title: "With us, unlock creativity with expert-led courses." },
    { id: 2, title: "Learn editing and edit effortlessly." },
    { id: 3, title: "Build skills and build your portfolio while learning." },
    { id: 4, title: "Flexible learning for everyone" },
    { id: 5, title: "Join the community of creators." },
    { id: 6, title: "Learn skills that matter and are in real demand" },
  ];  
  
  const rotatingText = "15 YEARS EXPERIENCE OF GRAPHICS • ";

  return (
    <section className="about-content-wrap" ref={ref}>
      {/* Ambient Glows */}
      <div className="content-ambient content-ambient--1" />
      <div className="content-ambient content-ambient--2" />

      {/* Floating Particles */}
      <div className="content-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="content-particle" style={{
            '--delay': `${i * 0.15}s`,
            '--duration': `${3 + (i % 4)}s`,
            '--x': `${Math.random() * 100}%`,
          }}></div>
        ))}
      </div>

      <div className="content-container">
        <div className="content-row">
          {/* Left Column */}
          <div className="content-col content-col--left">
            <div className="content-badge">
              <span className="content-badge-icon">🌟</span>
              <span>About RT Labs</span>
            </div>
            <h2 className="content-title">
              Who are <span className="content-highlight">We?</span>
            </h2>
            <div className="content-text">
              <p>
                We at RT Labs focus intensely on creativity and innovation through its operations. 
                The organisation stands as a training center for creators' development through 
                hands-on education on graphic designing capabilities. Each session at RT labs is 
                designed to help students of all abilities develop their skills with practical 
                hands-on sessions.
              </p>
              <p className="content-highlight-text">
                Join RT Labs today so your creative talent will become a professional ability.
              </p>
            </div>
            <div className="content-image-wrapper">
              <img src="/img/about/about-3.png" className="content-image" alt="RT Labs Experience" />
              <div className="content-image-overlay">
                <span>✨</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="content-col content-col--right">
            <div className="content-image-wrapper">
              <img src="/img/about/about-2.png" className="content-image" alt="RT Labs Experience" />
              <div className="content-image-overlay content-image-overlay--right">
                <span>🎯</span>
              </div>
            </div>
            
            <div className="content-features">
              {exp.map((item, index) => (
                <div key={item.id} className="content-feature" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IoIosCheckmarkCircleOutline className="content-feature-icon" />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rotating Tag */}
        <div className="content-tag">
          <div className="content-tag-rotating">
            {[...rotatingText].map((char, index) => (
              <span key={index} style={{ transform: `rotate(${index * 10}deg)` }}>
                {char}
              </span>
            ))}
          </div>
          <div className="content-tag-icon">
            <img src="/img/logo_1.png" alt="RT Labs Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;