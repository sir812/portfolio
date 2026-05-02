import React, { Suspense, lazy } from "react";
import Heroimage2 from "../components/Heroimage2";
import Navbar from "../components/Navbar";
import aboutBg from "../assets/chen-Qtu3hGinLF8-unsplash.webp";
import about400 from "../assets/responsive/chen-Qtu3hGinLF8-unsplash-400.webp";
import about800 from "../assets/responsive/chen-Qtu3hGinLF8-unsplash-800.webp";
import about1200 from "../assets/responsive/chen-Qtu3hGinLF8-unsplash-1200.webp";
import about1600 from "../assets/responsive/chen-Qtu3hGinLF8-unsplash-1600.webp";
import "./AboutStyles.css";
import SkeletonHero from "../components/SkeletonHero";

const AboutBelowFold = lazy(() => import("./AboutBelowFold"));

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2
        heading="About"
        text="Some of my details"
        bgImage={aboutBg}
        bgSrcSet={`${about400} 400w, ${about800} 800w, ${about1200} 1200w, ${about1600} 1600w`}
        bgSizes={"(max-width:600px) 100vw, 1200px"}
      />
      <Suspense fallback={<SkeletonHero />}>
        <AboutBelowFold />
      </Suspense>
    </div>
  );
};

export default About;