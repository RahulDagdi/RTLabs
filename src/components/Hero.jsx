
import React, { useState } from 'react';
import "./Hero.css";
import { TiArrowRight } from "react-icons/ti";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from 'emailjs-com'; // correct import
import ShowToast from '../utils/ShowToast';
import { Link } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Hero = () => {
  ShowToast
  const [showModal, setShowModal] = useState(false);
  const [messageFlag , setmessageFlag]=useState(false);
   const [formData, setFormData]=useState({
  
      name:"",
      email:"",
    phone:"",
    purpose:"",
    measage:""
  
    })
  
    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
   
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
          .matches(/^[0-9]{10}$/, "Phone number must be numeric 10 digits"),
    
        purpose: Yup.string().required("Course is required"),
        measage: Yup.string()
          .required("Message is required")
          .min(10, "Message must be at least 10 characters")
          .max(1000, "Message cannot exceed 1000 characters"),
      });
    
    // const handleSubmit = () => {
    //   console.log(formData);
    
    //   const serviceId = "service_qw05i9k";
    //   const templateId = "template_ty2e76d";
    //   const publicKey = "xOrqs2ddthUubfGwQ";
    
    //   const template_params = {
    //     name: formData?.name,
    //     email: formData?.email,
    //     phone: formData?.phone,
    //     purpose: formData?.purpose,
    //     message: formData?.measage, // Make sure this is not 'measage'
    //   };
    
    //   emailjs.send(serviceId, templateId, template_params, publicKey)
    //     .then((response) => {
    //       // console.log("Email sent successfully", response);
    //       // ShowToast(response)
    //       if(response?.text?.toLowerCase()==="ok"){
    //         ShowToast("Email sent Successfully!");
    //         // setFormData({})
    //         setmessageFlag(true)
    //       }
          
    //     })
    //     .catch((error) => {
    //       // console.log("Error in sending email", error);
    //       ShowToast("Failed to send email.");
    //     });
    // };
    
 const handleSubmit = (values) => {
    // console.log(formData);
    // console.log(values)

    const serviceId = "service_qw05i9k";
    const templateId = "template_ty2e76d";
    const publicKey = "xOrqs2ddthUubfGwQ";

    const template_params = {
      // name: formData?.name,
      // email: formData?.email,
      // phone: formData?.phone,
      // purpose: formData?.purpose,
      // message: formData?.measage, 

      name: values?.name,
      email: values?.email,
      phone: values?.phone,
      purpose: values?.purpose,
      message: values?.measage,  
    };

    emailjs
      .send(serviceId, templateId, template_params, publicKey)
      .then((response) => {
        // console.log("Email sent successfully", response);
        // ShowToast(response)
        if (response?.text?.toLowerCase() === "ok") {
          ShowToast("Email sent Successfully!");
          setmessageFlag(true);
        }
      })
      .catch((error) => {
        // console.log("Error in sending email", error);
        ShowToast("Failed to send email.");
      });
  };
  return (
   
  <div className="hero-container ">
  {/* Background Video */}
  <video
    id="background-video"
    autoPlay
    loop
    muted
    playsInline
  >
    {/* <source src="/video/background.mp4" type="video/mp4" /> */}
    <source src="/video/rtlabs.mp4" type="video/mp4" />
  </video>

  {/* Hero Content */}
  <div className="hero-content">
    {/* <div className="heading">World Class eSports & Gaming Site</div> */}
    <div className="title">Cut, Crop, Create: where your edits</div>
    <div className="sub-title">Get Extra</div>

    <div className="button-container">
      <Link to="/about">
      
      <div className="explore-button">
        <span className="text-uppercase">About Us</span>
        <span><TiArrowRight size={25} /></span>
      </div>
      </Link>
      <div className="browser-button" style={{cursor:"pointer"}} onClick={() => setShowModal(true)}>
        <span>Enroll Now</span>
        <span><TiArrowRight size={25} /></span>
      </div>
    </div>
  </div>

  {/* Modal */}
  {showModal && (
   
     

<Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={() => setShowModal(false)} // this makes header closeButton work
      >
        <Modal.Header closeButton >
          <Modal.Title  >
            <h2>Enroll Now</h2>
        <p>Start your journey in Graphic Design, Video Editing & Animation with industry-recognised expert courses
      !</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          
        <Row>
          <Col  xl={5} lg={5} sm={12}>
            <img src="/img/chat_us.png" height="100%" width="100%" className="Contact us modal_img"   />
          </Col>
          <Col  xl={7} lg={7} sm={12} >
            
              <Formik
                        initialValues={{
                          name: "",
                          email: "",
                          phone: "",
                          purpose: "",
                          measage: "",
                        }}
                        validationSchema={validationSchema}
                        
                        onSubmit={()=>console.log(hiiiiiiiiiiii)}
                      >
                        {({
                          // handleSubmit,
                          handleChange,
                          values,
                          errors,
                          touched,
                          handleBlur,
                          isValid,
                        }) => (
                          <Form noValidate onSubmit={()=>console.log(hiiiiiiiiiiii)}>
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
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.measage}
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                            </Row>
          
                            <Row>
                              <div className="explore-button">
                                <span className="text-uppercase" type="submit" onClick={()=>isValid?handleSubmit(values):""}>
                                  Send Message
                                </span>
                                <span>
                                  <TiArrowRight size={25} />
                                </span>
                              </div>
                            </Row>
                          </Form>
                        )}
                      </Formik>
         
          </Col>
        </Row>
        </Modal.Body>
        
      </Modal>
    

  )}
</div>

  );
};

export default Hero;
