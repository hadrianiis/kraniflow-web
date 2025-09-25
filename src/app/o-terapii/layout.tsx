import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O terapii | Kranioflow | Kraniosakrálna terapia',
  description: 'Objavte kraniosakrálnu terapiu - jemnú, neinvazívnu metódu liečby, ktorá pomáha s bolesťou, stresom a celkovým zdravím.',
};

export default function TherapyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
