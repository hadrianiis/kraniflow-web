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
              Kraniosakrálna terapia je jemná, neinvazívna technika, ktorá pracuje s prirodzeným rytmom tela.{' '}
              <span>Pomáha obnoviť rovnováhu</span> a podporiť samoliečebné procesy organizmu.
            </Description>
            <Description>
              Táto metóda je založená na práci s kraniosakrálnym systémom, ktorý zahŕňa lebku, chrbticu a panvu, a pomáha zmierniť rôzne zdravotné problémy.
            </Description>

            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>
                  <Zap className="size-4" />
                  <FeatureTitle>Jemná technika</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Neinvazívna metóda bez vedľajších účinkov, vhodná pre všetky vekové kategórie.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <Cpu className="size-4" />
                  <FeatureTitle>Prirodzené liečenie</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Aktivuje samoliečebné procesy tela a podporuje prirodzenú rovnováhu.
                </FeatureDescription>
              </FeatureCard>
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
                  width={1207}
                  height={929}
                />
              </DottedBorder>
            </ImageContainer>
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
