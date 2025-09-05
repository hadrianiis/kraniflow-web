'use client';
import Image from 'next/image';
import {
  Section,
  Container,
  Title,
  ContentWrapper,
  TextContent,
  Description,
  StatsContainer,
  StatItem,
  StatNumber,
  StatLabel,
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
            Volám sa <strong>Kristína Švantnerová</strong> a som terapeutka a masérka, ktorá spája prístup z rôznych oblastí a ponúka unikátnu personalizovanú techniku. KranioFlow vzniklo, aby sme našli s každým klientom jeho osobný flow a odľahčili jeho organizmus.
            </Description>
            <Description>
            S viac ako 4-ročnou praxou v kraniosakrálnej terapii a 14-ročnou praxou s masážami vám ponúkam holistický prístup k vašim problémom. Kombinujem rôzne techniky, ktoré poskytujú komplexné riešenie na fyzickej aj psychickej úrovni. Či už ide o bolesť, stres, alebo emocionálne blokády, vždy sa zameriam na vašu individuálnu potrebu. To, čo dnes ponúkam svojim klientom, mám odskúšané na vlastnej koži.
            </Description>

            <StatsContainer>
              <StatItem>
                <StatNumber>14+</StatNumber>
                <StatLabel>rokov praxe</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>4+</StatNumber>
                <StatLabel>roky BCST</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>300+</StatNumber>
                <StatLabel>spokojných klientov</StatLabel>
              </StatItem>
            </StatsContainer>
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
