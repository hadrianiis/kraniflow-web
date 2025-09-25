
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 4rem;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6.25rem auto 0;
  max-width: 80rem;
  width: 90%;

  h2 {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 6.5rem;
  }

  @media (max-width: 768px) {
    margin: 2.5rem auto 0;
    width: 95%;

    h2 {
      font-size: 1rem;
      font-weight: 500;
      margin-top: 1rem;
    }
  }

  @media (max-width: 480px) {
    margin: 1.5rem auto 0;
    width: 98%;

    h2 {
      margin-top: 0.75rem;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    object-fit: cover;
    border-radius: 0.75rem;
  }

  @media (max-width: 768px) {
    border-radius: 0.5rem;
    margin: 1rem auto;

    img {
      height: 23.75rem;
    }
  }

  @media (max-width: 480px) {
    margin: 0.5rem auto;
    border-radius: 0.375rem;
  }
`;

export const Div = styled(motion.div)`
  position: relative;
  height: 35rem;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 25rem;
  }

  @media (max-width: 599px) {
    height: 23.75rem;
    
     img {
      object-fit: cover;
     }
  }

  @media (max-width: 480px) {
    height: 20rem;
  }
`;
