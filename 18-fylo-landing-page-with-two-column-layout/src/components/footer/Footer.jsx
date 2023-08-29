import React from "react";
import PhoneIcon from "../../images/icon-phone.svg";
import EmailIcon from "../../images/icon-email.svg";
import FooterLogo from "../../images/logo2.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <img src={FooterLogo} alt="logo" className="logo" />

        <div id="about">
          <div>
            <ul>
              <li>
                <img
                  src={PhoneIcon}
                  alt="icon-phone"
                  className="foot iconics"
                />
                Phone: +1-543-123-4567
              </li>
              <li>
                <img
                  src={EmailIcon}
                  alt="icon-email"
                  className="foot iconics"
                />
                example@fylo.com
              </li>
            </ul>
          </div>

          <div className="links">
            <ul>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="links">
            <ul>
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div id="icons">
            <span>
              <i className="fa-brands fa-facebook-f"></i>
            </span>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
          </div>
        </div>

        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://moyinadelowo.vercel.app/" target="_blank">
            Moyinoluwa Adelowo
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default Footer;
