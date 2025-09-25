'use client';
import { Body, LineMask, AnimatedText } from './styles';
import { useInView, motion, Variants } from 'framer-motion';
import { useRef, memo, useCallback, useMemo } from 'react';

interface MaskTextProps {
  phrases: string[];
  tag: 'h1' | 'h2' | 'h3' | 'p';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const MaskText = ({ phrases, tag, align = 'left', className }: MaskTextProps) => {
  const animate: Variants = useMemo(() => ({
    initial: {
      y: '100%',
      opacity: 0,
    },
    open: (i: number) => ({
      y: '0%',
      opacity: 1,
      transition: { 
        duration: 0.8, 
        delay: 0.1 * i, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
      },
    }),
  }), []);
  
  const body = useRef(null);
  const isInView = useInView(body, { 
    once: true, 
    margin: '-10%', 
    amount: 0.1
  });
  
  const renderPhrase = useCallback((phrase: string, index: number) => {
    return (
      <LineMask key={index} $align={align}>
        <AnimatedText
          as={motion[tag]}
          variants={animate}
          initial="initial"
          animate={isInView ? 'open' : 'initial'}
          custom={index}
          whileInView="open"
          viewport={{ once: true, amount: 0.1, margin: '-10%' }}
        >
          {phrase}
        </AnimatedText>
      </LineMask>
    );
  }, [tag, align, animate, isInView]);
  
  return (
    <Body ref={body} $align={align} className={className}>
      {phrases.map(renderPhrase)}
    </Body>
  );
};

export default memo(MaskText);
