import {
  FAQ,
  Featured,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  Briefnotephrase,
  CTA_01,
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
      <CTA_01 />
      <FAQ />
    </main>
  );
}
