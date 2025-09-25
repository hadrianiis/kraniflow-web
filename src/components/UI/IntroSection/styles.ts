import { styled } from 'styled-components';
import { theme } from '@/lib/theme';

export const Wrapper = styled.section`
  padding-bottom: 0;

  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
`;

export const MainHeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50%;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const EdgesSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 50%;

  @media (max-width: 767px) {
    max-width: 100%;
    gap: 1.25rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 100%;
  margin-bottom: 0;

  h3 {
    background: linear-gradient(135deg, ${theme.colors.gradient.start}, ${theme.colors.gradient.end});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
  }

  h1 {
    font-size: 5rem;
    font-weight: 400;
    line-height: 1.1;
    margin: 0;
  }

  p {
    max-width: 100%;
    color: ${theme.colors.text.primary};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

export const HeaderMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const SessionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const SessionTitle = styled.div`
  h2 {
    font-size: 1.375rem;
    font-weight: 600;
    color: ${theme.colors.text.primary};
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
    text-align: left;
  }

  p {
    color: ${theme.colors.text.primary};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    opacity: 0.85;
    text-align: left;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

export const SessionDescription = styled.div`
  h2 {
    font-size: 1.375rem;
    font-weight: 600;
    color: ${theme.colors.text.primary};
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
    text-align: left;
  }

  div {
    color: ${theme.colors.text.primary};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    opacity: 0.85;
    text-align: left;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    
    div {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

export const IntroEdge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem 0;

  p {
    color: ${theme.colors.text.primary};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    opacity: 0.85;
    text-align: left;
  }

  @media (max-width: 767px) {
    padding: 1rem 0;
    gap: 0.5rem;
  }
`;

export const IntroTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    margin: 0;
    color: ${theme.colors.text.primary};
    line-height: 1.3;
    text-align: left;
  }

  img {
    width: 1.75rem;
    height: 1.75rem;
    flex-shrink: 0;
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    gap: 0.5rem;
    
    h3 {
      font-size: 1.25rem;
    }
    
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const Stats = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  min-height: 120px; /* Ensure minimum height for visibility */

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
    margin: 1rem auto 3rem auto;
    min-height: auto;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  min-width: 120px; /* Ensure minimum width for visibility */

  h1 {
    font-size: 5rem;
    font-weight: 600;
    margin: 0;
    line-height: 1;
    color: ${theme.colors.text.primary};
  }

  p {
    color: ${theme.colors.text.primary};
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
    line-height: 1.2;
  }

  @media (max-width: 767px) {
    gap: 0.5rem;
    min-width: auto;
    
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const Banner = styled.div`
  height: 40rem;
  width: 100%;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 767px) {
    height: 28rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
