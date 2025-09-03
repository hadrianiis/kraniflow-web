import {
  FAQ,
  Featured,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  Briefnotephrase,
} from '@/components';

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
