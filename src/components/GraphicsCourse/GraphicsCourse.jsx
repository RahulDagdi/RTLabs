import React from "react";
import "./GraphicsCourse.css";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import EnrollNowModal from "../EnrollNowModal/EnrollNowModal";
import ContactUsButton from "../ContactUsButton/ContactUsButton";

/**
 * GraphicsCourse Hero
 *
 * IMAGE use karna ho to:   useVideo={false}
 * VIDEO use karna ho to:   useVideo={true}
 *
 * imageSrc  → apni image ka path
 * videoSrc  → apni video ka path
 */
const GraphicsCourse = ({
  useVideo = true,
  imageSrc = "/img/graphics-design-course/RTLabs homepage banner.png",
  videoSrc = "/video/rtlabs.mp4",
}) => {
  return (
    <div className="graphics-course">
      <div className="elementor-widget-container">
        <div
          className="th-hero-wrapper hero-2"
          id="hero"
          style={
            !useVideo && !imageSrc
              ? {
                  backgroundImage:
                    'url("https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/hero-bg2-1.png")',
                }
              : undefined
          }
        >
          {/* ── BACKGROUND VIDEO ── */}
          {useVideo && (
            <video
              id="background-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}

          {/* ── DARK OVERLAY ── */}
          <div className="hero-overlay" />

          <div className="container-fluid mid-image">
            <div className="hero-style2">
              <div className="hero-title-thumb">
                {/* ── BACKGROUND IMAGE (video nahi to image show hoga) ── */}
                {!useVideo && imageSrc && (
                  <div className="character">
                    <img decoding="async" src={imageSrc} alt="Hero Banner" />
                  </div>
                )}

                {/* ── CENTERED CONTENT ── */}
                <div className="hero-content">
                  <div
                    className="title-img title-img-2 custom-anim-top wow"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.5s"
                  >
                    <h1 className="title-main">
                      Graphic Design Course in Jaipur with 100% Placement
                      Support
                    </h1>
                  </div>

                  <div
                    className="btn-group custom-anim-top wow gap-3"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.7s"
                  >
                    <ContactUsButton />
                    <EnrollNowModal />
                  </div>
                </div>
                {/* ── END CENTERED CONTENT ── */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsCourse;
