//  import React, { useState } from 'react';
// import "./Hero.css";
// import { TiArrowRight } from "react-icons/ti";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { Link } from 'react-router-dom';

// const HeroNew = () => {
//   const [showModal, setShowModal] = useState(false); // ✅ FIXED

//   return (
//     <div className="hero-container ">
//       <video id="background-video" autoPlay loop muted playsInline>
//         <source src="/video/rtlabs.mp4" type="video/mp4" />
//       </video>

//       <div className="hero-content">
//         <div className="title">Cut, Crop, Create: where your edits</div>
//         <div className="sub-title">Get Extra</div>

//         <div className="button-container">
//           <Link to="/about">
//             <div className="explore-button">
//               <span className="text-uppercase">About Us</span>
//               <span><TiArrowRight size={25} /></span>
//             </div>
//           </Link>
//           <div className="browser-button" style={{cursor:"pointer"}} onClick={() => setShowModal(true)}>
//             <span>Enroll Now</span>
//             <span><TiArrowRight size={25} /></span>
//           </div>
//         </div>
//       </div>

//       {showModal && (
//         <Modal size="lg" centered show={showModal} onHide={() => setShowModal(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>
//               <h2>Enroll Now</h2>
//               <p>Start your journey in Graphic Design, Video Editing & Animation with industry-recognised expert courses!</p>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Row>
//               <Col xl={6} lg={6} sm={12}>
//                 <img src="/img/chat_us.png" height="85%" width="85%" className="contact-us modal_img" />
//               </Col>
//               <Col xl={6} lg={6} sm={12}>
//                 <Form>
//                   <Row>
//                     <Col>
//                       <Form.Group className="mb-3">
//                         <Form.Control type="text" placeholder="Your Name" className="contact_form" name="name" />
//                       </Form.Group>
//                     </Col>
//                     <Col>
//                       <Form.Group className="mb-3">
//                         <Form.Control type="email" placeholder="Email Address" className="contact_form" name="email" />
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col>
//                       <Form.Group className="mb-3">
//                         <Form.Control type="text" placeholder="Phone Number" className="contact_form" name="phone" />
//                       </Form.Group>
//                     </Col>
//                     <Col>
//                       <Form.Group className="mb-3">
//                         <Form.Select className="contact_form" name="purpose">
//                           <option>Course</option>
//                           <option value="Graphic Design">Graphic Design</option>
//                           <option value="Video Editing">Video Editing</option>
//                           <option value="Animation">Animation</option>
//                         </Form.Select>
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col>
//                       <Form.Group className="mb-3">
//                         <Form.Control as="textarea" rows={6} className="contact_form" placeholder="Write a message..." name="message" />
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Row>
//                     <div className="explore-button">
//                       <span className="text-uppercase" type="submit">Send Message</span>
//                       <span><TiArrowRight size={25} /></span>
//                     </div>
//                   </Row>
//                 </Form>
//               </Col>
//             </Row>
//           </Modal.Body>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default HeroNew;


import React from 'react';
import "./HeroNew.css";
import EnrollNowModal from './EnrollNowModal/EnrollNowModal';
import AboutUsButton from './AboutUsButton/AboutUsButton';

const HeroNew = () => {
  return (
    <div className="hero-container ">
      <video id="background-video" autoPlay loop muted playsInline>
        <source src="/video/rtlabs.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <div className="title">Cut, Crop, Create: where your edits</div>
        <div className="sub-title">Get Extra</div>

        <div className="button-container">
          <AboutUsButton />
          <EnrollNowModal />
        </div>
      </div>
    </div>
  );
};

export default HeroNew;