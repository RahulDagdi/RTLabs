import React, { useState, useRef } from "react";
import "./WorkShow.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiArrowUpRight } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const WorkShow = () => {
  const workList = [
    { id: 1, img: "/video/nature.mp4" },
    { id: 2, img: "/video/second_video.mp4" },
    { id: 3, img: "/video/third_video.mp4" },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const [modalVideo, setModalVideo] = useState(null);

  return (
    <div className="container workshow-container">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite={true}
        arrows={true}
        centerMode={true}
        className="carousel-container py-5"
      >
        {workList.map((item) => (
          <div key={item.id} className={`carousel-item ${item?.id===2?'active':""}` }>
            <div className="th-video">
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", maxWidth: "600px" }}
                className="workshow-img"
              >
                <source src={item.img} type="video/mp4" />
              </video>

              <a
                className="play-btn popup-image style3"
                onClick={() => setModalVideo(item.img)}
              >
                <FiArrowUpRight className="arrow" />
              </a>
            </div>
          </div>
        ))}
      </Carousel>

      {modalVideo && (
        <div className="video-modal-overlay" onClick={() => setModalVideo(null)} style={{cursor:"pointer"}}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalVideo(null)}>
              <IoCloseSharp size={24} />
            </button>
            <video controls autoPlay  loop
             playsInline  className="modal-video-player mb-5" 
            
            >
              <source src={modalVideo} type="video/mp4" />
             </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkShow;
