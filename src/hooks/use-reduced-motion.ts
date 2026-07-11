'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if user prefers reduced motion or is on a mobile device
 * Used to disable heavy animations for better performance
 */
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkMobile();

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    window.addEventListener('resize', checkMobile);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return { reducedMotion, isMobile, shouldReduceMotion: reducedMotion || isMobile };
}
