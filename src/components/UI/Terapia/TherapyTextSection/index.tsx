'use client';
import {
  Section,
  Container,
  Title,
  TextContent,
  Description,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
} from './styles';

export default function TherapyTextSection() {
  return (
    <Section>
      <Container>
        <Title>
          Pre koho je BCST určená?
        </Title>
        
        <TextContent>
          <Description>
            Kraniosakrálna terapia je vhodná pre každého, kto hľadá hlbokú relaxáciu, zlepšenie fyzického a psychického zdravia a prevenciu problémov. V zahraničí je táto technika odporúčaná lekármi a je čoraz viac populárna ako doplnková liečba pre rôzne stavy.
          </Description>

          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <span style={{ fontSize: '2rem' }}>🤱</span>
                <FeatureTitle>Tehotné ženy</FeatureTitle>
              </FeatureIcon>
              <FeatureDescription>
                Úľava od bolesti chrbta, zmiernenie stresu a podpora relaxácie.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <span style={{ fontSize: '2rem' }}>👶</span>
                <FeatureTitle>Novorodenci a deti</FeatureTitle>
              </FeatureIcon>
              <FeatureDescription>
                Pomáha pri kolikách, problémoch so spánkom a emočnej stabilite.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <span style={{ fontSize: '2rem' }}>👨‍💼</span>
                <FeatureTitle>Dospelí</FeatureTitle>
              </FeatureIcon>
              <FeatureDescription>
                Zmiernenie bolesti hlavy, krku, chrbta a úľava pri stresových situáciách.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <span style={{ fontSize: '2rem' }}>👴</span>
                <FeatureTitle>Seniori</FeatureTitle>
              </FeatureIcon>
              <FeatureDescription>
                Zlepšenie pohyblivosti, zmiernenie bolesti a podpora regenerácie.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </TextContent>
      </Container>
    </Section>
  );
}
