import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowRight } from "react-icons/ti";
import ".././Hero.css";

const ContactUsButton = ({ buttonText = "Contact Us", buttonClass = "explore-button" }) => {
  return (
    <div>

    <Link to="/contact-us">
      <div className={buttonClass}>
        <span className="text-uppercase">{buttonText}</span>
        <span><TiArrowRight size={25} /></span>
      </div>
    </Link>
   



    </div>
  );
};

export default ContactUsButton;