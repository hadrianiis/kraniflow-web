import { styled } from 'styled-components';
import { theme, media } from '@/lib/theme';

export const Wrapper = styled.section`
  margin-top: ${theme.spacing['4xl']};
  
  ${media.md} {
    margin-top: ${theme.spacing['5xl']};
  }
`;

export const Inner = styled.div`
  background: url('/images/grid_background.png') no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: contain;
  
  /* Performance optimizations */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export const Pill = styled.div`
  display: flex;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};
  border-radius: 6.25rem;
  border: 0.2px solid ${theme.colors.border.dark};
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: ${theme.spacing.lg};

  span {
    color: ${theme.colors.text.light};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.normal};
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-size: 5rem;
    font-weight: ${theme.typography.fontWeight.normal};
    line-height: ${theme.typography.lineHeight.tight};
    color: ${theme.colors.text.primary};
    
    /* Performance optimizations for text rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1;
    font-kerning: normal;
  }

  p {
    max-width: 41.75rem;
    color: ${theme.colors.text.muted};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.normal};
    margin: 0 auto;
    line-height: ${theme.typography.lineHeight.normal};
    
    /* Performance optimizations for text rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  @media (max-width: 767px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    
    h1 {
      font-size: 3rem;
      font-weight: ${theme.typography.fontWeight.normal};
    }

    p {
      font-size: ${theme.typography.fontSize.base};
      line-height: ${theme.typography.lineHeight.normal};
    }
  }
`;
