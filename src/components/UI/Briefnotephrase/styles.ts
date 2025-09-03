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
  padding: 6rem 3rem;
  text-align: left;
  margin: 50px 0;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));

  p {
    color: var(--Background, #F1F1F1);
    font-size: 6rem;
    font-weight: 400;
    max-width: 1480px;
    text-align: left !important;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 50px 0;
    p {
      font-size: 3.75rem;
      text-align: left !important;
    }
  }
`;
