'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { 
  HeroSection, 
  Inner, 
  HeroTextContainer, 
  SparkleBadge, 
  MainTitle
} from './styles';

export default function BlogHero() {
  return (
    <HeroSection>
      <Inner>
        <HeroTextContainer>
          {/* Sparkle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <SparkleBadge>
              <Sparkles />
              <span>Nový obsah každý týždeň</span>
            </SparkleBadge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <MainTitle>
              <span className="gradient-text">Blog</span>
            </MainTitle>
          </motion.h1>
        </HeroTextContainer>
      </Inner>
    </HeroSection>
  );
} 