'use client';
import {
  FAQ,  
} from '@/components';
import { TherapyHero, TherapyTextSection, TherapyHowItWorksSection } from '@/components/UI/Terapia';
import * as Styles from './styles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O terapii | Kranioflow | Kraniosakrálna terapia',
  description: 'Objavte kraniosakrálnu terapiu - jemnú, neinvazívnu metódu liečby, ktorá pomáha s bolesťou, stresom a celkovým zdravím.',
};

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