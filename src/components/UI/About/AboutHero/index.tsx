'use client';
import { Wrapper, Inner, HeroTextContainer } from './styles';
import UiverseButton from '@/components/UI/UiverseButton';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '@/lib/useIsMobile';
import { motion, Variants } from 'framer-motion';
import { ABOUT_HERO_PHRASES } from '@/lib/constants';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AboutHero = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper className="about-hero lcp-optimized">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="about-hero-content"
      >
        <Inner>
          <HeroTextContainer>
            <MaskText 
              phrases={isMobile ? ABOUT_HERO_PHRASES.mobile : ABOUT_HERO_PHRASES.desktop} 
              tag="h1" 
              align="center" 
            />
            <p>Poznajte môj príbeh a prístup k terapii</p>
          </HeroTextContainer>
          <UiverseButton 
            onClick={() => window.location.href = '/contact'}
            className="cta-button"
          >
            Rezervujte si termín
          </UiverseButton>
        </Inner>
      </motion.div>
    </Wrapper>
  );
};

export default AboutHero;
