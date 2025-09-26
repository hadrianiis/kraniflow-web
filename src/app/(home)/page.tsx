import {
  FAQ,
  Featured,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  Briefnotephrase,
} from '@/components';
import { StructuredData } from '@/components/SEO';
import { generateMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Kranioflow | Kraniosakrálna terapia Brezno',
  description: 'Uvoľnite stres, zmiernite bolesť a obnovte vnútorný pokoj. Profesionálna kraniosakrálna terapia pre celé rodiny v Brezne a na celom Slovensku. Skúsená terapeutka s certifikáciou.',
  keywords: [
    'kraniosakrálna terapia Brezno',
    'kraniosakrálna terapia Slovensko',
    'terapia pre deti Brezno',
    'alternatívna medicína Brezno',
    'holistická terapia',
    'uvoľnenie stresu',
    'zmiernenie bolesti',
    'wellness Brezno',
    'wellness Slovensko',
    'relaxácia Brezno',
    'terapia pre dospelých',
    'kranioflow Brezno',
    'terapeutka Brezno',
    'certifikovaná terapia'
  ],
  ogImage: '/graphQl.svg',
});

export default function Home() {
  return (
    <main>
      <StructuredData
        title="Kranioflow | Kraniosakrálna terapia Brezno"
        description="Uvoľnite stres, zmiernite bolesť a obnovte vnútorný pokoj. Profesionálna kraniosakrálna terapia pre celé rodiny v Brezne a na celom Slovensku. Skúsená terapeutka s certifikáciou."
        type="Service"
        keywords={[
          'kraniosakrálna terapia Brezno',
          'kraniosakrálna terapia Slovensko',
          'terapia pre deti Brezno',
          'alternatívna medicína Brezno',
          'holistická terapia',
          'uvoľnenie stresu',
          'zmiernenie bolesti',
          'wellness Brezno',
          'wellness Slovensko',
          'relaxácia Brezno',
          'terapia pre dospelých',
          'kranioflow Brezno',
          'terapeutka Brezno',
          'certifikovaná terapia'
        ]}
      />
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
