import Layout from '@/components/Layout';
import './globals.css';
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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
