import React from 'react';
import { Link } from "react-router-dom";
import heroImage from "../assets/IntroImage.webp";
import Intro400 from "../assets/responsive/IntroImage-400.webp";
import Intro800 from "../assets/responsive/IntroImage-800.webp";
import Intro1200 from "../assets/responsive/IntroImage-1200.webp";
import Intro1600 from "../assets/responsive/IntroImage-1600.webp";
import "./HeroStyles.css";
import ProgressiveImage from './ProgressiveImage';

const HeroImage = () => {
  return (
    <div className="hero">
      <ProgressiveImage
        src={heroImage}
        srcSet={`${Intro400} 400w, ${Intro800} 800w, ${Intro1200} 1200w, ${Intro1600} 1600w`}
        sizes={"(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 1200px"}
        alt=""
        className="hero-background"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="mask"></div>
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








