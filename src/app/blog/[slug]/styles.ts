'use client';
import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--Background);
`;

export const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
