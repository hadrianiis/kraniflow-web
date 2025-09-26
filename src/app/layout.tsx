import ConditionalLayout from '@/components/ConditionalLayout';
import BFCacheOptimizer from '@/components/BFCacheOptimizer';
import CSSLoader from '@/components/CSSLoader';
import StyledComponentsRegistry from '@/lib/registry';
import { generateMetadata, generateStructuredData } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Kranioflow | Kraniosakrálna terapia',
  description: 'Uvoľnite stres, zmiernite bolesť a obnovte vnútorný pokoj. Profesionálna kraniosakrálna terapia pre celé rodiny v Brezne a na celom Slovensku.',
  keywords: [
    'kraniosakrálna terapia Brezno',
    'kraniosakrálna terapia Slovensko',
    'alternatívna medicína',
    'holistická terapia',
    'uvoľnenie stresu',
    'zmiernenie bolesti',
    'wellness Brezno',
    'wellness Slovensko',
    'relaxácia',
    'terapia pre deti',
    'terapia pre dospelých',
    'kranioflow'
  ],
  ogImage: '/graphQl.svg',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData({
    title: 'Kranioflow | Kraniosakrálna terapia',
    description: 'Uvoľnite stres, zmiernite bolesť a obnovte vnútorný pokoj. Profesionálna kraniosakrálna terapia pre celé rodiny v Brezne a na celom Slovensku.',
    type: 'Service',
  });

  return (
    <html lang="sk">
      <head>
        {/* Critical resource hints for faster loading - only for actually used origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
        
        {/* Google Search Console Verification */}
        {process.env.GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
        )}
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="SK-BZ" />
        <meta name="geo.placename" content="Brezno" />
        <meta name="geo.position" content="48.8033;19.6361" />
        <meta name="ICBM" content="48.8033, 19.6361" />
        <meta name="DC.title" content="Kranioflow | Kraniosakrálna terapia" />
        <meta name="DC.description" content="Uvoľnite stres, zmiernite bolesť a obnovte vnútorný pokoj. Profesionálna kraniosakrálna terapia pre celé rodiny v Brezne a na celom Slovensku." />
        <meta name="DC.language" content="sk" />
        <meta name="DC.coverage" content="Slovensko" />
        <meta name="DC.subject" content="Kraniosakrálna terapia, Alternatívna medicína, Wellness" />
      </head>
      <body suppressHydrationWarning={true}>
        <BFCacheOptimizer />
        <CSSLoader />
        <StyledComponentsRegistry>
          <ConditionalLayout>{children}</ConditionalLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
