'use client';
import { Body, LineMask } from './styles';
import { useInView, motion, Variants } from 'framer-motion';
import { useRef } from 'react';

const MaskText = ({ phrases, tag, align = 'left' }: { phrases: string[]; tag: string; align?: 'left' | 'center' | 'right' }) => {
  const animate: Variants = {
    initial: {
      y: '100%',
    },
    open: (i: number) => ({
      y: '0%',
      transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: '-10%', amount: 0.4 });
  return (
    <Body ref={body} $align={align}>
      {phrases.map((phrase, index) => {
        return (
          <LineMask key={index} $align={align}>
            {tag === 'h1' ? (
              <motion.h1
                variants={animate}
                initial="initial"
                animate={isInView ? 'open' : ''}
                custom={index}
              >
                {phrase}
              </motion.h1>
            ) : tag === 'h2' ? (
              <motion.h2
                variants={animate}
                initial="initial"
                animate={isInView ? 'open' : ''}
                custom={index}
              >
                {phrase}
              </motion.h2>
            ) : tag === 'h3' ? (
              <motion.h3
                variants={animate}
                initial="initial"
                animate={isInView ? 'open' : ''}
                custom={index}
              >
                {phrase}
              </motion.h3>
            ) : (
              <motion.p
                variants={animate}
                initial="initial"
                animate={isInView ? 'open' : ''}
                custom={index}
              >
                {phrase}
              </motion.p>
            )}
          </LineMask>
        );
      })}
    </Body>
  );
};

export default MaskText;
