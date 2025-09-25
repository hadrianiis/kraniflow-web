'use client';
import { Wrapper, BriefNote } from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '@/lib/useIsMobile';
import { BRIEF_NOTE_PHRASES } from '@/lib/constants';

const Briefnotephrase = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <BriefNote>
        <MaskText 
          phrases={isMobile ? BRIEF_NOTE_PHRASES.mobile : BRIEF_NOTE_PHRASES.desktop} 
          tag="p" 
          align="center" 
        />
      </BriefNote>
    </Wrapper>
  );
};

export default Briefnotephrase;
