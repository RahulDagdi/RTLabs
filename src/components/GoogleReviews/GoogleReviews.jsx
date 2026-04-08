// import React from "react";
// import Slider from "react-slick";
// import "./GoogleReviews.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const GoogleReviews = () => {
//   const [slidesToShow, setSlidesToShow] = React.useState(3);

//   React.useEffect(() => {
//     const updateSlides = () => {
//       const width = window.innerWidth;

//       if (width <= 768) {
//         setSlidesToShow(1);
//       } else if (width <= 1024) {
//         setSlidesToShow(2);
//       } else {
//         setSlidesToShow(3);
//       }
//     };

//     updateSlides(); // run on load
//     window.addEventListener("resize", updateSlides);

//     return () => window.removeEventListener("resize", updateSlides);
//   }, []);
//   const reviews = [
//     {
//       name: "Rohit Sharma",
//       image:
//         "https://ui-avatars.com/api/?name=Rohit+Sharma&background=0D8ABC&color=fff",
//       text: "I completed the Web Development course here. The trainers explain everything clearly and give practical projects.",
//       rating: 5,
//     },
//     {
//       name: "Priya Verma",
//       image:
//         "https://ui-avatars.com/api/?name=Priya+Verma&background=1abc9c&color=fff",
//       text: "Best institute for learning Graphic Design. The course structure is very easy to understand.",
//       rating: 5,
//     },
//     {
//       name: "Amit Singh",
//       image:
//         "https://ui-avatars.com/api/?name=Amit+Singh&background=e67e22&color=fff",
//       text: "I joined the Digital Marketing course and learned SEO, Google Ads and Social Media marketing.",
//       rating: 5,
//     },
//     {
//       name: "Neha Gupta",
//       image:
//         "https://ui-avatars.com/api/?name=Neha+Gupta&background=8e44ad&color=fff",
//       text: "Great place to learn website design. Teachers are very supportive.",
//       rating: 5,
//     },
//     {
//       name: "Rahul Yadav",
//       image:
//         "https://ui-avatars.com/api/?name=Rahul+Yadav&background=3498db&color=fff",
//       text: "The web development training here helped me build real projects.",
//       rating: 5,
//     },
//     {
//       name: "Pooja Sharma",
//       image:
//         "https://ui-avatars.com/api/?name=Pooja+Sharma&background=e74c3c&color=fff",
//       text: "Graphic design course is amazing. I learned Photoshop, Illustrator and Canva.",
//       rating: 5,
//     },
//     {
//       name: "Ankit Jain",
//       image:
//         "https://ui-avatars.com/api/?name=Ankit+Jain&background=16a085&color=fff",
//       text: "Highly recommended institute for learning web development and UI design.",
//       rating: 5,
//     },
//     {
//       name: "Simran Kaur",
//       image:
//         "https://ui-avatars.com/api/?name=Simran+Kaur&background=2ecc71&color=fff",
//       text: "Very friendly teachers and practical training sessions.",
//       rating: 5,
//     },
//     {
//       name: "Vikas Mehta",
//       image:
//         "https://ui-avatars.com/api/?name=Vikas+Mehta&background=f39c12&color=fff",
//       text: "I improved my web designing skills a lot after joining this course.",
//       rating: 5,
//     },
//     {
//       name: "Deepak Kumar",
//       image:
//         "https://ui-avatars.com/api/?name=Deepak+Kumar&background=34495e&color=fff",
//       text: "Best institute in Jaipur for website development and digital marketing.",
//       rating: 5,
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     speed: 600,

//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//   };
//   return (
//     <section className="review-section">
//       <h2 className="review-title">Students Review on Google</h2>

//       <div className="review-wrapper">
//         <Slider {...settings}>
//           {reviews.map((review, index) => (
//             <div key={index} className="review-slide">
//               <div className="review-card">
//                 <div className="review-top">
//                   <img
//                     src={review.image}
//                     alt={review.name}
//                     className="review-img"
//                   />
//                   <h4 className="review-name">{review.name}</h4>
//                 </div>

//                 <p className="review-text">{review.text}</p>

//                 <div className="review-stars">{"⭐".repeat(review.rating)}</div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default GoogleReviews;



// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "./GoogleReviews.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // ── Fallback static data (shown if API fails) ─────────────────
// const FALLBACK_REVIEWS = [
//   { name: "Rohit Sharma",  image: "", rating: 5, time: "2 months ago", text: "I completed the Web Development course here. The trainers explain everything clearly and give practical projects." },
//   { name: "Priya Verma",   image: "", rating: 5, time: "3 months ago", text: "Best institute for learning Graphic Design. The course structure is very easy to understand." },
//   { name: "Amit Singh",    image: "", rating: 5, time: "1 month ago",  text: "I joined the Digital Marketing course and learned SEO, Google Ads and Social Media marketing." },
//   { name: "Neha Gupta",    image: "", rating: 5, time: "4 months ago", text: "Great place to learn website design. Teachers are very supportive and approachable." },
//   { name: "Rahul Yadav",   image: "", rating: 5, time: "2 months ago", text: "The web development training helped me build real projects and land a job." },
//   { name: "Pooja Sharma",  image: "", rating: 5, time: "5 months ago", text: "Graphic design course is amazing. I learned Photoshop, Illustrator and Canva professionally." },
// ];

// // ── Avatar fallback ───────────────────────────────────────────
// const avatarColors = [
//   "#0D8ABC","#1abc9c","#e67e22","#8e44ad",
//   "#3498db","#e74c3c","#16a085","#2ecc71",
// ];

// const getInitials = (name = "") =>
//   name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

// const getColor = (name = "") =>
//   avatarColors[name.charCodeAt(0) % avatarColors.length];

// // ── Star renderer ─────────────────────────────────────────────
// const Stars = ({ rating }) => (
//   <div className="gr-stars">
//     {[1, 2, 3, 4, 5].map((s) => (
//       <svg
//         key={s}
//         className={`gr-star ${s <= rating ? "gr-star--filled" : "gr-star--empty"}`}
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//       </svg>
//     ))}
//   </div>
// );

// // ── Single review card ────────────────────────────────────────
// const ReviewCard = ({ review, index }) => {
//   const [imgError, setImgError] = useState(false);

//   return (
//     <div className="gr-card" style={{ "--i": index }}>
//       {/* Top glow line */}
//       <div className="gr-card-glow" />

//       {/* Quote mark */}
//       <span className="gr-quote">"</span>

//       {/* Review text */}
//       <p className="gr-text">{review.text || "Great experience at RTLabs!"}</p>

//       {/* Stars */}
//       <Stars rating={review.rating} />

//       {/* Divider */}
//       <div className="gr-divider" />

//       {/* Reviewer info */}
//       <div className="gr-reviewer">
//         {review.image && !imgError ? (
//           <img
//             src={review.image}
//             alt={review.name}
//             className="gr-avatar"
//             onError={() => setImgError(true)}
//           />
//         ) : (
//           <div
//             className="gr-avatar gr-avatar--fallback"
//             style={{ background: getColor(review.name) }}
//           >
//             {getInitials(review.name)}
//           </div>
//         )}
//         <div className="gr-reviewer-info">
//           <span className="gr-reviewer-name">{review.name}</span>
//           <span className="gr-reviewer-time">{review.time}</span>
//         </div>
//         {/* Google G */}
//         <span className="gr-google-icon">
//           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//             <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//             <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//             <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//           </svg>
//         </span>
//       </div>
//     </div>
//   );
// };

// // ── Main component ────────────────────────────────────────────
// const GoogleReviews = () => {
//   const [reviews, setReviews]           = useState([]);
//   const [overallRating, setOverallRating] = useState(null);
//   const [totalReviews, setTotalReviews]   = useState(null);
//   const [loading, setLoading]           = useState(true);
//   const [error, setError]               = useState(false);
//   const [slidesToShow, setSlidesToShow] = useState(3);

//   // ── Responsive slides ──
//   useEffect(() => {
//     const update = () => {
//       const w = window.innerWidth;
//       setSlidesToShow(w <= 640 ? 1 : w <= 1024 ? 2 : 3);
//     };
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   // ── Fetch reviews from your backend proxy ──
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         // Change this URL to your backend URL in production
//         const res = await fetch(
//           process.env.REACT_APP_API_URL
//             ? `${process.env.REACT_APP_API_URL}/api/reviews`
//             : "/api/reviews"
//         );

//         if (!res.ok) throw new Error("API error");

//         const data = await res.json();
//         setReviews(data.reviews || []);
//         setOverallRating(data.overallRating);
//         setTotalReviews(data.totalReviews);
//       } catch (err) {
//         console.warn("Using fallback reviews:", err.message);
//         setReviews(FALLBACK_REVIEWS);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     speed: 700,
//     slidesToShow,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     arrows: false,
//     dotsClass: "slick-dots gr-dots",
//   };

//   return (
//     <section className="gr-section">
//       {/* Ambient bg */}
//       <div className="gr-bg-glow gr-bg-glow--l" />
//       <div className="gr-bg-glow gr-bg-glow--r" />

//       {/* Header */}
//       <div className="gr-header">
//         <span className="gr-badge">
//           <span className="gr-badge-dot" />
//           Verified Reviews
//         </span>
//         <h2 className="gr-title">
//           What Our <span className="gr-accent">Students</span> Say
//         </h2>
//         <p className="gr-subtitle">Real reviews from Google — straight from our students in Jaipur.</p>

//         {/* Overall rating bar */}
//         {!error && overallRating && (
//           <div className="gr-overall">
//             <span className="gr-overall-score">{overallRating.toFixed(1)}</span>
//             <div className="gr-overall-right">
//               <Stars rating={Math.round(overallRating)} />
//               <span className="gr-overall-count">
//                 Based on {totalReviews?.toLocaleString()} Google reviews
//               </span>
//             </div>
//             {/* Google logo */}
//             <img
//               className="gr-powered"
//               src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
//               alt="Google"
//             />
//           </div>
//         )}
//       </div>

//       {/* Slider */}
//       <div className="gr-slider-wrap">
//         {loading ? (
//           <div className="gr-loading">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="gr-skeleton" />
//             ))}
//           </div>
//         ) : (
//           <Slider {...sliderSettings}>
//             {reviews.map((review, i) => (
//               <div key={i} className="gr-slide">
//                 <ReviewCard review={review} index={i} />
//               </div>
//             ))}
//           </Slider>
//         )}
//       </div>

//       {/* CTA */}
//       <div className="gr-cta">
//         <a
//         //   href="https://g.page/r/YOUR_RTLABS_REVIEW_LINK/review"
//           href="https://www.google.com/search?sca_esv=e0c4261b8df016cf&rlz=1C1JJTC_enIN1140IN1140&sxsrf=ANbL-n7sbNTYlsHGMCxA3QghnXzqPulquw:1774429099896&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcyxt9c9Ric-RTzI4Vr_OinNeZKhzriSawIc30w7oALocZSbVcxjHZ_9H2P8mg_J_cx1m02p2TGcw-EKf1XL881x-WunR7-HYbJ1GGR69BgGmI6Xm7i50JadLwmKrgzkmpBHi8w_3BkRh-LmWM_ZkiXyDNOf&q=RTLabs+-+Video+Editing+%26+Graphic+Designing+Courses+in+Jaipur+Reviews&sa=X&ved=2ahUKEwixvrbB17qTAxX9fGwGHZ1KBZMQ0bkNegQIMBAH&biw=1280&bih=559&dpr=1.5#lrd=0x396db5a3bf94e9ed:0x46ad11f4497c3203,3,,,,"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="gr-cta-btn"
//         >
//           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="gr-cta-google">
//             <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//             <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//             <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//             <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//           </svg>
//           Leave a Review on Google
//         </a>
//       </div>
//     </section>
//   );
// };

// export default GoogleReviews;


// GoogleReviews.jsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./GoogleReviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// ── Fallback static data (will be replaced by live API data) ─────────────────
const FALLBACK_REVIEWS = [
  { name: "Rohit Sharma",  image: "", rating: 5, time: "2 months ago", text: "I completed the Web Development course here. The trainers explain everything clearly and give practical projects." },
  { name: "Priya Verma",   image: "", rating: 5, time: "3 months ago", text: "Best institute for learning Graphic Design. The course structure is very easy to understand." },
  { name: "Amit Singh",    image: "", rating: 5, time: "1 month ago",  text: "I joined the Digital Marketing course and learned SEO, Google Ads and Social Media marketing." },
  { name: "Neha Gupta",    image: "", rating: 5, time: "4 months ago", text: "Great place to learn website design. Teachers are very supportive and approachable." },
  { name: "Rahul Yadav",   image: "", rating: 5, time: "2 months ago", text: "The web development training helped me build real projects and land a job." },
  { name: "Pooja Sharma",  image: "", rating: 5, time: "5 months ago", text: "Graphic design course is amazing. I learned Photoshop, Illustrator and Canva professionally." },
];

// ── Avatar fallback ───────────────────────────────────────────
const avatarColors = [
  "#0D8ABC","#1abc9c","#e67e22","#8e44ad",
  "#3498db","#e74c3c","#16a085","#2ecc71",
];

const getInitials = (name = "") =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

const getColor = (name = "") =>
  avatarColors[name.charCodeAt(0) % avatarColors.length];

// ── Star renderer ─────────────────────────────────────────────
const Stars = ({ rating }) => (
  <div className="gr-stars">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg
        key={s}
        className={`gr-star ${s <= rating ? "gr-star--filled" : "gr-star--empty"}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

// ── Single review card (EXACT SAME DESIGN) ────────────────────────
const ReviewCard = ({ review, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="gr-card" style={{ "--i": index }}>
      {/* Top glow line */}
      <div className="gr-card-glow" />

      {/* Quote mark */}
      <span className="gr-quote">"</span>

      {/* Review text */}
      <p className="gr-text">{review.text || "Great experience at RTLabs!"}</p>

      {/* Stars */}
      <Stars rating={review.rating} />

      {/* Divider */}
      <div className="gr-divider" />

      {/* Reviewer info */}
      <div className="gr-reviewer">
        {review.image && !imgError ? (
          <img
            src={review.image}
            alt={review.name}
            className="gr-avatar"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="gr-avatar gr-avatar--fallback"
            style={{ background: getColor(review.name) }}
          >
            {getInitials(review.name)}
          </div>
        )}
        <div className="gr-reviewer-info">
          <span className="gr-reviewer-name">{review.name}</span>
          <span className="gr-reviewer-time">{review.time}</span>
        </div>
        {/* Google G */}
        <span className="gr-google-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </span>
      </div>
    </div>
  );
};

// ── Map Component (SAME AS YOUR CODE) ───────────────────────────────────
const GoogleMap = () => {
  return (
    <div className="gr-map-container">
      <iframe
        title="Google Map Location"
        src="https://www.google.com/maps?q=RTLabs+Jaipur&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="gr-iframe"
      ></iframe>
    </div>
  );
};

// ── Main Component with LIVE API INTEGRATION ────────────────────────────
const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [overallRating, setOverallRating] = useState(null);
  const [totalReviews, setTotalReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [showMap, setShowMap] = useState(false);

  // ── Responsive slides ──
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setSlidesToShow(w <= 640 ? 1 : w <= 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ── FETCH LIVE GOOGLE REVIEWS FROM RTlabs API ──
  useEffect(() => {
    const fetchLiveReviews = async () => {
      try {
        setLoading(true);
        
        // 🔴🔴🔴 IMPORTANT: REPLACE THIS URL WITH YOUR ACTUAL RTlabs API ENDPOINT 🔴🔴🔴
        const API_URL = "https://api.rtlabs.in/v1/google/reviews"; // <-- CHANGE THIS TO YOUR REAL API URL
        
        // 🔴 If your API requires authentication, uncomment and add your API key
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer YOUR_API_KEY", // <-- UNCOMMENT IF NEEDED
            // "X-API-Key": "YOUR_API_KEY", // <-- UNCOMMENT IF NEEDED
          }
        });
        
        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // 🔴 ADJUST THIS MAPPING BASED ON YOUR ACTUAL API RESPONSE STRUCTURE
        // The code below assumes API returns something like:
        // {
        //   reviews: [{ author_name, profile_photo_url, text, rating, relative_time_description }],
        //   averageRating: 4.8,
        //   total: 50
        // }
        
        let formattedReviews = [];
        let avgRating = null;
        let total = 0;
        
        // Case 1: API returns data.reviews array
        if (data.reviews && Array.isArray(data.reviews)) {
          formattedReviews = data.reviews.map(review => ({
            name: review.author_name || review.name || "Google User",
            image: review.profile_photo_url || review.photo_url || "",
            text: review.text || review.review_text || review.comment || "Great experience!",
            rating: review.rating || review.stars || 5,
            time: review.relative_time_description || review.time || "Recent"
          }));
          avgRating = data.averageRating || data.avg_rating;
          total = data.totalReviews || data.total || formattedReviews.length;
        }
        // Case 2: API returns data directly as array
        else if (Array.isArray(data)) {
          formattedReviews = data.map(review => ({
            name: review.author_name || review.name || "Google User",
            image: review.profile_photo_url || review.photo_url || "",
            text: review.text || review.review_text || "Great experience!",
            rating: review.rating || 5,
            time: review.relative_time_description || review.time || "Recent"
          }));
          total = formattedReviews.length;
          avgRating = formattedReviews.reduce((sum, r) => sum + r.rating, 0) / total;
        }
        // Case 3: API returns data.data array
        else if (data.data && Array.isArray(data.data)) {
          formattedReviews = data.data.map(review => ({
            name: review.author_name || review.name || "Google User",
            image: review.profile_photo_url || review.photo_url || "",
            text: review.text || review.review_text || "Great experience!",
            rating: review.rating || 5,
            time: review.relative_time_description || review.time || "Recent"
          }));
          total = data.total || formattedReviews.length;
          avgRating = data.average_rating || data.avgRating;
        }
        
        if (formattedReviews.length > 0) {
          setReviews(formattedReviews);
          setOverallRating(avgRating || (formattedReviews.reduce((sum, r) => sum + r.rating, 0) / formattedReviews.length));
          setTotalReviews(total || formattedReviews.length);
          setError(false);
        } else {
          throw new Error("No reviews found in API response");
        }
        
      } catch (err) {
        console.error("❌ Error fetching live reviews:", err);
        setError(true);
        // Use fallback data if API fails
        setReviews(FALLBACK_REVIEWS);
        setOverallRating(4.9);
        setTotalReviews(FALLBACK_REVIEWS.length);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveReviews();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 700,
    slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    dotsClass: "slick-dots gr-dots",
  };

  return (
    <>
      <section className="gr-section">
        {/* Ambient bg */}
        <div className="gr-bg-glow gr-bg-glow--l" />
        <div className="gr-bg-glow gr-bg-glow--r" />

        {/* Header */}
        <div className="gr-header">
          <span className="gr-badge">
            <span className="gr-badge-dot" />
            Verified Reviews
          </span>
          <h2 className="gr-title">
            What Our <span className="gr-accent">Students</span> Say
          </h2>
          <p className="gr-subtitle">Real reviews from Google — straight from our students in Jaipur.</p>

          {/* Overall rating bar */}
          {!error && overallRating && (
            <div className="gr-overall">
              <span className="gr-overall-score">{overallRating.toFixed(1)}</span>
              <div className="gr-overall-right">
                <Stars rating={Math.round(overallRating)} />
                <span className="gr-overall-count">
                  Based on {totalReviews?.toLocaleString()} Google reviews
                </span>
              </div>
              {/* Google logo */}
              <img
                className="gr-powered"
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
              />
            </div>
          )}
        </div>

        {/* Slider */}
        <div className="gr-slider-wrap">
          {loading ? (
            <div className="gr-loading">
              {[1, 2, 3].map((i) => (
                <div key={i} className="gr-skeleton" />
              ))}
            </div>
          ) : (
            <Slider {...sliderSettings}>
              {reviews.map((review, i) => (
                <div key={i} className="gr-slide">
                  <ReviewCard review={review} index={i} />
                </div>
              ))}
            </Slider>
          )}
        </div>

        {/* CTA */}
        <div className="gr-cta">
          <Link
            to="https://www.google.com/search?sca_esv=e0c4261b8df016cf&rlz=1C1JJTC_enIN1140IN1140&sxsrf=ANbL-n7sbNTYlsHGMCxA3QghnXzqPulquw:1774429099896&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcyxt9c9Ric-RTzI4Vr_OinNeZKhzriSawIc30w7oALocZSbVcxjHZ_9H2P8mg_J_cx1m02p2TGcw-EKf1XL881x-WunR7-HYbJ1GGR69BgGmI6Xm7i50JadLwmKrgzkmpBHi8w_3BkRh-LmWM_ZkiXyDNOf&q=RTLabs+-+Video+Editing+%26+Graphic+Designing+Courses+in+Jaipur+Reviews&sa=X&ved=2ahUKEwixvrbB17qTAxX9fGwGHZ1KBZMQ0bkNegQIMBAH&biw=1280&bih=559&dpr=1.5#lrd=0x396db5a3bf94e9ed:0x46ad11f4497c3203,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="gr-cta-btn"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="gr-cta-google">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Leave a Review on Google
          </Link>
        </div>


        {/* Map Section - EXACT SAME AS YOUR CODE */}
  {/* <div className="gr-map-header mt-3 ">
        <h3 className="gr-map-title ">
  <i className="fas fa-map-marker-alt"></i> Find Us On Google Maps
</h3>
          <button 
            className="gr-map-toggle"
            onClick={() => setShowMap(!showMap)}
          >
            {showMap ? "Hide Map" : "Show Location"}
          </button>
        </div>
        {showMap && <GoogleMap />} */}




      </section>

      {/* Map Section - EXACT SAME AS YOUR CODE */}
      {/* <section className="gr-map-section">
        <div className="gr-map-header">
          <h3 className="gr-map-title">
            <i className="fas fa-map-marker-alt"></i> Find Us On Google Maps
          </h3>
          <button 
            className="gr-map-toggle"
            onClick={() => setShowMap(!showMap)}
          >
            {showMap ? "Hide Map" : "Show Location"}
          </button>
        </div>
        {showMap && <GoogleMap />}
      </section> */}
    </>
  );
};

export default GoogleReviews;