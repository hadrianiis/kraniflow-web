import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kranioflow',
  description: 'Zásady ochrany osobných údajov pre Kranioflow - BCST terapia',
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
