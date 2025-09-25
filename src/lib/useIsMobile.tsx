'use client';
import { useEffect, useState, useCallback } from 'react';

// Mobile breakpoint constant
const MOBILE_BREAKPOINT = 768;

// Check if we're on client side
const isClient = typeof window === 'object';

export const useIsMobile = (): boolean => {
  // Always start with false to match server-side rendering
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    if (!isClient || !hasMounted) return;
    
    const newIsMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    setIsMobile(prevIsMobile => {
      // Only update state if the value actually changed
      return prevIsMobile !== newIsMobile ? newIsMobile : prevIsMobile;
    });
  }, [hasMounted]);

  useEffect(() => {
    if (!isClient) return;

    // Mark as mounted and set initial value
    setHasMounted(true);
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    // Add event listener
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // Return false during SSR and initial client render to prevent hydration mismatch
  return hasMounted ? isMobile : false;
};
