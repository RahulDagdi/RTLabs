// import React from 'react'
// import CountUp from "react-countup";
// import "./graphicsNum.css"

// const GraphicsNum = () => {
//     const user_num = [
//         {
//           id: 1,
//           num: 1.60,
//           text: "Course Enrollments",
//         },
//         {
//           id: 2,
//           num: 50,
//           text: "Years of Experience",
//         },
//         {
//           id: 3,
//           num: 200,
//           text: "Creative Projects Completed",
//         },
//         {
//           id: 4,
//           num: 3.6,
//           text: "Successful Placements",
//         },
//       ];

//   return (
//     <>
//     <div className="row m-5 user_num_box">
//     {user_num.map((item) => (
//       <div
//         key={item.id}
//         className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6"
//       >
//         <div className="about_sub number_text">
//           <CountUp
//             start={0}
//             end={item.num}
//             duration={2.5}
//             separator=","
//             suffix="+"
//           />
//         </div>
//         <div className="about_num_title number_content">{item.text}</div>
//       </div>
//     ))}
//   </div>

//     </>

//   )
// }

// export default GraphicsNum

// import React from "react";
// import CountUp from "react-countup";
// import "./graphicsNum.css";

// const GraphicsNum = () => {
//   const user_num = [
//     {
//       id: 1,
//       num: 1.6,
//       suffix: "K+",
//       text: "Our Daily Game Users",
//     },
//     {
//       id: 2,
//       num: 50,
//       suffix: "M",
//       text: "Game Downloads",
//     },
//     {
//       id: 3,
//       num: 200,
//       suffix: "+",
//       text: "Game Launched",
//     },
//     {
//       id: 4,
//       num: 3.6,
//       suffix: "M",
//       text: "Gaming Project Delivered",
//     },
//   ];

//   return (
//     <>
//       <div className="graphics-num-section ">
//         <h2
//           className="overview-heading text-center text-white my-5"
//           style={{ fontFamily: "Rajdhani, sans-serif" }}
//         >
//           This place for heading
//         </h2>

//         <div className="row justify-content-center text-center pt-5">
//           {user_num.map((item) => (
//             <div
//               key={item.id}
//               className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mb-4"
//             >
//               <div className="graphics-num-value pb-2">
//                 <CountUp
//                   start={0}
//                   end={item.num}
//                   duration={2.5}
//                   separator=","
//                 />
//                 {/* {item.num} */}
//                 <span className="suffix">{item.suffix}</span>
//               </div>
//               <div className="graphics-num-text">{item.text}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default GraphicsNum;
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./GraphicsNum.css";

const GraphicsNum = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const user_num = [
    {
      id: 1,
      num: 1.6,
      suffix: "K+",
      text: "Our Daily Game Users",
      icon: "🎮",
    },
    {
      id: 2,
      num: 50,
      suffix: "M",
      text: "Game Downloads",
      icon: "📱",
    },
    {
      id: 3,
      num: 200,
      suffix: "+",
      text: "Game Launched",
      icon: "🚀",
    },
    {
      id: 4,
      num: 3.6,
      suffix: "M",
      text: "Project Delivered",
      icon: "🏆",
    },
  ];

  const handleCardClick = (item) => {
    console.log("Card clicked:", item);
    // Add your click functionality here
  };

  return (
    <section className="gn-section" ref={ref}>
      <div className="gn-ambient gn-ambient--1" />
      <div className="gn-ambient gn-ambient--2" />
      <div className="gn-ambient gn-ambient--3" />

      <div className="gn-container">
        <div className="gn-header">
          <h2 className="gn-title">Our Achievements</h2>
          <p className="gn-subtitle">
            Empowering the gaming industry with exceptional results and
            satisfied clients worldwide
          </p>
        </div>

        <div className="gn-stats-grid">
          {user_num.map((item) => (
            <div 
              className="gn-stat-card" 
              key={item.id}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(item);
                }
              }}
            >
              <div className="gn-stat-icon">{item.icon}</div>
              <div className="gn-stat-value-wrapper">
                <div className="gn-stat-value">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.num}
                      duration={2.5}
                      separator=","
                      decimals={item.num % 1 !== 0 ? 1 : 0}
                    />
                  ) : (
                    0
                  )}
                  <span className="gn-suffix">{item.suffix}</span>
                </div>
              </div>
              <div className="gn-stat-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicsNum;