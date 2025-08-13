import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Blog | Raft - Finančná sloboda a investovanie',
    template: '%s | Raft Blog'
  },
  description: 'Objavte najnovšie články o finančnom plánovaní, investovaní a dosiahnutí finančnej slobody. Expertné rady a tipy od našich finančných poradcov.',
  keywords: 'blog, finančné poradenstvo, investovanie, finančná sloboda, finančné plánovanie, dôchodok, kryptomeny, dane',
  authors: [{ name: 'Raft Team' }],
  creator: 'Raft',
  publisher: 'Raft',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://raft.sk'),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://raft.sk/blog',
    title: 'Blog | Raft - Finančná sloboda a investovanie',
    description: 'Objavte najnovšie články o finančnom plánovaní, investovaní a dosiahnutí finančnej slobody.',
    siteName: 'Raft Blog',
    images: [
      {
        url: '/images/financial_freedom_banner.png',
        width: 1200,
        height: 630,
        alt: 'Raft Blog - Finančná sloboda a investovanie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Raft - Finančná sloboda a investovanie',
    description: 'Objavte najnovšie články o finančnom plánovaní, investovaní a dosiahnutí finančnej slobody.',
    images: ['/images/financial_freedom_banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Raft Blog",
            "description": "Blog o finančnom plánovaní, investovaní a dosiahnutí finančnej slobody",
            "url": "https://raft.sk/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Raft",
              "logo": {
                "@type": "ImageObject",
                "url": "https://raft.sk/logo-kranio.svg"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "BlogPosting",
                    "headline": "Ako začať investovať s malým kapitálom",
                    "description": "Praktický návod pre začiatočníkov, ktorí chcú začať investovať aj s obmedzenými finančnými prostriedkami.",
                    "author": {
                      "@type": "Person",
                      "name": "Mgr. Peter Novák"
                    },
                    "datePublished": "2024-01-15",
                    "dateModified": "2024-01-15"
                  }
                }
              ]
            }
          })
        }}
      />
      
      {children}
    </>
  );
} 