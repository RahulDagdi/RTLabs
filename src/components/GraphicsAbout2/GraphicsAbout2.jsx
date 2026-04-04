import React from "react";
import "../GraphicsAbout.jsx/GraphicsAbout.css";
import AboutUsButton from "../AboutUsButton/AboutUsButton";

const GraphicsAbout2 = () => {
  return (
    <section className="about-section" style={{background: "#0b0e13"}}>
      {/* mx-5 hata ke container-fluid lagaya — upar wale tools section jaisi full width */}
      <div className="container-fluid px-4">
        {/* Row 2 (reversed layout) */}
        <div className="row align-items-center flex-md-row-reverse g-0">
          <div className="col-md-6 text-white ps-md-5">
            <h2 className="about-title mb-3">What We Do</h2>
            <p className="about-text">
              We host electrifying tournaments, foster esports communities, and
              provide platforms for teams to grow, compete, and gain
              recognition.
            </p>
            <p className="about-text">
              Our mission is to level up the competitive scene by offering
              transparent matchmaking, real rewards, and an environment built
              for excellence.
              We host electrifying tournaments, foster esports communities, and provide platforms for teams to grow, compete, and gain recognition.

Our mission is to level up the competitive scene by offering transparent matchmaking, real rewards, and an environment built for excellence.
We host electrifying tournaments, foster esports communities, and provide platforms for teams to grow, compete, and gain recognition.

Our mission is to level up the competitive scene by offering transparent matchmaking, real rewards, and an environment built for excellence.
We host electrifying tournaments, foster esports communities, and provide platforms for teams to grow, compete, and gain recognition.

Our mission is to level up the competitive scene by offering transparent matchmaking, real rewards, and an environment built for excellence.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/public/img/graphics-design-course/who-we-are.jpg"
              alt="Gaming Setup"
              className="img-fluid about-img "
            />
          </div>
        </div>
      </div>
          <div className="d-flex align-items-center justify-content-center mt-3" >
        <AboutUsButton/>
      </div>
    </section>
    
  );
};

export default GraphicsAbout2;
