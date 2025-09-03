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
  max-width: 36rem;
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 1.1;
  color: #111827;
  
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
    min-height: 500px;
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    width: 45%;
    gap: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  
  span {
    font-weight: 500;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  padding-top: 1.5rem;
  
  @media (min-width: 640px) {
    gap: 1rem;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
`;

export const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
`;

export const ImageWrapper = styled.div`
  margin-top: 3rem;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    position: absolute;
    top: -2rem;
    left: 0;
    right: 0;
    margin-top: 0;
    justify-content: flex-end;
    padding-right: 3rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    max-width: 80%;
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: transparent;
  z-index: 1;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

export const DottedBorder = styled.div`
  position: relative;
  border: none;
  border-radius: 1rem;
  padding: 0;
  background: transparent;
  width: 100%;
  height: auto;
  
  &::before {
    content: '';
    position: absolute;
    inset: -15px;
    border-radius: 1.25rem;
    background: radial-gradient(circle at center, 
      rgba(255, 255, 255, 0.4) 0%, 
      rgba(255, 255, 255, 0.2) 25%, 
      rgba(255, 255, 255, 0.1) 50%, 
      rgba(255, 255, 255, 0.05) 75%, 
      transparent 100%);
    filter: blur(16px);
    z-index: -1;
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 1rem;
    background: radial-gradient(circle at center, 
      rgba(255, 255, 255, 0.5) 0%, 
      rgba(255, 255, 255, 0.3) 30%, 
      rgba(255, 255, 255, 0.15) 60%, 
      transparent 100%);
    filter: blur(12px);
    z-index: -1;
    opacity: 0.9;
  }
  
  img {
    border-radius: 0.75rem;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    background: transparent;
    box-shadow: 
      0 8px 20px -4px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.2);
    max-width: 100%;
    max-height: 500px;
    position: relative;
    z-index: 1;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    image-rendering: optimize-quality;
  }
`;
