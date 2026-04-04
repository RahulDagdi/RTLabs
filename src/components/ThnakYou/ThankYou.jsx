// ThankYou.jsx
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ThankYou.css";

export default function ThankYou() {
  const [showContent, setShowContent] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Trigger content animation after mount
    setTimeout(() => setShowContent(true), 100);

    // Create particles
    const particleCount = 50;
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 8 + 2,
        duration: Math.random() * 3 + 2,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="thankyou-wrapper">
      {/* Animated Background Particles */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Background */}
      <div className="animated-bg"></div>

      {/* Main Content */}
      <div className={`thankyou-container ${showContent ? "show" : ""}`}>
        {/* Animated Checkmark Circle */}
        <div className="success-animation">
          <div className="circle-container">
            <div className="circle-bg"></div>
            <div className="checkmark">
              <svg viewBox="0 0 52 52">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          </div>
        </div>

        {/* Animated Cartoon Image */}
        <div className="thankyou-image-wrapper">
          <div className="image-glow"></div>
          <img
            src={"/img/thaks.avif"}
            alt="Thank You"
            className="thankyou-image"
          />
          <div className="sparkles">
            <div className="sparkle">✨</div>
            <div className="sparkle">⭐</div>
            <div className="sparkle">🌟</div>
            <div className="sparkle">💫</div>
          </div>
        </div>

        {/* Animated Title */}
        <h1 className="thankyou-title">
          <span className="letter">T</span>
          <span className="letter">h</span>
          <span className="letter">a</span>
          <span className="letter">n</span>
          <span className="letter">k</span>
          <span className="letter space"></span>
          <span className="letter">Y</span>
          <span className="letter">o</span>
          <span className="letter">u</span>
          <span className="letter">!</span>
        </h1>

        {/* Animated Message */}
        <div className="message-container">
          <p className="thankyou-message">
            <span className="message-line">Your submission has been received successfully!</span>
            <span className="message-line">Our RT Labs team will contact you shortly.</span>
          </p>
        </div>

        {/* Animated Button */}
        <button
          className="cta-button"
          onClick={() => (window.location.href = "/")}
        >
          <span className="button-text">Back to Home</span>
          <span className="button-icon">→</span>
          <div className="button-glow"></div>
        </button>

        {/* Decorative Elements */}
        <div className="floating-shapes">
          <div className="shape shape-1">🎉</div>
          <div className="shape shape-2">🎊</div>
          <div className="shape shape-3">🎈</div>
          <div className="shape shape-4">🎁</div>
        </div>
      </div>
    </div>
  );
}