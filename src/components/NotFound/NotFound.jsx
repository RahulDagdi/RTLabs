import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import { FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const navigate = useNavigate();
  const wrapRef = useRef(null);

  /* ── Stars ── */
  useEffect(() => {
    const container = document.getElementById("nf-stars");
    if (!container) return;
    for (let i = 0; i < 90; i++) {
      const s = document.createElement("span");
      s.className = "nf-star";
      const sz = Math.random() * 2.2 + 0.8;
      s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--d:${2+Math.random()*5}s;--dl:${Math.random()*5}s`;
      container.appendChild(s);
    }
  }, []);

  /* ── Meteors ── */
  useEffect(() => {
    const container = document.getElementById("nf-meteors");
    if (!container) return;
    for (let i = 0; i < 7; i++) {
      const m = document.createElement("div");
      m.className = "nf-meteor";
      m.style.cssText = `--l:${8+i*13}%;--d:${4+i*1.4}s;--dl:${i*1.3}s`;
      container.appendChild(m);
    }
  }, []);

  /* ── Parallax on mouse ── */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const handle = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      const img = el.querySelector(".nf-img-wrap");
      const code = el.querySelector(".notfound-code");
      if (img) img.style.transform = `translateY(var(--float-ty,0px)) translate(${x*16}px,${y*16}px)`;
      if (code) code.style.setProperty("--px", `${x*8}px`);
    };
    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, []);

  return (
    <>
      <Helmet>
        <title>404 Error | RTlabs – Page Not Found</title>
        <meta name="description" content="Whoops! The page you're looking for doesn't exist. Check out RTlabs for expert-led creative courses in Jaipur." />
        <meta name="author" content="RTLabs" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta property="og:title" content="404 Error | RTlabs – Page Not Found" />
        <meta property="og:description" content="Whoops! The page you're looking for doesn't exist. Check out RTlabs for expert-led creative courses in Jaipur." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ── Stars ── */}
      <div className="nf-stars" id="nf-stars" aria-hidden="true" />

      {/* ── Meteors ── */}
      <div className="nf-meteors" id="nf-meteors" aria-hidden="true" />

      {/* ── Scanlines ── */}
      <div className="nf-scanlines" aria-hidden="true" />

      {/* ── Corner Brackets ── */}
      <div className="nf-bracket nf-br-tl" aria-hidden="true" />
      <div className="nf-bracket nf-br-tr" aria-hidden="true" />
      <div className="nf-bracket nf-br-bl" aria-hidden="true" />
      <div className="nf-bracket nf-br-br" aria-hidden="true" />

      {/* ── Main ── */}
      <div className="notfound-container" ref={wrapRef}>
        <div className="notfound-content">

          {/* ── Image side ── */}
          <div className="notfound-image">
            <div className="nf-ring nf-ring-1" aria-hidden="true" />
            <div className="nf-ring nf-ring-2" aria-hidden="true" />
            <div className="nf-ring nf-ring-3" aria-hidden="true" />
            <div className="nf-orb nf-orb-1"  aria-hidden="true" />
            <div className="nf-orb nf-orb-2"  aria-hidden="true" />
            <div className="nf-img-wrap">
              <img src="/img/cat1.png" alt="Lost in Space" />
            </div>
          </div>

          {/* ── Text side ── */}
          <div className="notfound-text">
            {/* Glitch ghosts */}
            <div className="nf-glitch-wrap" aria-hidden="true">
              <span className="nf-ghost nf-ghost-r">404</span>
              <span className="nf-ghost nf-ghost-b">404</span>
            </div>

            <h1 className="notfound-code">404</h1>

            <p className="notfound-message">Oops! that page can't be found</p>

            <button className="notfound-button" onClick={() => navigate("/")}>
              <FaHome size={18} />
              Go To Home
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default NotFound;