// GraphicsModule.jsx

import React, { useState } from "react";
import "./GraphicsModule.css";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import EnrollNowModal from "../EnrollNowModal/EnrollNowModal";

const GraphicsModule = () => {
  const icons = [
    "/img/graphics-design-course/illustrator Tools.png",
    "/img/graphics-design-course/Photoshop Tools.png",
    "/img/graphics-design-course/Premier pro Tools.png",
    "/img/graphics-design-course/After effect Tools.png",
    "/img/graphics-design-course/Canva Tools.png",
    "/img/graphics-design-course/Coraldraw Tools.png",
    "/img/graphics-design-course/Figma Tools.png"
  ];

  const learnItems = [
    "Banners & Web Graphics",
    "Push Notification Designs",
    "Modern Web Layouts",
    "Mobile App UI",
    "Image Retouching",
    "Infographics",
    "Print Media Essentials"
  ];

  const toolItems = [
    "Adobe XD",
    "Figma",
    "Photoshop",
    "Illustrator",
    "Canva",
    "CorelDraw",
    "After Effects"
  ];

  return (
    <section className="gm-section">
      {/* Ambient glows */}
      <div className="gm-ambient gm-ambient--1" />
      <div className="gm-ambient gm-ambient--2" />

      {/* Header */}
      <div className="gm-header">
        <h2 className="gm-title">Web & Graphic Design Course Overview</h2>
        <p className="gm-subtitle">
          Master industry-accredited tools and techniques used by professional
          designers worldwide. From web layouts to print media — we cover it all.
        </p>

        <a href="/brochure.pdf" download className="gm-download-btn">
          <FiDownload />
          <span>Download Brochure</span>
        </a>
      </div>

      {/* Cards */}
      <div className="gm-cards-container">
        {/* What You'll Learn */}
        <div className="gm-card">
          <div className="gm-card-header">
            <div className="gm-card-icon">📚</div>
            <h3 className="gm-card-title">What You'll Learn</h3>
          </div>
          <ul className="gm-card-list">
            {learnItems.map((item, index) => (
              <li key={index}>
                <img
                  src={icons[index % icons.length]}
                  alt="icon"
                  className="gm-list-icon"
                />
                <span className="gm-list-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools You Will Master */}
        <div className="gm-card">
          <div className="gm-card-header">
            <div className="gm-card-icon">🛠️</div>
            <h3 className="gm-card-title">Tools You Will Master</h3>
          </div>
          <ul className="gm-card-list">
            {toolItems.map((item, index) => (
              <li key={index}>
                <img
                  src={icons[index % icons.length]}
                  alt="icon"
                  className="gm-list-icon"
                />
                <span className="gm-list-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Enroll button */}
      <div className="gm-enroll-wrapper mt-3">
        <EnrollNowModal />
      </div>
    </section>
  );
};

export default GraphicsModule;
