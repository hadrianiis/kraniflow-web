'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Div, Word, Span, AbsoluteContainer } from './styles';
import { Variants } from 'framer-motion';

const titleAnimation: Variants = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation: Variants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const letterAnimationTwo: Variants = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const AnimatedLink = ({ 
  title, 
  url, 
  onLinkClick,
  disableAnimation = false
}: { 
  title: string; 
  url: string; 
  onLinkClick?: () => void;
  disableAnimation?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  // Ak je animácia zakázaná, zobrazíme jednoduchý text bez animácie
  if (disableAnimation) {
    return (
      <Link href={url} style={{ textDecoration: 'none' }} onClick={handleClick}>
        <span style={{ 
          color: 'white',
          fontSize: '1rem',
          fontWeight: 500
        }}>
          {title}
        </span>
      </Link>
    );
  }

  return (
    <Link href={url} style={{ textDecoration: 'none' }} onClick={handleClick}>
      <Div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatedWord
          title={title}
          animations={letterAnimation}
          isHovered={isHovered}
        />
        <AbsoluteContainer>
          <AnimatedWord
            title={title}
            animations={letterAnimationTwo}
            isHovered={isHovered}
          />
        </AbsoluteContainer>
      </Div>
    </Link>
  );
};

export default AnimatedLink;

const AnimatedWord = ({
  title,
  animations,
  isHovered,
}: {
  title: string;
  animations: Variants;
  isHovered: boolean;
}) => (
  <Word
    variants={titleAnimation}
    initial="rest"
    animate={isHovered ? 'hover' : 'rest'}
  >
    {title.split('').map((char, i) =>
      char === ' ' ? (
        <Span key={i}>&nbsp;</Span>
      ) : (
        <Span variants={animations} key={i}>
          {char}
        </Span>
      )
    )}
  </Word>
);
