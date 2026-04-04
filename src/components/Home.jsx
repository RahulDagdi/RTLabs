import React, { useEffect } from "react";
import Hero from "./Hero.jsx";
import Tournament from "./Tournament/Tournament";
import Reel from "./Tournament/Reel";
import About from "./About/About.jsx";
import Courses from "./Courses/Courses.jsx";
import Home_About from "./HomeAbout/Home_About.jsx";
import WorkShow from "./WorkShow/WorkShow.jsx";
import Trainers from "./Trainers/Trainers.jsx";
import Experience from "./Experience/Experience.jsx";
import UserNum from "./User_Num/UserNum.jsx";
import Footer from "./Footer/Footer.jsx";
import SwiperCompo from "./WorkShow/SwiperCompo.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
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
  
      <Helmet>
        <title>
          RTLabs - Video Editing & Graphic Designing Courses in Jaipur 
        </title>
        <meta
          key="desc"
          name="description"
          content="Get certified in Graphic Designing, Video Editing, and Video Animation Course in Jaipur at RTLabs– the institute where creativity turns into a profession."
        />
        <meta key="author" name="author" content="RTLabs" />
        <meta key="language" name="language" content="English" />
        <meta key="revisit" name="revisit-after" content="7 days" />
        <meta
          key="og:title"
          property="og:title"
          content="RTLabs - Video Editing & Graphic Designing Courses in Jaipur"
        />
        <meta
          key="og:desc"
          property="og:description"
          content="Get certified in Graphic Designing, Video Editing, and Video Animation Course in Jaipur at RTLabs– the institute where creativity turns into a profession."
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://rtlabs.in/img/about_home.png"
        />
        <meta key="og:url" property="og:url" content="https://rtlabs.in/" />
        <meta key="robots" name="robots" content="index, follow" />
        <link key="canonical" rel="canonical" href="https://rtlabs.in/" />
        <meta
          key="gverify"
          name="google-site-verification"
          content="veY7gC4pllfVd0O9XydbTVL1yT5JxkHlc1HqAlAY2Io"
        />

         <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WSGVF680HX"
        />
        <script key="ga">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WSGVF680HX');
    `}
        </script>
      </Helmet>


      {/* <Hero /> */}
      <div data-aos="zoom-in" ><Tournament /></div>
      <Reel />
      <div  style={{ marginTop: "150px" }}  data-aos="zoom-in">  <Home_About /> </div>
      {/* <About/> */}
      <div style={{ marginTop: "150px" }} data-aos="zoom-in"> <Courses /></div>
      <div data-aos="zoom-in"><UserNum  /></div>
      {/* <WorkShow/> */}
      <div data-aos="zoom-in"> <SwiperCompo /></div>
      <div data-aos="zoom-in"> <Trainers /></div>
      <div data-aos="zoom-in"> <Experience /></div>
      
    </>
  );
};

export default Home;
