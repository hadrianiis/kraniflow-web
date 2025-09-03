'use client';
import styled from 'styled-components';

export const HeroSection = styled.section`
  margin-top: 6.25rem;
  background-color: var(--Background);
  
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
  padding: 0 1rem;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding-bottom: 2rem;
  }
`;

export const SparkleBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  backdrop-filter: blur(10px);
  width: fit-content;
  margin: 0 auto;
  color: #666;
  font-size: 0.875rem;
  font-weight: 500;

  svg {
    width: 1rem;
    height: 1rem;
    color: var(--green);
  }
`;

export const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  line-height: 1.1;
  margin: 0;

  .gradient-text {
    background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`; 