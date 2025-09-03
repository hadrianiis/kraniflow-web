'use client';
import { GetStartedButton } from '@/components';
import Link from 'next/link';
import {
  Wrapper,
  Container,
  Header,
  Pill,
  PillDot,
  Title,
  Divider,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceFeatures,
  ServiceFeature,
  FeatureIcon,
  ServicePrice,
  PriceAmount,
  PriceNote,
  CTASection,
  CTACard,
  CTATitle,
  CTADescription,
  ButtonGroup,
  SecondaryButton,
} from './styles';

export default function TerapiaServicesSection() {
  const services = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Základná konzultácia',
      description: 'Prvá návšteva s diagnostikou a plánovaním terapie.',
      features: [
        'Anamnéza a diagnostika',
        'Vysvetlenie postupu',
        'Plánovanie terapie',
        'Trvanie: 60 minút'
      ],
      price: '€50',
      priceNote: 'Prvá konzultácia zdarma'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: 'Terapeutická sedácia',
      description: 'Plná terapeutická procedúra s kraniosakrálnou terapiou.',
      features: [
        'Kraniosakrálna terapia',
        'Relaxácia a regenerácia',
        'Individuálny prístup',
        'Trvanie: 90 minút'
      ],
      price: '€80',
      priceNote: 'Balíček 5 sedácií: €350'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Preventívna starostlivosť',
      description: 'Pravidelné návštevy pre udržanie zdravia a pohody.',
      features: [
        'Preventívna terapia',
        'Udržanie rovnováhy',
        'Stres management',
        'Trvanie: 60 minút'
      ],
      price: '€60',
      priceNote: 'Odporúčané každé 4-6 týždňov'
    }
  ];

  return (
    <Wrapper>
      <Container>
        <Header>
          <Pill>
            <PillDot />
            Naše služby
          </Pill>
          <Title>
            Čo ponúkame?
          </Title>
          <Divider />
        </Header>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>
                    <FeatureIcon fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </FeatureIcon>
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
              
              <ServicePrice>
                <PriceAmount>{service.price}</PriceAmount>
                <PriceNote>{service.priceNote}</PriceNote>
              </ServicePrice>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTASection>
          <CTACard>
            <CTATitle>
              Začnite svoju terapiu už dnes
            </CTATitle>
            <CTADescription>
              Kontaktujte nás pre rezerváciu termínu alebo ak máte otázky o našich službách. 
              Prvá konzultácia je vždy bezplatná a bez záväzkov.
            </CTADescription>
            
            <ButtonGroup>
              <GetStartedButton padding="1.5rem 3rem" />
              <SecondaryButton as={Link} href="/contact">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Kontaktujte nás
              </SecondaryButton>
            </ButtonGroup>
          </CTACard>
        </CTASection>
      </Container>
    </Wrapper>
  );
}
