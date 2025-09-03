'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 6rem 0;
  background: #f1f1f1;
`;

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(216, 176, 182, 0.1);
  color: #8B5A5F;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const PillDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  background: #D8B0B6;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 4.75rem;
  }
`;

export const Divider = styled.div`
  width: 6rem;
  height: 0.25rem;
  background: linear-gradient(to right, #D8B0B6, #489E9D);
  margin: 0 auto;
  border-radius: 9999px;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(216, 176, 182, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 25px 50px -12px rgba(72, 158, 157, 0.15);
    border-color: rgba(216, 176, 182, 0.4);
  }
`;

export const ServiceIcon = styled.div<{ $color?: string }>`
  width: 4rem;
  height: 4rem;
  background: ${props => props.$color ? `linear-gradient(135deg, ${props.$color} 0%, ${props.$color === '#D8B0B6' ? '#489E9D' : '#D8B0B6'} 100%)` : 'linear-gradient(135deg, #D8B0B6 0%, #489E9D 100%)'};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    width: 2rem;
    height: 2rem;
    color: white;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const ServiceDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FeatureIcon = styled.svg<{ $color?: string }>`
  width: 1rem;
  height: 1rem;
  color: ${props => props.$color || '#D8B0B6'};
  flex-shrink: 0;
`;

export const ServicePrice = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(216, 176, 182, 0.2);
  text-align: center;
`;

export const PriceAmount = styled.div<{ $color?: string }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.$color || '#D8B0B6'};
  margin-bottom: 0.5rem;
`;

export const PriceNote = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

export const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

export const CTACard = styled.div`
  background: linear-gradient(135deg, rgba(216, 176, 182, 0.1) 0%, rgba(72, 158, 157, 0.1) 100%);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

export const CTATitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CTADescription = styled.p`
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #8B5A5F;
  border: 2px solid rgba(216, 176, 182, 0.3);
  border-radius: 0.75rem;
  background: transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(216, 176, 182, 0.05);
    border-color: rgba(216, 176, 182, 0.5);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
`;
