import React from "react";
import { FaHome, FaMailBulk, FaPhone, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Footer from "../components/Footer";
import RevealOnView from "../components/RevealOnView";
import "./ContactStyles.css";

const ContactBelowFold = () => {
  return (
    <RevealOnView className="contact-below-fold">
      <section className="contact-details">
        <div className="contact-details__intro">
          <span className="contact-details__eyebrow">Contact Details</span>
          <h2>Let&apos;s start a conversation</h2>
          <p>Reach out for freelance work, collaboration, or project inquiries. I usually respond quickly by email or phone.</p>
        </div>

        <div className="contact-details__grid">
          <div className="contact-card">
            <FaHome className="contact-card__icon" />
            <h3>Location</h3>
            <p>Block R3/A, Uttam Nagar</p>
            <p>New Delhi, India</p>
          </div>

          <div className="contact-card">
            <FaPhone className="contact-card__icon" />
            <h3>Phone</h3>
            <a href="tel:+9198187070xx">98187070xx</a>
          </div>

          <div className="contact-card">
            <FaMailBulk className="contact-card__icon" />
            <h3>Email</h3>
            <a href="mailto:sb097097@gmail.com">sb097097@gmail.com</a>
          </div>

          <div className="contact-card">
            <FaLinkedin className="contact-card__icon" />
            <h3>Social</h3>
            <a href="https://www.linkedin.com/in/surajbhardwaj7092/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/_s_b2006?igsh=Z255dXhpZjF2a3Ju" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="contact-card__inline-icon" /> Instagram
            </a>
            <a href="https://x.com/SB28191263?t=XlwaEhR3kZd-wqqVUOJO_w&s=08" target="_blank" rel="noopener noreferrer">
              <FaX className="contact-card__inline-icon" /> X
            </a>
          </div>
        </div>

        <div className="contact-details__note">
          <FaX />
          <p>Available for select projects, portfolio collaborations, and product-focused design work.</p>
        </div>
      </section>
      <Footer />
    </RevealOnView>
  );
};

export default ContactBelowFold;