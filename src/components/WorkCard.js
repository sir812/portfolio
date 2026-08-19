import React from "react";
import ProgressiveImage from './ProgressiveImage';
import projectImage from "../assets/chen-Qtu3hGinLF8-unsplash.webp";
import projectImageTwo from "../assets/oscar-nord-MuJHwDHbXUk-unsplash.webp";
import projectImageThree from "../assets/sabri-tuzcu-wunVFNvqhfE-unsplash.webp";

import p1_400 from "../assets/responsive/chen-Qtu3hGinLF8-unsplash-400.webp";
import p1_800 from "../assets/responsive/chen-Qtu3hGinLF8-unsplash-800.webp";
import p1_1200 from "../assets/responsive/chen-Qtu3hGinLF8-unsplash-1200.webp";
import p1_1600 from "../assets/responsive/chen-Qtu3hGinLF8-unsplash-1600.webp";

import p2_400 from "../assets/responsive/oscar-nord-MuJHwDHbXUk-unsplash-400.webp";
import p2_800 from "../assets/responsive/oscar-nord-MuJHwDHbXUk-unsplash-800.webp";
import p2_1200 from "../assets/responsive/oscar-nord-MuJHwDHbXUk-unsplash-1200.webp";
import p2_1600 from "../assets/responsive/oscar-nord-MuJHwDHbXUk-unsplash-1600.webp";

import p3_400 from "../assets/responsive/sabri-tuzcu-wunVFNvqhfE-unsplash-400.webp";
import p3_800 from "../assets/responsive/sabri-tuzcu-wunVFNvqhfE-unsplash-800.webp";
import p3_1200 from "../assets/responsive/sabri-tuzcu-wunVFNvqhfE-unsplash-1200.webp";
import p3_1600 from "../assets/responsive/sabri-tuzcu-wunVFNvqhfE-unsplash-1600.webp";
import "./WorkCardStyles.css";

const WorkCard = (props) => {
  const heading = props.heading || "Projects";
  const subheading =
    props.subheading ||
    "Data analysis and business intelligence projects featuring interactive dashboards, regression modeling, and performance reporting.";

  const projects = [
    {
      title: "BI Analytics Dashboard",
      text: "An interactive business intelligence dashboard built to track key performance indicators, sales funnels, and customer growth trends.",
      imageSrc: props.image || projectImage,
      imageSrcSet: `${p1_400} 400w, ${p1_800} 800w, ${p1_1200} 1200w, ${p1_1600} 1600w`,
    },
    {
      title: "Marketing Campaign ROI",
      text: "A data analytics application visualizing customer acquisition cost, conversion rates, and revenue performance across various media channels.",
      imageSrc: projectImageTwo,
      imageSrcSet: `${p2_400} 400w, ${p2_800} 800w, ${p2_1200} 1200w, ${p2_1600} 1600w`,
    },
    {
      title: "Predictive Customer Analytics",
      text: "An exploratory data analysis tool demonstrating customer segmentation models, churn prediction, and purchasing behavior patterns.",
      imageSrc: projectImageThree,
      imageSrcSet: `${p3_400} 400w, ${p3_800} 800w, ${p3_1200} 1200w, ${p3_1600} 1600w`,
    },
  ];

  return (
    <div className="work-container">
      <div className="project-header">
        <h2 className="project-heading">{heading}</h2>
        <p className="project-subheading">{subheading}</p>
      </div>
      <div className="project-container">
        {projects.map((project) => {
          return (
            <div className="project-card" key={project.title}>
              <div style={{ width: '100%', height: '230px' }}>
                <ProgressiveImage
                  src={project.imageSrc}
                  srcSet={project.imageSrcSet}
                  sizes={"(max-width:600px) 100vw, 480px"}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="project-actions">
                  <button className="project-btn" type="button">
                    View Case Study
                  </button>
                  <button className="project-btn project-btn-outline" type="button">
                    Live Preview
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;





















