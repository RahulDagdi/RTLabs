import React from 'react';
import EnrollNowModal from '../EnrollNowModal/EnrollNowModal';
import AboutUsButton from '../AboutUsButton/AboutUsButton';

// Example 1: Kisi bhi page par use karna
const ExamplePage = () => {
  return (
    <div>
      {/* <h1>Welcome to Our Page</h1> */}
      
      {/* Default styling ke saath */}
      <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
        <AboutUsButton />
        <EnrollNowModal />
      </div>

      {/* Custom button text ke saath */}
      {/* <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
        <AboutUsButton buttonText="Learn More" />
        <EnrollNowModal buttonText="Register Now" />
      </div> */}

      {/* Different button class ke saath */}
      {/* <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
        <AboutUsButton buttonClass="explore-button" />
        <EnrollNowModal buttonClass="explore-button" />
      </div> */}
    </div>
  );
};

// Example 2: Navbar me use karna
const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <AboutUsButton buttonText="About" buttonClass="nav-button" />
        <EnrollNowModal buttonText="Enroll" buttonClass="nav-button" />
      </div>
    </nav>
  );
};

// Example 3: Footer me use karna
const Footer = () => {
  return (
    <footer>
      <div className="footer-cta">
        <h3>Ready to Start?</h3>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <EnrollNowModal />
          <AboutUsButton />
        </div>
      </div>
    </footer>
  );
};

// Example 4: Sidebar me use karna
const Sidebar = () => {
  return (
    <aside>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <AboutUsButton buttonText="Know More" />
        <EnrollNowModal buttonText="Join Us" />
      </div>
    </aside>
  );
};

export { ExamplePage, Navbar, Footer, Sidebar };