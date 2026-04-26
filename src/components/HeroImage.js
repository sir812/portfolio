import "./HeroStyles.css";
import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask"></div> {/* Remove the <img> tag */}
      <div className="content">
        <p>Hi, My Name is Suraj Bhardwaj</p>
        <h1> Full Stack Developer & Appiled AI Engineer</h1>
        <Link to="/Project" className="btn">Projects</Link>
        <Link to="/Contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  );
};

export default HeroImage;








