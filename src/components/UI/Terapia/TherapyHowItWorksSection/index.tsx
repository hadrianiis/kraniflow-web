'use client';
import { Heart, Shield, Zap, Brain } from 'lucide-react';
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
} from './styles';

export default function TherapyHowItWorksSection() {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <TextContent>
            <Title>
              Ako funguje kraniosakrálna terapia?
            </Title>
            
            <Description>
              Terapeut používa jemné dotyky na rôznych častiach tela, aby{' '}
              <span>identifikoval a uvoľnil napätie</span> v kraniosakrálnom systéme.
            </Description>
            <Description>
              Táto technika pomáha obnoviť prirodzený rytmus tela a podporiť samoliečebné procesy organizmu.
              asdasdasdasdasdasdasd
              asdasdasdasdasdasdasddasd
              asd
              asd
              asd
              asd
              asd
              asd
              <br/>
              asd
              <br/>
              asd
              <br/>
              asd
              <br/>
              asd
              <br/>
            </Description>

            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>
                  <Heart className="size-4" />
                  <FeatureTitle>Jemné dotyky</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Terapeut používa veľmi jemné dotyky na identifikáciu napätia.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <Shield className="size-4" />
                  <FeatureTitle>Bezpečná metóda</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Neinvazívna technika bez vedľajších účinkov a rizík.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>
                  <Zap className="size-4" />
                  <FeatureTitle>Rýchle výsledky</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Účinky sa často prejavia už po prvých sedeniach.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>
                  <Brain className="size-4" />
                  <FeatureTitle>Holistický prístup</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Liečenie celého tela, nie len jednotlivých symptómov.
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </TextContent>
          
          <ImageWrapper>
            <ImageContainer>
              <Image
                src="/images/kranio-about1.avif"
                alt="kraniosakrálna terapia proces"
                width={400}
                height={600}
                className="therapy-image"
              />
            </ImageContainer>
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
