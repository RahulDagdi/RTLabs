
// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import "./GraphicsLogo.css";

// // // const logos = [
// // //   "/img/graphics-design-course/illustrator Tools.png",
// // //   "/img/graphics-design-course/Photoshop Tools.png",
// // //   "/img/graphics-design-course/Premier pro Tools.png",
// // //   "/img/graphics-design-course/After effect Tools.png",
// // //   "/img/graphics-design-course/Canva Tools.png",
// // //   "/img/graphics-design-course/Coraldraw Tools.png",
// // //   "/img/graphics-design-course/Figma Tools.png",
// // //   "/img/graphics-design-course/illustrator Tools.png",
// // //   "/img/graphics-design-course/Photoshop Tools.png",
// // //   "/img/graphics-design-course/Premier pro Tools.png",
// // //   "/img/graphics-design-course/After effect Tools.png",
// // //   "/img/graphics-design-course/Canva Tools.png",
// // //   "/img/graphics-design-course/Coraldraw Tools.png",
// // //   "/img/graphics-design-course/Figma Tools.png",
// // // ];
// // const logos = [
 
// //   "/img/graphics-design-course/placement-logo/4-fox-business-logo.png",
// //   "/img/graphics-design-course/placement-logo/alvion-technologies-logo.png",
// //   "/img/graphics-design-course/placement-logo/angle-events-logo.png",
// //   "/img/graphics-design-course/placement-logo/coherent-Lab-logo.png",
// //   "/img/graphics-design-course/placement-logo/ekam-yoga-logo.png",
// //   "/img/graphics-design-course/placement-logo/evardham-education-logo.png",
// //   "/img/graphics-design-course/placement-logo/gedu-connect-logo.png",
// //   "/img/graphics-design-course/placement-logo/md-corporation-logo.png",
// //   "/img/graphics-design-course/placement-logo/nlet-solution-logo.png",
// //   "/img/graphics-design-course/placement-logo/parth-publishers-logo.png",
// //   "/img/graphics-design-course/placement-logo/podup-jaipur-logo.png",
// //   "/img/graphics-design-course/placement-logo/ssenterpreneurs-logo.png",
// //   "/img/graphics-design-course/placement-logo/techno-derivation-pvt-limited-logo.png",
// //   "/img/graphics-design-course/placement-logo/viawork-business-solution-logo.png",
// //   "/img/graphics-design-course/placement-logo/zuvelio-jewels-education-logo.png"
// // ];
// // const GraphicsLogo = () => {
// //   return (
// //     <section className="gl-section">
// //       {/* Ambient glows matching the theme */}
// //       <div className="gl-ambient gl-ambient--1" />
// //       <div className="gl-ambient gl-ambient--2" />

// //       <div className="gl-container">
// //         <div className="gl-header">
// //           <h2 className="gl-title">Placement Companies Logo</h2>
// //           <p className="gl-subtitle">
// //             Our students are placed at top creative agencies and tech companies
// //             worldwide
// //           </p>
// //         </div>

// //         <div className="gl-slider-wrapper">
// //           <Swiper
// //             className="gl-swiper"
// //             modules={[Autoplay]}
// //             spaceBetween={20}
// //             loop={true}
// //             autoplay={{
// //               delay: 2000,
// //               disableOnInteraction: false,
// //               pauseOnMouseEnter: true,
// //             }}
// //             speed={800}
// //             breakpoints={{
// //               0: {
// //                 slidesPerView: 2,
// //                 spaceBetween: 15,
// //               },
// //               480: {
// //                 slidesPerView: 2,
// //                 spaceBetween: 18,
// //               },
// //               640: {
// //                 slidesPerView: 3,
// //                 spaceBetween: 20,
// //               },
// //               768: {
// //                 slidesPerView: 4,
// //                 spaceBetween: 22,
// //               },
// //               1024: {
// //                 slidesPerView: 5,
// //                 spaceBetween: 25,
// //               },
// //               1280: {
// //                 slidesPerView: 7,
// //                 spaceBetween: 28,
// //               },
// //               1440: {
// //                 slidesPerView: 8,
// //                 spaceBetween: 30,
// //               },
// //               1600: {
// //                 slidesPerView: 9,
// //                 spaceBetween: 32,
// //               },
// //             }}
// //           >
// //             {logos.map((logo, index) => (
// //               <SwiperSlide key={index}>
// //                 <div className="gl-client-card">
// //                   <div className="gl-card-inner">
// //                     <img
// //                       src={logo}
// //                       alt={`Partner company logo ${index + 1}`}
// //                       className="gl-client-logo"
// //                       loading="lazy"
// //                     />
// //                     <div className="gl-card-overlay">
// //                       <span className="gl-card-icon">✨</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default GraphicsLogo;


// // GraphicsLogo.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./GraphicsLogo.css";

const logos = [
  "/img/graphics-design-course/placement-logo/4-fox-business-logo.png",
  "/img/graphics-design-course/placement-logo/alvion-technologies-logo.png",
  "/img/graphics-design-course/placement-logo/angle-events-logo.png",
  "/img/graphics-design-course/placement-logo/coherent-Lab-logo.png",
  "/img/graphics-design-course/placement-logo/ekam-yoga-logo.png",
  "/img/graphics-design-course/placement-logo/evardham-education-logo.png",
  "/img/graphics-design-course/placement-logo/gedu-connect-logo.png",
  "/img/graphics-design-course/placement-logo/md-corporation-logo.png",
  "/img/graphics-design-course/placement-logo/nlet-solution-logo.png",
  "/img/graphics-design-course/placement-logo/parth-publishers-logo.png",
  "/img/graphics-design-course/placement-logo/podup-jaipur-logo.png",
  "/img/graphics-design-course/placement-logo/ssenterpreneurs-logo.png",
  "/img/graphics-design-course/placement-logo/techno-derivation-pvt-limited-logo.png",
  "/img/graphics-design-course/placement-logo/viawork-business-solution-logo.png",
  "/img/graphics-design-course/placement-logo/zuvelio-jewels-education-logo.png"
];

const GraphicsLogo = () => {
  return (
    <section className="gl-section">
      <div className="gl-ambient gl-ambient--1" />
      <div className="gl-ambient gl-ambient--2" />

      <div className="gl-container">
        <div className="gl-header">
          <h2 className="gl-title">Placement Companies Logo</h2>
          <p className="gl-subtitle">
            Our students are placed at top creative agencies and tech companies
            worldwide
          </p>
        </div>

        <div className="gl-slider-wrapper">
          <Swiper
            className="gl-swiper"
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              480: { slidesPerView: 2, spaceBetween: 18 },
              768: { slidesPerView: 3, spaceBetween: 22 },
              1024: { slidesPerView: 4, spaceBetween: 25 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="logo-card">
                  <div className="logo-card__inner">
                    <img
                      src={logo}
                      alt={`Company logo ${index + 1}`}
                      className="logo-card__img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GraphicsLogo;