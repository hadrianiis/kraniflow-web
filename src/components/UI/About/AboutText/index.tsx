'use client';
import Image from 'next/image';
// Obrázky - použijeme cestu namiesto importu
const kika_about = '/images/kika-about.avif';
const kika_spine = '/images/kika-spine.webp';
import {
  Wrapper,
  Inner,
  HeroSection,
  HeroContent,
  HeroText,
  HeroImage,
  Header,
  HeaderMainText,
  ContentContainer,
  TextSection,
  EdgesSection,
  IntroEdge,
  IntroTitle,
  SessionSection,
  SessionTitle,
  MainHeaderSection,
  Stats,
  Stat,
  StorySection,
  StoryContent,
  StoryText,
  StoryImage,
  SpineImage,
  PersonalMessageSection,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  AboutTherapyPhrases,
  edges,
  stats,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  sessionDescriptionPhrase,
  notMassagePhrase,
  personalMessagePhrase,
} from './constants';

const AboutText = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>

        {/* Story Section */}
        <StorySection>
          <StoryContent>
            <StoryText>
              <h2>Môj príbeh</h2>
              <MaskText phrases={sessionDescriptionPhrase} tag="p" align="left" />
            </StoryText>
            <StoryImage>
              <Image 
                src={kika_about} 
                alt="Kristína Švantnerová - môj príbeh s kraniosakrálou terapiou" 
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </StoryImage>
          </StoryContent>
        </StorySection>

        {/* Experience Section */}
        <StorySection>
          <StoryContent $reverse>
            <StoryText>
              <h2>Moje skúsenosti</h2>
              <MaskText phrases={notMassagePhrase} tag="p" align="left" />
            </StoryText>
            <SpineImage>
              <Image 
                src={kika_spine} 
                alt="Kristína Švantnerová - moje skúsenosti s kraniosakrálou terapiou" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'top right' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </SpineImage>
          </StoryContent>
        </StorySection>


        {/* My Approach Section */}
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
      </Inner>
    </Wrapper>
  );
};

export default AboutText;
