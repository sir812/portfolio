import "./WorkCardStyles.css";
import React from "react";
import projectImage from "../assets/chen-Qtu3hGinLF8-unsplash.jpg";
import projectImageTwo from "../assets/oscar-nord-MuJHwDHbXUk-unsplash.jpg";
import projectImageThree from "../assets/sabri-tuzcu-wunVFNvqhfE-unsplash.jpg";

const WorkCard = (props) => {
  const heading = props.heading || "Projects";
  const subheading =
    props.subheading ||
    "Professional work delivered with clear structure, visual discipline, and measurable outcomes.";

  const projects = [
    {
      title: "Executive Portfolio",
      text: "A modern personal brand platform focused on storytelling, trust, and conversion-ready contact flow.",
      imageSrc: props.image || projectImage,
    },
    {
      title: "SaaS Landing Experience",
      text: "A high-clarity product page with performance-first sections, pricing narrative, and responsive interaction.",
      imageSrc: projectImageTwo,
    },
    {
      title: "Creative Studio Showcase",
      text: "A portfolio system for case studies and client highlights, crafted for strong first impressions.",
      imageSrc: projectImageThree,
    },
  ];

  return (
    <div className="work-container">
      <div className="project-header">
        <h2 className="project-heading">{heading}</h2>
        <p className="project-subheading">{subheading}</p>
      </div>
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img
              src={project.imageSrc}
              alt={project.title}
              className="project-image"
              loading="lazy"
              decoding="async"
            />
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
        ))}
      </div>
    </div>
  );
};

export default WorkCard;





















