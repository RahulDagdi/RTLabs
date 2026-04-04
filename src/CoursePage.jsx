import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Courses from "./components/Courses/Courses";

import AOS from 'aos';
import 'aos/dist/aos.css';

const CoursePage = () => {
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
        <title>Professional designing and Video Editing Courses | RTLabs</title>
        <meta
          name="description"
          content="Learn beginner to advanced animation, editing, and graphic design courses in Jaipur at RTlabs—both online and offline, with expert guidance and live projects."
        />
        <meta name="Author" content="RTLabs" />
        <meta name="Language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta
          property="og:title"
          content="Professional designing and Video Editing Courses | RTLabs"
        />
        <meta
          property="og:description"
          content="Learn beginner to advanced animation, editing, and graphic design courses in Jaipur at RTlabs—both online and offline, with expert guidance and live projects."
        />
        <meta
          property="og:image"
          content="https://rtlabs.in/img/about_home.png"
        />
        <meta property="og:url" content="https://rtlabs.in/courses" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rtlabs.in/courses" />
      </Helmet> */}

      <Helmet>
  <title>Professional designing and Video Editing Courses | RTLabs</title>
  <meta
    key="description"
    name="description"
    content="Learn beginner to advanced animation, editing, and graphic design courses in Jaipur at RTlabs—both online and offline, with expert guidance and live projects."
  />
  <meta key="author" name="author" content="RTLabs" />
  <meta key="language" name="language" content="English" />
  <meta key="revisit" name="revisit-after" content="7 days" />
  <meta
    key="og:title"
    property="og:title"
    content="Professional designing and Video Editing Courses | RTLabs"
  />
  <meta
    key="og:description"
    property="og:description"
    content="Learn beginner to advanced animation, editing, and graphic design courses in Jaipur at RTlabs—both online and offline, with expert guidance and live projects."
  />
  <meta
    key="og:image"
    property="og:image"
    content="https://rtlabs.in/img/about_home.png"
  />
  <meta key="og:url" property="og:url" content="https://rtlabs.in/courses" />
  <meta key="robots" name="robots" content="index, follow" />
  <link key="canonical" rel="canonical" href="https://rtlabs.in/courses" />
</Helmet>

<div data-aos="zoom-in">

      <Courses />
</div>
    </>
  );
};

export default CoursePage;
