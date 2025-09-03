'use client';
import { styled } from 'styled-components';

export const Section = styled.section`
  padding: 4rem 0;
  background: transparent;
  
  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

export const Title = styled.h2`
  position: relative;
  z-index: 10;
  width: 100%;
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 1.1;
  color: #111827;
  text-align: center;
  
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  text-align: center;
  max-width: 60rem;
  margin: 0 auto;
  
  span {
    font-weight: 500;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding-top: 2rem;
  max-width: 80rem;
  margin: 0 auto;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

export const FeatureIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    width: 2rem;
    height: 2rem;
    color: #10b981;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
`;

export const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  text-align: center;
`;
