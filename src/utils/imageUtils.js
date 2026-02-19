/**
 * Image optimization utilities
 * Provides helper functions for responsive and optimized images
 */

/**
 * Generate optimized image URL for Unsplash images
 * @param {string} src - Original image URL
 * @param {number} width - Target width
 * @param {number} quality - Quality (0-100), default 80
 * @returns {string} Optimized URL with WebP and proper sizing
 */
export const getOptimizedImageUrl = (src, width = 800, quality = 80) => {
  if (!src) return '';
  
  // Handle Unsplash images
  if (src.includes('unsplash.com')) {
    try {
      const url = new URL(src);
      url.searchParams.set('w', width.toString());
      url.searchParams.set('q', quality.toString());
      url.searchParams.set('auto', 'format'); // WebP/AVIF automatic
      return url.toString();
    } catch (e) {
      return src;
    }
  }
  
  // Return original for other images
  return src;
};

/**
 * Generate srcset for responsive images
 * @param {string} src - Original image URL
 * @returns {string} Comma-separated srcset
 */
export const getImageSrcSet = (src) => {
  if (!src || !src.includes('unsplash.com')) return undefined;
  
  const widths = [320, 640, 768, 1024, 1280, 1920];
  return widths.map(w => {
    const optimized = getOptimizedImageUrl(src, w);
    return `${optimized} ${w}w`;
  }).join(', ');
};

/**
 * Preload critical images
 * @param {string[]} urls - Array of image URLs to preload
 */
export const preloadImages = (urls) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = getOptimizedImageUrl(url, 1920);
    document.head.appendChild(link);
  });
};