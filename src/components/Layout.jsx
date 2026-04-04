// src/components/Layout.js
import React from "react";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer/Footer";
import { ToastContainer } from "react-toastify";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";
import GraphicsCourse from "./GraphicsCourse/GraphicsCourse";
import HeroNew from "./HeroNew";

const Layout = ({ children }) => {
   const location = useLocation();
    
  return (
    <div className="app-wrapper">
      <NavbarComp />
      {/* {location?.pathname==="/" &&<Hero/> } */}
      {location?.pathname==="/" &&  <HeroNew/> }
     
      {location?.pathname==="/graphics-design-course" && <GraphicsCourse/>}
      <main className="content-container">{children}</main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
