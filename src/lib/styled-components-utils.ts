import styled, { css, keyframes } from 'styled-components';
import { memo } from 'react';

// Performance-optimized styled-components utilities

// Composer-only properties for smooth animations
export const compositorOnlyProperties = css`
  transform: translateZ(0); /* Force hardware acceleration */
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
`;

// Static styles extraction for better performance
export const staticStyles = css`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

// Optimized animation keyframes
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

// Performance-optimized styled components factory
export const createOptimizedStyledComponent = <T extends keyof JSX.IntrinsicElements>(
  element: T,
  baseStyles?: any
) => {
  const StyledComponent = styled(element)<any>`
    ${staticStyles}
    ${baseStyles}
    
    /* Composer-only properties for animations */
    transition: transform 0.2s ease, opacity 0.2s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  `;

  return memo(StyledComponent);
};

// Memoized styled component wrapper
export const withMemoization = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return memo(Component);
};

// Theme optimization utilities
export const createOptimizedTheme = (theme: any) => {
  return {
    ...theme,
    // Add performance-optimized theme properties
    transitions: {
      fast: '0.15s ease',
      normal: '0.2s ease',
      slow: '0.3s ease',
    },
    animations: {
      fadeIn: fadeIn,
      slideIn: slideIn,
      scaleIn: scaleIn,
    },
  };
};

// CSS-in-JS performance patterns
export const performanceCSS = {
  // Avoid layout thrashing
  avoidLayout: css`
    transform: translateZ(0);
    will-change: transform;
  `,
  
  // Optimize for repaints
  optimizeRepaints: css`
    contain: layout style paint;
  `,
  
  // GPU acceleration
  gpuAcceleration: css`
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  `,
  
  // Smooth scrolling
  smoothScrolling: css`
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  `,
};

// Responsive breakpoints with performance in mind
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px',
};

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
  wide: `@media (min-width: ${breakpoints.wide})`,
};

// Performance-optimized responsive utility
export const responsive = (property: string, values: Record<string, any>) => css`
  ${property}: ${values.mobile || values.default};
  
  ${values.tablet && css`
    @media (min-width: 768px) {
      ${property}: ${values.tablet};
    }
  `}
  
  ${values.desktop && css`
    @media (min-width: 1024px) {
      ${property}: ${values.desktop};
    }
  `}
  
  ${values.wide && css`
    @media (min-width: 1200px) {
      ${property}: ${values.wide};
    }
  `}
`;
