// import React, { useEffect, useState } from "react";
// import "./Contact.css";
// import CountUp from "react-countup";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { TiArrowRight } from "react-icons/ti";
// // import emailjs from '@emailjs/browser';
// import emailjs from "emailjs-com"; // correct import
// import ShowToast from "../../utils/ShowToast";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const ContactNew = () => {

//   const ContactList = [
//     {
//       id: 1,
//       image: "/img/contact/contact-map-icon1.svg",
//       title: "ADDRESS :",
//       description:
//         "103/66, First Floor, Madhyam Marg, near Shree Amar Mishthan Bhandar, Ward Number 43, Sector 101, Mansarovar, Jaipur, Rajasthan 302020",
//     },
//     {
//       id: 2,
//       image: "/img/contact/contact-phone-icon1.svg",
//       title: "OFFICE NUMBER :",
//       description: "+91 9887448844",
//       number2_: "+91 7427827766",
//     },
//     {
//       id: 3,
//       image: "/img/contact/contact-envelope-icon1.svg",
//       title: "OFFICE EMAIL :",
//       description: "Info@rtlabs.in",
//     },
//   ];

//   useEffect(() => {
//     AOS.init({
//       duration: 2000, // animation duration in ms
//       once: true, // animation only happens once while scrolling down
//     });
//   }, []);

//   return (
//     <>

//       <Helmet>
//         <title>Contact RTLabs Jaipur | Design & Editing Courses</title>
//         <meta
//           key="description"
//           name="description"
//           content="Have questions? Contact RTlabs for any inquiries about courses, support, or anything else! We’re ready to help you succeed."
//         />
//         <meta key="author" name="author" content="RTLabs" />
//         <meta key="language" name="language" content="English" />
//         <meta key="revisit" name="revisit-after" content="7 days" />
//         <meta
//           key="og:title"
//           property="og:title"
//           content="Contact RTLabs Jaipur | Design & Editing Courses"
//         />
//         <meta
//           key="og:description"
//           property="og:description"
//           content="Have questions? Contact RTlabs for any inquiries about courses, support, or anything else! We’re ready to help you succeed."
//         />
//         <meta key="robots" name="robots" content="index, follow" />
//         <meta
//           key="og:image"
//           property="og:image"
//           content="https://rtlabs.in/img/about_home.png"
//         />
//         <meta
//           key="og:url"
//           property="og:url"
//           content="https://rtlabs.in/contact-us"
//         />
//         <link
//           key="canonical"
//           rel="canonical"
//           href="https://rtlabs.in/contact-us"
//         />
//       </Helmet>

//       <div className="m-5 contact_main">
//         <div
//           className="text-center"
//           style={{ marginTop: "150px", marginBottom: "70px" }}
//         >
//           {/* <div className="Contact_title">Get In Touch</div> */}
//           <div className="Contact_sub my-3">Get In Touch</div>
//         </div>

//         <div className="row my-5 px-3">
//           <div
//             className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12 my-3 p-3  "
//             style={{ background: "#1C1E2A", borderRadius: "20px" }}
//             data-aos="zoom-in"
//           >
//             <div className="mt-4 mb-5 text-center">
//               Connect with us now and learn to express your creativity through
//               art
//             </div>

//          <Form className="">
//               <Row>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Control
//                       type="text"
//                       placeholder="Your Name"
//                       className="contact_form"
//                       name="name"

//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Control
//                       type="email"
//                       placeholder="Email Address"
//                       className="contact_form"
//                       name="email"

//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Control
//                       type="text"
//                       placeholder="Phone Number"
//                       className="contact_form"
//                       name="phone"

//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Select
//                       aria-label="Default select example"
//                       className="contact_form"
//                       name="purpose"

//                     >
//                       <option>Course</option>
//                       <option value="Graphic Design">Graphic Design</option>
//                       <option value="Video Editing">Video Editing</option>
//                       <option value="Animation">Animation</option>
//                     </Form.Select>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col className="">
//                   <Form.Group
//                     className="mb-3"
//                     controlId="exampleForm.ControlTextarea1"
//                   >
//                     <Form.Control
//                       as="textarea"
//                       rows={6}
//                       className="contact_form"
//                       placeholder="Write a message..."
//                       name="measage"

//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="">
//                   <div
//                     className="explore-button"
//                    >
//                     <span className="text-uppercase" type="submit">
//                       Send Message
//                     </span>
//                     <span>
//                       <TiArrowRight size={25} />
//                     </span>
//                   </div>
//               </Row>
//             </Form>

//           </div>
//           <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12">
//             {ContactList.map((item) => (
//               <div key={item.id} className="d-flex justify-content-center">
//                 <div className="Contact_card my-3 d-flex ">
//                   <div>
//                     <img
//                       src={item.image}
//                       alt={item?.title}
//                       style={{ width: "50px", height: "auto" }}
//                     />
//                   </div>
//                   <div>
//                     <div className="Contact_name">{item.title}</div>
//                     <div className="Contact_desc">{item.description}</div>
//                     {item?.id === 2 && (
//                       <div className="Contact_desc">{item.number2_}</div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <Row data-aos="zoom-in">
//           <iframe
//             // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28476.143371588776!2d75.74450099954794!3d26.85528134513329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a3bfa52d07%3A0xbbe9e52f9ae6fd18!2sTilak%20Tower!5e0!3m2!1sen!2sin!4v1744344390198!5m2!1sen!2sin"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.550965446553!2d75.7678475!3d26.8510384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a3bf94e9ed%3A0x46ad11f4497c3203!2sRT%20Labs!5e1!3m2!1sen!2sin!4v1745322288958!5m2!1sen!2sin"
//             referrerpolicy="no-referrer-when-downgrade"
//             width="600"
//             height="450"
//             style={{ border: 0, objectFit: "cover" }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </Row>
//       </div>
//     </>
//   );
// };

// export default ContactNew;

import React, { useEffect, useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaRegClock,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone, MdSend } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { Formik } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ContactNew = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const ContactList = [
    {
      id: 1,
      title: "Visit Us",
      description:
        "103/66, First Floor, Madhyam Marg, near Shree Amar Mishthan Bhandar, Ward Number 43, Sector 101, Mansarovar, Jaipur, Rajasthan 302020",
      icon: <MdLocationOn />,
      color: "#38bdf8",
    },
    {
      id: 2,
      title: "Call Us",
      description: "+91 9887448844",
      number2_: "+91 7427827766",
      icon: <MdPhone />,
      color: "#84cc16",
    },
    {
      id: 3,
      title: "Email Us",
      description: "Info@rtlabs.in",
      icon: <MdEmail />,
      color: "#a855f7",
    },
  ];

  const socialLinks = [
    // { icon: <FaWhatsapp />, name: "WhatsApp", color: "#25D366", link: "https://wa.me/919887448844" },
    // { icon: <FaInstagram />, name: "Instagram", color: "#E4405F", link: "https://instagram.com" },
    // { icon: <FaFacebook />, name: "Facebook", color: "#1877F2", link: "https://facebook.com" },
    // { icon: <FaLinkedin />, name: "LinkedIn", color: "#0A66C2", link: "https://linkedin.com" },
    {
      icon: <FaWhatsapp />,
      color: "#25D366",
      link: "https://wa.me/919887448844",
    },
    { icon: <FaInstagram />, color: "#E4405F", link: "https://instagram.com" },
    { icon: <FaFacebook />, color: "#0154c2", link: "https://facebook.com" },
    { icon: <FaLinkedin />, color: "#0A66C2", link: "https://linkedin.com" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("✨ Message sent successfully! We'll contact you soon ✨");
    resetForm();
  };

  return (
    <>
     <Helmet>
           <title>Contact RTLabs Jaipur | Design & Editing Courses</title>
           <meta
             key="description"
             name="description"
             content="Have questions? Contact RTlabs for any inquiries about courses, support, or anything else! We’re ready to help you succeed."
           />
           <meta key="author" name="author" content="RTLabs" />
           <meta key="language" name="language" content="English" />
           <meta key="revisit" name="revisit-after" content="7 days" />
           <meta
             key="og:title"
             property="og:title"
             content="Contact RTLabs Jaipur | Design & Editing Courses"
           />
           <meta
             key="og:description"
             property="og:description"
             content="Have questions? Contact RTlabs for any inquiries about courses, support, or anything else! We’re ready to help you succeed."
           />
           <meta key="robots" name="robots" content="index, follow" />
           <meta
             key="og:image"
             property="og:image"
             content="https://rtlabs.in/img/about_home.png"
           />
           <meta
             key="og:url"
             property="og:url"
             content="https://rtlabs.in/contact-us"
           />
           <link
             key="canonical"
             rel="canonical"
             href="https://rtlabs.in/contact-us"
           />
         </Helmet>

      <section className="contact-page" ref={ref}>
        {/* Animated Background */}
        <div className="contact-bg">
          <div className="contact-bg-circle contact-bg-circle-1"></div>
          <div className="contact-bg-circle contact-bg-circle-2"></div>
          <div className="contact-bg-circle contact-bg-circle-3"></div>
          <div className="contact-bg-circle contact-bg-circle-4"></div>
        </div>

        <div className="contact-container">
          {/* Hero Section */}
          <div className="contact-hero" data-aos="fade-up">
         

            <div className="about-header">
              <h1 className="about-title">
                We'd Love to{" "}
                <span className="about-highlight">Hear From You</span>
              </h1>
              <p className="about-hero-subtitle">
                Have questions? We're here to help. Send us a message and we'll
                respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="contact-cards-section">
            <div className="contact-cards-grid">
              {ContactList.map((item, index) => (
                <div
                  key={item.id}
                  className="contact-card"
                  data-aos="flip-up"
                  data-aos-delay={index * 150}
                >
                  <div
                    className="contact-card-icon"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="contact-card-title">{item.title}</h3>
                  <p className="contact-card-desc">{item.description}</p>
                  {item?.id === 2 && (
                    <p className="contact-card-desc contact-card-desc-second">
                      {item.number2_}
                    </p>
                  )}
                  <div className="contact-card-hover-effect"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Form Section */}
          <div className="contact-main-section">
            <div className="contact-main-row">
              {/* Left Side - Form */}
              <div
                className="contact-main-col contact-main-col--left"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="contact-form-container">
                  <div className="contact-form-header">
                    <div className="contact-form-badge">
                      <span>✉️</span>
                      <span>Send Message</span>
                    </div>
                    <h2>
                      Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p>
                      Fill out the form below and our team will get back to you
                      shortly
                    </p>
                  </div>

                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      phone: "",
                      message: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({
                      values,
                      handleChange,
                      handleSubmit,
                      errors,
                      touched,
                    }) => (
                      <form
                        onSubmit={handleSubmit}
                        className="contact-form-design"
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={values.name}
                            onChange={handleChange}
                            className={
                              errors.name && touched.name ? "error" : ""
                            }
                          />
                          {errors.name && touched.name && (
                            <div className="field-error">{errors.name}</div>
                          )}
                        </div>

                        <div className="form-row-2">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              value={values.email}
                              onChange={handleChange}
                              className={
                                errors.email && touched.email ? "error" : ""
                              }
                            />
                            {errors.email && touched.email && (
                              <div className="field-error">{errors.email}</div>
                            )}
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone Number"
                              value={values.phone}
                              onChange={handleChange}
                              className={
                                errors.phone && touched.phone ? "error" : ""
                              }
                            />
                            {errors.phone && touched.phone && (
                              <div className="field-error">{errors.phone}</div>
                            )}
                          </div>
                        </div>

                        <div className="form-group">
                          <textarea
                            rows="5"
                            name="message"
                            placeholder="Write your message..."
                            value={values.message}
                            onChange={handleChange}
                            className={
                              errors.message && touched.message ? "error" : ""
                            }
                          />
                          {errors.message && touched.message && (
                            <div className="field-error">{errors.message}</div>
                          )}
                        </div>

                        <button type="submit" className="submit-btn">
                          <span>Send Message</span>
                          <FaPaperPlane className="submit-icon" />
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>

              {/* Right Side - Map & Social */}
              <div
                className="contact-main-col contact-main-col--right"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                {/* Map */}
                <div className="contact-map-card">
                  <div className="map-header">
                    <div className="map-pulse"></div>
                    <span>📍 Our Location</span>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.550965446553!2d75.7678475!3d26.8510384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a3bf94e9ed%3A0x46ad11f4497c3203!2sRT%20Labs!5e1!3m2!1sen!2sin!4v1745322288958!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0, borderRadius: "16px" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="RT Labs Location"
                  ></iframe>
                </div>

                {/* Social Links */}
                <div className="contact-social-card">
                  <h4>Connect With Us</h4>
                  <div className="social-icons">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        to={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                      >
                        <span className="social-icon-svg">{social.icon}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Working Hours */}
                <div className="contact-hours-card">
                  <div className="hours-icon">
                    <FaRegClock />
                  </div>
                  <div className="hours-info">
                    <h4>Working Hours</h4>
                    <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactNew;
