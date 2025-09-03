import {
  FAQ,
  CTA_01,
  AboutText,
} from '@/components';
import { AboutHeroNew } from '@/components/UI/About';

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHeroNew />
        <AboutText />
        <CTA_01 />
        <FAQ />
      </main>
    </>
  );
}