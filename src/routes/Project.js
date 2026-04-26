import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";
import WorkCard from "../components/WorkCard";
import PricingCard from "../components/PricingCard";
import projectBg from "../assets/altumcode-Y8iPJEvUz6c-unsplash.jpg";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2
        heading="Portfolio"
        text="A selection of client-focused projects showcasing strategic thinking, refined visual execution, and measurable digital impact."
        bgImage={projectBg}
      />
      <WorkCard />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;