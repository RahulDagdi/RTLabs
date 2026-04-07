// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "./NavbarComp.css";

// import { Link } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import EnrollNowModal from "./EnrollNowModal/EnrollNowModal";

// const NavbarComp = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const lastScrollY = useRef(0);
//   const dropdownTimeout = useRef(null); // ← timeout ref

//   // ── Scroll hide/show ──
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       if (currentY < 10) {
//         setHidden(false);
//         setScrolled(false);
//       } else if (currentY > lastScrollY.current) {
//         setHidden(true);
//         setScrolled(true);
//       } else {
//         setHidden(false);
//         setScrolled(true);
//       }
//       lastScrollY.current = currentY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ── Dropdown helpers with delay ──
//   const handleMouseEnter = () => {
//     if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     // 200ms gap — mouse menu tak pahunch sakta hai bina close hue
//     dropdownTimeout.current = setTimeout(() => {
//       setShowDropdown(false);
//     }, 200);
//   };

//   return (
//     <Navbar
//       expand="lg"
//       className={`custom-navbar ${scrolled ? "scrolled" : ""} ${hidden ? "navbar-hidden" : ""}`}
//     >
//       <Container className="px-4 px-lg-5">
//         {/* ── LOGO ── */}
//         <Navbar.Brand>
//           <Link to="/">
//             <img
//               src="/img/logo_1.png"
//               alt="RTLabs Logo"
//               height={42}
//               style={{ width: "auto" }}
//             />
//           </Link>
//         </Navbar.Brand>

//         {/* ── HAMBURGER ── */}
//         <Navbar.Toggle aria-controls="navbarScroll" />

//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto ms-auto my-2 my-lg-0" navbarScroll>
//             <Nav.Link as={Link} to="/">
//               <span className="nav_text">Home</span>
//             </Nav.Link>

//             <Nav.Link as={Link} to="/about">
//               <span className="nav_text">About Us</span>
//             </Nav.Link>

//             {/* ── Course Dropdown ──
//                 Poore wrapper div pe onMouseEnter/Leave lagaya
//                 taaki toggle + menu dono ek unit ki tarah behave karein
//             ── */}
//             <div
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               style={{ position: "relative" }}
//             >
//               <NavDropdown
//                 id="course-dropdown"
//                 show={showDropdown}
//                 title={
//                   <Link
//                     to="/courses"
//                     className="nav_text"
//                     style={{ textDecoration: "none" }}
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     Courses
//                   </Link>
//                 }
//               >
//                 <NavDropdown.Item as={Link} to="/graphics-design-course">
//                   Graphics Course
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </div>

//             <Nav.Link as={Link} to="/contact-us">
//               <span className="nav_text">Contact Us</span>
//             </Nav.Link>
//             {/* 
//             <Nav.Link as={Link} to="/blog">
//               <span className="nav_text">Blog</span>
//             </Nav.Link> */}
//           </Nav>
//           <EnrollNowModal buttonText="Join Now" />
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComp;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "./NavbarComp.css";

// import { Link } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import EnrollNowModal from "./EnrollNowModal/EnrollNowModal";

// const NavbarComp = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const lastScrollY = useRef(0);
//   const dropdownTimeout = useRef(null);

//   // ── Scroll hide/show ──
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       if (currentY < 10) {
//         setHidden(false);
//         setScrolled(false);
//       } else if (currentY > lastScrollY.current) {
//         setHidden(true);
//         setScrolled(true);
//       } else {
//         setHidden(false);
//         setScrolled(true);
//       }
//       lastScrollY.current = currentY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ── Dropdown helpers with delay ──
//   const handleMouseEnter = () => {
//     if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimeout.current = setTimeout(() => {
//       setShowDropdown(false);
//     }, 200);
//   };

//   return (
//     <Navbar
//       expand="lg"
//       className={`custom-navbar ${scrolled ? "scrolled" : ""} ${hidden ? "navbar-hidden" : ""}`}
//       fixed="top"
//     >
//       {/* Custom container with max-width and centering */}
//       <div className="nav-container-custom">
//         {/* ── LOGO (LEFT) ── */}
//         <Navbar.Brand>
//           <Link to="/">
//             <img
//               src="/img/logo_1.png"
//               alt="RTLabs Logo"
//               height={42}
//               style={{ width: "auto" }}
//             />
//           </Link>
//         </Navbar.Brand>

     

//         {/* ── HAMBURGER (Mobile) ── */}
//         <Navbar.Toggle aria-controls="navbarScroll" />

//         <Navbar.Collapse id="navbarScroll">
//           {/* ── NAV LINKS (CENTER) ── */}
//           <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
//             <Nav.Link as={Link} to="/">
//               <span className="nav_text">Home</span>
//             </Nav.Link>

//             <Nav.Link as={Link} to="/about">
//               <span className="nav_text">About Us</span>
//             </Nav.Link>

//             {/* ── Course Dropdown ── */}
//             <div
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               style={{ position: "relative" }}
//             >
//               <NavDropdown
//                 id="course-dropdown"
//                 show={showDropdown}
//                 title={
//                   <Link
//                     to="/courses"
//                     className="nav_text"
//                     style={{ textDecoration: "none" }}
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     Courses
//                   </Link>
//                 }
//               >
//                 <NavDropdown.Item as={Link} to="/graphics-design-course">
//                   🎨 Graphics Course
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/video-editing-course">
//                   ✂️ Video Editing Course
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/animation-course">
//                   🎬 Animation Course
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/3d-modeling-course">
//                   💎 3D Modeling Course
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/ui-ux-course">
//                   🎯 UI/UX Design Course
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </div>

//             <Nav.Link as={Link} to="/contact-us">
//               <span className="nav_text">Contact Us</span>
//             </Nav.Link>
//           </Nav>

//           {/* ── MOBILE CTA BUTTON - Visible only in hamburger menu ── */}
//           <div className="mobile-cta">
//             <EnrollNowModal buttonText="Join Now" />
//           </div>
//         </Navbar.Collapse>
//            {/* ── DESKTOP CTA BUTTON (RIGHT) - Visible only on desktop ── */}
//         <div className="desktop-cta">
//           <EnrollNowModal buttonText="Join Now" />
//         </div>
//       </div>
//     </Navbar>
//   );
// };

// export default NavbarComp;



// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "./NavbarComp.css";

// import { Link } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import EnrollNowModal from "./EnrollNowModal/EnrollNowModal";

// const NavbarComp = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const lastScrollY = useRef(0);
//   const dropdownTimeout = useRef(null);

//   // ── Scroll hide/show ──
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       if (currentY < 10) {
//         setHidden(false);
//         setScrolled(false);
//       } else if (currentY > lastScrollY.current) {
//         setHidden(true);
//         setScrolled(true);
//       } else {
//         setHidden(false);
//         setScrolled(true);
//       }
//       lastScrollY.current = currentY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ── Dropdown helpers with delay ──
//   const handleMouseEnter = () => {
//     if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimeout.current = setTimeout(() => {
//       setShowDropdown(false);
//     }, 200);
//   };

//   return (
//     <Navbar
//       expand="lg"
//       className={`custom-navbar ${scrolled ? "scrolled" : ""} ${hidden ? "navbar-hidden" : ""}`}
//       fixed="top"
//     >
//       {/* Custom container with max-width and centering */}
//       <div className="nav-container-custom">
//         {/* ── LOGO (LEFT) ── */}
//         <Navbar.Brand>
//           <Link to="/">
//             <img
//               src="/img/logo_1.png"
//               alt="RTLabs Logo"
//               height={42}
//               style={{ width: "auto" }}
//             />
//           </Link>
//         </Navbar.Brand>

//         {/* ── HAMBURGER (Mobile) ── */}
//         <Navbar.Toggle aria-controls="navbarScroll" />

//         <Navbar.Collapse id="navbarScroll">
//           {/* ── NAV LINKS (CENTER) ── */}
//           <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
//             <Nav.Link as={Link} to="/">
//               <span className="nav_text">Home</span>
//             </Nav.Link>

//             <Nav.Link as={Link} to="/about">
//               <span className="nav_text">About Us</span>
//             </Nav.Link>

//             {/* ── Course Dropdown ── */}
//             <div
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               style={{ position: "relative" }}
//             >
//               <NavDropdown
//                 id="course-dropdown"
//                 show={showDropdown}
//                 title={
//                   <Link
//                     to="/courses"
//                     className="nav_text"
//                     style={{ textDecoration: "none" }}
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     Courses
//                   </Link>
//                 }
//               >
//                 <NavDropdown.Item as={Link} to="/graphics-design-course">
//                   🎨 Graphics Course
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/video-editing-course">
//                   ✂️ Video Editing Course
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/animation-course">
//                   🎬 Animation Course
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/3d-modeling-course">
//                   💎 3D Modeling Course
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/ui-ux-course">
//                   🎯 UI/UX Design Course
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </div>

//             <Nav.Link as={Link} to="/contact-us">
//               <span className="nav_text">Contact Us</span>
//             </Nav.Link>
//           </Nav>

//           {/* ── MOBILE CTA BUTTON - Visible only in hamburger menu ── */}
//           <div className="mobile-cta">
//             <EnrollNowModal buttonText="Join Now" />
//           </div>
//         </Navbar.Collapse>

//         {/* ── DESKTOP CTA BUTTON (RIGHT) - Visible only on desktop ── */}
//         <div className="desktop-cta">
//           <EnrollNowModal buttonText="Join Now" />
//         </div>
//       </div>
//     </Navbar>
//   );
// };

// export default NavbarComp;


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarComp.css";

import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import EnrollNowModal from "./EnrollNowModal/EnrollNowModal";

const NavbarComp = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownTimeout = useRef(null);

  // ── Scroll hide/show ──
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setHidden(false);
        setScrolled(false);
      } else if (currentY > lastScrollY.current) {
        setHidden(true);
        setScrolled(true);
      } else {
        setHidden(false);
        setScrolled(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Dropdown helpers with delay ──
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${scrolled ? "scrolled" : ""} ${hidden ? "navbar-hidden" : ""}`}
      fixed="top"
    >
      {/* Custom container with max-width and centering */}
      <div className="nav-container-custom">
        {/* ── LOGO (LEFT) ── */}
        <Navbar.Brand>
          <Link to="/">
            <img
              src="/img/logo_1.png"
              alt="RTLabs Logo"
              height={42}
              style={{ width: "auto" }}
            />
          </Link>
        </Navbar.Brand>

    
        {/* ── HAMBURGER (Mobile) ── */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* ── NAV LINKS (CENTER) ── */}
          <Nav className="mx-auto my-2 my-lg-0 w-100 justify-content-center" navbarScroll>
            <Nav.Link as={Link} to="/">
              <span className="nav_text">Home</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              <span className="nav_text">About Us</span>
            </Nav.Link>

            {/* ── Course Dropdown ── */}
            <div
              className="dropdown-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown
                id="course-dropdown"
                show={showDropdown}
               title={
                  <Link
                    to="/courses"
                    className="nav_text"
                    style={{ textDecoration: "none" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Courses
                  </Link>
                }
              >
                <NavDropdown.Item as={Link} to="/graphics-design-course">
                  🎨 Graphics Course
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/video-editing-course">
                  ✂️ Video Editing Course
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/animation-course">
                  🎬 Animation Course
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/3d-modeling-course">
                  💎 3D Modeling Course
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ui-ux-course">
                  🎯 UI/UX Design Course
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <Nav.Link as={Link} to="/contact-us">
              <span className="nav_text">Contact Us</span>
            </Nav.Link>
          </Nav>

          {/* ── MOBILE CTA BUTTON - Visible only in hamburger menu ── */}
          <div className="mobile-cta">
            <EnrollNowModal buttonText="Join Now" />
          </div>
        </Navbar.Collapse>
            {/* ── DESKTOP CTA BUTTON (RIGHT) - Visible only on desktop ── */}
        <div className="desktop-cta">
          <EnrollNowModal buttonText="Join Now" />
        </div>

      </div>
    </Navbar>
  );
};

export default NavbarComp;