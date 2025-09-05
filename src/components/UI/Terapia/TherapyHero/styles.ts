'use client';
import { styled } from 'styled-components';

export const Section = styled.section`
  padding: 4rem 0;
  background: transparent;
  top: 3rem;
  
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
    align-items: flex-end;
    gap: 2rem;
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    width: 50%;
    gap: 1.5rem;
    margin-top: 2rem;
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
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 2rem;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media (min-width: 768px) {
    position: absolute;
    top: -2rem;
    left: 7.5rem;
    right: 0;
    margin-top: -10rem;
    justify-content: flex-end;
    padding-right: 2rem;
    width: auto;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    max-width: 70%;
    top: -3rem;
    left: 15rem;
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
  max-width: 500px;
  
  img {
    border-radius: 0.75rem;
    width: 100%;
    height: auto;
    object-fit: contain;
    background: transparent;
    box-shadow: none;
  }
  
  @media (min-width: 768px) {
    max-width: none;
  }
`;
