'use client';

import { Wrapper, Inner, TextContainer, Letter, SecondOverlay } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const secondOverlayRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const text = 'Kranioflow';
  const letters = text.split('');

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Original letter animation - letters go up and disappear completely
    letterRefs.current.forEach((letterRef, index) => {
      if (letterRef) {
        tl.to(letterRef, {
          y: '-150%', // Move the letters further up to ensure they disappear
          opacity: 0, // Make them completely transparent
          ease: 'back.out(1.7)', // Original easing function
          duration: 1.4, // Original duration
        }, index * 0.1); // Original stagger timing
      }
    });
    
    // Animate both the wrapper and the second overlay almost at the same time
    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'back.out(1.7)', // Original easing
      duration: 1, // Original duration
      stagger: 0.2,
      onComplete: () => {
        setComplete(true);
      },
    });

    // Apply a small delay to one of the elements (adjust as needed)
    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 1,
      delay: -0.9, // Original delay
    });
  }, [setComplete]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          <TextContainer>
            {letters.map((letter, index) => (
              <Letter 
                key={index}
                ref={(el) => { letterRefs.current[index] = el; }}
              >
                {letter}
              </Letter>
            ))}
          </TextContainer>
        </Inner>
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef}></SecondOverlay>
    </>
  );
};

export default Preloader;
