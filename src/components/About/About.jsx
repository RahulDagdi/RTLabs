import React from "react";
import "./About.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaEye, FaBullseye, FaLightbulb, FaUsers, FaTrophy, FaRocket, FaStar } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const about = [
    {
      id: 1,
      image: "/img/about/vision.png",
      title: "Vision",
      description: "The overarching creative concept, artistic direction, and what you aim to convey through visuals.",
      icon: <FaEye />,
      color: "#38bdf8"
    },
    {
      id: 2,
      image: "/img/about/Mission.png",
      title: "Mission",
      description: "Learn to create compelling and engaging visual content that effectively communicates a message, story, or brand identity.",
      icon: <FaBullseye />,
      color: "#84cc16"
    },
    {
      id: 3,
      image: "/img/about/Innovation.png",
      title: "Innovation",
      description: "Learn new tools, techniques, and workflows to create compelling and engaging visual content.",
      icon: <FaLightbulb />,
      color: "#a855f7"
    },
  ];

  const user_num = [
    { id: 1, num: 1000, text: "Course Enrollments", icon: <FaUsers />, suffix: "+", color: "#38bdf8" },
    { id: 2, num: 15, text: "Years Of Experience", icon: <FaStar />, suffix: "+", color: "#84cc16" },
    { id: 3, num: 500, text: "Creative Projects", icon: <FaRocket />, suffix: "+", color: "#a855f7" },
    { id: 4, num: 50, text: "Placements", icon: <FaTrophy />, suffix: "+", color: "#22d3ee" },
  ];

  return (
    <section className="about-page" ref={ref}>
      {/* Animated Background */}
      <div className="about-bg">
        <div className="about-bg-circle about-bg-circle-1"></div>
        <div className="about-bg-circle about-bg-circle-2"></div>
        <div className="about-bg-circle about-bg-circle-3"></div>
        <div className="about-bg-circle about-bg-circle-4"></div>
      </div>

      {/* Floating Particles */}
      <div className="about-particles">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="about-particle" style={{
            '--delay': `${i * 0.2}s`,
            '--duration': `${3 + (i % 5)}s`,
            '--x': `${Math.random() * 100}%`,
          }}></div>
        ))}
      </div>

      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="about-hero-badge">
            <span className="about-hero-icon">✨</span>
            <span>Welcome to RT Labs</span>
          </div>
          <h1 className="about-hero-title">
            Design, Edit, Animate – 
            <span className="about-hero-highlight"> Create With Us</span>
          </h1>
          <div className="about-hero-line">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="about-hero-subtitle">
            Transform your creative passion into a professional career with industry-leading training
          </p>
        </div>

        {/* Image and Cards Section - Original Layout */}
        <div className="about-main-section">
          <div className="about-main-row">
            {/* Left Column - Image */}
            <div className="about-main-col about-main-col--left">
              <div className="about-main-image-wrapper">
                <img
                  src="/img/about/about-1.png"
                  alt="About Us"
                  className="about-main-image"
                />
                <div className="about-main-image-overlay">
                  <span>🎯</span>
                </div>
              </div>
            </div>

            {/* Right Column - Cards */}
            <div className="about-main-col about-main-col--right">
              <div className="about-cards-section">
                <div className="about-cards-grid">
                  {about.map((item, index) => (
                    <div key={item.id} className="about-card" style={{ animationDelay: `${index * 0.15}s` }}>
                      <div className="about-card-glow" style={{ background: `radial-gradient(circle, ${item.color}20, transparent)` }}></div>
                      <div className="about-card-icon" style={{ color: item.color }}>{item.icon}</div>
                      <div className="about-card-icon-img">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <h3 className="about-card-title" style={{ color: item.color }}>{item.title}</h3>
                      <p className="about-card-desc">{item.description}</p>
                      <div className="about-card-arrow">→</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats-section">
          <div className="about-stats-grid">
            {user_num.map((item) => (
              <div key={item.id} className="about-stat-card">
                <div className="about-stat-icon" style={{ color: item.color }}>{item.icon}</div>
                <div className="about-stat-number">
                  {inView ? <CountUp start={0} end={item.num} duration={2.5} separator="," /> : 0}
                  <span className="about-stat-suffix" style={{ color: item.color }}>{item.suffix}</span>
                </div>
                <div className="about-stat-text">{item.text}</div>
                <div className="about-stat-progress">
                  <div className="about-stat-progress-bar" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}80)` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;