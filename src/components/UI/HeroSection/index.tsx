'use client';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '@/lib/useIsMobile';
import {
  mobilePhrases,
  phrases,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" align="center" />
              <p>Cesta k dlhodobému zdraviu</p>
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" align="center" />
              <p>Cesta k dlhodobému zdraviu</p>
            </>
          )}
        </HeroTextContainer>
        <GetStartedButton padding="1rem 2rem" />
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
