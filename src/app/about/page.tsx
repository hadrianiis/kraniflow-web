'use client';
import Image from 'next/image';
import { 
  Wrapper, 
  Inner, 
  ContentSection,
  ProfileImage,
  TextContent,
  StatsContainer,
  StatItem,
  ExperienceSection,
  ValuesSection,
  ValueCard,
  CTAButton,
  CTASection,
  SectionTitle,
  SectionSubtitle,
  ExperienceGrid,
  ExperienceItem,
  ValuesGrid,
  StatsWrapper,
  BackgroundPattern
} from './styles';
import { GetStartedButton } from '@/components';
import ic_identification from '../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../public/svgs/ic_lock_closed.svg';
import ic_circle_stack from '../../../public/svgs/ic_circle_stack.svg';

export default function AboutPage() {
  return (
    <Wrapper>
      <BackgroundPattern />
      <Inner>
        <ContentSection>
          <ProfileImage>
            <div className="image-container">
              <Image 
                src="/images/kika-photo.avif" 
                alt="Terapeutka kraniosakrálnej terapie"
                width={600}
                height={600}
                className="profile-img"
                priority
              />
            </div>
          </ProfileImage>
          
          <TextContent>
            <SectionTitle>O mne</SectionTitle>
            <SectionSubtitle>
              Terapeutka s vášňou pre jemný dotyk
            </SectionSubtitle>
            <p>
              Moja cesta k kraniosakrálnej terapii začala pred niekoľkými rokmi, keď som objavila silu jemného dotyku 
              a jeho schopnosť podporiť prirodzené procesy hojenia v tele. Po rokoch štúdia a praxe som sa stala 
              certifikovanou terapeutkou s hlbokým porozumením biodynamických princípov.
            </p>
            
            <p>
              Venujem sa poskytovaniu bezpečného a podporného priestoru pre mojich klientov, kde môžu prežiť 
              hlboké uvoľnenie a obnovu. Verím, že každý z nás má v sebe prirodzenú schopnosť hojenia, 
              a mojou úlohou je podporiť tento proces.
            </p>
          </TextContent>
        </ContentSection>

        <StatsWrapper>
          <StatsContainer>
            <StatItem>
              <div className="stat-number">5+</div>
              <div className="stat-label">Rokov praxe</div>
              <div className="stat-description">Certifikovaná terapeutka s dlhoročnými skúsenosťami</div>
            </StatItem>
            <StatItem>
              <div className="stat-number">500+</div>
              <div className="stat-label">Spokojných klientov</div>
              <div className="stat-description">Úspešne pomôžem s rôznymi zdravotnými problémami</div>
            </StatItem>
            <StatItem>
              <div className="stat-number">100%</div>
              <div className="stat-label">Zameranie na kvalitu</div>
              <div className="stat-description">Každá terapia je prispôsobená individuálne</div>
            </StatItem>
          </StatsContainer>
        </StatsWrapper>

        <ExperienceSection>
          <SectionTitle>Moje skúsenosti a prístup</SectionTitle>
          <SectionSubtitle>
            Profesionálny prístup založený na certifikácii a dlhoročných skúsenostiach
          </SectionSubtitle>
          <ExperienceGrid>
            <ExperienceItem>
              <div className="icon-wrapper">
                <Image src={ic_identification} alt="Certifikácia" width={40} height={40} />
              </div>
              <h3>Certifikovaná terapeutka</h3>
              <p>Absolvovala som kompletné vzdelanie v biodynamickej kraniosakrálnej terapii pod vedením renomovaných lektorov.</p>
            </ExperienceItem>
            
            <ExperienceItem>
              <div className="icon-wrapper">
                <Image src={ic_lock_closed} alt="Bezpečnosť" width={40} height={40} />
              </div>
              <h3>Bezpečný priestor</h3>
              <p>Vytváram dôverné a bezpečné prostredie, kde sa môžete plne uvoľniť a prežiť proces hojenia.</p>
            </ExperienceItem>
            
            <ExperienceItem>
              <div className="icon-wrapper">
                <Image src={ic_circle_stack} alt="Holistický prístup" width={40} height={40} />
              </div>
              <h3>Holistický prístup</h3>
              <p>Pozerám sa na človeka ako na celok - telo, myseľ a duša sú navzájom prepojené a ovplyvňujú sa.</p>
            </ExperienceItem>
          </ExperienceGrid>
        </ExperienceSection>

        <ValuesSection>
          <SectionTitle>Moje hodnoty</SectionTitle>
          <SectionSubtitle>
            Základné princípy, ktoré riadia moju prácu s každým klientom
          </SectionSubtitle>
          <ValuesGrid>
            <ValueCard>
              <div className="value-icon">🤲</div>
              <h3>Jemnosť</h3>
              <p>Používam najjemnejší možný dotyk, ktorý rešpektuje potreby vašeho tela a nikdy nepresadzuje vlastnú agendu.</p>
            </ValueCard>
            
            <ValueCard>
              <div className="value-icon">⏰</div>
              <h3>Trpezlivosť</h3>
              <p>Každý proces hojenia má svoj čas - nikdy neponáhľam a nechávam telo, aby si určilo tempo a smer.</p>
            </ValueCard>
            
            <ValueCard>
              <div className="value-icon">❤️</div>
              <h3>Láska k ľuďom</h3>
              <p>Každý klient je pre mňa jedinečný a zaslúži si individuálny prístup, pozornosť a úctu k jeho jedinečnosti.</p>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>

        <CTASection>
          <div className="cta-content">
            <h2>Prípravní začať svoju cestu k lepšiemu zdravotnému stavu?</h2>
            <p>Objednajte si konzultáciu a objavte, ako vám môže kraniosakrálna terapia pomôcť nájsť vnútorný pokoj a rovnováhu.</p>
            <CTAButton>
              <GetStartedButton padding="1.5rem 3rem" />
            </CTAButton>
          </div>
        </CTASection>
      </Inner>
    </Wrapper>
  );
} 