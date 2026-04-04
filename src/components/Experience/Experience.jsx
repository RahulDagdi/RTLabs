import React, { useEffect, useState } from "react";
import "./Experience.css";
import { FaLaptopCode, FaPalette, FaVideo, FaFilm, FaMagic } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const exp = [
    {
      id: 1,
      title: "Adobe Photoshop",
      rating: 77,
      icon: <FaPalette />,
      color: "#38bdf8",
      description: "Photo editing & manipulation"
    },
    {
      id: 2,
      title: "Adobe Illustrator",
      rating: 88,
      icon: <FaLaptopCode />,
      color: "#22d3ee",
      description: "Vector graphics & illustration"
    },
    {
      id: 3,
      title: "Adobe Premiere Pro",
      rating: 65,
      icon: <FaVideo />,
      color: "#84cc16",
      description: "Video editing & production"
    },
    {
      id: 4,
      title: "Wondershare Filmora",
      rating: 56,
      icon: <FaFilm />,
      color: "#ff7b00",
      description: "Easy video editing"
    },
    {
      id: 5,
      title: "Adobe After Effects",
      rating: 75,
      icon: <FaMagic />,
      color: "#a855f7",
      description: "Motion graphics & VFX"
    },
  ];

  const [animatedRatings, setAnimatedRatings] = useState(exp.map(() => 0));

  useEffect(() => {
    if (inView) {
      exp.forEach((item, index) => {
        let start = 0;
        const duration = 1500;
        const increment = item.rating / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= item.rating) {
            setAnimatedRatings(prev => {
              const newArr = [...prev];
              newArr[index] = item.rating;
              return newArr;
            });
            clearInterval(timer);
          } else {
            setAnimatedRatings(prev => {
              const newArr = [...prev];
              newArr[index] = Math.floor(start);
              return newArr;
            });
          }
        }, 16);
        return () => clearInterval(timer);
      });
    }
  }, [inView]);

  // Split skills into two columns
  const midIndex = Math.ceil(exp.length / 2);
  const leftSkills = exp.slice(0, midIndex);
  const rightSkills = exp.slice(midIndex);

  return (
    <section className="ex-section" ref={ref}>
      {/* Ambient glows */}
      <div className="ex-ambient ex-ambient--1" />
      <div className="ex-ambient ex-ambient--2" />

      <div className="ex-container">
        <div className="ex-row">
          {/* Left Column - Content */}
          <div className="ex-col ex-col--left">
            <div className="ex-content-wrapper">
              <div className="ex-badge">
                <span className="ex-badge-icon">⚡</span>
                <span>Industry Usage</span>
              </div>
              
              <h2 className="ex-title">
                Business Usage 
                <span className="ex-highlight"> Around the World</span>
              </h2>
              
              <p className="ex-description">
                Industry usage is a major part of learning any skill. Here is an 
                understanding of the industrial usage of popular software.
              </p>

              {/* Skills in Two Columns */}
              <div className="ex-skills-two-columns">
                <div className="ex-skills-column">
                  {leftSkills.map((item, index) => (
                    <div 
                      className="ex-skill-card" 
                      key={item.id}
                      style={{ '--skill-color': item.color }}
                    >
                      <div className="ex-skill-header">
                        <div className="ex-skill-icon" style={{ color: item.color }}>
                          {item.icon}
                        </div>
                        <div className="ex-skill-info">
                          <div className="ex-skill-title">{item.title}</div>
                          <div className="ex-skill-subtitle">{item.description}</div>
                        </div>
                        <div className="ex-skill-percentage" style={{ color: item.color }}>
                          {inView ? animatedRatings[index] : 0}%
                        </div>
                      </div>
                      
                      <div className="ex-progress-wrapper">
                        <div className="ex-progress-bg">
                          <div 
                            className="ex-progress-fill"
                            style={{ 
                              width: inView ? `${animatedRatings[index]}%` : '0%',
                              backgroundColor: item.color
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ex-skills-column">
                  {rightSkills.map((item, index) => (
                    <div 
                      className="ex-skill-card" 
                      key={item.id}
                      style={{ '--skill-color': item.color }}
                    >
                      <div className="ex-skill-header">
                        <div className="ex-skill-icon" style={{ color: item.color }}>
                          {item.icon}
                        </div>
                        <div className="ex-skill-info">
                          <div className="ex-skill-title">{item.title}</div>
                          <div className="ex-skill-subtitle">{item.description}</div>
                        </div>
                        <div className="ex-skill-percentage" style={{ color: item.color }}>
                          {inView ? animatedRatings[midIndex + index] : 0}%
                        </div>
                      </div>
                      
                      <div className="ex-progress-wrapper">
                        <div className="ex-progress-bg">
                          <div 
                            className="ex-progress-fill"
                            style={{ 
                              width: inView ? `${animatedRatings[midIndex + index]}%` : '0%',
                              backgroundColor: item.color
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="ex-col ex-col--right">
            <div className="ex-image-wrapper">
              <div className="ex-image-container">
                <img
                  src="/img/Experience.png"
                  alt="Experience"
                  className="ex-image"
                />
              </div>
              <div className="ex-floating ex-float-1">
                <div className="ex-float-icon">💻</div>
              </div>
              <div className="ex-floating ex-float-2">
                <div className="ex-float-icon">🎨</div>
              </div>
              <div className="ex-floating ex-float-3">
                <div className="ex-float-icon">📊</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;