import React from 'react'
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <WorkCard heading="Featured Project" />
      <Footer />
    </div>
  );
};

export default Home;