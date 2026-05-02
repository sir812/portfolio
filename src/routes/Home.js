import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import SkeletonHero from "../components/SkeletonHero";
import SkeletonCard from "../components/SkeletonCard";

const HomeBelowFold = lazy(() => import("./HomeBelowFold"));

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <Suspense
        fallback={
          <>
            <SkeletonHero />
            <SkeletonCard />
          </>
        }
      >
        <HomeBelowFold />
      </Suspense>
    </div>
  );
};

export default Home;