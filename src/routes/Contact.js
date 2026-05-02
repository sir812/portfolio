import React, { Suspense, lazy } from "react";
import Heroimage2 from "../components/Heroimage2";
import Navbar from "../components/Navbar";
import contactBg from "../assets/nat-weerawong-sFLJKl2jS0c-unsplash.webp";
import contact400 from "../assets/responsive/nat-weerawong-sFLJKl2jS0c-unsplash-400.webp";
import contact800 from "../assets/responsive/nat-weerawong-sFLJKl2jS0c-unsplash-800.webp";
import contact1200 from "../assets/responsive/nat-weerawong-sFLJKl2jS0c-unsplash-1200.webp";
import contact1600 from "../assets/responsive/nat-weerawong-sFLJKl2jS0c-unsplash-1600.webp";
import "./ContactStyles.css";
import SkeletonHero from "../components/SkeletonHero";

const ContactBelowFold = lazy(() => import("./ContactBelowFold"));

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2
        heading="Contact"
        text="Get in touch with me"
        bgImage={contactBg}
        bgSrcSet={`${contact400} 400w, ${contact800} 800w, ${contact1200} 1200w, ${contact1600} 1600w`}
        bgSizes={"(max-width:600px) 100vw, 1200px"}
      />
      <Suspense fallback={<SkeletonHero />}>
        <ContactBelowFold />
      </Suspense>
    </div>
  );
};

export default Contact;