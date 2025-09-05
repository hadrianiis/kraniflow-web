'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(--Background);
  color: var(--white);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  
  /* Professional smooth rendering */
  will-change: transform;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Inner = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: visible;
  padding: 4em 0 0 0;
  min-height: 30vh;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow: visible;
  padding: 2em 1em 3em 1em;
  gap: clamp(0.5rem, 2vw, 1.5rem);
  min-height: 20vh;
  
  /* Professional smooth rendering */
  will-change: transform;
  backface-visibility: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5em 0.5em 2em 0.5em;
    gap: clamp(0.3rem, 1.5vw, 1rem);
  }
  
  @media (max-width: 480px) {
    padding: 1em 0.3em 1.5em 0.3em;
    gap: clamp(0.2rem, 1vw, 0.8rem);
  }
`;

export const Letter = styled.span`
  font-family: 'MBF Taurian', sans-serif;
  font-weight: 600;
  font-size: clamp(3rem, 12vw, 15rem);
  line-height: 0.8;
  color: var(--white);
  display: inline-block;
  overflow: visible;
  transform-origin: center bottom;
  
  /* Professional smooth transitions */
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  /* Gradient text effect with fallback */
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Fallback for browsers that don't support background-clip */
  @supports not (-webkit-background-clip: text) {
    color: var(--gradient-start);
  }
  
  /* Smooth letter spacing */
  letter-spacing: 0.05em;
  
  @media (max-width: 1024px) {
    font-size: clamp(2.5rem, 10vw, 12rem);
    letter-spacing: 0.03em;
  }
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 8rem);
    letter-spacing: 0.02em;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 6vw, 5rem);
    letter-spacing: 0.01em;
  }
`;

export const SecondOverlay = styled.div`
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
