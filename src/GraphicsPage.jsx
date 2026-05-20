import React from "react";
import GraphicsCourse from "./components/GraphicsCourse/GraphicsCourse";
import GraphicsContent from "./components/GraphicsContent/GraphicsContent";
import UserNum from "./components/User_Num/UserNum";
import GraphicsNum from "./components/Graphics_Num/GraphicsNum";
import GraphicsLogo from "./components/GraphicsLogo/GraphicsLogo";
import CourseModule from "./components/CourseModule/CourseModule";
import GraphipcsModule from "./components/GraphicsModule/GraphicsModule";
import GraphicsVideo from "./components/GraphicsVideo/GraphicsVideo";
import GraphicsTools from "./components/GraphicsTools/GraphicsTools";
import Faq from "./components/FAQ/Faq";
import GraphicsAbout from "./components/GraphicsAbout.jsx/GraphicsAbout";
import GraphicsAbout2 from "./components/GraphicsAbout2/GraphicsAbout2";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GoogleReviews from "./components/GoogleReviews/GoogleReviews";
import CareerOptions from "./components/CareerOptions/CareerOptions";
import { TbBackground } from "react-icons/tb";

const GraphicsPage = () => {
  return (
    // <div >
    <div className="" style={{ background: "#0b0e13" }}>
      <Helmet>
        <meta name="robots" content="onindex" />
      </Helmet>
      {/* <GraphicsCourse/> */}
      <GraphicsContent />
      <GraphicsAbout />
      <GraphicsNum />
      <GraphicsLogo />
      <GraphipcsModule />
      {/* <CourseModule/> */}
      <GraphicsVideo />
      <GraphicsTools />
      <GraphicsAbout2 />
      <GoogleReviews />
      <CareerOptions />

      <Faq />
    </div>
  );
};

export default GraphicsPage;
