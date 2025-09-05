import styled from 'styled-components';
import { motion } from 'framer-motion';

interface StyledWrapperProps {
  $size: 'sm' | 'md' | 'lg';
  $color: string;
  $isOpen: boolean;
}

const getSizeValue = (size: 'sm' | 'md' | 'lg'): string => {
  switch (size) {
    case 'sm':
      return '2em';
    case 'md':
      return '3em';
    case 'lg':
      return '4em';
    default:
      return '3em';
  }
};

export const StyledWrapper = styled(motion.div)<StyledWrapperProps>`
  display: none;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 25px;
    right: 27px;
    display: block;
    z-index: 1001;
    
    
    .hamburger {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      position: relative;
      z-index: 2;
      width: 40px;
      height: 40px;
    }
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    /* The size of the SVG defines the overall size */
    height: ${({ $size }) => getSizeValue($size)};
    width: auto;
    /* Define the transition for transforming the SVG */
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: ${({ $color }) => $color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    /* Define the transition for transforming the Stroke */
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }

  /* Focus styles for accessibility */
  .hamburger:focus-within {
    outline: 2px solid ${({ $color }) => $color};
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Hover effect */
  .hamburger:hover svg {
    transform: scale(1.05);
  }

  .hamburger input:checked + svg:hover {
    transform: rotate(-45deg) scale(1.05);
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .hamburger svg,
    .line {
      transition: none;
    }
  }
`;
