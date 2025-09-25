import { styled } from 'styled-components';

export const Section = styled.section`
  padding: 2rem 0;
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
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

export const Title = styled.h2`
  position: relative;
  z-index: 10;
  max-width: 36rem;
  font-size: 1.875rem;
  font-weight: 500;
  line-height: 1.1;
  color: #111827;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 0;
  }
  
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
    gap: 3rem;
    min-height: 500px;
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (min-width: 768px) {
    width: 45%;
    gap: 1.5rem;
    justify-content: flex-end;
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

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  align-items: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    margin-top: 2rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  text-align: center;
  
  @media (min-width: 640px) {
    align-items: center;
  }
`;

export const StatNumber = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: #111827;
  line-height: 1;
  
  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
`;

export const StatLabel = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.2;
  font-weight: 400;
`;

export const ImageWrapper = styled.div`
  margin-top: 2rem;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  
  @media (min-width: 768px) {
    position: relative;
    margin-top: 0;
    justify-content: flex-end;
    padding-right: 3rem;
    align-self: flex-end;
    width: auto;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    max-width: 80%;
    width: auto;
    margin: 0;
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
  max-width: 100%;
  height: auto;
  margin: 0;
  
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
