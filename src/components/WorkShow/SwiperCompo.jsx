import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { FiArrowUpRight, FiPlay, FiX } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./swiper_new.css";

const SwiperCompo = () => {
  const workList = [
    {
      id: 1,
      video: "https://youtu.be/qvYosaHxNbs",
      title: "Creative Portfolio Showcase",
      category: "Motion Graphics",
    },
    {
      id: 2,
      video: "https://youtu.be/LinWJsangs4",
      title: "Brand Identity Design",
      category: "Branding",
    },
    {
      id: 3,
      video: "https://youtu.be/LinWJsangs4",
      title: "3D Animation Reel",
      category: "3D Animation",
    },
    {
      id: 4,
      video: "https://youtu.be/T6RJUzuVq4w",
      title: "UI/UX Case Study",
      category: "Web Design",
    },
    {
      id: 5,
      video: "https://youtu.be/YHcX_nuyQPc",
      title: "Digital Marketing Campaign",
      category: "Marketing",
    },
    {
      id: 6,
      video: "https://youtu.be/5UhnQ2h-5BY",
      title: "Product Launch Video",
      category: "Commercial",
    },
  ];

  const [modalVideo, setModalVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const extractYouTubeID = (url) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^?&\/\s]+)/,
    );
    return match ? match[1] : null;
  };

  // Duplicate videos for smooth infinite loop
  const duplicatedList = [...workList, ...workList, ...workList];

  useEffect(() => {
    // Auto reset active index when loop completes
    if (swiperInstance) {
      const handleSlideChange = () => {
        const realIndex = swiperInstance.realIndex;
        setActiveIndex(realIndex % workList.length);
      };

      swiperInstance.on("slideChange", handleSlideChange);
      return () => {
        swiperInstance.off("slideChange", handleSlideChange);
      };
    }
  }, [swiperInstance, workList.length]);

  return (
    <section className="swiper-showcase">
      {/* Ambient Glows */}
      <div className="showcase-ambient showcase-ambient--1" />
      <div className="showcase-ambient showcase-ambient--2" />

      <div className="showcase-container">
        {/* Header */}
        <div className="showcase-header">
          <div className="showcase-badge">
            <span>🎬</span>
            <span>Featured Work</span>
          </div>
          <h2 className="showcase-title">
            Creative <span className="showcase-highlight">Showcase</span>
          </h2>
          <p className="showcase-subtitle">
            Explore our latest creative projects and video presentations
          </p>
        </div>

        {/* Swiper */}
        <div className="showcase-swiper-wrapper">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation]}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            loopAdditionalSlides={3}
            spaceBetween={30}
            onSwiper={setSwiperInstance}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            navigation
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 35 },
            }}
            className="showcase-swiper"
          >
            {duplicatedList.map((item, index) => {
              const videoId = extractYouTubeID(item.video);
              const originalIndex = index % workList.length;
              const isActive =
                originalIndex === activeIndex &&
                index >= workList.length &&
                index < workList.length * 2;

              return (
                <SwiperSlide key={`${item.id}-${index}`}>
                  <div className={`showcase-card ${isActive ? "active" : ""}`}>
                    <div className="showcase-card-inner">
                      {/* Media */}
                      <div className="showcase-media">
                        {isActive ? (
                          <iframe
                            className="showcase-video"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}`}
                            title={item.title}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          />
                        ) : (
                          <div
                            className="showcase-thumbnail"
                            onClick={() => setModalVideo(videoId)}
                          >
                            <img
                              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                              alt={item.title}
                              className="showcase-img"
                            />
                            <div className="showcase-play">
                              <div className="showcase-play-btn">
                                <FiPlay />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Content Overlay */}
                        <div className="showcase-content">
                          <span className="showcase-category">
                            {item.category}
                          </span>
                          <h3 className="showcase-title-card">{item.title}</h3>
                          <div className="showcase-hover">
                            <span>Watch Now</span>
                            <FiArrowUpRight />
                          </div>
                        </div>

                        {/* Expand Button */}
                        {isActive && (
                          <button
                            className="showcase-expand"
                            onClick={() => setModalVideo(videoId)}
                          >
                            <FiArrowUpRight />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Progress Indicator */}
        <div className="showcase-progress">
          <div className="showcase-progress-bar">
            <div className="showcase-progress-fill"></div>
          </div>
          <div className="showcase-progress-numbers">
            <span>{activeIndex + 1}</span>
            <span>/</span>
            <span>{workList.length}</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        size="lg"
        show={modalVideo}
        onHide={() => setModalVideo(null)}
        className="showcase-modal"
        centered
      >
        <Modal.Body className="showcase-modal-body">
          <button
            className="showcase-modal-close"
            onClick={() => setModalVideo(null)}
          >
            <FiX size={24} />
          </button>
          <div className="showcase-modal-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1&rel=0`}
              title="Modal Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default SwiperCompo;
