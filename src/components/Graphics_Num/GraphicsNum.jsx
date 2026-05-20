import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./GraphicsNum.css";

const GraphicsNum = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const user_num = [
    {
      id: 1,
      num: 4200,
      suffix: "+",
      text: "Student Enrolments",
      src: "/img/graphics-design-course/RTLabs-icons/student-enrollment-icon.png",
    },
    {
      id: 2,
      num: 3960,
      suffix: "+",
      text: "Satisfied Students",
      src: "/img/graphics-design-course/RTLabs-icons/satisfied-student-icon.png",
    },
    {
      id: 3,
      num: 1720,
      suffix: "+",
      text: "Success Stories",
      src: "/img/graphics-design-course/RTLabs-icons/success-stories-icon.png",
    },
    {
      id: 4,
      num: 2560,
      suffix: "+",
      text: "Placements",
      src: "/img/graphics-design-course/RTLabs-icons/placement-icon.png",
    },
  ];

  const handleCardClick = (item) => {
    console.log("Card clicked:", item);
    // Add your click functionality here
  };

  return (
    <section className="gn-section" ref={ref}>
      <div className="gn-ambient gn-ambient--1" />
      <div className="gn-ambient gn-ambient--2" />
      <div className="gn-ambient gn-ambient--3" />

      <div className="gn-container">
        <div className="gn-header">


          {/* <h2 className="gn-title">Our Achievements</h2>
          <p className="gn-subtitle">
            Empowering the gaming industry with exceptional results and
            satisfied clients worldwide
          </p> */}


          
             <div className="about-header">
          <h2 className="about-title">
            Our Placement & Student {" "}
          
            <span className="about-highlight">Success Record</span>
          </h2> 
           <p className="about-hero-subtitle">
              From first brushstroke to first paycheck — here's the proof that RT Labs delivers results.
              
            </p>
        </div>
        </div>

        <div className="gn-stats-grid">
          {user_num.map((item) => (
            <div
              className="gn-stat-card"
              key={item.id}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(item);
                }
              }}
            >
              <div className="gn-stat-icon">
                <img 
                  src={item.src} 
                  alt={item.text}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    console.error(`Image not found: ${item.src}`);
                  }}
                />
              </div>
              <div className="gn-stat-value-wrapper">
                <div className="gn-stat-value">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.num}
                      duration={2.5}
                      separator=","
                      decimals={item.num % 1 !== 0 ? 1 : 0}
                    />
                  ) : (
                    0
                  )}
                  <span className="gn-suffix">{item.suffix}</span>
                </div>
              </div>
              <div className="gn-stat-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicsNum;