// import React from "react";
// import "./GraphicsContent.css";

// const GraphicsContent = () => {

//   const now = new Date();

//   const time = now.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   const date = now.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });

//   return (
//     <div className="match-wrapper">

//       {/* ── Online Hex ── */}
//       <div className="team-hex">
//         {/* Upar — hex ke bahar */}
//         <p className="hex-label hex-label-top">{date}</p>

//         {/* Sirf image hex ke andar */}
//         <div className="hex-border">
//           <img
//             src="/img/graphics-design-course/online-icons.png"
//             alt="online icon"
//           />
//         </div>

//         {/* Niche — hex ke bahar */}
//         <p className="hex-label hex-label-bottom">New Batch</p>
//       </div>

//       {/* ── Center Info ── */}
//       <div className="col-md-6 hex-border-middle">
//         <div className="match-details">
//           <div className="match-content">
//             <div className="side-info">
//               <span className="game-name">Class Mode</span>
//               <h3>Online</h3>
//             </div>

//             <div className="time-info">
//               <h2>{time}</h2>
//               <p>{date}</p>
//             </div>

//             <div className="side-info right">
//               <span className="game-name">Class Mode</span>
//               <h3>Offline</h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Offline Hex ── */}
//       <div className="team-hex">
//         {/* Upar — hex ke bahar */}
//         <p className="hex-label hex-label-top">{date}</p>

//         {/* Sirf image hex ke andar */}
//         <div className="hex-border">
//           <img
//             src="/img/graphics-design-course/offline-icon.png"
//             alt="offline icon"
//           />
//         </div>

//         {/* Niche — hex ke bahar */}
//         <p className="hex-label hex-label-bottom">New Batch</p>
//       </div>

//     </div>
//   );
// };

// export default GraphicsContent;



import React, { useState, useEffect } from "react";
import "./GraphicsContent.css";

const GraphicsContent = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [pulse, setPulse] = useState(false);

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setDate(now.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Pulse every 3s for live feel
  useEffect(() => {
    const id = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="gc-wrapper">
      {/* Ambient bg */}
      <div className="gc-bg-glow gc-bg-glow--l" />
      <div className="gc-bg-glow gc-bg-glow--r" />

      {/* ── ONLINE HEX ── */}
      <div className="gc-hex-unit gc-hex-unit--left">
        <span className="gc-label gc-label--top">
          <span className="gc-dot" /> {date}
        </span>

        <div className="gc-hex-outer">
          <div className="gc-hex-ring gc-hex-ring--1" />
          <div className="gc-hex-ring gc-hex-ring--2" />
          <div className="gc-hex-inner">
            <img
              src="/img/graphics-design-course/online-icons.png"
              alt="online icon"
              className="gc-hex-img"
            />
          </div>
        </div>

        <span className="gc-label gc-label--bottom gc-badge">
          ✦ New Batch
        </span>
      </div>

      {/* ── CENTER CARD ── */}
      <div className="gc-center">
        {/* Top glow line */}
        <div className="gc-center-glow" />

        {/* VS label */}
        {/* <span className="gc-vs">VS</span> */}

        <div className="gc-center-content">
          {/* Left mode */}
          <div className="gc-mode gc-mode--left">
            <span className="gc-mode-label">Class Mode</span>
            <h3 className="gc-mode-title">Online</h3>
            <span className="gc-mode-pill gc-mode-pill--online">Live</span>
          </div>

          {/* Clock */}
          <div className={`gc-clock ${pulse ? "gc-clock--pulse" : ""}`}>
            <div className="gc-clock-ring" />
            <div className="gc-clock-inner">
              <span className="gc-clock-time"> {time}  </span>
              <span className="gc-clock-date">{date}</span>
            </div>
          </div>

          {/* Right mode */}
          <div className="gc-mode gc-mode--right">
            <span className="gc-mode-label">Class Mode</span>
            <h3 className="gc-mode-title">Offline</h3>
            <span className="gc-mode-pill gc-mode-pill--offline">Visit</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gc-center-footer">
          <span className="gc-footer-tag">
            <span className="gc-dot gc-dot--green" /> Enrolling Now
          </span>
          <span className="gc-footer-divider" />
          <span className="gc-footer-tag">
            <span className="gc-dot gc-dot--blue" /> Both Modes Available
          </span>
        </div>
      </div>

      {/* ── OFFLINE HEX ── */}
      <div className="gc-hex-unit gc-hex-unit--right">
        <span className="gc-label gc-label--top">
          <span className="gc-dot gc-dot--orange" /> {date}
        </span>

        <div className="gc-hex-outer">
          <div className="gc-hex-ring gc-hex-ring--1 gc-hex-ring--orange" />
          <div className="gc-hex-ring gc-hex-ring--2 gc-hex-ring--orange" />
          <div className="gc-hex-inner">
            <img
              src="/img/graphics-design-course/offline-icon.png"
              alt="offline icon"
              className="gc-hex-img"
            />
          </div>
        </div>

        <span className="gc-label gc-label--bottom gc-badge gc-badge--orange">✦ New Batch </span>
      </div>
    </div>
  );
};

export default GraphicsContent;