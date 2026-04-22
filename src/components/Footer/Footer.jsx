import React from 'react';
import './Footer.css';
import { Link, Links } from 'react-router-dom';
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaWhatsapp />, url: "https://wa.me/919887448844", name: "WhatsApp", color: "#25D366" },
    { icon: <GrInstagram />, url: "https://www.instagram.com", name: "Instagram", color: "#E4405F" },
    { icon: <RiFacebookFill />, url: "https://www.facebook.com", name: "Facebook", color: "#1877F2" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com", name: "LinkedIn", color: "#0A66C2" },

  ];

  return (
    <footer className="site-footer">
      {/* Top glow line */}
      <div className="footer-top-accent" />

      {/* Main 3-col grid */}
      <div className="footer-main">
        {/* Col 1: About */}
        <div className="footer-widget">
          <div className="footer-logo">
            <Link to="/" onClick={handleClick}>
              <img src="/img/logo_1.png" alt="RTLabs Logo" />
            </Link>
          </div>

          <p className="footer-about-text" style={{color:"white"}}>
            RTLabs — Jaipur's creative institute for graphic design, animation,
            and video editing. Enhance your ability to create with valuable
            expertise and practical experience.
          </p>

          {/* Social icons */}
          <div className="footer-socials">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                to={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                // aria-label={social.name}
                style={{ '--hover-color': social.color }}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 2: Useful Links */}
        <div className="footer-widget">
          <h4 className="footer-widget-title">Useful Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about" onClick={handleClick}>About Us</Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={handleClick}>Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy" onClick={handleClick}>Privacy Policy</Link>
            </li>
            <li>
              <Link to="/graphics-design-course" onClick={handleClick}>Graphic Design Course</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Info */}
        <div className="footer-widget">
          <h4 className="footer-widget-title">Contact Info</h4>
          
          <div className="footer-info-pills">
            <Link to="mailto:info@rtlabs.in" className="info-pill">
              <span className="info-pill-icon"><HiOutlineMail /></span>
              info@rtlabs.in
            </Link>
            <Link to="tel:+919887448844" className="info-pill">
              <span className="info-pill-icon"><HiOutlinePhone /></span>
              +91 98874 48844
            </Link>
            <span className="info-pill">
              <span className="info-pill-icon"><HiOutlineLocationMarker /></span>
              Jaipur, Rajasthan, India
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Copyright */}
      <div className="footer-copyright">
        <span>© {year}</span>
        <span className="copyright-dot">·</span>
        <Link to="/" onClick={handleClick}>RTLabs</Link>
        <span className="copyright-dot">·</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;