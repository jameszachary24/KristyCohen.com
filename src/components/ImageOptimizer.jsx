import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ImageOptimizer - Performance-optimized image component
 * Features:
 * - Lazy loading with fetchPriority
 * - Responsive srcset for optimal image sizing
 * - WebP format preference with fallback
 * - Blur-up loading skeleton
 * - Error handling with graceful fallback
 */
const ImageOptimizer = ({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '', 
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate responsive srcset for multiple breakpoints
  // Extract base URL and add WebP format conversion
  const getOptimizedSrcSet = (baseSrc) => {
    // For Unsplash images, we can use their format/quality params
    let baseUrl = baseSrc;
    
    // Check if it's an Unsplash image and we can optimize
    if (baseUrl.includes('unsplash.com')) {
      const widths = [320, 640, 768, 1024, 1280, 1920];
      return widths.map(w => {
        const url = new URL(baseSrc);
        url.searchParams.set('w', w.toString());
        url.searchParams.set('q', '80');
        url.searchParams.set('auto', 'format');
        return `${url.toString()} ${w}w`;
      }).join(', ');
    }
    
    // For other images, return undefined (use original)
    return undefined;
  };

  // Generate sizes attribute if not provided
  const srcSet = getOptimizedSrcSet(src);

  // Create poster for video support (future-proofing)
  const poster = src.includes('unsplash.com') ? 
    src.replace(/&w=\d+/, '&w=20').replace(/&q=\d+/, '&q=10') : 
    undefined;

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-slate-700/10 animate-pulse" 
          aria-hidden="true"
        />
      )}
      
      {hasError && (
        <div 
          className="absolute inset-0 bg-slate-800 flex items-center justify-center"
          aria-label={`Failed to load image: ${alt}`}
        >
          <span className="text-slate-500 text-sm">Image unavailable</span>
        </div>
      )}
      
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${className}`}
        {...props}
      />
    </div>
  );
};

export default ImageOptimizer;
