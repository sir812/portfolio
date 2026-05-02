import React, { useState } from 'react';
import './SkeletonStyles.css';

// Simple progressive image component: shows a lightweight inline SVG shimmer
// placeholder while the real image loads, supports srcSet and sizes.
const ProgressiveImage = ({
  src,
  srcSet,
  sizes,
  alt = '',
  className = '',
  fetchPriority,
  loading = 'lazy',
  decoding = 'async',
  style,
}) => {
  const [loaded, setLoaded] = useState(false);

  // Small neutral SVG placeholder (very tiny, compresses well)
  const placeholder = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'><rect width='20' height='12' fill='%23ececec'/></svg>`;

  return (
    <div className="img-placeholder" style={style}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={`project-image ${loaded ? 'loaded' : 'loading'} ${className}`.trim()}
        fetchPriority={fetchPriority}
        loading={loading}
        decoding={decoding}
        onLoad={(e) => {
          setLoaded(true);
          const shimmer = e.currentTarget.parentElement.querySelector('.placeholder-shimmer');
          if (shimmer) shimmer.style.opacity = '0';
        }}
      />
      <img src={placeholder} alt="placeholder" aria-hidden="true" style={{display:'none'}} />
      <div className="placeholder-shimmer" aria-hidden="true" />
    </div>
  );
};

export default ProgressiveImage;
