'use client';

import React, { memo, useRef, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Composer-only properties for smooth animations
const compositorOnlyProperties = css`
  transform: translateZ(0);
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
`;

// Performance CSS utilities
const performanceCSS = {
  avoidLayout: css`
    transform: translateZ(0);
    will-change: transform;
  `,
  gpuAcceleration: css`
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  `,
};

// Optimized animation keyframes using compositor-only properties
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.95, 0.95, 1);
  }
  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.05, 1.05, 1);
  }
`;

// Base animated component with performance optimizations
const AnimatedBase = styled.div<{
  $animation?: string;
  $duration?: number;
  $delay?: number;
  $easing?: string;
  $willChange?: string;
}>`
  ${compositorOnlyProperties}
  ${performanceCSS.avoidLayout}
  ${performanceCSS.gpuAcceleration}
  
  /* Animation properties */
  animation: ${props => props.$animation || 'none'} ${props => props.$duration || 0.3}s ${props => props.$easing || 'ease-out'} ${props => props.$delay || 0}s;
  will-change: ${props => props.$willChange || 'transform, opacity'};
  
  /* Optimize for smooth animations */
  backface-visibility: hidden;
  perspective: 1000px;
  
  /* Disable animations on reduced motion */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: none;
  }
`;

// Fade in up animation component
export const FadeInUp = memo<{
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}>(({ children, duration = 0.3, delay = 0, className }) => {
  return (
    <AnimatedBase
      $animation={fadeInUp.toString()}
      $duration={duration}
      $delay={delay}
      className={className}
    >
      {children}
    </AnimatedBase>
  );
});

FadeInUp.displayName = 'FadeInUp';

// Slide in left animation component
export const SlideInLeft = memo<{
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}>(({ children, duration = 0.3, delay = 0, className }) => {
  return (
    <AnimatedBase
      $animation={slideInLeft.toString()}
      $duration={duration}
      $delay={delay}
      className={className}
    >
      {children}
    </AnimatedBase>
  );
});

SlideInLeft.displayName = 'SlideInLeft';

// Scale in animation component
export const ScaleIn = memo<{
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}>(({ children, duration = 0.2, delay = 0, className }) => {
  return (
    <AnimatedBase
      $animation={scaleIn.toString()}
      $duration={duration}
      $delay={delay}
      className={className}
    >
      {children}
    </AnimatedBase>
  );
});

ScaleIn.displayName = 'ScaleIn';

// Pulse animation component
export const Pulse = memo<{
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}>(({ children, duration = 1, delay = 0, className }) => {
  return (
    <AnimatedBase
      $animation={pulse.toString()}
      $duration={duration}
      $delay={delay}
      className={className}
    >
      {children}
    </AnimatedBase>
  );
});

Pulse.displayName = 'Pulse';

// Intersection Observer hook for scroll animations
export const useIntersectionObserver = (
  threshold = 0.1,
  rootMargin = '0px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsIntersecting(entry.isIntersecting);
          if (entry.isIntersecting && !hasIntersected) {
            setHasIntersected(true);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
};

// Scroll-triggered animation component
export const ScrollAnimation = memo<{
  children: React.ReactNode;
  animation?: string;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
}>(({ 
  children, 
  animation = fadeInUp, 
  duration = 0.3, 
  delay = 0, 
  threshold = 0.1,
  className 
}) => {
  const { ref, hasIntersected } = useIntersectionObserver(threshold);

  return (
    <AnimatedBase
      ref={ref}
      $animation={hasIntersected ? animation.toString() : 'none'}
      $duration={duration}
      $delay={delay}
      className={className}
    >
      {children}
    </AnimatedBase>
  );
});

ScrollAnimation.displayName = 'ScrollAnimation';

// Optimized button with hover animations
export const AnimatedButton = styled.button<{
  $variant?: 'primary' | 'secondary' | 'ghost';
  $size?: 'sm' | 'md' | 'lg';
}>`
  ${compositorOnlyProperties}
  ${performanceCSS.gpuAcceleration}
  
  /* Base styles */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  /* Variant styles */
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return css`
          background: var(--green);
          color: white;
          box-shadow: 0 2px 8px rgba(0, 212, 170, 0.3);
        `;
      case 'secondary':
        return css`
          background: transparent;
          color: var(--green);
          border: 2px solid var(--green);
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: var(--text-primary);
        `;
      default:
        return css`
          background: var(--green);
          color: white;
        `;
    }
  }}
  
  /* Size styles */
  ${props => {
    switch (props.$size) {
      case 'sm':
        return css`
          padding: 8px 16px;
          font-size: 14px;
        `;
      case 'lg':
        return css`
          padding: 16px 32px;
          font-size: 18px;
        `;
      default:
        return css`
          padding: 12px 24px;
          font-size: 16px;
        `;
    }
  }}
  
  /* Hover animations - compositor-only */
  &:hover {
    transform: translate3d(0, -2px, 0) scale3d(1.02, 1.02, 1);
    box-shadow: 0 4px 16px rgba(0, 212, 170, 0.4);
  }
  
  &:active {
    transform: translate3d(0, 0, 0) scale3d(0.98, 0.98, 1);
  }
  
  /* Focus styles */
  &:focus-visible {
    outline: 2px solid var(--green);
    outline-offset: 2px;
  }
  
  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// Optimized card with hover effects
export const AnimatedCard = styled.div<{
  $elevation?: number;
  $hoverable?: boolean;
}>`
  ${compositorOnlyProperties}
  ${performanceCSS.gpuAcceleration}
  
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  /* Elevation styles */
  ${props => {
    const elevation = props.$elevation || 1;
    return css`
      box-shadow: 0 ${elevation * 2}px ${elevation * 8}px rgba(0, 0, 0, 0.1);
    `;
  }}
  
  /* Hover effects */
  ${props => props.$hoverable && css`
    &:hover {
      transform: translate3d(0, -4px, 0) scale3d(1.02, 1.02, 1);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  `}
`;

// Performance-optimized image component
export const OptimizedImage = styled.img<{
  $loaded?: boolean;
}>`
  ${compositorOnlyProperties}
  ${performanceCSS.gpuAcceleration}
  
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  /* Loading state */
  opacity: ${props => props.$loaded ? 1 : 0};
  transform: ${props => props.$loaded ? 'scale3d(1, 1, 1)' : 'scale3d(0.95, 0.95, 1)'};
  
  /* Hover effect */
  &:hover {
    transform: scale3d(1.05, 1.05, 1);
  }
`;

// Lazy loading image component
export const LazyImage = memo<{
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}>(({ src, alt, className, width, height }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView] = useState(false);
  const { ref } = useIntersectionObserver(0.1);

  useEffect(() => {
    if (inView && !loaded) {
      const img = new Image();
      img.onload = () => setLoaded(true);
      img.src = src;
    }
  }, [inView, src, loaded]);

  return (
    <div ref={ref} className={className}>
      <OptimizedImage
        src={inView ? src : ''}
        alt={alt}
        $loaded={loaded}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
});

LazyImage.displayName = 'LazyImage';
