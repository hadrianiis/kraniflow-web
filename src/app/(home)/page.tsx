import {
  FAQ,
  Featured,
  FinancialFuture,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  Briefnotephrase
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <OffersSection />
      <Briefnotephrase />
      <FinancialFuture />
      <IntroSection />
      <JoinSection />
      <FAQ />
    </main>
  );
}
