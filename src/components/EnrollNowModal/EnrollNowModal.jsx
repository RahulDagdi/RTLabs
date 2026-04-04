import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from 'react-bootstrap/Modal';
import { TiArrowRight } from "react-icons/ti";
import ".././Hero.css";

const EnrollNowModal = ({ buttonText = "Enroll Now", buttonClass = "browser-button" }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className={buttonClass} 
        style={{cursor:"pointer"}} 
        onClick={() => setShowModal(true)}
      >
        <span>{buttonText}</span>
        <span><TiArrowRight size={25} /></span>
      </div>

      {showModal && (
        <Modal size="lg" centered show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h2>Enroll Now</h2>
              <p>Start your journey in Graphic Design, Video Editing & Animation with industry-recognised expert courses!</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xl={6} lg={6} sm={12}>
                <img src="/img/chat_us.png" height="85%" width="85%" className="contact-us modal_img" alt="Contact Us" />
              </Col>
              <Col xl={6} lg={6} sm={12}>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Your Name" className="contact_form" name="name" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email Address" className="contact_form" name="email" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Phone Number" className="contact_form" name="phone" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Select className="contact_form" name="purpose">
                          <option>Course</option>
                          <option value="Graphic Design">Graphic Design</option>
                          <option value="Video Editing">Video Editing</option>
                          <option value="Animation">Animation</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={6} className="contact_form" placeholder="Write a message..." name="message" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <div className="explore-button">
                      <span className="text-uppercase" type="submit">Send Message</span>
                      <span><TiArrowRight size={25} /></span>
                    </div>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default EnrollNowModal;
