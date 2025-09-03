'use client';
import Image from 'next/image';
// Obrázky - použijeme cestu namiesto importu
const big_banner = '/images/featured_img.avif';
const featured_mobile_banner = '/images/featured_img1.avif';
const featured_img1 = '/images/featured_img1.avif';
import { Wrapper, Inner, ImageContainer, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '@/lib/useIsMobile';
export const imageVariants = {
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
                src={featured_img1}
                alt="Kraniosakrálna terapia - jemný dotyk pre zdravie"
                fill
              />
            ) : (
              <Image src={featured_img1} alt="Kraniosakrálna terapia Bratislava" fill />
            )}
          </Div>
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default Featured;

