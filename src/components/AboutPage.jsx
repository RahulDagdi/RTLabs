import React, { useEffect } from "react";
import About from "./About/About";
import AboutContent from "./AboutContent/AboutContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutPage = () => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const rhElements = document.querySelectorAll('[data-rh="true"]');
  //     rhElements.forEach((el) => el.removeAttribute("data-rh"));
  //   }, 100); // Delay helps wait for Helmet to render

  //   return () => clearTimeout(timer);
  // }, []);

   useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in ms
      once: true      // animation only happens once while scrolling down
    });
  }, []);

  

  return (
    <>
      {/* <Helmet>
        <title>
          About RTLabs – Top Graphic Design & Editing Institute in Jaipur
        </title>
        <meta
          name="description"
          content="RTlabs is Jaipur’s trusted training institute for graphic design, animation, and video editing courses. Learn from experienced mentors and get job-ready skills."
        />
        <meta name="Author" content="RTLabs" />
        <meta name="Language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta
          property="og:title"
          content="About RTLabs – Top Graphic Design & Editing Institute in Jaipur"
        />
        <meta
          property="og:description"
          content="RTlabs is Jaipur’s trusted training institute for graphic design, animation, and video editing courses. Learn from experienced mentors and get job-ready skills."
        />
        <meta
          property="og:image"
          content="https://rtlabs.in/img/about_home.png"
        />
        <meta property="og:url" content="https://rtlabs.in/about" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rtlabs.in/about" />
      </Helmet> */}
      <Helmet>
        <title>
          About RTLabs – Top Graphic Design & Editing Institute in Jaipur
        </title>
        <meta
          key="description"
          name="description"
          content="RTlabs is Jaipur’s trusted training institute for graphic design, animation, and video editing courses. Learn from experienced mentors and get job-ready skills."
        />
        <meta key="author" name="author" content="RTLabs" />
        <meta key="language" name="language" content="English" />
        <meta key="revisit" name="revisit-after" content="7 days" />
        <meta
          key="og:title"
          property="og:title"
          content="About RTLabs – Top Graphic Design & Editing Institute in Jaipur"
        />
        <meta
          key="og:description"
          property="og:description"
          content="RTlabs is Jaipur’s trusted training institute for graphic design, animation, and video editing courses. Learn from experienced mentors and get job-ready skills."
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://rtlabs.in/img/about_home.png"
        />
        <meta
          key="og:url"
          property="og:url"
          content="https://rtlabs.in/about"
        />
        <meta key="robots" name="robots" content="index, follow" />
        <link key="canonical" rel="canonical" href="https://rtlabs.in/about" />
      </Helmet>

      <About />
      <div data-aos="zoom-in"> <AboutContent /></div>
    </>
  );
};

export default AboutPage;
