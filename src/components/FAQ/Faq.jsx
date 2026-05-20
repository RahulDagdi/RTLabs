// // FaqSection.jsx
// import React, { useState } from "react";
// import "./Faq.css"; // Link to the CSS file
// import { FaPlus, FaMinus } from "react-icons/fa";

// const faqData = [
//   {
//     question: "What is graphic design?",
//     answer: "Graphic design is the art and practice of planning and projecting ideas with visual and textual content.",
//   },
//   {
//     question: "What is graphic design used for?",
//     answer: "It is used in branding, advertising, web design, publications, packaging, and more.",
//   },
//   {
//     question: "Why should I learn graphic design?",
//     answer: "Graphic design skills are in high demand and offer creative and professional opportunities.",
//   },
//   {
//     question: "What skills will I develop after completing this graphic design course in Jaipur?",
//     answer: "You’ll learn design principles, software like Adobe Photoshop, Illustrator, and practical project work.",
//   },
//   {
//     question: "Can I attend a free demo session before enrolling in graphic design training?",
//     answer: "Yes, demo sessions are available to help you understand the course structure and teaching style.",
//   },
//   {
//     question: "What jobs demand you to learn graphic design?",
//     answer: "Roles like UI/UX Designer, Visual Designer, Art Director, and Marketing Designer often require these skills.",
//   },
//   {
//     question: "Which graphic design tools are covered in this course?",
//     answer: "The course covers Adobe Photoshop, Illustrator, InDesign, Figma, and other industry tools.",
//   },
// ];

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleIndex = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-container mt-5">
//       <h2 className="section-title text-center faq-main">FAQs About Graphic Designing Course in Jaipur</h2>
//       <p className="faq-subtitle mb-5">Here’s everything you may ask.</p>
//       <div className="faq-list ">
//         {faqData.map((item, index) => (
//           <div key={index} className="faq-item">
//             <button className="faq-question" onClick={() => toggleIndex(index)}>
//               <span>{item.question}</span>
//               <span className={`icon ${openIndex === index ? "rotate" : ""}`}>
//                 {openIndex === index ? <FaMinus /> : <FaPlus />}
//               </span>
//             </button>
//             <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
//               <p>{item.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faq;

import React, { useState } from "react";
import "./Faq.css";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What is graphic design?",
    answer:
      "Graphic design is about visual storytelling — how we communicate ideas and messages using images, typography, colour and layout. This is applied to logos, social media, advertisements, websites and packaging, among others.",
  },
  {
    question: "What is graphic design used for?",
    answer:
      "Almost every industry uses graphic design — everything from branding and advertising to UI/UX design, video production, and social media content creation. Graphic design is essential for any business that needs to visually communicate.",
  },
  {
    question: "Why should I learn graphic design?",
    answer:
      "Graphic Design is one of the most flexible and sought-after creative skills in 2026. It gives you access to full-time jobs, freelancing opportunities, or even running your own design studio. You can start earning within a few months after taking the right course.",
  },
  {
    question: "What skills will I develop in this course?",
    answer:
      "You will learn photo editing, logo design, vector art, video editing, motion graphics, UI/UX design, and social media creatives using 6 professional tools: Photoshop, Illustrator, Premiere Pro, After Effects, Figma, and Canva.",
  },
  {
    question: "Do I need any prior experience to join this course?",
    answer:
      "No prior experience is needed. Whether you are an absolute beginner or someone looking to strengthen your basics, this course is designed to help you learn from the ground up with a smooth progression into advanced, job-ready skills.",
  },
  {
    question: "Which tools will I learn in these graphic design classes?",
    answer:
      "You will learn six of the most popular design tools in the industry, including Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe After Effects, Figma, and Canva.",
  },
  {
    question: "Can I work as a freelancer after completing this course?",
    answer:
      "Absolutely. Many students from RT Labs work as freelancers after completing the course. The portfolio you build during the training helps you start finding clients and earning from real projects from day one.",
  },
  {
    question:
      "What career opportunities are available after learning graphic design?",
    answer:
      "After completing this certificate course in graphic design, you can apply for roles such as Graphic Designer, Logo Designer, UI/UX Designer, Motion Graphics Artist, Social Media Designer, Video Editor, and Web Designer, with average salaries ranging from ₹2.8 LPA to ₹5+ LPA.",
  },
];

const FaqItem = ({ item, index, isOpen, onToggle }) => {
  return (
    <div
      className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
      style={{ "--i": index }}
    >
      <span className="faq-num">{String(index + 1).padStart(2, "0")}</span>

      <div className="faq-inner">
        <button className="faq-question" onClick={() => onToggle(index)}>
          <span className="faq-q-text">{item.question}</span>
          <span className="faq-icon-wrap">
            <span className="faq-icon-line faq-icon-h" />
            <span className="faq-icon-line faq-icon-v" />
          </span>
        </button>

        {/* Pure CSS transition — no JS height needed */}
        <div className="faq-answer-wrap">
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      </div>

      <span className="faq-glow" />
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      {/* Background grid */}
      <div className="faq-bg-grid" />

      {/* Ambient orbs */}
      <div className="faq-orb faq-orb--1" />
      <div className="faq-orb faq-orb--2" />

      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          {/* <span className="faq-badge">
            <span className="faq-badge-dot" /> FAQ 
          </span> */}
          {/* <h2 className="faq-title">
            Frequently Asked{" "}
            <span className="faq-accent">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about our Graphic Design course in Jaipur.
          </p> */}

          <div className="faq-title about-header">
            <h2 className="about-title">
              Frequently Asked{" "}
              <span className="about-highlight">Questions</span>
            </h2>
          </div>
          <p className="faq-subtitl about-hero-subtitle">
            Everything you need to know about our Graphic Design course in
            Jaipur.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="faq-grid">
          {/* Left col */}
          <div className="faq-col">
            {faqData.slice(0, 4).map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={toggle}
              />
            ))}
          </div>

          {/* Right col */}
          <div className="faq-col">
            {faqData.slice(4).map((item, i) => {
              const realIndex = i + 4;
              return (
                <FaqItem
                  key={realIndex}
                  item={item}
                  index={realIndex}
                  isOpen={openIndex === realIndex}
                  onToggle={toggle}
                />
              );
            })}
          </div>
        </div>

        {/* CTA card outside grid but inside container */}
        <div className="faq-cta-card">
          <span className="faq-cta-icon">💬</span>
          <h4>Unsure Which One to Choose? Let's Talk.</h4>
          <p>
            No pressure, just honest advice using our counsellors' insights to
            help you decide the best fit for your goals, background, and
            schedule.
          </p>
          <Link to="/contact-us" className="faq-cta-btn">
            Talk to Us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;
