import React from 'react'
import projectBg from "../assets/altumcode-Y8iPJEvUz6c-unsplash.jpg";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import WorkCard from "../components/WorkCard";
import DelayedSection from "../components/DelayedSection";

const Project = () => {
  return (
    <div>
      <Navbar />
      <DelayedSection delay={150}>
        <Heroimage2
          heading="Portfolio"
          text="A selection of client-focused projects showcasing strategic thinking, refined visual execution, and measurable digital impact."
          bgImage={projectBg}
        />
      </DelayedSection>
      <DelayedSection delay={700}>
        <WorkCard />
      </DelayedSection>
      <DelayedSection delay={1250}>
        <PricingCard />
      </DelayedSection>
      <DelayedSection delay={1800}>
        <Footer />
      </DelayedSection>
    </div>
  );
};

export default Project;