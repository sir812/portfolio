import React from "react";
import "./SkeletonStyles.css";

const SkeletonCard = ({ count = 3 }) => {
  return (
    <div className="skeleton-cards">
      {Array.from({ length: count }).map((_, i) => (
        <div className="skeleton-card" key={i}>
          <div className="skeleton skeleton-thumb" />
          <div className="skeleton skeleton-text" style={{ width: "60%" }} />
          <div className="skeleton skeleton-text" style={{ width: "80%" }} />
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;
