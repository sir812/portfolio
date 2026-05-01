import React, { Suspense, lazy } from 'react'
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import DelayedSection from "../components/DelayedSection";
const WorkCard = lazy(() => import("../components/WorkCard"));


const Home = () => {
  return (
    <div>
      <Navbar />
      <DelayedSection delay={150}>
        <HeroImage />
      </DelayedSection>
      <DelayedSection delay={750}>
        <Suspense fallback={<div>Loading projects...</div>}>
          <WorkCard heading="Featured Project" />
        </Suspense>
      </DelayedSection>
      <DelayedSection delay={1300}>
        <Footer />
      </DelayedSection>
    </div>
  );
};

export default Home;