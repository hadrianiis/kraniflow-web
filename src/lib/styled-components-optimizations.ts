import { memo } from 'react';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';

// Performance-optimized styled-components patterns

// 1. Static styles extraction - avoid recreating styles on every render
export const staticStyles = css`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`;

// 2. Composer-only properties for smooth animations
export const compositorOnly = css`
  transform: translateZ(0);
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
`;

// 3. Optimized keyframes with 3D transforms
export const optimizedKeyframes = {
  fadeIn: keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `,
  
  slideIn: keyframes`
    from {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  `,
  
  scaleIn: keyframes`
    from {
      opacity: 0;
      transform: scale3d(0.95, 0.95, 1);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  `,
  
  pulse: keyframes`
    0%, 100% {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(1.05, 1.05, 1);
    }
  `,
};

// 4. Performance-optimized theme
export const createOptimizedTheme = (baseTheme: any) => {
  return {
    ...baseTheme,
    // Add performance-optimized properties
    transitions: {
      fast: '0.15s ease',
      normal: '0.2s ease',
      slow: '0.3s ease',
    },
    animations: optimizedKeyframes,
    // Composer-only properties
    compositor: compositorOnly,
    // Static styles
    static: staticStyles,
  };
};

// 5. Memoized styled component factory
export const createMemoizedStyled = <T extends keyof JSX.IntrinsicElements>(
  element: T,
  baseStyles?: any
) => {
  const StyledComponent = styled(element)<any>`
    ${staticStyles}
    ${baseStyles}
  `;
  
  return memo(StyledComponent);
};

// 6. Performance-optimized responsive utility
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

// 7. Optimized hover effects
export const hoverEffects = {
  lift: css`
    &:hover {
      transform: translate3d(0, -2px, 0) scale3d(1.02, 1.02, 1);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
  `,
  
  scale: css`
    &:hover {
      transform: scale3d(1.05, 1.05, 1);
    }
  `,
  
  glow: css`
    &:hover {
      box-shadow: 0 0 20px rgba(0, 212, 170, 0.4);
    }
  `,
};

// 8. Performance-optimized button component
export const OptimizedButton = styled.button<{
  $variant?: 'primary' | 'secondary' | 'ghost';
  $size?: 'sm' | 'md' | 'lg';
  $loading?: boolean;
}>`
  ${staticStyles}
  ${compositorOnly}
  
  /* Base styles */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  
  /* Disable pointer events when loading */
  pointer-events: ${props => props.$loading ? 'none' : 'auto'};
  opacity: ${props => props.$loading ? 0.7 : 1};
  
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
  
  /* Hover effects */
  ${hoverEffects.lift}
  
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

// 9. Performance-optimized card component
export const OptimizedCard = styled.div<{
  $elevation?: number;
  $hoverable?: boolean;
  $padding?: string;
}>`
  ${staticStyles}
  ${compositorOnly}
  
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: ${props => props.$padding || '24px'};
  
  /* Elevation styles */
  ${props => {
    const elevation = props.$elevation || 1;
    return css`
      box-shadow: 0 ${elevation * 2}px ${elevation * 8}px rgba(0, 0, 0, 0.1);
    `;
  }}
  
  /* Hover effects */
  ${props => props.$hoverable && hoverEffects.lift}
`;

// 10. Performance-optimized input component
export const OptimizedInput = styled.input<{
  $error?: boolean;
  $size?: 'sm' | 'md' | 'lg';
}>`
  ${staticStyles}
  
  border: 2px solid ${props => props.$error ? '#ef4444' : '#e5e7eb'};
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  /* Size variants */
  ${props => {
    switch (props.$size) {
      case 'sm':
        return css`
          padding: 8px 12px;
          font-size: 14px;
        `;
      case 'lg':
        return css`
          padding: 16px 20px;
          font-size: 18px;
        `;
      default:
        return css`
          padding: 12px 16px;
          font-size: 16px;
        `;
    }
  }}
  
  /* Focus styles */
  &:focus {
    outline: none;
    border-color: var(--green);
    box-shadow: 0 0 0 3px rgba(0, 212, 170, 0.1);
  }
  
  /* Error state */
  ${props => props.$error && css`
    &:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`;

// 11. Performance-optimized container component
export const OptimizedContainer = styled.div<{
  $maxWidth?: string;
  $padding?: string;
  $center?: boolean;
}>`
  ${staticStyles}
  
  width: 100%;
  max-width: ${props => props.$maxWidth || '1200px'};
  padding: ${props => props.$padding || '0 16px'};
  margin: ${props => props.$center ? '0 auto' : '0'};
  
  /* Responsive padding */
  ${responsive('padding', {
    mobile: '0 16px',
    tablet: '0 24px',
    desktop: '0 32px',
  })}
`;

// 12. Performance-optimized flexbox utilities
export const FlexBox = styled.div<{
  $direction?: 'row' | 'column';
  $justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  $align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  $gap?: string;
  $wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  justify-content: ${props => props.$justify || 'flex-start'};
  align-items: ${props => props.$align || 'flex-start'};
  gap: ${props => props.$gap || '0'};
  flex-wrap: ${props => props.$wrap ? 'wrap' : 'nowrap'};
`;

// 13. Performance-optimized grid component
export const OptimizedGrid = styled.div<{
  $columns?: number | string;
  $gap?: string;
  $responsive?: boolean;
}>`
  display: grid;
  grid-template-columns: ${props => 
    typeof props.$columns === 'number' 
      ? `repeat(${props.$columns}, 1fr)`
      : props.$columns || 'repeat(auto-fit, minmax(300px, 1fr))'
  };
  gap: ${props => props.$gap || '24px'};
  
  /* Responsive grid */
  ${props => props.$responsive && css`
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  `}
`;

// 14. Performance-optimized text component
export const OptimizedText = styled.p<{
  $variant?: 'body' | 'caption' | 'heading' | 'subtitle';
  $color?: string;
  $weight?: 'normal' | 'medium' | 'bold';
  $align?: 'left' | 'center' | 'right';
}>`
  ${staticStyles}
  
  margin: 0;
  color: ${props => props.$color || 'var(--text-primary)'};
  text-align: ${props => props.$align || 'left'};
  font-weight: ${props => {
    switch (props.$weight) {
      case 'medium': return '500';
      case 'bold': return '700';
      default: return '400';
    }
  }};
  
  /* Variant styles */
  ${props => {
    switch (props.$variant) {
      case 'caption':
        return css`
          font-size: 12px;
          line-height: 1.4;
        `;
      case 'subtitle':
        return css`
          font-size: 18px;
          line-height: 1.5;
        `;
      case 'heading':
        return css`
          font-size: 24px;
          line-height: 1.3;
          font-weight: 700;
        `;
      default:
        return css`
          font-size: 16px;
          line-height: 1.6;
        `;
    }
  }}
`;

// 15. Performance-optimized global styles
export const GlobalStyles = createGlobalStyle`
  /* Reset and base styles */
  * {
    ${staticStyles}
  }
  
  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    background-color: var(--Background);
    color: var(--text-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Optimize images */
  img {
    max-width: 100%;
    height: auto;
    ${compositorOnly}
  }
  
  /* Optimize links */
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  /* Optimize buttons */
  button {
    ${staticStyles}
    cursor: pointer;
  }
  
  /* Optimize form elements */
  input, textarea, select {
    ${staticStyles}
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid var(--green);
    outline-offset: 2px;
  }
`;

