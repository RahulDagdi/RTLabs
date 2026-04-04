
// EnrollNowModal.jsx
import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from 'react-bootstrap/Modal';
import { TiArrowRight } from "react-icons/ti";
import emailjs from 'emailjs-com';
import { Formik } from "formik";
import * as Yup from "yup";
import ThankYou from '../ThnakYou/ThankYou'; // Adjust path as needed
import ".././Hero.css";

const EnrollNowModal = ({ buttonText = "Enroll Now", buttonClass = "browser-button" }) => {
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot exceed 50 characters")
      .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
    
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    
    purpose: Yup.string().required("Please select a course"),
    measage: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters")
      .max(1000, "Message cannot exceed 1000 characters"),
  });

  // Custom Toast Component
  const showToast = (message, type = 'success') => {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container-custom');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container-custom';
      document.body.appendChild(toastContainer);
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-icon">${type === 'success' ? '✓' : '✗'}</span>
        <span class="toast-message">${message}</span>
      </div>
    `;

    toastContainer.appendChild(toast);

    // Show toast with animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);

    const serviceId = "service_qw05i9k";
    const templateId = "template_ty2e76d";
    const publicKey = "xOrqs2ddthUubfGwQ";

    const template_params = {
      name: values?.name,
      email: values?.email,
      phone: values?.phone,
      purpose: values?.purpose,
      message: values?.measage,
    };

    try {
      const response = await emailjs.send(serviceId, templateId, template_params, publicKey);
      
      if (response?.text?.toLowerCase() === "ok") {
        // Show success toast
        showToast("Email sent Successfully!", 'success');
        
        // Reset form
        resetForm();
        
        // Close modal
        setShowModal(false);
        
        // Show Thank You page after toast
        setTimeout(() => {
          setShowThankYou(true);
        }, 1500); // Show Thank You after 1.5 seconds
      }
    } catch (error) {
      console.error("Error sending email:", error);
      showToast("Failed to send email. Please try again.", 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // If Thank You page is shown
  if (showThankYou) {
    return <ThankYou />;
  }

  return (
    <>
      <div className={buttonClass} style={{cursor:"pointer"}} onClick={() => setShowModal(true)}>
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
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    purpose: "",
                    measage: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Control
                              type="text"
                              placeholder="Your Name"
                              name="name"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.name && !!errors.name}
                              className="contact_form"
                              disabled={isSubmitting}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.name}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Control
                              type="email"
                              placeholder="Email Address"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.email && !!errors.email}
                              className="contact_form"
                              disabled={isSubmitting}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Control
                              type="text"
                              placeholder="Phone Number"
                              name="phone"
                              value={values.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.phone && !!errors.phone}
                              className="contact_form"
                              disabled={isSubmitting}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.phone}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Select
                              name="purpose"
                              value={values.purpose}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.purpose && !!errors.purpose}
                              className="contact_form"
                              disabled={isSubmitting}
                            >
                              <option value="">Select a Course</option>
                              <option value="Graphic Design">Graphic Design</option>
                              <option value="Video Editing">Video Editing</option>
                              <option value="Animation">Animation</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              {errors.purpose}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Control
                              as="textarea"
                              rows={6}
                              placeholder="Write a message..."
                              name="measage"
                              value={values.measage}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.measage && !!errors.measage}
                              className="contact_form"
                              disabled={isSubmitting}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.measage}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <button 
                          type="submit" 
                          className="explore-button" 
                          style={{
                            border: 'none', 
                            width: '100%',
                            opacity: isSubmitting ? 0.7 : 1,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                          }}
                          disabled={isSubmitting}
                        >
                          <span className="text-uppercase">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </span>
                          <span><TiArrowRight size={25} /></span>
                        </button>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}

      {/* Add Toast CSS */}
      <style jsx>{`
        .toast-container-custom {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999;
        }

        .toast-notification {
          background: white;
          border-radius: 8px;
          padding: 12px 20px;
          margin-bottom: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transform: translateX(400px);
          transition: transform 0.3s ease;
          min-width: 300px;
        }

        .toast-notification.show {
          transform: translateX(0);
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .toast-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .toast-success .toast-icon {
          background: #4caf50;
          color: white;
        }

        .toast-error .toast-icon {
          background: #f44336;
          color: white;
        }

        .toast-message {
          color: #333;
          font-size: 14px;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default EnrollNowModal;