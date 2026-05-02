import React from "react";
import "./SkeletonStyles.css";

const SkeletonHero = () => {
  return (
    <div className="skeleton-hero">
      <div className="skeleton skeleton-line" style={{ width: "40%", height: 28, marginTop: 36 }} />
      <div className="skeleton skeleton-line" style={{ width: "60%", height: 40, marginTop: 12 }} />
      <div className="skeleton skeleton-line" style={{ width: "28%", height: 36, marginTop: 18 }} />
    </div>
  );
};

export default SkeletonHero;
