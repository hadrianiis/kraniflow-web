'use client';

import { MaskText } from '@/components';
import { 
  FaOm, 
  FaHeartbeat, 
  FaUsers 
} from 'react-icons/fa';
import {
  Wrapper,
  Inner,
  ContentContainer,
  TextSection,
  EdgesSection,
  IntroEdge,
  IntroTitle,
  SessionSection,
  SessionTitle,
  IconWrapper,
} from './styles';
import { THERAPY_INFO, THERAPY_EDGES } from '@/lib/constants';

// Mapovanie ikon pre jednotlivé sekcie
const getIconForEdge = (index: number) => {
  const icons = [FaOm, FaHeartbeat, FaUsers];
  return icons[index] || FaOm;
};

/**
 * AboutText komponent - zobrazuje informácie o terapii a prístupe
 * Obsahuje sekcie s popisom terapie a kľúčovými hodnotami
 */
const AboutText = () => {
  return (
    <Wrapper>
      <Inner>
        <ContentContainer>
          {/* Sekcia s popisom terapie */}
          <TextSection>
            <SessionSection>
              {THERAPY_INFO.map((phrase, index) => (
                <SessionTitle key={`therapy-${index}`}>
                  <MaskText phrases={[phrase.title]} tag="h2" align="left" />
                  <MaskText phrases={[phrase.description]} tag="p" align="left" />
                </SessionTitle>
              ))}
            </SessionSection>
          </TextSection>
          
          {/* Sekcia s kľúčovými hodnotami */}
          <EdgesSection>
            {THERAPY_EDGES.map((edge, i) => {
              const IconComponent = getIconForEdge(i);
              return (
                <IntroEdge key={`edge-${i}`}>
                  <IntroTitle>
                    <IconWrapper>
                      <IconComponent 
                        size={32}
                        color="#ffffff"
                        aria-label={`${edge.point} ikona`}
                      />
                    </IconWrapper>
                    <MaskText phrases={[edge.point]} tag="h3" align="left" />
                  </IntroTitle>
                  <MaskText phrases={[edge.details]} tag="p" align="left" />
                </IntroEdge>
              );
            })}
          </EdgesSection>
        </ContentContainer>
      </Inner>
    </Wrapper>
  );
};

export default AboutText;
