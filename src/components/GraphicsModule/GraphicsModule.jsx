// // GraphicsModule.jsx

// import React, { useState } from "react";
// import "./GraphicsModule.css";
// import { Link, Links } from "react-router-dom";
// import { FiDownload } from "react-icons/fi";
// import EnrollNowModal from "../EnrollNowModal/EnrollNowModal";

// const GraphicsModule = () => {
//   const icons = [
//     "/img/graphics-design-course/illustrator Tools.png",
//     "/img/graphics-design-course/Photoshop Tools.png",
//     "/img/graphics-design-course/Premier pro Tools.png",
//     "/img/graphics-design-course/After effect Tools.png",
//     "/img/graphics-design-course/Canva Tools.png",
//     "/img/graphics-design-course/Coraldraw Tools.png",
//     "/img/graphics-design-course/Figma Tools.png"
//   ];

//   const learnItems = [
//     "Banners & Web Graphics",
//     "Push Notification Designs",
//     "Modern Web Layouts",
//     "Mobile App UI",
//     "Image Retouching",
//     "Infographics",
//     "Print Media Essentials"
//   ];

//   const toolItems = [
//     "Adobe XD",
//     "Figma",
//     "Photoshop",
//     "Illustrator",
//     "Canva",
//     "CorelDraw",
//     "After Effects"
//   ];

//   return (
//     <section className="gm-section">
//       {/* Ambient glows */}
//       <div className="gm-ambient gm-ambient--1" />
//       <div className="gm-ambient gm-ambient--2" />

//       {/* Header */}
//       <div className="gm-header">
//         <h2 className="gm-title">Web & Graphic Design Course Overview</h2>
//         <p className="gm-subtitle">
//           Master industry-accredited tools and techniques used by professional
//           designers worldwide. From web layouts to print media — we cover it all.
//         </p>

//         <a href="/brochure.pdf" download className="gm-download-btn">
//           <FiDownload />
//           <span>Download Brochure</span>
//         </a>
//       </div>

//       {/* Cards */}
//       <div className="gm-cards-container">
//         {/* What You'll Learn */}
//         <div className="gm-card">
//           <div className="gm-card-header">
//             <div className="gm-card-icon">📚</div>
//             <h3 className="gm-card-title">What You'll Learn</h3>
//           </div>
//           <ul className="gm-card-list">
//             {learnItems.map((item, index) => (
//               <li key={index}>
//                 <img
//                   src={icons[index % icons.length]}
//                   alt="icon"
//                   className="gm-list-icon"
//                 />
//                 <span className="gm-list-text">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Tools You Will Master */}
//         <div className="gm-card">
//           <div className="gm-card-header">
//             <div className="gm-card-icon">🛠️</div>
//             <h3 className="gm-card-title">Tools You Will Master</h3>
//           </div>
//           <ul className="gm-card-list">
//             {toolItems.map((item, index) => (
//               <li key={index}>
//                 <img
//                   src={icons[index % icons.length]}
//                   alt="icon"
//                   className="gm-list-icon"
//                 />
//                 <span className="gm-list-text">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Enroll button */}
//       <div className="gm-enroll-wrapper mt-3">
//         <EnrollNowModal />
//       </div>
//     </section>
//   );
// };

// export default GraphicsModule;

// // GraphicsModule.jsx
// import React from "react";
// import "./GraphicsModule.css";
// import { FiDownload, FiTrendingUp, FiAward, FiClock } from "react-icons/fi";
// import EnrollNowModal from "../EnrollNowModal/EnrollNowModal";

// const GraphicsModule = () => {
//   const learnItems = [
//     { name: "Banners & Web Graphics", icon: "/img/graphics-design-course/illustrator Tools.png", color: "#00d4ff" },
//     { name: "Push Notification Designs", icon: "/img/graphics-design-course/Photoshop Tools.png", color: "#ff6b35" },
//     { name: "Modern Web Layouts", icon: "/img/graphics-design-course/Premier pro Tools.png", color: "#00ff88" },
//     { name: "Mobile App UI", icon: "/img/graphics-design-course/After effect Tools.png", color: "#a855f7" },
//     { name: "Image Retouching", icon: "/img/graphics-design-course/Canva Tools.png", color: "#f43f5e" },
//     { name: "Infographics", icon: "/img/graphics-design-course/Coraldraw Tools.png", color: "#06b6d4" },
//     { name: "Print Media Essentials", icon: "/img/graphics-design-course/Figma Tools.png", color: "#8b5cf6" }
//   ];

//   return (
//     <section className="gm-section">
//       {/* Animated Background */}
//       <div className="gm-bg-shapes">
//         <div className="gm-shape gm-shape-1"></div>
//         <div className="gm-shape gm-shape-2"></div>
//         <div className="gm-shape gm-shape-3"></div>
//       </div>

//       <div className="gm-container">
//         {/* Header with floating effect */}
//         <div className="gm-header">
//           <div className="gm-header-badge">
//             <FiAward />
//             <span>Industry Accredited</span>
//           </div>
//           <h2 className="gm-title">
//             <span className="gm-title-gradient">Web & Graphic Design</span>
//             <br />
//             Course Overview
//           </h2>
//           <p className="gm-subtitle">
//             Master industry-accredited tools and techniques used by professional
//             designers worldwide. From web layouts to print media — we cover it all.
//           </p>
//           <div className="gm-stats">
//             <div className="gm-stat">
//               <FiTrendingUp />
//               <span>500+ Students Placed</span>
//             </div>
//             <div className="gm-stat">
//               <FiClock />
//               <span>Flexible Timings</span>
//             </div>
//           </div>
//           <a href="/brochure.pdf" download className="gm-download-btn">
//             <FiDownload />
//             <span>Download Brochure</span>
//           </a>
//         </div>

//         {/* What You'll Learn - Premium Card */}
//         <div className="gm-premium-card">
//           <div className="gm-card-glow"></div>

//           <div className="gm-card-header">
//             <div className="gm-header-icon">
//               <span>📚</span>
//             </div>
//             <div>
//               <h3 className="gm-card-title">What You'll Learn</h3>
//               <p className="gm-card-subtitle">Master the skills that matter most in 2025</p>
//             </div>
//           </div>

//           {/* Premium Grid */}
//           <div className="gm-premium-grid">
//             {learnItems.map((item, idx) => (
//               <div className="gm-premium-item" key={idx} style={{ '--item-color': item.color }}>
//                 <div className="gm-item-inner">
//                   <div className="gm-item-front">
//                     <div className="gm-icon-circle">
//                       <img src={item.icon} alt={item.name} className="gm-item-icon" />
//                     </div>
//                     <span className="gm-item-name">{item.name}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Floating Enroll Button */}
//           <div className="gm-enroll-area">
//             <div className="gm-enroll-pulse"></div>
//             <EnrollNowModal />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GraphicsModule;

// // GraphicsModule.jsx
// import React from "react";
// import "./GraphicsModule.css";
// import { FiDownload } from "react-icons/fi";
// import EnrollNowModal from "../EnrollNowModal/EnrollNowModal";

// const GraphicsModule = () => {
//   const learnItems = [
//     { name: "Banners & Web Graphics", icon: "/img/graphics-design-course/illustrator Tools.png" },
//     { name: "Push Notification Designs", icon: "/img/graphics-design-course/Photoshop Tools.png" },
//     { name: "Modern Web Layouts", icon: "/img/graphics-design-course/Premier pro Tools.png" },
//     { name: "Mobile App UI", icon: "/img/graphics-design-course/After effect Tools.png" },
//     { name: "Image Retouching", icon: "/img/graphics-design-course/Canva Tools.png" },
//     { name: "Infographics", icon: "/img/graphics-design-course/Coraldraw Tools.png" },
//     { name: "Print Media Essentials", icon: "/img/graphics-design-course/Figma Tools.png" }
//   ];

//   return (
//     <section className="gm-section">
//       <div className="gm-container">
//         <div className="gm-header">
//           <h2 className="gm-title">Web & Graphic Design Course Overview</h2>
//           <p className="gm-subtitle">
//             Master industry-accredited tools and techniques used by professional
//             designers worldwide. From web layouts to print media — we cover it all.
//           </p>
//           <a href="/brochure.pdf" download className="gm-download-btn">
//             <FiDownload />
//             <span>Download Brochure</span>
//           </a>
//         </div>

//         <div className="gm-card">
//           <div className="gm-card-header">
//             <div className="gm-card-icon">📚</div>
//             <h3 className="gm-card-title">What You'll Learn</h3>
//           </div>
//           <div className="gm-grid">
//             {learnItems.map((item, index) => (
//               <div className="gm-grid-item" key={index}>
//                 <div className="gm-icon-box">
//                   <img src={item.icon} alt={item.name} className="gm-icon" />
//                 </div>
//                 <span className="gm-text">{item.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="gm-enroll">
//           <EnrollNowModal />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GraphicsModule;

// GraphicsModule.jsx

import React, { useState } from "react";
import "./GraphicsModule.css";
import { FiDownload } from "react-icons/fi";
import GraphicsToolsContentOnly from "../GraphicsTools/GraphicsToolsContentOnly.jsx";
import EnrollNowModal from "../EnrollNowModal/EnrollNowModal";
import GraphicsTools from "../GraphicsTools/GraphicsTools";

const learnItems = [
  {
    label: "Adobe Photoshop",
    tags: [
      "Layers & layer styles",
      "Selection & masking",
      "Retouching & color correction",
      "Brushes & filters",
      "Typography (text tool)",
      "Photo manipulation",
      "Background removal",
      "Smart objects & adjustments",
      "Export for web/print",
    ],
    desc: "The backbone of digital design. Learn photo editing, compositing, retouching, and creating stunning visual content for social media, print, and web.",
  },
  {
    label: "Adobe Illustrator",
    tags: [
      "Selection & direct selection tools",
      "Pen tool & path creation",
      "Shapes, grids & line tools",
      "Transform tools (scale, rotate, shear)",
      "Artboards & resizing",
      "Typography & type tool",
      "Vector vs raster basics",
      "Layers, fill & stroke",
      "Pathfinder & icon design",
      "Gradients & color theory",
      "Exporting (JPEG/PNG)",
      "Fonts installation",
      "Custom brushes",
    ],
    desc: "Master vector graphics, logo design, brand identity, and illustration. Everything from icons to full brand kits — Illustrator is where great design begins.",
  },
  {
    label: "Adobe Premiere Pro",
    tags: [
      "Project & sequence creation",
      "Importing & organizing media",
      "Timeline & sequence editing",
      "Basic editing (cut, trim, split)",
      "Selection & razor tools",
      "Multiple tracks management",
      "Transitions & effects",
      "Color correction & grading (Lumetri)",
      "Audio editing & noise removal",
      "Background music & sound effects",
      "Titles, text & lower thirds",
      "Essential Graphics & text animation",
    ],
    desc: "Learn professional video editing, colour grading, and storytelling through visual media. A must-have skill for content creators and digital marketers alike.",
  },
  {
    label: "Adobe After Effects",
    tags: [
      "Composition & project setup",
      "Importing & organizing assets",
      "Timeline & layers",
      "Keyframes & animation basics",
      "Transform properties (position, scale, rotation, opacity)",
      "Graph editor for smooth animation",
      "Text & motion typography",
      "Shapes & shape layers",
      "Effects & presets",
      "Color correction & grading",
      "Masks & visual effects",
    ],
    desc: "Bring your designs to life with motion graphics, animated logos, and visual effects. One of the most sought-after skills in the creative industry today.",
  },
  {
    label: "Figma",
    tags: [
      "Projects, files & frames",
      "Shapes, layers & layouts",
      "Text & typography",
      "Colors & styles",
      "Images & assets",
      "Components & variants",
      "Auto layout & responsive design",
      "Prototyping & interactions",
      "Screen linking & transitions",
      "Collaboration & sharing",
      "Design systems & libraries",
      "Plugins & widgets",
    ],
    desc: "The go-to tool for UI/UX design and web prototyping. Learn to design clean, user-friendly interfaces that developers can actually build from.",
  },
  {
    label: "Canva",
    tags: [
      "Introduction to Canva & interface",
      "Templates and design basics",
      "Text, colors & fonts",
      "Using images and elements",
      "Basic image editing",
      "Advanced tools (layers, animation)",
      "Social media design",
      "Sharing & downloading",
      "Practical projects & tips",
    ],
    desc: "Fast, flexible, and widely used by businesses of all sizes. Learn to create professional marketing creatives, presentations, and social media content quickly and efficiently.",
  },
];

const icons = [
  "/img/graphics-design-course/Photoshop Tools.png",
  "/img/graphics-design-course/illustrator Tools.png",
  "/img/graphics-design-course/Premier pro Tools.png",
  "/img/graphics-design-course/After effect Tools.png",
  "/img/graphics-design-course/Figma Tools.png",
  "/img/graphics-design-course/Canva Tools.png",
  // "/img/graphics-design-course/Coraldraw Tools.png",
];

const GraphicsModule = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = learnItems[activeIndex];

  return (
    <section className="gm-section">
      {/* Header */}
      <div className="gm-header">
        <div className="about-header">
          <h2 className="about-title">
            Everything You Need to Know About Our Graphic Design Training —{" "}
            <span className="about-highlight">In One Place</span>
          </h2>
          <p className="about-hero-subtitle">
            Thinking about how to start? Our graphic design courses details​ are
            provided in the brochure and offer a comprehensive overview of the
            syllabus, as well as tools used, fee structure, batch timings and
            placement. Download now and start your journey in design today.
          </p>
        </div>

        {/* <h2 className="gm-title">Web & Graphic Design Course Overview</h2>
        <p className="gm-subtitle">
          Master industry-accredited tools and techniques used by professional
          designers worldwide. From web layouts to print media — we cover it all.
        </p> */}
        <a href="/brochure.pdf" download className="gm-download-btn">
          <FiDownload />
          <span>Download Brochure</span>
        </a>
      </div>

      <GraphicsToolsContentOnly />

      {/* Split Card */}
      <div className="gm-split-card">
        {/* Left: List */}
        <div className="gm-left-panel">
          <div className="gm-card-header">
            <div className="gm-card-icon">📚</div>
            <h3 className="gm-card-title">What You'll Learn</h3>
          </div>
          <ul className="gm-learn-list">
            {learnItems.map((item, index) => (
              <li
                key={index}
                className={`gm-learn-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="gm-list-icon-wrap">
                  <img
                    src={icons[index % icons.length]}
                    alt=""
                    className="gm-list-icon"
                  />
                </div>
                <span className="gm-list-text">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Detail */}
        <div className="gm-right-panel">
          <h4 className="gm-detail-title">{active.label}</h4>
          <p className="gm-detail-desc">{active.desc}</p>

          {/* Render all tags */}
          <div className="gm-detail-tags">
            {active.tags.map((tag, i) => (
              <span className="gm-detail-tag" key={i}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Enroll */}
      <div className="gm-enroll-wrapper mt-3">
        <EnrollNowModal />
      </div>
    </section>
  );
};

export default GraphicsModule;
