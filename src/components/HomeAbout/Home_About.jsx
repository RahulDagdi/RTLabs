import React from "react";
import { useInView } from "react-intersection-observer";
import "./Home_About.css";

const Home_About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const about = [
    {
      id: 1,
      image: "/img/about_feature_1.png",
      title: "Hands-on training",
      description:
        "No BS, real-world projects, real-world workflows, real tools; create an amazing portfolio as you learn.",
    },
    {
      id: 2,
      image: "/img/about_feature_2.png",
      title: "Expert Mentors",
      description:
        "Get guidance from expert editors and graphic designers who have worked on Top-grade content that includes digital media and films.",
    },
    {
      id: 3,
      image: "/img/about_feature_3.png",
      title: "Affordable and flexible",
      description:
        "Best quality training without breaking the bank, get continuous support and expert QnA.",
    },
  ];

  return (
    <section className="home-about-section" ref={ref}>
      {/* Ambient Glows */}
      <div className="about-ambient about-ambient--1" />
      <div className="about-ambient about-ambient--2" />

      <div className="about-container">
        {/* Header Section - Centered */}
        <div className="about-header">
          {/* <div className="about-badge">
            <span className="about-badge-icon">✨</span>
            <span>Why Choose Us</span>
          </div> */}
          <br />
          <h2 className="about-title">
            Transforming Creative{" "}
          
            <span className="about-highlight">Careers Since 2015</span>
          </h2> 
        </div>

        {/* Content Row */}
        <div className="about-row">
          {/* Left Column - Image */}
          <div className="about-col about-col--left">
            <div className="about-image-wrapper">
              <div className="about-image-container">
                <img
                  src="/img/about_home.png"
                  alt="About Us"
                  className="about-image"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="about-col about-col--right">
            <div className="about-features">
              {about.map((item, index) => (
                <div
                  key={item.id}
                  className="about-feature-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="about-feature-icon">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="about-feature-content">
                    <h3 className="about-feature-title">{item.title}</h3>
                    <p className="about-feature-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_About;
