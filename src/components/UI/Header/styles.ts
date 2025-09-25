import Link from 'next/link';
import { styled } from 'styled-components';
import { theme } from '@/lib/theme';

export const Wrapper = styled.section`
  padding: 1rem 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, ${theme.colors.gradient.start}, ${theme.colors.gradient.end});
    border-radius: 25px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({ $isOpen }) => $isOpen ? 'flex-start' : 'center'};
    padding: 0.5rem;
    width: ${({ $isOpen }) => $isOpen ? '240px' : '55px'};
    height: ${({ $isOpen }) => $isOpen ? '350px' : '55px'};
    transform-origin: top right;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 1;
    visibility: visible;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    
  }
`;

export const MobileMenuContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  overflow: visible;
  height: 100%;
  justify-content: space-between;
  transition: opacity 0.2s ease, visibility 0.2s ease;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  grid-column: 1;
  
  img {
    height: 160px;
    width: auto;
    object-fit: contain;
    background: transparent;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-column: 1;
    
    img {
      height: 120px;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: none; /* Hamburger menu je teraz fixed v svojom komponente */
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.75rem;
  position: relative;
  grid-column: 2;

  a {
    color: ${theme.colors.text.primary};
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    display: none; /* Skryjeme desktop navigáciu na mobile */
  }
`;

export const MobileNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    flex: 1;
    justify-content: center;

    a {
      color: ${theme.colors.text.white};
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;
      white-space: nowrap;
      padding: 0.5rem 0.75rem;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      
      &:hover {
        color: rgba(255, 255, 255, 0.8);
        transform: translateY(-1px);
      }
    }
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  font-weight: 400;
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  grid-column: 3;

  div {
    span {
      color: ${theme.colors.text.white};
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Skryjeme desktop CTA na mobile */
  }
`;

export const MobileCallToActions = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: auto;
    padding: 1rem 0.5rem;
    gap: 0.75rem;
    opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
    visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
    flex-shrink: 0;
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(20px)'};
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-delay: ${({ $isOpen }) => $isOpen ? '0.4s' : '0s'};

    div {
      span {
        color: ${theme.colors.text.white};
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }
`;
