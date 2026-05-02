import React from "react";
import Footer from "../components/Footer";
import RevealOnView from "../components/RevealOnView";
import WorkCard from "../components/WorkCard";

const HomeBelowFold = () => {
  return (
    <RevealOnView className="home-below-fold">
      <WorkCard heading="Featured Project" />
      <Footer />
    </RevealOnView>
  );
};

export default HomeBelowFold;