'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Div, Word, Span, AbsoluteContainer } from './styles';
import { Variants } from 'framer-motion';

type AnimationProps = Variants;

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

const AnimatedLink = ({ title, url }: { title: string; url: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={url} style={{ textDecoration: 'none' }}>
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
