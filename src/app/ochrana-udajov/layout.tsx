import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ochrana údajov | Kranioflow | Kraniosakrálna terapia',
  description: 'Zásady ochrany osobných údajov - informácie o spracovaní a ochrane vašich osobných údajov v súlade s GDPR.',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}