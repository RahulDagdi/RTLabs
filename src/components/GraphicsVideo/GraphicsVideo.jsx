// import React, { useState } from 'react';
// import './GraphicsVideo.css';
// import Modal from 'react-bootstrap/Modal';
// import { IoCloseSharp } from "react-icons/io5";

// const GraphicsVideo = () => {
//     const [graphicsModal , setGraphicsModal]=useState(false);

//   return (
//     <div className="graphics-video-container">
//       <div className="video-banner">
//         <div className="video-overlay">
//           <a
//             // href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
//             className="play-button"
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={()=>setGraphicsModal(
//                 true
//             )}
//             style={{cursor:"pointer"}}
//           >
//             <span>&#9658;</span>
//           </a>
//         </div>
//       </div>

//        {graphicsModal && (

//         <Modal size="lg"
//         show={graphicsModal} onHide={()=>setGraphicsModal(false)}
//         className="video-modal-overlay"
//         >

//            <div className=""
//         //   onClick={(e) => e.stopPropagation()}
//           >
//              <button className="close-btn" onClick={() => setGraphicsModal(null)}>
//                <IoCloseSharp size={24} />
//              </button>
//              <div className="modal-video-player mb-5">
//                <iframe
//                  width="100%"
//                   height="100%"
//                 // src={`https://www.youtube.com/watch?v=_sI_Ps7JSEk`}
//                 src="https://www.youtube.com/embed/R1r9nLYcqBU?si=EoUFmkZKsFHVR9Lv"
//                   title="Modal Video"
//                  frameBorder="0"
//                  allow="autoplay; encrypted-media"
//                  allowFullScreen
//                ></iframe>
//              </div>
//            </div>
//         {/* </Modal.Body> */}

//       </Modal>
//       )}
// <div className='cta-wrapper'>

//       <div className="cta-card">
//         <h2 className="cta-title">
//           Join Our Best ESports & Gaming Community <span className="highlight">!</span>
//         </h2>
//         <p className="cta-text">
//           Dive into the world of eSports! Our platform connects gamers worldwide, offering community, competition, and collaboration. Join us and level up your game.
//         </p>
//         <div className="cta-buttons">
//           <a href="#" className="btn primary-btn">Join Community</a>
//           <a href="#" className="btn outline-btn">Create Tournament</a>
//         </div>
//       </div>
// </div>
//     </div>
//   );
// };

// export default GraphicsVideo;

// import React, { useState } from "react";
// import "./GraphicsVideo.css";
// import Modal from "react-bootstrap/Modal";
// import { IoCloseSharp } from "react-icons/io5";

// const GraphicsVideo = () => {
//   const [graphicsModal, setGraphicsModal] = useState(false);

//   return (
//     <div className="graphics-video-container">
//       <div
//         className="video-banner"
//         style={{
//           backgroundImage:
//             'url("/img/graphics-design-course/video banner.jpg")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="video-overlay">
//           <a
//             // href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
//             className="play-button"
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={() => setGraphicsModal(true)}
//             style={{ cursor: "pointer" }}
//           >
//             <span>&#9658;</span>
//           </a>
//         </div>
//       </div>

//       {graphicsModal && (
//         <Modal
//           size="lg"
//           show={graphicsModal}
//           onHide={() => setGraphicsModal(false)}
//           className="video-modal-overlay"
//         >
//           <div
//             className=""
//             //   onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="close-btn"
//               onClick={() => setGraphicsModal(false)}
//             >
//               <IoCloseSharp size={24} />
//             </button>

//             <div className="modal-video-player mb-5">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 // src={`https://www.youtube.com/watch?v=_sI_Ps7JSEk`}
//                 src="https://www.youtube.com/embed/R1r9nLYcqBU"
//                 // src="https://www.youtube.com/embed/R1r9nLYcqBU?si=EoUFmkZKsFHVR9Lv"
//                 // src="img/graphics-design-course/video banner.jpg"
//                 title="Modal Video"
//                 frameBorder="0"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </Modal>
//       )}

//       <div className="cta-wrapper">
//         <div className="cta-card">
//           <h2 className="cta-title">
//             Web & Graphic Design Classes in Jaipur{" "}
//             <span className="highlight">!</span>
//           </h2>
//           <p className="cta-text">
//             There are numerous industry-accredited tools that are utilised while
//             learning web and graphic design. However, gaining proficiency in all
//             of them isn't necessary Tools added to our web and graphic design
//             classes include
//           </p>

//           <div className="cta-buttons">
//             <a href="#" className="btn primary-btn">
//               Join Community
//             </a>
//             <a href="#" className="btn outline-btn">
//               Create Tournament
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GraphicsVideo;


import React, { useState } from "react";
import "./GraphicsVideo.css";
import Modal from 'react-bootstrap/Modal';
import { IoCloseSharp } from "react-icons/io5";

const GraphicsVideo = () => {
  const [graphicsModal, setGraphicsModal] = useState(false);

  return (
    <div className="graphics-video-container">
      <div
        className="video-banner"
        style={{
          backgroundImage:
            'url("/img/graphics-design-course/video banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="video-overlay">
          <button
            className="play-button"
            onClick={() => setGraphicsModal(true)}
          >
            <span>&#9658;</span>
          </button>
        </div>
      </div>

      <Modal
        size="lg"
        show={graphicsModal}
        onHide={() => setGraphicsModal(false)}
        className="video-modal-overlay"
        centered
      >
        <div className="modal-content-custom">
          <button className="close-btn" onClick={() => setGraphicsModal(false)}>
            <IoCloseSharp size={24} />
          </button>
          <div className="modal-video-player">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/R1r9nLYcqBU?autoplay=1&rel=0"
              title="Course Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal>

      <div className="cta-wrapper">
        <div className="cta-card">
          <h2 className="cta-title">
            Web & Graphic Design Classes in Jaipur{" "}
            <span className="highlight">!</span>
          </h2>
          <p className="cta-text">
            There are numerous industry-accredited tools that are utilised while
            learning web and graphic design. However, gaining proficiency in all
            of them isn't necessary Tools added to our web and graphic design
            classes include
          </p>

          <div className="cta-buttons">
            <a href="#" className="btn primary-btn">
              Join Community
            </a>
            <a href="#" className="btn outline-btn">
              Create Tournament
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsVideo;