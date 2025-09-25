'use client';
import OptimizedImage from '@/components/Common/OptimizedImage';
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
  MainHeaderSection,
  Stats,
  Stat,
  Banner,
} from './styles';
import { MaskText } from '@/components';
import { 
  INTRO_HEADER_PHRASES, 
  INTRO_DESCRIPTION_PHRASES, 
  STATISTICS,
  IMAGES,
  THERAPY_INFO,
  THERAPY_EDGES
} from '@/lib/constants';

const IntroSection = () => {

  return (
    <Wrapper>
      <Inner>
        <MainHeaderSection>
          <Header>
            <HeaderMainText>
              <MaskText 
                phrases={INTRO_HEADER_PHRASES.desktop} 
                tag="h1" 
                align="center" 
              />
              <MaskText 
                phrases={INTRO_DESCRIPTION_PHRASES.desktop} 
                tag="p" 
                align="center" 
              />
            </HeaderMainText>
          </Header>
        </MainHeaderSection>

        <ContentContainer>
          <TextSection>
            <SessionSection>
              {THERAPY_INFO.map((phrase, index) => (
                <SessionTitle key={index}>
                  <MaskText phrases={[phrase.title]} tag="h2" align="left" />
                  <MaskText phrases={[phrase.description]} tag="p" align="left" />
                </SessionTitle>
              ))}
            </SessionSection>
          </TextSection>
          
          <EdgesSection>
            {THERAPY_EDGES.map((edge, i) => (
              <IntroEdge key={i}>
                <IntroTitle>
                  <OptimizedImage src={edge.icon} alt="icon" width={32} height={32} placeholder="empty" />
                  <MaskText phrases={[edge.point]} tag="h3" align="left" />
                </IntroTitle>
                <MaskText phrases={[edge.details]} tag="p" align="left" />
              </IntroEdge>
            ))}
          </EdgesSection>
        </ContentContainer>
        
        <Stats>
          {STATISTICS.map((stat) => (
            <Stat key={stat.id}>
              <h1>{stat.number}</h1>
              <p>{stat.subtitle}</p>
            </Stat>
          ))}
        </Stats>
      </Inner>
      <Banner>
        <OptimizedImage 
          src={IMAGES.hero.desktop} 
          alt="Kraniosakrálna terapia - banner" 
          fill 
        />
      </Banner>
    </Wrapper>
  );
};

export default IntroSection;
