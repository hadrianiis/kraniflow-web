'use client';
import { Heart, Users, Award } from 'lucide-react';
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

export default function AboutHeroNew() {
  return (
    <Section>
      <Container>
        <Title>
          O mne a mojej ceste
        </Title>
        
        <ContentWrapper>
          <TextContent>
            <Description>
              Som Kristína Švantnerová, certifikovaná terapeutka kraniosakrálnej terapie s viac ako{' '}
              <span>15 rokmi skúseností</span> v oblasti alternatívneho liečenia a wellness.
            </Description>
            <Description>
              Moja cesta začala s hlbokým záujmom o prirodzené liečebné metódy a túžbou pomôcť ľuďom dosiahnuť lepšie zdravie a pohodu bez potreby invazívnych zákrokov.
            </Description>

            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>
                  <Heart className="size-4" />
                  <FeatureTitle>Vášnivá terapeutka</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Každý klient je pre mňa jedinečný a pristupujem k nemu s úctou a pochopením.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <Award className="size-4" />
                  <FeatureTitle>Certifikovaná odbornosť</FeatureTitle>
                </FeatureIcon>
                <FeatureDescription>
                  Pravidelne sa vzdelávam a zdokonaľujem v najnovších technikách kraniosakrálnej terapie.
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </TextContent>
          
          <ImageWrapper>
            <GradientOverlay />
            <ImageContainer>
              <DottedBorder>
                <Image
                  src="/images/kika.avif"
                  className="rounded-[12px] shadow"
                  alt="Kristína Švantnerová - Terapeutka kraniosakrálnej terapie"
                  width={1207}
                  height={929}
                  quality={95}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </DottedBorder>
            </ImageContainer>
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
