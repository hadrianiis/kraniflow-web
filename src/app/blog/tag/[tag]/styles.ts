import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  background: #f1f1f1;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
  color: white;
  padding: 5rem 0;
  
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #bfdbfe;
  max-width: 42rem;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;
