import React from "react";
import "../views/Footer.css";

function Footer() {
  return (
    <div className="footer-container" id="footer-container">
      <h1 className="footer-title">Contact Me</h1>
      <p className="footer-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat consequat
        pulvinar ullamcorper quisque. Sed suspendisse felis sed mollis.
      </p>
      <div className="footer-button-container" id="footer-button-container">
      <a>
        <button className="footer-button">
            <div className="footer-icons">
              <i className="fa-solid fa-envelope" alt="Email icon"></i>
            </div>
          <p className="footer-button-text">
            myemail@gmail.com
          </p>
        </button>
      </a>
      <a>
        <button className="footer-button">
            <div className="footer-icons">
              <i className="fa-brands fa-linkedin" alt="Linkedin icon"></i>
            </div>
          <p className="footer-button-text">
            linkedin.com/in/mylinkdn
          </p>
        </button>
      </a>
      <a>
        <button className="footer-button">
            <div className="footer-icons">
              <i className="fa-brands fa-twitter" alt="Twitter icon"></i>
            </div>
          <p className="footer-button-text">
            twitter.com/mytwitter
          </p>
        </button>
      </a>
      <a>
        <button className="footer-button">
            <div className="footer-icons">
              <i className="fa-solid fa-phone" alt="Phone icon"></i>
            </div>
          <p className="footer-button-text">
            +34 672 779 811
          </p>
        </button>
      </a>
      </div>
    </div>
  );
}

export default Footer;
