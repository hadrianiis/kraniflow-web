'use client';
import { IconHeart, IconShield, IconBolt, IconBrain } from '@tabler/icons-react';
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
            Kraniosakrálna terapia pôsobí priamo na kraniosakrálny systém – jemné pohyby lebky a miechy, ktoré umožňujú správny tok mozgovomiešneho moku. Tento systém je kľúčový pre rovnováhu a správnu funkciu nervového systému. Kraniosakrálna terapia pracuje so štyrmi základnými princípmi: uvoľňovanie napätia, obnovenie pohybu, podpora samoliečivých, schopností, prepojenie tela a mysle.

            </Description>

            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>
                  <IconHeart size={16} />
                  <FeatureTitle>Jemné dotyky</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Terapeut používa veľmi jemné dotyky na identifikáciu napätia.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <IconShield size={16} />
                  <FeatureTitle>Bezpečná metóda</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Neinvazívna technika bez vedľajších účinkov a rizík.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>
                  <IconBolt size={16} />
                  <FeatureTitle>Rýchle výsledky</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Účinky sa často prejavia už po prvých sedeniach.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>
                  <IconBrain size={16} />
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
