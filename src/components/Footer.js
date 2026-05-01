import React from "react";
import { FaHome, FaMailBulk, FaPhone, FaLinkedin, FaInstagram, } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Block R3/A, Uttam Nagar</p>
            <p>New Delhi, India</p>

            {/* moved phone and email inside .location so they appear under the address on all viewports */}
            <div className="phone">
              <h4>
                <FaPhone size={20} style={{ color: "#fff" }} />
                98187070xx
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                sb097097@gmail.com
              </h4>
            </div>
          </div>
        </div>

        <div className="right">
          <h4>About the Developer</h4>
          <p>This is me, Suraj Bhardwaj</p>
          <p> Ready to Collabrate</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/surajbhardwaj7092/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} style={{ color: "#0A66C2" }} />
            </a>
            <a href="https://www.instagram.com/_s_b2006?igsh=Z255dXhpZjF2a3Ju" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={21} style={{ color: "#ef207dff" }} />
            </a>
            <a href="https://x.com/SB28191263?t=XlwaEhR3kZd-wqqVUOJO_w&s=08" target="_blank" rel="noopener noreferrer">
              <FaX size={18} style={{ color: "#fbf6f7ff" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
