import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const Inner = styled.div`
  max-width: 80rem;
  width: 90%;
  margin: 12.38rem auto 0;

  @media (max-width: 768px) {
    margin-top: 6.44rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;

  h1 {
    font-size: 5rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #989898;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  position: relative;
  z-index: 10;
  padding: 2.5rem 0;
  max-width: 80rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeatureCard = styled.div<{ $index: number }>`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    .hover-overlay {
      opacity: 1;
    }

    .feature-title span {
      transform: translateX(0.5rem);
    }
  }
`;

export const HoverOverlay = styled.div<{ $index: number }>`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  z-index: 1;

  ${({ $index }) => {
    if ($index < 4) {
      return `
        background: linear-gradient(to top, #f3f4f6, transparent);
      `;
    }
    return `
      background: linear-gradient(to bottom, #f3f4f6, transparent);
    `;
  }}
`;

export const IconContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;
  padding: 0 2.5rem;
  color: #6b7280;
  font-size: 1.5rem;
`;

export const FeatureTitle = styled.div<{ $index: number }>`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 10;
  padding: 0 2.5rem;

  span {
    display: inline-block;
    transition: transform 0.2s ease;
    color: #1f2937;
  }
`;

export const BorderIndicator = styled.div`
  display: none;
`;

export const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  max-width: 20rem;
  position: relative;
  z-index: 10;
  padding: 0 2.5rem;
  line-height: 1.5;
`;
