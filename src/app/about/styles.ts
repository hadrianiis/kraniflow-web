'use client';
import styled from 'styled-components';
import grid_background from '../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 6.25rem;
  min-height: 100vh;
  position: relative;
  background: #f1f1f1;
  overflow: hidden;
`;

export const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${grid_background.src}) no-repeat;
  background-position: top center;
  background-size: contain;
  opacity: 0.05;
  pointer-events: none;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem 0;
  position: relative;
  z-index: 1;
`;

export const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: center;
  margin-bottom: 10rem;
  width: 100%;
  padding: 0 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    margin-bottom: 6rem;
    padding: 0 1rem;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  
  .image-container {
    position: relative;
    display: inline-block;
    
    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
      border-radius: 2rem;
      z-index: -1;
      opacity: 0.1;
    }
    
    .profile-img {
      border-radius: 2rem;
      object-fit: cover;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TextContent = styled.div`
  h2 {
    font-size: 3.5rem;
    font-weight: 300;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.8;
    color: #64748b;
    margin-bottom: 2rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1.125rem;
      line-height: 1.7;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.1;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`;

export const StatsWrapper = styled.div`
  width: 100%;
  margin-bottom: 10rem;
  padding: 0 1rem;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 4rem 2.5rem;
  background: white;
  border-radius: 2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
    border-color: var(--gradient-start);
  }

  .stat-number {
    font-size: 4rem;
    font-weight: 200;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    line-height: 1;
  }

  .stat-label {
    font-size: 1.5rem;
    color: #1e293b;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .stat-description {
    font-size: 1rem;
    color: #64748b;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    
    .stat-number {
      font-size: 3.5rem;
    }
    
    .stat-label {
      font-size: 1.25rem;
    }
  }
`;

export const ExperienceSection = styled.div`
  text-align: center;
  margin-bottom: 10rem;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ExperienceItem = styled.div`
  text-align: center;
  padding: 3rem 2.5rem;
  background: white;
  border-radius: 2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
    border-color: var(--gradient-start);
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(70, 159, 157, 0.2);

    &:hover {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 20px 40px rgba(70, 159, 157, 0.3);
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #64748b;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    
    .icon-wrapper {
      width: 70px;
      height: 70px;
    }
    
    h3 {
      font-size: 1.375rem;
    }
  }
`;

export const ValuesSection = styled.div`
  text-align: center;
  margin-bottom: 10rem;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ValueCard = styled.div`
  text-align: center;
  padding: 4rem 2.5rem;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: white;
  border-radius: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(70, 159, 157, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 40px 80px rgba(70, 159, 157, 0.4);

    &::before {
      opacity: 1;
    }
  }

  .value-icon {
    font-size: 4rem;
    margin-bottom: 2rem;
    display: block;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    opacity: 0.95;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    
    .value-icon {
      font-size: 3rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const CTASection = styled.div`
  text-align: center;
  padding: 6rem 4rem;
  background: white;
  border-radius: 2.5rem;
  border: 1px solid #e2e8f0;
  margin-bottom: 4rem;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  }

  .cta-content {
    position: relative;
    z-index: 1;
  }

  h2 {
    font-size: 3rem;
    font-weight: 300;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 3rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    
    h2 {
      font-size: 2.25rem;
    }
    
    p {
      font-size: 1.125rem;
    }
  }
`;

export const CTAButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
`; 