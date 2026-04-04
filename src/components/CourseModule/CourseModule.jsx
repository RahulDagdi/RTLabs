 

import React, { useState } from "react";
import "./CourseModule.css";

const courses = [
  {
    id: 1,
    name: "Introduction to Graphic Design",
    logo: "design-intro.png",
    description:
      "Learn the basics of visual communication, design principles, color theory, and typography. Perfect for beginners starting their creative journey.",
  },
  {
    id: 2,
    name: "Adobe Photoshop Essentials",
    logo: "photoshop.png",
    description:
      "Master photo editing, retouching, and compositing using Adobe Photoshop. Work on real-world projects and creative compositions.",
  },
  {
    id: 3,
    name: "Adobe Illustrator Mastery",
    logo: "illustrator.png",
    description:
      "Create professional vector graphics, logos, icons, and illustrations. Understand paths, shapes, pen tools, and branding techniques.",
  },
  {
    id: 4,
    name: "UI/UX Design Fundamentals",
    logo: "uiux.png",
    description:
      "Understand user-centered design, wireframing, and prototyping using tools like Figma and Adobe XD. Perfect for aspiring UI/UX designers.",
  },
  {
    id: 5,
    name: "Motion Graphics with After Effects",
    logo: "aftereffects.png",
    description:
      "Bring your designs to life with animation. Learn keyframe-based motion graphics, transitions, and effects in Adobe After Effects.",
  },
  {
    id: 6,
    name: "Branding & Visual Identity",
    logo: "branding.png",
    description:
      "Design logos, brand guides, and full visual identities for businesses and personal brands. Dive deep into color palettes and storytelling.",
  },
  {
    id: 7,
    name: "Portfolio & Freelancing Skills",
    logo: "portfolio.png",
    description:
      "Build a stunning portfolio, learn to pitch clients, price your work, and succeed as a freelance graphic designer in the industry.",
  },
];

const CourseModule = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <>
    
        <h2>heading</h2>
        <h3>sub heading</h3>
    <div className="course-module-container ">
      <div className="team-list-panel">
        <div className="team-squad-header">
          <div className="header-cell">#</div>
          <div className="header-cell">Course Modules</div>
        </div>

        {courses.map((course) => (
          <div
            className={`team-row ${selectedCourse.id === course.id ? "active" : ""}`}
            key={course.id}
            onClick={() => setSelectedCourse(course)}
          >
            <div className="team-cell rank">{course.id}</div>
            <div className="team-cell info">
              <img
                src={`/images/${course.logo}`}
                // alt={course.name}
                className="team-logo"
              />
              <span className="team-name">{course.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="team-detail-panel text-center">
        <h2 className="text-center">{selectedCourse.name}</h2>
        <div className="d-flex justify-content-center">

        <img
          src="/img/graphics.jpg"
          alt={selectedCourse.name}
          className="detail-logo"
        />
        </div>
        <div className="d-flex justify-content-center">
        <p className="text-center">{selectedCourse.description}</p>
            </div>
         

      </div>
    </div>
    </>
  );
};

export default CourseModule;
