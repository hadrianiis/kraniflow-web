'use client';
import Image from 'next/image';
import big_banner from '../../../../public/images/big_banner.png';
import featured_mobile_banner from '../../../../public/images/featured_mobile_banner.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={featured_mobile_banner}
                alt="Kraniosakrálna terapia - jemný dotyk pre zdravie"
                fill
              />
            ) : (
              <Image src={big_banner} alt="Kraniosakrálna terapia Bratislava" fill />
            )}
          </Div>
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default Featured;

