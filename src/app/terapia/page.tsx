'use client';
import Image from 'next/image';
import { Wrapper, Inner, HeroSection, ContentSection, TherapyCard, TherapyGrid, CTAButton } from './styles';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../libs/useIsMobile';
import {
  IconHeart,
  IconBrain,
  IconUsers,
  IconTarget,
  IconShield,
  IconGrowth,
} from "@tabler/icons-react";

const therapyServices = [
  {
    icon: IconHeart,
    title: "Individuálna terapia",
    description: "Osobný prístup k riešeniu vašich problémov v bezpečnom a dôvernom prostredí.",
    color: "#00D4AA"
  },
  {
    icon: IconUsers,
    title: "Rodinná terapia",
    description: "Pomoc pri riešení rodinných konfliktov a zlepšovaní komunikácie medzi členmi rodiny.",
    color: "#6366F1"
  },
  {
    icon: IconBrain,
    title: "Kognitívno-behaviorálna terapia",
    description: "Vedecky overený prístup k zmenám negatívnych myšlienkových vzorcov a správania.",
    color: "#F59E0B"
  },
  {
    icon: IconTarget,
    title: "Riešenie traumy",
    description: "Špecializovaná pomoc pri spracovaní traumatických zážitkov a PTSD.",
    color: "#EF4444"
  },
  {
    icon: IconShield,
    title: "Úzkosť a depresia",
    description: "Efektívne stratégie na zvládanie úzkosti, depresie a stresu.",
    color: "#8B5CF6"
  },
  {
    icon: IconGrowth,
    title: "Osobný rozvoj",
    description: "Podpora pri budovaní sebadôvery, sebapoznania a osobného rastu.",
    color: "#10B981"
  }
];

const TerapiaPage = () => {
  const isMobile = useIsMobile();
  
  return (
    <Wrapper>
      <Inner>
        <HeroSection>
          <MaskText 
            phrases={["Terapia", "Ktorá", "Mení", "Životy"]} 
            tag="h1" 
          />
          <MaskText 
            phrases={["Odborná psychoterapia pre vaše duševné zdravie a pohodu. Začnite svoju cestu k lepšiemu životu už dnes."]} 
            tag="p" 
          />
          <GetStartedButton padding="1rem 2rem" />
        </HeroSection>

        <ContentSection>
          <h2>Naše terapeutické služby</h2>
          <p>
            Ponúkame širokú škálu terapeutických prístupov, ktoré sú prispôsobené 
            vašim individuálnym potrebám a cieľom.
          </p>
          
          <TherapyGrid>
            {therapyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <TherapyCard key={service.title} index={index}>
                  <div className="icon-container" style={{ color: service.color }}>
                    <IconComponent size={32} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </TherapyCard>
              );
            })}
          </TherapyGrid>
        </ContentSection>

        <ContentSection>
          <h2>Prečo si vybrať našu terapiu?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Odbornosť</h3>
              <p>Naši terapeuti majú certifikácie a dlhoročné skúsenosti v obore.</p>
            </div>
            <div className="benefit-item">
              <h3>Bezpečnosť</h3>
              <p>Všetky informácie sú chránené a spracovávané v súlade s GDPR.</p>
            </div>
            <div className="benefit-item">
              <h3>Flexibilita</h3>
              <p>Online aj osobné konzultácie podľa vašich preferencií.</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection className="cta-section">
          <h2>Začnite svoju cestu k lepšiemu životu</h2>
          <p>
            Prvá konzultácia je vždy bezplatná. Kontaktujte nás a dohodneme si termín, 
            ktorý vám bude vyhovať.
          </p>
          <CTAButton>
            <GetStartedButton padding="1.5rem 3rem" />
          </CTAButton>
        </ContentSection>
      </Inner>
    </Wrapper>
  );
};

export default TerapiaPage; 