import React, { useEffect, useState } from "react";
import "./DelayedSectionStyles.css";

const DelayedSection = ({ delay = 0, className = "", children }) => {
  const [visible, setVisible] = useState(delay <= 0);

  useEffect(() => {
    if (visible) {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => window.clearTimeout(timerId);
  }, [delay, visible]);

  if (!visible) {
    return null;
  }

  return <div className={`delayed-section ${className}`.trim()}>{children}</div>;
};

export default DelayedSection;