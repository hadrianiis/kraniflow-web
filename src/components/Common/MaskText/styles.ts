import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { theme, flexColumn } from '@/lib/styled-utils';
import { StyledProps } from '@/types/components';

export const Body = styled.div<StyledProps>`
  ${flexColumn};
  align-items: ${({ $align }) => {
    switch ($align) {
      case 'center': return 'center';
      case 'right': return 'flex-end';
      default: return 'flex-start';
    }
  }};
  gap: ${theme.spacing.sm};
  text-align: ${({ $align }) => $align};
  
  /* Performance optimizations for smooth animations */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  
  /* Ensure smooth text rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`;

export const LineMask = styled.div<StyledProps>`
  overflow: hidden;
  display: block;
  text-align: ${({ $align }) => $align || 'left'};
  
  /* Performance optimizations for smooth animations */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
`;

export const AnimatedText = styled(motion.div)`
  margin: 0;
  text-align: inherit;
  
  /* Performance optimizations for smooth animations */
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  
  /* Ensure smooth text rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern" 1;
  font-kerning: normal;
  
  /* GPU acceleration hints */
  contain: layout style paint;
  
  /* Initial state for better animation start */
  opacity: 0;
  transform: translateY(100%) translateZ(0);
  
  /* Fallback for when animation doesn't trigger */
  &.no-animation {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
  
  /* Optimize for mobile devices */
  @media (max-width: 768px) {
    will-change: auto;
    transform: translateY(100%);
  }
`;
