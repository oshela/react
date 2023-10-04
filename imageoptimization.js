import React from 'react';

const ImageOptimizationDemo = () => {
  return (
    <div>
      <h1>Image Optimization Demo</h1>
      <p>Responsive images with srcset attribute:</p>
      <img
        srcSet="large.jpg 1200w, medium.jpg 800w, small.jpg 400w"
        sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
        src="large.jpg"
        alt="Optimized Images"
      />
    </div>
  );
};

export default ImageOptimizationDemo;
