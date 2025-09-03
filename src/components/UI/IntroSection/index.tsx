'use client';
import Image from 'next/image';
// Obrázky - použijeme cestu namiesto importu
const future_banner = '/images/featured_img.avif';
const future_mobile_banner = '/images/featured_img1.avif';
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  ContentContainer,
  TextSection,
  EdgesSection,
  IntroEdge,
  IntroTitle,
  SessionSection,
  SessionTitle,
  SessionDescription,
  MainHeaderSection,
  Stats,
  Stat,
  Banner,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  AboutTherapyPhrases,
  edges,
  stats,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';

const IntroSection = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <MainHeaderSection>
          <Header>
            <h3>Prečo vyskúšať</h3>
            <HeaderMainText>
              {isMobile ? (
                <>
                  <MaskText phrases={mobileHeaderPhrase} tag="h1" align="center" />
                  <MaskText phrases={mobileParagraphPhrase} tag="p" align="center" />
                </>
              ) : (
                <>
                  <MaskText phrases={desktopHeaderPhrase} tag="h1" align="center" />
                  <MaskText phrases={desktopParagraphPhrase} tag="p" align="center" />
                </>
              )}
            </HeaderMainText>
          </Header>
        </MainHeaderSection>

        <ContentContainer>
          <TextSection>
            <SessionSection>
              {AboutTherapyPhrases.map((phrase, index) => (
                <SessionTitle key={index}>
                  <MaskText phrases={[phrase.title]} tag="h2" align="left" />
                  <MaskText phrases={[phrase.description]} tag="p" align="left" />
                </SessionTitle>
              ))}
            </SessionSection>
          </TextSection>
          
          <EdgesSection>
            {edges.map((edge, i) => (
              <IntroEdge key={i}>
                <IntroTitle>
                  <Image src={edge.icon} alt="icon" width={32} height={32} />
                  <MaskText phrases={[edge.point]} tag="h3" align="left" />
                </IntroTitle>
                <MaskText phrases={[edge.details]} tag="p" align="left" />
              </IntroEdge>
            ))}
          </EdgesSection>
        </ContentContainer>
        
        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={[stat.number]} tag="h1" align="center" />
              <MaskText phrases={[stat.subtitle]} tag="p" align="center" />
            </Stat>
          ))}
        </Stats>
      </Inner>
      <Banner>
        {isMobile ? (
          <Image src={future_mobile_banner} alt="Kraniosakrálna terapia - mobile banner" fill />
        ) : (
          <Image src={future_banner} alt="Kraniosakrálna terapia - banner" fill />
        )}
      </Banner>
    </Wrapper>
  );
};

export default IntroSection;
