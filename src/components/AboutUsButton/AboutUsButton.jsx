import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowRight } from "react-icons/ti";
import ".././Hero.css";

const AboutUsButton = ({ buttonText = "About Us", buttonClass = "explore-button" }) => {
  return (
    <Link to="/about">
      <div className={buttonClass}>
        <span className="text-uppercase">{buttonText}</span>
        <span><TiArrowRight size={25} /></span>
      </div>
    </Link>
  );
};

export default AboutUsButton;