'use client';
import {
  FAQ,  
} from '@/components';
import { TherapyHero, TherapyTextSection, TherapyHowItWorksSection } from '@/components/UI/Terapia';
import * as Styles from './styles';

export default function TerapiaPage() {
  return (
    <Styles.TerapiaPageWrapper>
      <main>
        <TherapyHero/>
        <TherapyTextSection />
        <TherapyHowItWorksSection />    
        <FAQ />
      </main>
    </Styles.TerapiaPageWrapper>
  );
}   