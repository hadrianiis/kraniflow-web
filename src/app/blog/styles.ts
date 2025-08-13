'use client';
import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: var(--Background);
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;
`;

export const ContentSection = styled.section`
  margin: 6.25rem auto 0;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`; 