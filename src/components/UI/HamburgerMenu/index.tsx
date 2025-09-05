'use client';

import React from 'react';
import { StyledWrapper } from './styles';

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onToggle,
  className,
  size = 'md',
  color = 'white',
}) => {
  return (
    <StyledWrapper className={className} $size={size} $color={color} $isOpen={isOpen}>
      <label className="hamburger" htmlFor="hamburger-checkbox">
        <input
          id="hamburger-checkbox"
          type="checkbox"
          checked={isOpen}
          onChange={onToggle}
          aria-label="Toggle navigation menu"
        />
        <svg viewBox="0 0 32 32" aria-hidden="true" style={{ width: '24px', height: '24px' }}>
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>
    </StyledWrapper>
  );
};

export { HamburgerMenu };
export default HamburgerMenu;
