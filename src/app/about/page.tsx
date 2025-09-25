import {
  FAQ,
} from '@/components';
import AboutHero from '@/components/UI/About/AboutHero';
import AboutContent from '@/components/UI/About/AboutContent';
import AboutFeatures from '@/components/UI/About/AboutFeatures';

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <AboutFeatures />
        <AboutContent />
        <FAQ />
      </main>
    </>
  );
}