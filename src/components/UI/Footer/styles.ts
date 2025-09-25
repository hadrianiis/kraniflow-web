import { styled } from 'styled-components';
import { theme, media } from '@/lib/theme';

export const Wrapper = styled.footer`
  padding-bottom: ${theme.spacing['3xl']};
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['3xl']};

  ${media.md} {
    gap: ${theme.spacing['2xl']};
  }
`;

export const FooterLogo = styled.div`
  @media (max-width: 768px) {
    width: 13.2rem;
    height: 5.6rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing['3xl']} 0 ${theme.spacing['3xl']};
  border-top: 0.0625rem solid ${theme.colors.border.dark};
  gap: ${theme.spacing['3xl']};

  ${media.md} {
    gap: ${theme.spacing['2xl']};
  }
`;

export const FooterMiddle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
  width: 100%;
  gap: ${theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    gap: ${theme.spacing.lg};
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    order: 1;
  }
`;

export const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: ${theme.spacing.lg};
    order: 2;
  }
`;

export const QRContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  padding: 0;
`;

export const QRImageCtn = styled.div``;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  p {
    max-width: 15rem;
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.normal};
    color: ${theme.colors.text.primary};
    margin: 0;
  }

  @media (max-width: 768px) {
    p {
      font-size: ${theme.typography.fontSize.sm};
      max-width: 12rem;
    }
  }
`;

export const IconCtn = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;


export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  align-items: flex-start;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }

  li {
    color: ${theme.colors.text.primary};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.normal};
    cursor: pointer;
    position: relative;
    transition: color ${theme.transitions.normal};
    text-align: left;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      text-align: center;
    }

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.text.primary};
      left: 0;
      bottom: -3px;
      transform: scaleX(0);
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &:hover {
      color: ${theme.colors.primary};
      
      &::after {
        width: 100%;
        transform: scaleX(1);
        background-color: ${theme.colors.primary};
      }
    }
  }
`;

export const MobileLinksContainer = styled.ul`
  list-style: none;
  display: none;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  li {
    color: ${theme.colors.text.primary};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.normal};
    cursor: pointer;
    position: relative;
    transition: color ${theme.transitions.normal};
    text-align: center;
    margin: 0;
    padding: 0;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.text.primary};
      left: 0;
      bottom: -3px;
      transform: scaleX(0);
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &:hover {
      color: ${theme.colors.primary};
      
      &::after {
        width: 100%;
        transform: scaleX(1);
        background-color: ${theme.colors.primary};
      }
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: ${theme.spacing.lg};
`;

export const Translator = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  cursor: pointer;
  transition: opacity ${theme.transitions.normal};

  &:hover {
    opacity: 0.8;
  }

  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.normal};
    color: ${theme.colors.text.primary};
  }

  ${media.md} {
    gap: ${theme.spacing.sm};

    h3 {
      font-size: ${theme.typography.fontSize.sm};
    }
  }
`;

export const CopyRight = styled.div`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.text.primary};
  display: flex;
  align-items: center;

  ${media.md} {
    font-size: ${theme.typography.fontSize.sm};
    gap: ${theme.spacing.xs};
  }
`;
