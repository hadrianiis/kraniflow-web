import { styled } from 'styled-components';
import { theme, media } from '@/lib/theme';
import { StyledProps } from '@/types/components';

export const Wrapper = styled.section<StyledProps>`
  width: 100%;
  background: ${({ $background }) => {
    switch ($background) {
      case 'gray':
        return theme.colors.background.secondary;
      case 'primary':
        return theme.colors.primary;
      case 'transparent':
        return 'transparent';
      default:
        return theme.colors.background.primary;
    }
  }};
  
  padding: ${({ $padding }) => {
    switch ($padding) {
      case 'none':
        return '0';
      case 'sm':
        return `${theme.spacing.lg} 0`;
      case 'md':
        return `${theme.spacing['2xl']} 0`;
      case 'lg':
        return `${theme.spacing['3xl']} 0`;
      case 'xl':
        return `${theme.spacing['4xl']} 0`;
      default:
        return `${theme.spacing['3xl']} 0`;
    }
  }};

  ${media.md} {
    padding: ${({ $padding, $isMobile }) => {
      if ($isMobile) return;
      
      switch ($padding) {
        case 'none':
          return '0';
        case 'sm':
          return `${theme.spacing.xl} 0`;
        case 'md':
          return `${theme.spacing['3xl']} 0`;
        case 'lg':
          return `${theme.spacing['4xl']} 0`;
        case 'xl':
          return `${theme.spacing['5xl']} 0`;
        default:
          return `${theme.spacing['4xl']} 0`;
      }
    }};
  }
`;

export const Inner = styled.div<StyledProps>`
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
