import {
  FAQ,
} from '@/components';
import AboutHero from '@/components/UI/About/AboutHero';
import AboutContent from '@/components/UI/About/AboutContent';
import AboutFeatures from '@/components/UI/About/AboutFeatures';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O mne | Kranioflow | Kraniosakrálna terapia',
  description: 'Zoznámte sa s Mgr. Kikou Novákovou, certifikovanou terapeutkou kraniosakrálnej terapie s viac ako 10-ročnou praxou.',
};

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