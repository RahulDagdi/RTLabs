import React from "react";
import "../GraphicsAbout.jsx/GraphicsAbout.css";
import AboutUsButton from "../AboutUsButton/AboutUsButton";

const GraphicsAbout2 = () => {
  return (
    <section className="about-section" style={{ background: "#0b0e13" }}>
      {/* mx-5 hata ke container-fluid lagaya — upar wale tools section jaisi full width */}
      <div className="container-fluid px-4">
        {/* Row 2 (reversed layout) */}
        <div className="row align-items-center flex-md-row-reverse g-0">
          <div className="col-md-6 text-white ps-md-5">
            {/* <h2 className="about-title mb-3">What We Do</h2> */}
            <div className="ex-title about-header">
              <h2 className="about-title">
                Why RT Labs Is Jaipur's Most Trusted{" "}
                <span className="about-highlight">
                  Graphic Design Training Institute
                </span>
              </h2>
            </div>
            <p className="about-text">
              The right institute can make all the difference in your career. We
              go beyond textbooks & tutorials at RT Labs. We provide
              industry-focused offline and online graphic design courses in
              Jaipur with real project work and a placement network to help you
              land top jobs.
              <p>Here's what makes us different:</p>
              <ul className="about-list">
                <li>
                  Actual live project training on real client briefs — not just
                  exercises
                </li>
                <li>All 6 industry tools in 1 course</li>
                <li>
                  Offers a certificate of completion, providing you with a
                  certification recognized by top employers.
                </li>
                <li>
                  A dedicated placement cell that has been successful in 2600+
                  placements
                </li>
                <li>Regularly scheduled online and offline batches</li>
                <li>
                  Training batches comparatively smaller for more focused
                  attention by instructors
                </li>
                <li>Building a portfolio so you can graduate ready for work</li>
              </ul>
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/img/graphics-design-course/who-we-are.jpg"
              alt="Gaming Setup"
              className="img-fluid about-img "
            />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <AboutUsButton />
      </div>
    </section>
  );
};

export default GraphicsAbout2;
