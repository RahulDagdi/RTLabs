import React from "react";
import "./Courses.css";

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Video Editing Course",
      content: "Get video editing course in Jaipur and learn to create professional quality videos, ideal for content creators, filmmakers and digital marketers.",
      image: "/img/video.png",
    },
    {
      id: 2,
      name: "Graphic Designing Course",
      content: "Take a graphic design course from Jaipur and learn to express your creativity. Explore graphic designing and make amazing masterpieces.",
      image: "/img/graphic.png",
    },
    {
      id: 3,
      name: "Animation Course",
      content: "Learn animation techniques for creating engaging visual content. Get to know about the principles like timing, spacing and movement in animation.",
      image: "/img/Animation-Course.png",
    },
  ];

  return (
    <>
      <div className="m-5">
        <div className="text-center" style={{ marginTop: "20px" }}>
           
         <div className="about_title"> 
      ✨  Our Courses
  </div>
          <br />
          <div className="about_sub my-3">
            Skilled and Supportive Faculties
            <span className="excel"> !</span>
          </div>
        </div>

        <div className="row my-5 courses_main">
          {courses.map((item) => {
            return (
              <React.Fragment key={item.id}>
                {(item.id + 1) % 2 === 0 ? (
                  <>
                    <div className="col-md-6 empty_div my-3 py-4"></div>
                    <div className="col-md-6 fill_div">
                      <div className="course_card text-center">
                        <div className="course_img_wrapper">
                          <img src={item.image} className="course_img" alt={item?.name} />
                          <div className="course_img_overlay">
                            <span>✨</span>
                          </div>
                        </div>
                        <div className="my-4 course_name">{item?.name}</div>
                        <p className="course_content">{item?.content}</p>
                        <div className="course_btn_wrapper">
                          <button className="course_btn">Learn More →</button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-6 fill_div">
                      <div className="course_card text-center">
                        <div className="course_img_wrapper">
                          <img src={item.image} className="course_img" alt={item?.name} />
                          <div className="course_img_overlay">
                            <span>✨</span>
                          </div>
                        </div>
                        <div className="my-4 course_name">{item?.name}</div>
                        <p className="course_content">{item?.content}</p>
                        <div className="course_btn_wrapper">
                          <button className="course_btn">Learn More →</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 empty_div my-3 py-4"></div>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="row mb-5"></div>
      </div>
    </>
  );
};

export default Courses;