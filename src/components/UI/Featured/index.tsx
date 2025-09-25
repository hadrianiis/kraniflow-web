'use client';
import { IMAGES } from '@/lib/constants';
import { Wrapper, Inner, ImageContainer, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import OptimizedImage from '@/components/Common/OptimizedImage';
import { useIsMobile } from '@/lib/useIsMobile';

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div>
            <OptimizedImage
              src={isMobile ? IMAGES.hero.mobile : IMAGES.hero.desktop}
              alt="Kraniosakrálna terapia - jemný dotyk pre zdravie"
              fill
              priority
              fetchPriority="high"
              quality={isMobile ? 75 : 85}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </Div>
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default Featured;

