'use client';

import { useEffect } from 'react';

/**
 * CSS Loader Component
 * Loads non-critical CSS asynchronously to avoid render blocking
 */
export default function CSSLoader() {
  useEffect(() => {
    // Load non-critical CSS asynchronously after critical path
    const loadNonCriticalCSS = () => {
      // Skip font loading as we're using system fonts for better performance and reliability
      // System fonts (-apple-system, BlinkMacSystemFont) are already loaded and don't need additional loading
      try {
        // No additional fonts to load - using system font stack
        console.log('Using system fonts for optimal performance');
      } catch (error) {
        console.warn('Font loading error:', error);
      }
    };

    // Use requestIdleCallback for better critical path performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadNonCriticalCSS);
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(loadNonCriticalCSS, 100);
    }

    return () => {
      // Cleanup is handled by browser
    };
  }, []);

  return null;
}
