import React from "react";
import { FaCode, FaRocket, FaAward } from "react-icons/fa";
import Footer from "../components/Footer";
import RevealOnView from "../components/RevealOnView";
import "./AboutStyles.css";

const AboutBelowFold = () => {
  return (
    <RevealOnView className="about-below-fold">
      <section className="about-section">
        <div className="about-intro">
          <span className="about-intro__eyebrow">About Me</span>
          <h2>Data Analyst & BI Specialist</h2>
          <p>
            I transform complex datasets into clear, interactive visualizations and data-driven insights that empower teams to make informed business decisions. Specialized in data modeling, SQL analysis, and BI dashboard development.
          </p>
        </div>

        <div className="about-content">
          <div className="about-bio">
            <h3>Professional Background</h3>
            <p>
              With a passion for data storytelling, I bring together analytical reasoning and business intelligence technologies to deliver dashboards that drive performance. My approach combines database optimization, data warehousing concepts, and interactive visuals.
            </p>
            <p>
              I work with stakeholders to translate raw business metrics into actionable indicators. Whether designing complex SQL queries, building ETL pipelines, or developing interactive dashboards, I am committed to accuracy and data integrity.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <FaCode className="highlight-card__icon" />
              <h4>Analytics</h4>
              <p>SQL, Python (Pandas/NumPy), Excel, R, Statistical Analysis</p>
            </div>
            <div className="highlight-card">
              <FaRocket className="highlight-card__icon" />
              <h4>Visualization</h4>
              <p>Power BI, Tableau, Chart.js, Dashboard UX, Reporting</p>
            </div>
            <div className="highlight-card">
              <FaAward className="highlight-card__icon" />
              <h4>Business Intel</h4>
              <p>ETL Pipelines, Data Warehousing, KPI Definition, Data Storytelling</p>
            </div>
          </div>
        </div>

        <div className="about-timeline">
          <h3>Experience</h3>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Junior Data Analyst (Unofficial)</h4>
              <p className="timeline-date">1 Year Experience</p>
              <p>
                Performing database querying, dashboard creation, and data modeling. Focused on SQL, Python, and data visualization tools. Passionate about uncovering trends, optimizing queries, and delivering insightful reports to stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </RevealOnView>
  );
};

export default AboutBelowFold;