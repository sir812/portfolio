import React from 'react'
import { FaCode, FaRocket, FaAward } from "react-icons/fa";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";
import Navbar from "../components/Navbar";
import DelayedSection from "../components/DelayedSection";
import aboutBg from "../assets/chen-Qtu3hGinLF8-unsplash.jpg";
import "./AboutStyles.css";

const About = () => {
  return (<div>
    <Navbar/>
    <DelayedSection delay={150}>
      <Heroimage2 heading="About" text="Some of my details" bgImage={aboutBg} />
    </DelayedSection>
    <DelayedSection delay={700}>
      <section className="about-section">
        <div className="about-intro">
          <span className="about-intro__eyebrow">About Me</span>
          <h2>Digital Designer & Developer</h2>
          <p>I craft intuitive, visually compelling digital experiences that balance design precision with purposeful functionality. Specialized in web design, UI/UX, and frontend development with a focus on user-centered solutions.</p>
        </div>

        <div className="about-content">
          <div className="about-bio">
            <h3>Professional Background</h3>
            <p>With a passion for creating meaningful digital products, I bring together design thinking and technical expertise to deliver solutions that resonate with users. My approach combines strategic planning, refined visual aesthetics, and clean, maintainable code.</p>
            <p>I work with clients and teams to translate complex ideas into elegant, scalable digital experiences. Whether designing interfaces, prototyping interactions, or building responsive applications, I'm committed to quality and user satisfaction.</p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <FaCode className="highlight-card__icon" />
              <h4>Development</h4>
              <p>React, JavaScript, CSS3, HTML5, Responsive Design</p>
            </div>
            <div className="highlight-card">
              <FaRocket className="highlight-card__icon" />
              <h4>Design</h4>
              <p>UI/UX Design, Prototyping, Wireframing, Visual Design</p>
            </div>
            <div className="highlight-card">
              <FaAward className="highlight-card__icon" />
              <h4>Strategy</h4>
              <p>User Research, Information Architecture, Project Leadership</p>
            </div>
          </div>
        </div>

        <div className="about-timeline">
          <h3>Experience</h3>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Junior Developer (Unofficial)</h4>
              <p className="timeline-date">1 Year Experience</p>
              <p>Building web applications and learning modern development practices. Focused on React, JavaScript, and responsive design. Passionate about creating clean, functional code and understanding user-centered design principles.</p>
            </div>
          </div>
        </div>
      </section>
    </DelayedSection>
    <DelayedSection delay={1350}>
      <Footer/>
    </DelayedSection>
  </div>
  )
}

export default About