import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | Kranioflow | Kraniosakrálna terapia',
  description: 'Kontaktujte nás pre objednanie termínu kraniosakrálnej terapie. Rýchla odpoveď a profesionálny prístup garantovaný.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
