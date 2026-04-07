import React, { useEffect, useRef } from "react";
import "./ThankYou.css";

const ThankYou = () => {
  const wrapRef = useRef(null);

  /* ── Stars ── */
  useEffect(() => {
    const container = document.getElementById("ty-stars");
    if (!container) return;
    for (let i = 0; i < 90; i++) {
      const s = document.createElement("span");
      s.className = "ty-star";
      const sz = Math.random() * 2.2 + 0.8;
      s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--d:${2+Math.random()*5}s;--dl:${Math.random()*5}s`;
      container.appendChild(s);
    }
  }, []);

  /* ── Meteors ── */
  useEffect(() => {
    const container = document.getElementById("ty-meteors");
    if (!container) return;
    for (let i = 0; i < 6; i++) {
      const m = document.createElement("div");
      m.className = "ty-meteor";
      m.style.cssText = `--l:${8+i*15}%;--d:${4+i*1.5}s;--dl:${i*1.4}s`;
      container.appendChild(m);
    }
  }, []);

  /* ── Particles ── */
  useEffect(() => {
    const container = document.getElementById("ty-particles");
    if (!container) return;
    for (let i = 0; i < 40; i++) {
      const p = document.createElement("span");
      p.className = "ty-particle";
      p.style.cssText = `left:${Math.random()*100}%;--sz:${Math.random()*6+2}px;--d:${3+Math.random()*4}s;--dl:${Math.random()*6}s`;
      container.appendChild(p);
    }
  }, []);

  /* ── Parallax ── */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const handle = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      const img = el.querySelector(".ty-img-wrap");
      if (img) img.style.transform = `translateY(var(--float-ty,0px)) translate(${x*14}px,${y*14}px)`;
    };
    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, []);

  return (
    <>
      {/* ── Fixed ambient layers (pointer-events:none, z-index low) ── */}
      <div className="ty-stars"     id="ty-stars"     aria-hidden="true" />
      <div className="ty-meteors"   id="ty-meteors"   aria-hidden="true" />
      <div className="ty-particles" id="ty-particles"  aria-hidden="true" />
      <div className="ty-scanlines" aria-hidden="true" />

      {/* Corner brackets */}
      <div className="ty-bracket ty-br-tl" aria-hidden="true" />
      <div className="ty-bracket ty-br-tr" aria-hidden="true" />
      <div className="ty-bracket ty-br-bl" aria-hidden="true" />
      <div className="ty-bracket ty-br-br" aria-hidden="true" />

      {/* ── MAIN — normal flow so footer renders below ── */}
      <div className="ty-page" ref={wrapRef}>
        <div className="ty-container">

          {/* Checkmark */}
          <div className="ty-check-wrap">
            <div className="ty-ring-pulse" aria-hidden="true" />
            <svg className="ty-checkmark" viewBox="0 0 52 52" aria-hidden="true">
              <circle className="ty-check-circle" cx="26" cy="26" r="24" fill="none" />
              <path   className="ty-check-tick"   fill="none" d="M14 27l8 8 16-17" />
            </svg>
          </div>

          {/* Image */}
          <div className="ty-image-section">
            <div className="ty-ring ty-ring-1" aria-hidden="true" />
            <div className="ty-ring ty-ring-2" aria-hidden="true" />
            <div className="ty-orb ty-orb-1"   aria-hidden="true" />
            <div className="ty-orb ty-orb-2"   aria-hidden="true" />
            <div className="ty-img-wrap">
              <img src="/img/thaks.avif" alt="Thank You" className="ty-img" />
            </div>
            {/* Sparkle dots */}
            <span className="ty-sparkle ty-sp1" aria-hidden="true" />
            <span className="ty-sparkle ty-sp2" aria-hidden="true" />
            <span className="ty-sparkle ty-sp3" aria-hidden="true" />
            <span className="ty-sparkle ty-sp4" aria-hidden="true" />
          </div>

          {/* Title — letter by letter */}
          <h1 className="ty-title" aria-label="Thank You!">
            {"Thank You!".split("").map((ch, i) => (
              <span
                key={i}
                className={`ty-letter${ch === " " ? " ty-space" : ""}`}
                style={{ animationDelay: `${0.08 * i + 0.3}s` }}
                aria-hidden="true"
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </h1>

          {/* Glitch ghost */}
          <div className="ty-glitch-wrap" aria-hidden="true">
            <span className="ty-ghost ty-ghost-r">Thank You!</span>
            <span className="ty-ghost ty-ghost-b">Thank You!</span>
          </div>

          {/* Message — typewriter */}
          <div className="ty-msg-block">
            <p className="ty-msg-line ty-msg-1">
              Your submission has been received successfully!
            </p>
            <p className="ty-msg-line ty-msg-2">
              Our RT Labs team will contact you shortly.
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="ty-btn"
            onClick={() => (window.location.href = "/")}
          >
            <span className="ty-btn-text">Back to Home</span>
            <svg className="ty-btn-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </button>

        </div>
      </div>
      {/* Footer renders here naturally — no overflow:hidden blocking it */}
    </>
  );
}

export default ThankYou;