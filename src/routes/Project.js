import React from 'react'
import projectBg from "../assets/altumcode-Y8iPJEvUz6c-unsplash.jpg";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import WorkCard from "../components/WorkCard";

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