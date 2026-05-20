// import React from "react";
// import "./GraphicsAbout.css";

// const GraphicsAbout = () => {
//   return (
//     <section className="about-section py-5">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Left: Image */}
//           <div className="col-md-6 mb-4 mb-md-0 text-center">
//             <img
//               src="/img/about/about-1.png"
//               alt="About Us"
//               className="img-fluid about-img"
//             />
//           </div>

//           {/* Right: Content */}
//           <div className="col-md-6 text-white">
//             <h2 className="about-title mb-3">About Us</h2>
//             <p className="about-text">
//               We are a passionate team of gamers, developers, and esports enthusiasts committed to building an immersive platform for competitive play. Our goal is to bring together top-tier players, teams, and brands to create a thriving digital battleground.
//             </p>
//             <p className="about-text">
//               Whether you're a solo warrior or part of an elite squad, our tournaments and matchups offer a space to rise, compete, and shine.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GraphicsAbout;

import React from "react";
import "./GraphicsAbout.css";

const GraphicsAbout = () => {
  return (
    <section className="about-section" style={{ background: "#0b0e13" }}>
      <div className="mx-5">
        {/* Row 1 */}
        <div className="row align-items-center ">
          <div className="col-md-6 text-white">
            {/* <h2 className="about-title mb-3">Who We Are</h2> */}
            <div className="ex-title about-header">
              <h2 className="about-title">
                Build a Creative Career with a
                <span className="about-highlight">Graphic Design Course </span>
              </h2>
            </div>

            <p className="about-text">
              Graphic design is among the most sought-after creative skills in
              the competitive world. Designers are in demand by every brand,
              business, and startup — and the opportunities just keep increasing
              each year.
              <br />
              At RT Labs, the graphic design training in Jaipur is crafted for
              peo­ple look­ing for actu­al skills, real tools and jobs — not
              just a cer­tifi­cate ready to be hung on the wall.
              <ul className="about-list">
                <li className="fw-bold" style={{ listStyle: "none" }}>
                  Who should join this course?
                </li>
                <li>
                  Any stream students who want to build a creative career.
                </li>

                <li>
                  Freshers who are confused about entering the design or
                  advertising industry.
                </li>

                <li>
                  Ambitious working professionals looking to switch their domain
                  into the creative field.
                </li>

                <li>
                  Freelancers who want to start delivering professional design
                  services.
                </li>

                <li>
                  Entrepreneurs who want to manage their own branding and
                  creatives.
                </li>
              </ul>
              <p className="about-text">
                The course is designed for absolute beginners to job-ready
                learners, whether you're a design novice or already have a few
                basics under your belt.
              </p>
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              // src="/img/about/about-1.png"
              src="/img/graphics-design-course/who-we-are.jpg"
              alt="Gaming Team"
              className="img-fluid about-img"
            />
          </div>
        </div>

        {/* Row 2 (reversed layout) */}
        {/* <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6 text-white">
            <h2 className="about-title mb-3">What We Do</h2>
            <p className="about-text">
              We host electrifying tournaments, foster esports communities, and provide platforms for teams to grow, compete, and gain recognition.
            </p>
            <p className="about-text">
              Our mission is to level up the competitive scene by offering transparent matchmaking, real rewards, and an environment built for excellence.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/img/chat_us.png"
              alt="Gaming Setup"
              className="img-fluid about-img"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default GraphicsAbout;
