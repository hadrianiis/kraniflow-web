'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
`;

export const Inner = styled.div`
  display: flex;
  padding: 3rem 0 6.25rem 0;
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 0 3rem 0;
  }
`;

export const Header = styled.header`
  text-align: center;
  max-width: 48.5rem;
  margin: 0 auto 3rem;
  h1 {
    color: var(--Background, #F1F1F1);
    font-size: 4.75rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const TestimonialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Testimonial = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-left: 2px solid var(--Background, #F1F1F1);

  @media (max-width: 768px) {
    border-left: none;
  }
`;

export const Testimony = styled.p`
  color: #292929;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: auto;
  width: 100%;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  h3 {
    color: var(--Background, #F1F1F1);
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  p {
    color: #292929;
    font-size: 0.875rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;

    h3 {
      font-size: 1.25rem;
      line-height: normal;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const PaginationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  margin-top: 2.5rem;
`;

export const Previous = styled.div`
  cursor: pointer;
  color: #f1f1f1;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const Next = styled.div`
  cursor: pointer;
  color: #f1f1f1;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
