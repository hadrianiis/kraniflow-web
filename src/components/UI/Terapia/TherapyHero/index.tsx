'use client';
import { Cpu, Zap } from 'lucide-react';
import Image from 'next/image';
import {
  Section,
  Container,
  Title,
  ContentWrapper,
  TextContent,
  Description,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  ImageWrapper,
  ImageContainer,
  GradientOverlay,
  DottedBorder,
} from './styles';

export default function TherapyHero() {
  return (
    <Section>
      <Container>
        <Title>
          Čo je kraniosakrálna terapia?
        </Title>
        
        <ContentWrapper>
          <TextContent>
            <Description>
            Kraniosakrálna terapia je jemná, no veľmi účinná technika, ktorá podporuje telo v jeho prirodzenom procese uzdravovania. Využíva dotyk na konkrétnych miestach tela, ktoré pomáhajú harmonizovať nervový systém, uvoľniť napätie a zmierniť stres. Tento prístup je ideálny pre všetky vekové kategórie – od tehotných mamičiek až po seniorov.

            </Description>
            <Description>
              Táto metóda je založená na práci s kraniosakrálnym systémom, ktorý zahŕňa lebku, chrbticu a panvu, a pomáha zmierniť rôzne zdravotné problémy.
            </Description>

            <FeaturesGrid>
             
            </FeaturesGrid>
          </TextContent>
          
          <ImageWrapper>
            <GradientOverlay />
            <ImageContainer>
              <DottedBorder>
                <Image
                  src="/images/skeleton.webp"
                  className="rounded-[12px] shadow"
                  alt="therapy illustration"
                  width={1400}
                  height={1078}
                />
              </DottedBorder>
            </ImageContainer>
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
