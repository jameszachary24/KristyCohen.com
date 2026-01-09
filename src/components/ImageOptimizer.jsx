import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageOptimizer = ({ 
  src, 
  alt, 
  className = '', 
  fallback = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=20',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(fallback);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoading(false);
    };
    img.onerror = () => {
      setImageSrc(fallback);
      setImageLoading(false);
    };
  }, [src, fallback]);

  return (
    <div className="relative overflow-hidden">
      {imageLoading && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
      )}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        src={imageSrc}
        alt={alt}
        className={className}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default ImageOptimizer;