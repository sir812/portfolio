import React from "react";
import { FaHome, FaMailBulk, FaPhone, FaLinkedin, FaInstagram, } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import "./FooterStyles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="left">
            <h3 className="footer-title">Contact</h3>
            <div className="location">
              <div className="location-item">
                <FaHome size={18} className="icon" />
                <div>
                  <p>Block R3/A, Uttam Nagar</p>
                  <p>New Delhi, India</p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone size={18} className="icon" />
                <div>
                  <p>+91 98187070xx</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMailBulk size={18} className="icon" />
                <div>
                  <a href="mailto:sb097097@gmail.com">sb097097@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="right">
            <h3 className="footer-title">Connect</h3>
            <p className="footer-desc">Full Stack Developer & Applied AI Engineer</p>
            <p className="footer-desc">Open to collaboration and new opportunities</p>
            <div className="social">
              <a href="https://www.linkedin.com/in/surajbhardwaj7092/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.instagram.com/_s_b2006?igsh=Z255dXhpZjF2a3Ju" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://x.com/SB28191263?t=XlwaEhR3kZd-wqqVUOJO_w&s=08" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">
                <FaX size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Suraj Bhardwaj. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
