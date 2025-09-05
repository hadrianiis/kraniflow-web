'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 11.25rem;

  @media (max-width: 768px) {
    margin-top: 6.25rem;
  }
`;

export const BriefNote = styled.div`
  height: fit-content;
  padding: 8rem 8rem;
  margin: 50px auto;
  width: 90%;
  max-width: 80rem;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  text-align: left;
  position: relative;
  overflow: hidden;
  border-radius: 16px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(242, 188, 187, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(70, 159, 157, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }

  h2 {
    color: var(--white);
    font-size: 3.5rem;
    font-weight: normal;
    margin: 0 0 1.5rem 0;
    line-height: 1.1;
  }

  p {
    color: var(--white);
    font-size: 1rem;
    font-weight: 400;
    margin: 0 0 2.5rem 0;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    margin: 50px auto;
    width: 95%;
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
    
    p {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 80%;
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 1rem;
    margin-top: 0;
  }
`;

export const PrimaryButton = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 2.5rem;
    background: var(--white);
    color: var(--black);
    text-decoration: none;
    border: none;
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    min-width: 200px;
    
    &:hover {
      background: #f8f8f8;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
      transform: translateY(0);
      transition: transform 0.1s ease;
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 1rem 2rem;
      font-size: 1rem;
      min-width: 180px;
    }
  }
`;

export const SecondaryButton = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 2.5rem;
    background: transparent;
    color: var(--white);
    text-decoration: none;
    border: 2px solid var(--white);
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    min-width: 200px;
    
    &:hover {
      background: var(--white);
      color: var(--black);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
      transform: translateY(0);
      transition: transform 0.1s ease;
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 1rem 2rem;
      font-size: 1rem;
      min-width: 180px;
    }
  }
`;


