'use client';
import { Wrapper, BriefNote } from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopBriefNotePhrase,
  mobileBriefNotePhrase,
} from './constants';

const Briefnotephrase = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <BriefNote>
        {isMobile ? (
          <MaskText phrases={mobileBriefNotePhrase} tag="p" align="center" />
        ) : (
          <MaskText phrases={desktopBriefNotePhrase} tag="p" align="center" />
        )}
      </BriefNote>
    </Wrapper>
  );
};

export default Briefnotephrase;
