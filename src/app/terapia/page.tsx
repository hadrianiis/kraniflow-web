'use client';
import {
  TerapiaServicesSection,
  CTA_01,
  FAQ,
  AboutHeroNew,
} from '@/components';
import * as Styles from './styles';
import { TherapyHero, TherapyHowItWorksSection } from '@/components/UI/Terapia';
import { TherapyTextSection } from '@/components/UI/Terapia';




export default function TerapiaPage() {
  return (
    <Styles.TerapiaPageWrapper>
      <main>
        <TherapyHero/>
        <TherapyTextSection />
        <TherapyHowItWorksSection />    
        <TerapiaServicesSection />
        <CTA_01 />
        <FAQ />
      </main>
    </Styles.TerapiaPageWrapper>
  );
} 