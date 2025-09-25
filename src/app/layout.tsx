import ConditionalLayout from '@/components/ConditionalLayout';
import BFCacheOptimizer from '@/components/BFCacheOptimizer';
import CSSLoader from '@/components/CSSLoader';
import StyledComponentsRegistry from '@/lib/registry';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kraniosakrálna terapia Bratislava – jemný dotyk pre zdravie a rovnováhu',
  description: 'Objavte silu biodynamickej kraniosakrálnej terapie (BCST) v Bratislave. Uvoľnite stres, zmiernite bolesť a obnovte vnútorný pokoj.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <head>
        {/* Critical resource hints for faster loading - only for actually used origins */}
        <link rel="preconnect" href="https://kranioflow.wordpress.com" />
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
