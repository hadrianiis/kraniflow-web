'use client';
import { Wrapper, BriefNote, ContentWrapper, ButtonGroup, PrimaryButton, SecondaryButton } from './styles';
import MaskText from '@/components/Common/MaskText';
import Link from 'next/link';

const CTA_01 = () => {
  const headingPhrase = ['Začnite svoju cestu k lepšiemu zdraviu'];
  
  const descriptionPhrase = [
    'Biodynamická kraniosakrálna terapia je jemná a účinná metóda, ktorá harmonizuje telo aj myseľ, pomáha zmierniť bolesti a stres',
  ];

  return (
    <Wrapper>
      <BriefNote>
        <ContentWrapper>
          <MaskText phrases={headingPhrase} tag="h2" align="left" />
          <MaskText phrases={descriptionPhrase} tag="p" align="left" />
          <ButtonGroup>
            <SecondaryButton>
              <Link href="/about">
                Zisti viac o nás
              </Link>
            </SecondaryButton>
            <PrimaryButton>
              <Link href="/rezervacia">
                Rezervovať termín
              </Link>
            </PrimaryButton>
          </ButtonGroup>
        </ContentWrapper>
        
        {/* Decorative elements */}
        <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-rose-200/20 rounded-full blur-2xl"></div>
      </BriefNote>
    </Wrapper>
  );
};

export default CTA_01;
