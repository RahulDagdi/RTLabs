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
    <section className="about-section py-5"  style={{background: "#0b0e13"}}>
      <div className="mx-5">
        {/* Row 1 */}
        <div className="row align-items-center ">
          <div className="col-md-6 text-white">
            <h2 className="about-title mb-3">Who We Are</h2>
            <p className="about-text">
              We're a next-gen gaming platform created for players who dream bigger. From high-stakes battles to casual skirmishes, we craft experiences that celebrate performance, passion, and precision.
            </p>
            <p className="about-text">
              Whether you’re a lone warrior or part of a team, we’re here to power your path to greatness.
            </p>
            <p>
              We're a next-gen gaming platform created for players who dream bigger. From high-stakes battles to casual skirmishes, we craft experiences that celebrate performance, passion, and precision.

Whether you’re a lone warrior or part of a team, we’re here to power your path to greatness.
We're a next-gen gaming platform created for players who dream bigger. From high-stakes battles to casual skirmishes, we craft experiences that celebrate performance, passion, and precision.

Whether you’re a lone warrior or part of a team, we’re here to power your path to greatness.
We're a next-gen gaming platform created for players who dream bigger. From high-stakes battles to casual skirmishes, we craft experiences that celebrate performance, passion, and precision.

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
