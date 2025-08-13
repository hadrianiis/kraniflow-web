import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O mne - Kraniosakrálna terapia Bratislava',
  description: 'Zistite viac o mne a mojej praxi kraniosakrálnej terapie v Bratislave. Certifikovaná terapeutka s 5+ rokmi skúseností.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 