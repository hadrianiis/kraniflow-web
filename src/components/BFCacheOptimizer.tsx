'use client';

import { useEffect } from 'react';

/**
 * BFCache Optimizer Component
 * Ensures the page is compatible with back/forward cache
 */
export default function BFCacheOptimizer() {
  useEffect(() => {
    // Remove any event listeners that prevent bfcache
    const cleanup = () => {
      // Remove beforeunload listeners that prevent bfcache
      window.removeEventListener('beforeunload', () => {});
      
      // Remove unload listeners that prevent bfcache
      window.removeEventListener('unload', () => {});
      
      // Remove pagehide listeners that prevent bfcache
      window.removeEventListener('pagehide', () => {});
    };

    // Clean up on mount
    cleanup();

    // Add page visibility change handler for bfcache
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Page is being restored from bfcache
        console.log('Page restored from bfcache');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Add pageshow event handler for bfcache detection
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page was restored from bfcache
        console.log('Page restored from bfcache via pageshow');
      }
    };

    window.addEventListener('pageshow', handlePageShow);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pageshow', handlePageShow);
      cleanup();
    };
  }, []);

  return null;
}
