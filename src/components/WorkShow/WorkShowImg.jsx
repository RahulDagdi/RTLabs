import React, { useState } from "react";
import "./WorkShow.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { useRef } from "react";

const WorkShow = () => {
  // const workList = [
  //   {
  //     id: 1,
  //     img: "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/1-1.png",
  //   },
  //   {
  //     id: 2,
  //     img: "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/1-2.png",
  //   },
  //   {
  //     id: 3,
  //     img: "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/1-3.png",
  //   },
  // ];
  const workList = [
    {
      id: 1,
      img: "/video/nature.mp4",
    },
    {
      id: 2,
      img: "/video/second_video.mp4",
    },
    {
      id: 3,
      img: "/video/third_video.mp4",
    },
  ];

  // Define responsive breakpoints for the carousel
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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className="container workshow-container">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite={true}
        arrows={true}
        centerMode={true}
        className="carousel-container py-5 "
      >
        {workList.map((item) => (
           
          <div key={item.id} className={`carousel-item ${ (item.length%2) === 0 ? "active" : ""} `}>
            
            <div className="th-video">
              <div>
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", maxWidth: "600px" }}
                  className="workshow-img"
                >
                  <source src={item?.img} type="video/mp4"   />
                  {/* Your browser does not support the video tag. */}
                </video>

                {/* <button 
                onClick={toggleMute} 
                style={{ marginTop: "10px" }}>
                  {isMuted ? "Unmute" : "Mute"}
                </button> */}
              </div>
              {/* <img src={item.img} alt={`work-${item.id}`} className="workshow-img"  /> */}
              <a href={item.img} target="_blank" className="play-btn popup-image style3">
                {/* <i className="fa-solid fa-arrow-up-right"></i> */}
                {/* <GoArrowUpRight className='arrow' /> */}
                <FiArrowUpRight className="arrow" />
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WorkShow;
