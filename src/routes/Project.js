import React, { Suspense, lazy } from "react";
import projectBg from "../assets/altumcode-Y8iPJEvUz6c-unsplash.webp";
import proj400 from "../assets/responsive/altumcode-Y8iPJEvUz6c-unsplash-400.webp";
import proj800 from "../assets/responsive/altumcode-Y8iPJEvUz6c-unsplash-800.webp";
import proj1200 from "../assets/responsive/altumcode-Y8iPJEvUz6c-unsplash-1200.webp";
import proj1600 from "../assets/responsive/altumcode-Y8iPJEvUz6c-unsplash-1600.webp";
import Heroimage2 from "../components/Heroimage2";
import Navbar from "../components/Navbar";
import SkeletonHero from "../components/SkeletonHero";

const ProjectBelowFold = lazy(() => import("./ProjectBelowFold"));

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2
        heading="Portfolio"
        text="A selection of client-focused projects showcasing strategic thinking, refined visual execution, and measurable digital impact."
        bgImage={projectBg}
        bgSrcSet={`${proj400} 400w, ${proj800} 800w, ${proj1200} 1200w, ${proj1600} 1600w`}
        bgSizes={"(max-width:600px) 100vw, 1200px"}
      />
      <Suspense fallback={<SkeletonHero />}>
        <ProjectBelowFold />
      </Suspense>
    </div>
  );
};

export default Project;