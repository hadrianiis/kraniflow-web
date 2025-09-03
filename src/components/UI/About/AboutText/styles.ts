'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #f1f1f1;
  padding: 2rem 0;
  
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
  
  @media (min-width: 1024px) {
    padding: 6rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  
  @media (max-width: 768px) {
    width: 95%;
  }
`;

// Hero Section
export const HeroSection = styled.section`
  padding: 120px 0 80px;
  
  @media (max-width: 768px) {
    padding: 80px 0 60px;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

// Story Section
export const StorySection = styled.section`
  padding: 3rem 0;
  margin: 0;
  
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
  
  @media (min-width: 1024px) {
    padding: 5rem 0;
  }
`;

export const StoryContent = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
  
  ${props => props.$reverse && `
    direction: rtl;
    
    > * {
      direction: ltr;
    }
  `}
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    direction: ltr;
    width: 95%;
  }
`;

export const StoryText = styled.div`
  text-align: left;
  
  h2 {
    font-size: 42px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 32px;
    line-height: 1.2;
    text-align: left !important;
    
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  
  p {
    font-size: 18px;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 24px;
    text-align: left !important;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const StoryImage = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const SpineImage = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    height: 500px;
  }
`;

// Why BCST Section
export const WhyBCSTSection = styled.section`
  padding: 80px 0;
  text-align: center;
  margin: 40px 0;
  
  h2 {
    font-size: 42px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 32px;
    
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  
  p {
    font-size: 18px;
    line-height: 1.8;
    color: #475569;
    max-width: 900px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

// Personal Message Section
export const PersonalMessageSection = styled.section`
  padding: 80px 0;
  text-align: center;
  margin: 40px 0;
  
  h2 {
    font-size: 42px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 32px;
    
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  
  p {
    font-size: 18px;
    line-height: 1.8;
    color: #475569;
    max-width: 900px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const Header = styled.div`
  margin-bottom: 60px;
  text-align: center;
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #64748b;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const HeaderMainText = styled.div`
  text-align: center;
  
  h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 32px;
    color: #1e293b;
    
    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
  
  p {
    font-size: 22px;
    line-height: 1.7;
    color: #475569;
    max-width: 700px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 3rem 0;
  width: 100%;
  align-items: start;
  
  @media (min-width: 768px) {
    gap: 5rem;
    margin: 4rem 0;
  }
  
  @media (min-width: 1024px) {
    gap: 5rem;
    margin: 5rem 0;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin: 2rem 0;
    align-items: stretch;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: left;
  height: 100%;
  padding: 0; /* Odstránim padding pre lepšie zarovnanie s krajmi */
`;

export const EdgesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
  justify-content: space-between; /* Rozloží karty rovnomerne po celej výške */
`;

export const IntroEdge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  background: linear-gradient(135deg, #F2BCBB, #469F9D);
  background-size: 120% 120%;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: left;
  transition: all 0.8s ease-out;
  margin: 0;
  flex: 1; /* Každá karta zaberie rovnomerne dostupný priestor */
  
  &:hover {
    background-position: 80% 80%;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
  }
  
  &:nth-child(1) {
    background: linear-gradient(135deg, #F2BCBB 0%, #469F9D 100%);
  }
  
  &:nth-child(2) {
    background: linear-gradient(140deg, #F2BCBB 0%, #469F9D 100%);
  }
  
  &:nth-child(3) {
    background: linear-gradient(145deg, #F2BCBB 0%, #469F9D 100%);
  }
  
  p {
    font-size: 16px;
    line-height: 1.7;
    color: #ffffff;
    margin: 0;
  }
  
  h3 {
    color: #ffffff;
    margin: 0;
  }
`;

export const IntroTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  
  h3 {
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
  }
`;

export const SessionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0; /* Odstránim margin pre lepšie zarovnanie */
`;

export const SessionTitle = styled.div`
  text-align: left;
  margin: 0; /* Odstránim margin pre lepšie zarovnanie */
  
  h2 {
    font-size: 28px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 20px;
    margin-top: 0; /* Zarovná s horným okrajom */
    text-align: left !important;
  }
  
  p {
    font-size: 16px;
    line-height: 1.7;
    color: #475569;
    margin: 0; /* Odstránim margin pre lepšie zarovnanie */
    text-align: left !important;
  }
`;

export const MainHeaderSection = styled.div`
  margin-bottom: 100px;
  padding: 80px 0;
  text-align: center;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
    padding: 60px 0;
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin: 80px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 60px 0;
  }
`;

export const Stat = styled.div`
  text-align: center;
  padding: 40px 24px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 16px;
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  
  p {
    font-size: 16px;
    color: #64748b;
    font-weight: 500;
  }
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;
