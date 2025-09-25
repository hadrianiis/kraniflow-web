import ConditionalLayout from '@/components/ConditionalLayout';
import BFCacheOptimizer from '@/components/BFCacheOptimizer';
import CSSLoader from '@/components/CSSLoader';
import StyledComponentsRegistry from '@/lib/registry';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kranioflow | Kraniosakrálna terapia',
  description: 'Uvoľnite stres, zmiernite bolesť a obnovte vnútorný pokoj.',
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
