import {
  FAQ,
  Featured,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  Briefnotephrase,
} from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kranioflow | Kraniosakrálna terapia',
  description: 'Uvoľnite stres, zmiernite bolesť a obnovte vnútorný pokoj. Profesionálna kraniosakrálna terapia pre celé rodiny.',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <OffersSection />
      <Briefnotephrase />
      <IntroSection />
      <JoinSection />
      <FAQ />
    </main>
  );
}
