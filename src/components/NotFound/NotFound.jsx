import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import { FaHome } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";

const NotFound = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   window.location.reload()
  //   const timer = setTimeout(() => {
  //     const rhElements = document.querySelectorAll('[data-rh="true"]');
  //     rhElements.forEach((el) => el.removeAttribute("data-rh"));
  //   }, 100); // Delay helps wait for Helmet to render

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* <Helmet>
        <title>404 Error | RTlabs – Page Not Found</title>
        <meta
          name="description"
          content="Whoops! The page you’re looking for doesn’t exist. Check out RTlabs for expert-led creative courses in Jaipur."
        />
        <meta name="Author" content="RTLabs" />
        <meta name="Language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta
          property="og:title"
          content="404 Error | RTlabs – Page Not Found"
        />
        <meta
          property="og:description"
          content="Whoops! The page you’re looking for doesn’t exist. Check out RTlabs for expert-led creative courses in Jaipur."
        />
        <meta name="robots" content="index, follow" />
      </Helmet> */}

      <Helmet>
  <title>404 Error | RTlabs – Page Not Found</title>
  <meta
    key="description"
    name="description"
    content="Whoops! The page you’re looking for doesn’t exist. Check out RTlabs for expert-led creative courses in Jaipur."
  />
  <meta key="author" name="author" content="RTLabs" />
  <meta key="language" name="language" content="English" />
  <meta key="revisit" name="revisit-after" content="7 days" />
  <meta
    key="og:title"
    property="og:title"
    content="404 Error | RTlabs – Page Not Found"
  />
  <meta
    key="og:description"
    property="og:description"
    content="Whoops! The page you’re looking for doesn’t exist. Check out RTlabs for expert-led creative courses in Jaipur."
  />
  <meta key="robots" name="robots" content="index, follow" />
</Helmet>


      <div className="notfound-container">
        <div className="notfound-content">
          <div className="notfound-image">
            <img src="/img/cat1.png" alt="Lost in Space" />
          </div>
          <div className="notfound-text">
            <h1 className="notfound-code">404</h1>
            <p className="notfound-message">Opps! that page can’t be found</p>
            <button className="notfound-button" onClick={() => navigate("/")}>
              <FaHome size={20} style={{ marginRight: "10px" }} />
              Go To Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
