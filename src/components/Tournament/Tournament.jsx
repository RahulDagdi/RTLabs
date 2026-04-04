
import React, { useState, useEffect } from 'react';
import './Tournament.css';  
import { TiArrowRight } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Tournament = () => {
  
  const content = [
    {
      id: 1,
      title: "Learn to express your creativity",
      description:
        "Zoom in, geek out, and dive into the world of edits and effects.",
      left_image:
      "/img/tour/FL.png",
        // "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-5.png",
      right_img:
        // "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-2.png",
        "/img/tour/Pr.png",
    },
    {
      id: 2,
      title: "Learn to express your creativity",
      description:
        "Zoom in, geek out, and dive into the world of edits and effects.",
      left_image:
        // "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-3.png",
        "/img/tour/PS.png",
      right_img:
        // "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-1.png",
        "/img/tour/Ai.png",
    },
    {
      id: 3,
      title: "Learn to express your creativity",
      description:
        "Zoom in, geek out, and dive into the world of edits and effects.",
      left_image:
        // "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-4.png",
        "/img/tour/FL.png",
      right_img:
        // "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-6.png",
        "/img/tour/Pr.png",
    },
  ];

 

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 3000);  
 
    return () => clearInterval(intervalId);  
  }, []);

  const { title, description, left_image, right_img } = content[currentIndex];

  return (
    <>
    <div className="hero-cta-inner mx-5">
      <div className="container th-container2">
        
        <div className={`hero-img1 z-index-common slideinleft  `}  >
            <img
              decoding="async"
              src={left_image}
              alt="Left Image"
              className="slider-image"
            //   height={300}
            />
          </div>

        <div className="title-area mb-0 ">
          <h2 className="sec-title  custom-anim-top wow">
            {title}
          </h2>
          <p className="mt-30 mb-35 desc custom-anim-top wow">
            {description}
          </p>
          <div className="btn-group  my-2 custom-anim-top wow">
            <Link to="/contact-us" >
              {/* <span className="btn-border">
                JOIN NOW <i className="fa-solid fa-arrow-right ms-2"></i>
              </span> */}
              <div className='explore-button2'>
                        <span className='text-uppercase'>Explore more</span><span><TiArrowRight size={25} /></span>
                      </div>
            </Link>
          </div>
        </div>

        <div className="hero-img2 z-index-common slideinright">
            <img
              decoding="async"
              src={right_img}
              alt="Right Image"
              className="slider-image"
            //   height={300}
            />
          </div>

      </div>
        <div className="d-flex justify-content-center gap-3 slider-pagination mb-3">
          {content.map((_, index) => (
            <>
            <span
             key={index}
             className={`  ${
               currentIndex === index ? '   new_circle' : ''}`}
            >

            <span
              key={index}
              className={`swiper-pagination-bullet `}
              aria-label={`Go to Slide ${index + 1}`}
              tabindex="0"
              onClick={() => setCurrentIndex(index)}
            ></span>
            </span>
            </>
          ))}
        </div>
     
    </div>
    
    </>
    
  );
};

export default Tournament;




