'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 6rem;

  @media (max-width: 768px) {
    padding-top: 4rem;
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

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const EdgesSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 50%;

  @media (max-width: 768px) {
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
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
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
    font-size: 4.75rem;
    font-weight: 400;
    line-height: 1.1;
    margin: 0;
  }

  p {
    max-width: 100%;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
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
    color: var(--text-color);
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
    text-align: left;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    opacity: 0.85;
    text-align: left;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;

export const SessionDescription = styled.div`
  h2 {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
    text-align: left;
  }

  div {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    opacity: 0.85;
    text-align: left;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    
    div {
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;

export const IntroEdge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 0;

  p {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    opacity: 0.85;
    text-align: left;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    gap: 0.375rem;
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
    color: var(--text-color);
    line-height: 1.3;
    text-align: left;
  }

  img {
    width: 1.75rem;
    height: 1.75rem;
    flex-shrink: 0;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
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
  margin: 5rem auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 3rem auto;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;

  h1 {
    font-size: 5rem;
    font-weight: 600;
    margin: 0;
    line-height: 1;
  }

  p {
    color: var(--link-color);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    
    h1 {
      font-size: 1.25rem;
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
  }

  @media (max-width: 768px) {
    height: 28rem;
    img {
      object-fit: contain;
    }
  }
`;
