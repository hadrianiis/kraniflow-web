import { styled } from 'styled-components';

export const TerapiaPageWrapper = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/stress-cells.avif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.1;
  }
`;

export const Wrapper = styled.section`
  min-height: 100vh;
  background: var(--background);
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  padding: 4rem 0;
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 8rem 0 6rem;
  max-width: 56rem;
  margin: 0 auto;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.25rem;
    color: var(--link-color);
    line-height: 1.75rem;
    margin-bottom: 3rem;
    max-width: 48rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 0 3rem;
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.6rem;
      margin-bottom: 2rem;
    }
  }
`;

export const ContentSection = styled.section`
  margin: 6rem 0;
  text-align: center;

  h2 {
    font-size: 3rem;
    font-weight: normal;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  > p {
    font-size: 1.25rem;
    color: var(--link-color);
    line-height: 1.75rem;
    max-width: 56rem;
    margin: 0 auto 4rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin: 4rem 0;
    
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    > p {
      font-size: 1.125rem;
      line-height: 1.6rem;
      margin-bottom: 3rem;
    }
  }
`;

export const TherapyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 80rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const TherapyCard = styled.div<{ index: number }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ index }) => {
      const colors = ['#00D4AA', '#6366F1', '#F59E0B', '#EF4444', '#8B5CF6', '#10B981'];
      return colors[index % colors.length];
    }};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background: rgba(255, 255, 255, 0.08);
  }

  .icon-container {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  p {
    font-size: 1rem;
    color: var(--link-color);
    line-height: 1.6rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    h3 {
      font-size: 1.25rem;
    }
  }
`;

export const CTAButton = styled.div`
  margin-top: 2rem;
`;

// Benefits section styles
export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const BenefitItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background: rgba(255, 255, 255, 0.08);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: normal;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  p {
    font-size: 1rem;
    color: var(--link-color);
    line-height: 1.6rem;
    opacity: 0.9;
  }
`;

// CTA section specific styles
export const CTASection = styled(ContentSection)`
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  color: white;
  margin: 8rem 0 4rem;
  padding: 4rem 2rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }

  h2 {
    color: white;
    position: relative;
    z-index: 1;
  }

  > p {
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin: 6rem 0 3rem;
    padding: 3rem 1.5rem;
  }
`; 