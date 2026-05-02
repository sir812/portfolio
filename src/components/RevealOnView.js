import React, { useEffect, useRef, useState } from "react";

const RevealOnView = ({ children, className = "", threshold = 0.15, rootMargin = "0px 0px -10% 0px" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={`reveal-on-view ${isVisible ? "is-visible" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default RevealOnView;