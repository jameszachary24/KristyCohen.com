import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageOptimizer = ({ 
  src, 
  alt, 
  className = '', // Applied to the image
  wrapperClassName = '', // Applied to the container
  width,
  height,
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-700/10 animate-pulse" />
      )}
      
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${className}`}
        {...props}
      />
    </div>
  );
};

export default ImageOptimizer;
