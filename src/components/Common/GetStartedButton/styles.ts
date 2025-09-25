import Link from 'next/link';
import { styled } from 'styled-components';
import { theme, flexCenter, buttonMixin, hover, transition, willChange } from '@/lib/styled-utils';
import { StyledProps } from '@/types/components';

export const LinkTo = styled(Link)<StyledProps>`
  ${flexCenter};
  ${buttonMixin};
  border-radius: 6.25rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.background.primary};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-decoration: none;
  ${transition.cubic};
  ${willChange};
  
  &:hover {
    background: linear-gradient(135deg, ${theme.colors.primary}, #F2BCBB);
    ${hover.lift};
    box-shadow: 0 4px 15px rgba(70, 159, 157, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;
