// CareerOptions.jsx
import React, { useEffect, useRef, useState } from "react";
import "./CareerOptions.css";

/* ══════════════════════════════
   DATA
══════════════════════════════ */
const cards = [
  {
    icon: "🎨",
    title: "LOGO DESIGNER",
    text: "Logo designers work on creating one-of-a-kind brand identities that cover a company's vision and values. This role is vital to branding and enables businesses to differentiate themselves from the competition and stand out.",
    // salary: "₹3+ LPA",
  },
  {
    icon: "🖌️",
    title: "GRAPHIC DESIGNER",
    text: "Graphic Designers are responsible for designing attractive digital and printed content such as social media posts, banners, brochures and advertisements. They merge creativity with design capabilities to articulate ideas.",
    // salary: "₹3+ LPA",
  },
  {
    icon: "📱",
    title: "UX DESIGNER",
    text: "UX designers build websites and apps that are easy to use by optimizing the user experience. They study how users behave, create wireframes and optimize design flows to perform seamless interaction.",
    // salary: "₹5+ LPA",
  },
  {
    icon: "💻",
    title: "UI DESIGNER",
    text: "UI designers take care of the visual interface — layouts, buttons, icons and typography for websites and applications. They design interfaces that are not only visually appealing but also easy to use for improved accessibility.",
    // salary: "₹4+ LPA",
  },
];

/* Salary grid — exact 2×3 from image */
const salaryGrid = [
  { lpa: "3+", role: "Graphic Designer" },
  { lpa: "5+", role: "Sr. Graphic Designer" },
  { lpa: "2.8+", role: "Web Designer" },
  { lpa: "3.5+", role: "Design Architect" },
  { lpa: "2.5+", role: "Technical Architect" },
  { lpa: "2.9+", role: "3D Artist" },
];

/* ══════════════════════════════
   useInView hook
══════════════════════════════ */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ══════════════════════════════
   COMPONENT
══════════════════════════════ */
const CareerOptions = () => {
  /* --- card entrances --- */
  const cardRefs = useRef([]);
  const [cardVis, setCardVis] = useState(Array(cards.length).fill(false));

  useEffect(() => {
    const obs = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setCardVis((prev) => {
              const n = [...prev];
              n[i] = true;
              return n;
            });
            o.disconnect();
          }
        },
        { threshold: 0.08 },
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o && o.disconnect());
  }, []);

  /* --- salary strip entrance --- */
  const [stripRef, stripVis] = useInView(0.18);

  /* --- salary cells stagger --- */
  const [cellVis, setCellVis] = useState(Array(salaryGrid.length).fill(false));
  useEffect(() => {
    if (!stripVis) return;
    salaryGrid.forEach((_, i) => {
      setTimeout(
        () => {
          setCellVis((prev) => {
            const n = [...prev];
            n[i] = true;
            return n;
          });
        },
        80 + i * 90,
      );
    });
  }, [stripVis]);

  return (
    <section className="co-section">
      {/* ── backgrounds ── */}
      <div className="co-bg-grid" />
      <div className="co-orb co-orb--1" />
      <div className="co-orb co-orb--2" />

      <div className="co-container">
        {/* ════════ HEADER ════════ */}
        <div className="co-header">
          <div className="about-header">
            <h2 className="about-title">
              Graphic Design Training in Jaipur :{" "}
              <span className="about-highlight">Job Options</span>
            </h2>

            <p className="about-hero-subtitle">
              Graduates from the graphic design coaching in Jaipur can pursue
              different career options in various industries such as
              advertising, digital marketing, IT and media.
            </p>
          </div>
        </div>

        {/* ════════ 4 CAREER CARDS ════════ */}
        <div className="co-cards">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`co-card${cardVis[i] ? " co-visible" : ""}`}
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              {/* <span className="co-card-num">0{i + 1}</span> */}
              <span className="co-card-icon">{card.icon}</span>
              <h3 className="co-card-title">{card.title}</h3>
              <p className="co-card-text">{card.text}</p>
              {/* <span className="co-card-salary">{card.salary} Starting</span> */}
            </div>
          ))}
        </div>
      </div>
      {/* /co-container */}

      {/* ════════════════════════════════════════════
          SALARY STRIP  —  exact image layout
          Left: bold label | Right: 2×3 grid
      ════════════════════════════════════════════ */}
      <div
        ref={stripRef}
        className={`co-strip${stripVis ? " co-strip--visible" : ""}`}
      >
        {/* Decorative line top */}
        <div className="co-strip-topline" />

        {/* Ambient glow */}
        <div className="co-strip-glow" />

        <div className="co-container co-strip-inner">
          {/* ── LEFT LABEL ── */}
          <div className="co-strip-label">
           

            <div className="ex-title about-header">
              <h2 className="about-title">
                              Job Role &amp; Average
                <span className="about-highlight"> Starting Salary</span>
              </h2>
            </div>
          </div>

          {/* ── RIGHT 2×3 GRID ── */}
          <div className="co-sal-grid">
            {salaryGrid.map((item, i) => (
              <div
                key={i}
                className={`co-sal-cell${cellVis[i] ? " co-sal-cell--visible" : ""}`}
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                {/* Top glow bar (appears on hover) */}
                <span className="co-sal-bar" />

                <span className="co-sal-lpa">
                  {item.lpa}
                  <em> LPA</em>
                </span>
                <span className="co-sal-role">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOptions;
