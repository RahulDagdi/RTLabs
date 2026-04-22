import React, { useEffect, useState, useRef } from 'react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./UserNum.css";
import { FaGraduationCap, FaBriefcase, FaProjectDiagram, FaUsers, FaStar, FaAward } from 'react-icons/fa';

const UserNum = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const user_num = [
    {
      id: 1,
      num: 1000,
      text: "Course Enrollments",
      icon: <FaGraduationCap />,
      suffix: "+",
      color: "#38bdf8"
    },
    {
      id: 2,
      num: 15,
      text: "Years of Experience",
      icon: <FaAward />,
      suffix: "+",
      color: "#22d3ee"
    },
    {
      id: 3,
      num: 500,
      text: "Creative Projects",
      icon: <FaProjectDiagram />,
      suffix: "+",
      color: "#84cc16"
    },
    {
      id: 4,
      num: 50,
      text: "Placements",
      icon: <FaBriefcase />,
      suffix: "+",
      color: "#a855f7"
    },
  ];

  const logoList = [
    { id: 1, img: "/img/Logos/Crystal Tech.png", name: "Crystal Tech" },
    { id: 2, img: "img/Logos/Emiac.png", name: "Emiac" },
    { id: 3, img: "/img/Logos/Emizen.png", name: "Emizen" },
    { id: 4, img: "/img/Logos/Get Raise.png", name: "Get Raise" },
    { id: 5, img: "/img/Logos/Girnar Soft.png", name: "Girnar Soft" },
    { id: 6, img: "/img/Logos/Growth System.png", name: "Growth System" },
    { id: 7, img: "/img/Logos/The Brand Door.png", name: "The Brand Door" },
    { id: 8, img: "/img/Logos/thrillophilia Logo.png", name: "thrillophilia Logo" },
  ];

  const [animatedValues, setAnimatedValues] = useState(user_num.map(() => 0));

  useEffect(() => {
    if (inView) {
      user_num.forEach((item, index) => {
        let start = 0;
        const duration = 2000;
        const increment = item.num / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= item.num) {
            setAnimatedValues(prev => {
              const newArr = [...prev];
              newArr[index] = item.num;
              return newArr;
            });
            clearInterval(timer);
          } else {
            setAnimatedValues(prev => {
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

  return (
    <section className="usernum-section" ref={ref}>
      {/* Ambient Glows */}
      <div className="usernum-ambient usernum-ambient--1" />
      <div className="usernum-ambient usernum-ambient--2" />
      <div className="usernum-ambient usernum-ambient--3" />

      <div className="usernum-container">
        {/* Stats Section */}
        <div className="usernum-stats-wrapper">
          {/* <div className="usernum-header">
           
            <h2 className="usernum-title">
              Numbers That  {" "}
              <span className="usernum-highlight"> Speak Success</span>
            </h2>
            <p className="usernum-subtitle">
              We take pride in our accomplishments and the trust our students place in us
            </p>
          </div> */}

 <div className="about-header">
      
          <br />
          <h2 className="about-title">
            Numbers That  {" "}
          
            <span className="about-highlight">Speak Success</span>
          </h2> 
           <p className="usernum-subtitle">
              We take pride in our accomplishments and the trust our students place in us
            </p>
        </div>



          <div className="usernum-stats-grid">
            {user_num.map((item, index) => (
              <div className="usernum-stat-card" key={item.id}>
                <div className="usernum-stat-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="usernum-stat-value">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.num}
                      duration={2.5}
                      separator=","
                    />
                  ) : 0}
                  <span className="usernum-stat-suffix" style={{ color: item.color }}>
                    {item.suffix}
                  </span>
                </div>
                <div className="usernum-stat-text">{item.text}</div>
                <div className="usernum-stat-glow" style={{ background: `radial-gradient(circle, ${item.color}20, transparent)` }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Section */}
        <div className="usernum-logos-wrapper">
          <div className="usernum-logos-header">
            {/* <div className="usernum-logos-badge">
              <span className="usernum-logos-icon">🏢</span>
              <span>Trusted Partners</span>
            </div> */}


            {/* <h3 className="usernum-logos-title">
              Our <span className="usernum-logos-highlight">Corporate Partners</span>
            </h3>

             */}


 <div className="about-header">
              <h3 className="about-title">
            Our Corporate <span className="about-highlight">Partners</span>
          </h3> 
 </div>

            <p className="usernum-logos-subtitle">
              We are proud to work with industry-leading companies
            </p>
          </div>

          <div className="usernum-logos-grid">
            {logoList.map((item, index) => (
              <div 
                className="usernum-logo-card" 
                key={item.id}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="usernum-logo-inner">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="usernum-logo-img"
                  />
                  <div className="usernum-logo-overlay">
                    <span>{item.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserNum;