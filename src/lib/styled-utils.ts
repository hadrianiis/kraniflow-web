/**
 * Styled-components utilities and helpers
 * Provides optimized patterns and performance utilities
 */

import { css, keyframes } from 'styled-components';
import { theme, media } from './theme';

// Re-export theme for styled-components
export { theme, media };

// ============================================================================
// ANIMATIONS
// ============================================================================
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

export const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

// ============================================================================
// COMMON STYLES
// ============================================================================
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const fullSize = css`
  width: 100%;
  height: 100%;
`;

// ============================================================================
// RESPONSIVE UTILITIES
// ============================================================================
export const mobileOnly = css`
  ${media.md} {
    display: none;
  }
`;

export const desktopOnly = css`
  display: none;
  
  ${media.md} {
    display: block;
  }
`;

export const hideOnMobile = css`
  ${media.md} {
    display: none;
  }
`;

export const showOnMobile = css`
  display: block;
  
  ${media.md} {
    display: none;
  }
`;

// ============================================================================
// TYPOGRAPHY UTILITIES
// ============================================================================
export const heading1 = css`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: ${theme.typography.lineHeight.tight};
  
  ${media.md} {
    font-size: 6rem;
  }
`;

export const heading2 = css`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.tight};
  
  ${media.md} {
    font-size: ${theme.typography.fontSize['4xl']};
  }
`;

export const heading3 = css`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: ${theme.typography.lineHeight.normal};
  
  ${media.md} {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

export const bodyText = css`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.normal};
  line-height: ${theme.typography.lineHeight.normal};
  color: ${theme.colors.text.primary};
`;

export const captionText = css`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.normal};
  line-height: ${theme.typography.lineHeight.normal};
  color: ${theme.colors.text.muted};
`;

// ============================================================================
// SPACING UTILITIES
// ============================================================================
export const spacing = {
  xs: css`padding: ${theme.spacing.xs};`,
  sm: css`padding: ${theme.spacing.sm};`,
  md: css`padding: ${theme.spacing.md};`,
  lg: css`padding: ${theme.spacing.lg};`,
  xl: css`padding: ${theme.spacing.xl};`,
  '2xl': css`padding: ${theme.spacing['2xl']};`,
  '3xl': css`padding: ${theme.spacing['3xl']};`,
  '4xl': css`padding: ${theme.spacing['4xl']};`,
  '5xl': css`padding: ${theme.spacing['5xl']};`,
};

export const margin = {
  xs: css`margin: ${theme.spacing.xs};`,
  sm: css`margin: ${theme.spacing.sm};`,
  md: css`margin: ${theme.spacing.md};`,
  lg: css`margin: ${theme.spacing.lg};`,
  xl: css`margin: ${theme.spacing.xl};`,
  '2xl': css`margin: ${theme.spacing['2xl']};`,
  '3xl': css`margin: ${theme.spacing['3xl']};`,
  '4xl': css`margin: ${theme.spacing['4xl']};`,
  '5xl': css`margin: ${theme.spacing['5xl']};`,
};

// ============================================================================
// BORDER UTILITIES
// ============================================================================
export const border = {
  none: css`border: none;`,
  light: css`border: 1px solid ${theme.colors.border.light};`,
  medium: css`border: 1px solid ${theme.colors.border.medium};`,
  dark: css`border: 1px solid ${theme.colors.border.dark};`,
  rounded: css`
    border-radius: ${theme.borderRadius.md};
  `,
  roundedLg: css`
    border-radius: ${theme.borderRadius.lg};
  `,
  roundedXl: css`
    border-radius: ${theme.borderRadius.xl};
  `,
  full: css`
    border-radius: 50%;
  `,
};

// ============================================================================
// SHADOW UTILITIES
// ============================================================================
export const shadow = {
  none: css`box-shadow: none;`,
  sm: css`box-shadow: ${theme.shadow.sm};`,
  md: css`box-shadow: ${theme.shadow.md};`,
  lg: css`box-shadow: ${theme.shadow.lg};`,
  inner: css`box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);`,
};

// ============================================================================
// TRANSITION UTILITIES
// ============================================================================
export const transition = {
  fast: css`transition: all ${theme.transitions.fast};`,
  normal: css`transition: all ${theme.transitions.normal};`,
  slow: css`transition: all ${theme.transitions.slow};`,
  cubic: css`transition: all ${theme.transitions.cubic};`,
  transform: css`transition: transform ${theme.transitions.normal};`,
  opacity: css`transition: opacity ${theme.transitions.normal};`,
  color: css`transition: color ${theme.transitions.normal};`,
  background: css`transition: background-color ${theme.transitions.normal};`,
};

// ============================================================================
// HOVER UTILITIES
// ============================================================================
export const hover = {
  scale: css`
    &:hover {
      transform: scale(1.05);
    }
  `,
  lift: css`
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadow.lg};
    }
  `,
  fade: css`
    &:hover {
      opacity: 0.8;
    }
  `,
  glow: css`
    &:hover {
      box-shadow: 0 0 20px rgba(70, 159, 157, 0.3);
    }
  `,
};

// ============================================================================
// FOCUS UTILITIES
// ============================================================================
export const focus = {
  ring: css`
    &:focus {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
    }
  `,
  ringOffset: css`
    &:focus {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 4px;
    }
  `,
  visible: css`
    &:focus {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
    }
    
    &:focus:not(:focus-visible) {
      outline: none;
    }
  `,
};

// ============================================================================
// LAYOUT UTILITIES
// ============================================================================
export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  
  ${media.md} {
    padding: 0 ${theme.spacing['2xl']};
  }
  
  ${media.lg} {
    padding: 0 ${theme.spacing['3xl']};
  }
`;

export const grid = {
  cols1: css`grid-template-columns: repeat(1, 1fr);`,
  cols2: css`grid-template-columns: repeat(2, 1fr);`,
  cols3: css`grid-template-columns: repeat(3, 1fr);`,
  cols4: css`grid-template-columns: repeat(4, 1fr);`,
  gapSm: css`gap: ${theme.spacing.sm};`,
  gapMd: css`gap: ${theme.spacing.md};`,
  gapLg: css`gap: ${theme.spacing.lg};`,
  gapXl: css`gap: ${theme.spacing.xl};`,
};

// ============================================================================
// PERFORMANCE UTILITIES
// ============================================================================
export const willChange = css`
  will-change: transform, opacity;
`;

export const gpuAcceleration = css`
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
`;

export const smoothScrolling = css`
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

// ============================================================================
// ACCESSIBILITY UTILITIES
// ============================================================================
export const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const focusVisible = css`
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;

// ============================================================================
// COMPONENT MIXINS
// ============================================================================
export const cardMixin = css`
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadow.sm};
  overflow: hidden;
  ${transition.normal};
  
  &:hover {
    box-shadow: ${theme.shadow.md};
  }
`;

export const buttonMixin = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  ${transition.normal};
  text-decoration: none;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const inputMixin = css`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.medium};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  ${transition.normal};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(70, 159, 157, 0.1);
  }
  
  &::placeholder {
    color: ${theme.colors.text.muted};
  }
`;
