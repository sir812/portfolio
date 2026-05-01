import React, { Suspense, lazy } from 'react'
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
const WorkCard = lazy(() => import("../components/WorkCard"));


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <Suspense fallback={<div>Loading projects...</div>}>
        <WorkCard heading="Featured Project" />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;