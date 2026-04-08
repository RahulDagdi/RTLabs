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

const faqData = [
  {
    question: "What is graphic design?",
    answer:
      "Graphic design is the art and practice of planning and projecting ideas with visual and textual content. It blends creativity with strategy to communicate messages through imagery, typography, and layout. Graphic design helps brands, businesses, and individuals present ideas effectively and attractively.",
  },
  {
    question: "What is graphic design used for?",
    answer:
      "Graphic design is used in branding, advertising, websites, social media, packaging, and marketing materials. It plays a key role in visually communicating messages and building a strong brand identity.",
  },
  {
    question: "Why should I learn graphic design?",
    answer:
      "Learning graphic design opens up career opportunities in creative fields, freelancing, and digital marketing. It allows you to express creativity while building valuable skills that are in high demand across industries.",
  },
  {
    question: "What skills will I develop in this course?",
    answer:
      "You will learn design fundamentals, color theory, typography, layout design, and gain hands-on experience with real-world projects to build a strong professional portfolio.",
  },
  {
    question: "Do I need any prior experience to join this course?",
    answer:
      "No prior experience is required. This course is designed for beginners as well as those looking to upgrade their skills, starting from basics to advanced concepts.",
  },
  {
    question: "Which tools will I learn in graphic design?",
    answer:
      "You will learn industry-standard tools such as Adobe Photoshop, Illustrator, InDesign, Figma, Canva, and other essential design software used by professionals.",
  },
  {
    question: "Can I work as a freelancer after completing this course?",
    answer:
      "Yes, after completing the course you can start freelancing by working on projects like logo design, social media creatives, branding, and more. You will also learn how to build your portfolio and find clients.",
  },
  {
    question: "What career opportunities are available after learning graphic design?",
    answer:
      "You can pursue roles such as Graphic Designer, UI/UX Designer, Visual Designer, Branding Specialist, Motion Graphics Artist, and Digital Marketing Designer in various industries.",
  },
];

const FaqItem = ({ item, index, isOpen, onToggle }) => {
  return (
    <div
      className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
      style={{ "--i": index }}
    >
      <span className="faq-num">
        {String(index + 1).padStart(2, "0")}
      </span>

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
          <span className="faq-badge">
            <span className="faq-badge-dot" /> FAQ 
          </span>
          <h2 className="faq-title">
            Frequently Asked{" "}
            <span className="faq-accent">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about our Graphic Design course in Jaipur.
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
          <h4>Still have questions?</h4>
          <p>Our team is ready to help you choose the right course.</p>
          <a href="/contact-us" className="faq-cta-btn">
            Talk to Us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;