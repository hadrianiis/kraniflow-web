import styled from "styled-components"
import Link from "next/link"
import { theme } from '@/lib/theme';

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.9rem 2rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 17px;
  border-radius: 500px;
  overflow: hidden;
  background: ${theme.colors.gradient.start};
  color: ${theme.colors.text.white};
  transition: all 0.4s ease;
  
  /* Performance optimizations */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  /* Ensure smooth text rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: ${theme.colors.gradient.end};
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover:not(:disabled)::before {
    transform: translate3d(100%, 0, 0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const LinkButton = styled(Link)`
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.9rem 2rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 17px;
  border-radius: 500px;
  overflow: hidden;
  background: ${theme.colors.gradient.start};
  color: ${theme.colors.text.white};
  transition: all 0.4s ease;
  text-decoration: none;
  
  /* Performance optimizations */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  /* Ensure smooth text rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: ${theme.colors.gradient.end};
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover:not(:disabled)::before {
    transform: translate3d(100%, 0, 0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const ButtonSpan = styled.span`
  position: relative;
  z-index: 10;
  transition: color 0.4s;

  ${Button}:hover &,
  ${LinkButton}:hover & {
    color: ${theme.colors.text.white};
  }
`
