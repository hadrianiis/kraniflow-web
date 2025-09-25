'use client';
import { Wrapper, Inner, HeroTextContainer } from './styles';
import UiverseButton from '@/components/UI/UiverseButton';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '@/lib/useIsMobile';
import { HERO_PHRASES, HERO_SUBTITLE } from '@/lib/constants';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <HeroTextContainer>
          <MaskText 
            phrases={isMobile ? HERO_PHRASES.mobile : HERO_PHRASES.desktop} 
            tag="h1" 
            align="center" 
          />
          <p>{HERO_SUBTITLE}</p>
        </HeroTextContainer>
        <UiverseButton 
          onClick={() => window.location.href = '/contact'}
          className="cta-button"
        >
          Rezervujte si termín
        </UiverseButton>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
