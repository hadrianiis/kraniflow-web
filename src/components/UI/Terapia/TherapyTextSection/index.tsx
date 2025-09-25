'use client';
import SVGIcon from '@/components/Common/SVGIcon';
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
                <SVGIcon 
                  src="/svgs/pregnant.svg" 
                  alt="Tehotné ženy" 
                  width={50} 
                  height={50}
                  color="#489E9D"
                />
                <FeatureTitle>Tehotné ženy</FeatureTitle>
              </FeatureIcon>
              <FeatureDescription>
                Úľava od bolesti chrbta, zmiernenie stresu a napätia, podpora relaxácie.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <SVGIcon 
                  src="/svgs/baby.svg" 
                  alt="Novorodenci a deti" 
                  width={50} 
                  height={50}
                  color="#489E9D"
                />
                <FeatureTitle>Novorodenci a deti</FeatureTitle>
              </FeatureIcon>
              <FeatureDescription>
                Pomáha pri problémoch ako koliky, problémy so spánkom, emočná stabilita.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <SVGIcon 
                  src="/svgs/adult.svg" 
                  alt="Dospelí" 
                  width={50} 
                  height={50}
                  color="#489E9D"
                />
                <FeatureTitle>Dospelí</FeatureTitle>
              </FeatureIcon>
              <FeatureDescription>
                Zmiernenie bolesti hlavy, krku, chrbta, úľava pri stresových situáciách, zlepšenie kvality spánku.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <SVGIcon 
                  src="/svgs/old-man.svg" 
                  alt="Seniori" 
                  width={50} 
                  height={50}
                  color="#489E9D"
                />
                <FeatureTitle>Seniori</FeatureTitle>
              </FeatureIcon>
              <FeatureDescription>
                Zlepšenie pohyblivosti, zmiernenie bolesti, podpora regenerácie po úrazoch.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </TextContent>
      </Container>
    </Section>
  );
}
