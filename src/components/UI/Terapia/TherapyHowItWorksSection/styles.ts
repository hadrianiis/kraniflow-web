'use client';
import { styled } from 'styled-components';

export const Section = styled.section`
  padding: 4rem 0;
  background: #f1f1f1;
  
  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    gap: 4rem;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  
  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 1.2;
  color: #1e293b;
  margin: 0;
  
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #475569;
  margin: 0;
  
  span {
    font-weight: 600;
    color: #1e293b;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: auto;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, rgba(242, 188, 187, 0.08), rgba(70, 159, 157, 0.08));
  border: 1px solid rgba(242, 188, 187, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(242, 188, 187, 0.12), rgba(70, 159, 157, 0.12));
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(242, 188, 187, 0.15);
  }
`;

export const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #469F9D;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`;

export const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  @media (min-width: 1024px) {
    flex: 0 0 45%;
    justify-content: flex-end;
    align-items: stretch;
    height: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px;
  
  @media (min-width: 640px) {
    max-width: 550px;
    height: 480px;
  }
  
  @media (min-width: 1024px) {
    max-width: 500px;
    height: 100%;
    min-height: 400px;
  }
  
  .therapy-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;
