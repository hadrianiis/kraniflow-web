'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wrapper, Inner, ImageContainer, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';

export const imageVariants: any = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      delay: 0.2,
    },
  },
};

const AboutFeatures = () => {
  return (
    <Wrapper>
      <Inner>
        <ImageContainer className="about-image-container lcp-optimized">
          <Div
            as={motion.div}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="optimized-animation"
          >
            <Image
              src="/images/kranio-about1.avif"
              alt="Kraniosakrálna terapia - jemný dotyk pre zdravie"
              fill
              quality={90}
              priority
              fetchPriority="high"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <RevealCover />
          </Div>
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default AboutFeatures;
