import React from "react";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import RevealOnView from "../components/RevealOnView";
import WorkCard from "../components/WorkCard";

const ProjectBelowFold = () => {
  return (
    <RevealOnView className="project-below-fold">
      <WorkCard />
      <PricingCard />
      <Footer />
    </RevealOnView>
  );
};

export default ProjectBelowFold;