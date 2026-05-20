import React, { useEffect, useState } from "react";
import "./Contact.css";
import CountUp from "react-countup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiArrowRight } from "react-icons/ti";
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com"; // correct import
import ShowToast from "../../utils/ShowToast";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Formik } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const rhElements = document.querySelectorAll('[data-rh="true"]');
  //     rhElements.forEach((el) => el.removeAttribute("data-rh"));
  //   }, 100); // Delay helps wait for Helmet to render

  //   return () => clearTimeout(timer);
  // }, []);
  const [messageFlag, setmessageFlag] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    measage: "",
  });

  //   const validationSchema = Yup.object().shape({
  //   name: Yup.string().required("Name is required"),
  //   email: Yup.string().email("Invalid email").required("Email is required"),
  //   phone: Yup.string().required("Phone number is required"),
  //   purpose: Yup.string().required("Purpose is required"),
  //   measage: Yup.string().required("Message is required"),
  // });

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (values) => {
    // console.log(formData);
    // console.log(values)

    // const serviceId = "service_qw05i9k";
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

  const ContactList = [
    {
      id: 1,
      image: "/img/contact/contact-map-icon1.svg",
      title: "ADDRESS :",
      description:
        "103/66, First Floor, Madhyam Marg, near Shree Amar Mishthan Bhandar, Ward Number 43, Sector 101, Mansarovar, Jaipur, Rajasthan 302020",
    },
    {
      id: 2,
      image: "/img/contact/contact-phone-icon1.svg",
      title: "OFFICE NUMBER :",
      description: "+91 9887448844",
      number2_: "+91 7427827766",
    },
    {
      id: 3,
      image: "/img/contact/contact-envelope-icon1.svg",
      title: "OFFICE EMAIL :",
      description: "Info@rtlabs.in",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in ms
      once: true, // animation only happens once while scrolling down
    });
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Contact RTLabs Jaipur | Design & Editing Courses</title>
        <meta
          name="description"
          content="Have questions? Contact RTlabs for any inquiries about courses, support, or anything else! We’re ready to help you succeed."
        />
        <meta name="Author" content="RTLabs" />
        <meta name="Language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta
          property="og:title"
          content="Contact RTLabs Jaipur | Design & Editing Courses"
        />
        <meta
          property="og:description"
          content="Have questions? Contact RTlabs for any inquiries about courses, support, or anything else! We’re ready to help you succeed."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image"
          content="https://rtlabs.in/img/about_home.png"
        />
        <meta property="og:url" content="https://rtlabs.in/contact_us" />
        <link rel="canonical" href="https://rtlabs.in/contact_us" />
      </Helmet> */}

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

      <div className="m-5 contact_main">
        <div
          className="text-center"
          style={{ marginTop: "150px", marginBottom: "70px" }}
        >
          {/* <div className="Contact_title">Get In Touch</div> */}
          <div className="Contact_sub my-3">Get In Touch</div>
        </div>

        <div className="row my-5 px-3">
          <div
            className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12 my-3 p-3  "
            style={{ background: "#1C1E2A", borderRadius: "20px" }}
            data-aos="zoom-in"
          >
            <div className="mt-4 mb-5 text-center">
              Connect with us now and learn to express your creativity through
              art
            </div>

           

            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                purpose: "",
                measage: "",
              }}
              validationSchema={validationSchema}
              // onSubmit={(values, { setSubmitting, resetForm }) => {
              //   console.log("Form Submitted", values);
              //   setSubmitting(false);
              //   resetForm();
              // }}
              
               
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
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12">
            {ContactList.map((item) => (
              <div key={item.id} className="d-flex justify-content-center">
                <div className="Contact_card my-3 d-flex ">
                  <div>
                    <img
                      src={item.image}
                      alt={item?.title}
                      style={{ width: "50px", height: "auto" }}
                    />
                  </div>
                  <div>
                    <div className="Contact_name">{item.title}</div>
                    <div className="Contact_desc">{item.description}</div>
                    {item?.id === 2 && (
                      <div className="Contact_desc">{item.number2_}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Row data-aos="zoom-in">
          <iframe
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28476.143371588776!2d75.74450099954794!3d26.85528134513329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a3bfa52d07%3A0xbbe9e52f9ae6fd18!2sTilak%20Tower!5e0!3m2!1sen!2sin!4v1744344390198!5m2!1sen!2sin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.550965446553!2d75.7678475!3d26.8510384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a3bf94e9ed%3A0x46ad11f4497c3203!2sRT%20Labs!5e1!3m2!1sen!2sin!4v1745322288958!5m2!1sen!2sin"
            referrerpolicy="no-referrer-when-downgrade"
            width="600"
            height="450"
            style={{ border: 0, objectFit: "cover" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Row>
      </div>
    </>
  );
};

export default Contact;
