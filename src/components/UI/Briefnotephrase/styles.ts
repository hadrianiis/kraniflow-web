import { styled } from 'styled-components';
import { theme } from '@/lib/theme';

export const Wrapper = styled.section`
  margin-top: 11.25rem;

  @media (max-width: 1440px) {
    margin-top: 6.25rem;
  }
`;

export const BriefNote = styled.div`
  height: fit-content;
  padding: 6rem 3rem;
  text-align: left;
  margin: 50px 0;
  background: linear-gradient(135deg, ${theme.colors.gradient.start}, ${theme.colors.gradient.end});

  p {
    color: ${theme.colors.background.primary};
    font-size: 5rem;
    font-weight: 400;
    max-width: 1480px;
    text-align: left !important;
  }

  @media (max-width: 767px) {
    padding: 2rem 1.5rem;
    margin: 50px 0;
    p {
      font-size: 2.5rem;
      text-align: left !important;
    }
  }
`;
