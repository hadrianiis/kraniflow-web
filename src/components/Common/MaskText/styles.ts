'use client';
import { styled } from 'styled-components';

export const Body = styled.div<{ $align: 'left' | 'center' | 'right' }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => {
    switch (props.$align) {
      case 'center': return 'center';
      case 'right': return 'flex-end';
      default: return 'flex-start';
    }
  }};
  gap: 0.25rem;
  text-align: ${props => props.$align};
  
  h1,
  h2,
  h3,
  p {
    margin: 0;
    text-align: ${props => props.$align};
  }
`;

export const LineMask = styled.div<{ $align?: 'left' | 'center' | 'right' }>`
  overflow: hidden;
  display: block;
  text-align: ${props => props.$align || 'left'};
`;
