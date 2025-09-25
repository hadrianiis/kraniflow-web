import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Blog | Kranioflow | Kraniosakrálna terapia',
    template: '%s | Kranioflow | Kraniosakrálna terapia'
  },
  description: 'Objavte najnovšie články o kraniosakrálnej terapii.',
  keywords: 'blog, kraniosakrálna terapia, zdravie, wellness, alternatívna medicína, relaxácia, liečba, terapeut',
  creator: 'Kranioflow',
  publisher: 'Kranioflow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kranioflow.com'),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://kranioflow.com/blog',
    title: 'Blog | Kranioflow | Kraniosakrálna terapia',
    description: 'Objavte najnovšie články o kraniosakrálnej terapii, zdraví a wellness.',
    siteName: 'Kranioflow Blog',
    images: [
      {
        url: '/images/featured_img1.avif',
        width: 1200,
        height: 630,
        alt: 'Kranioflow Blog - Kraniosakrálna terapia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Kranioflow | Kraniosakrálna terapia',
    description: 'Objavte najnovšie články o kraniosakrálnej terapii, zdraví a wellness.',
    images: ['/images/featured_img1.avif'],
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
            "name": "Kranioflow Blog",
            "description": "Blog o kraniosakrálnej terapii, zdraví a wellness",
            "url": "https://kranioflow.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Kranioflow",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kranioflow.com/kranioflow-logo-optimized.svg"
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
                    "headline": "Úvod do kraniosakrálnej terapie",
                    "description": "Praktický návod pre začiatočníkov, ktorí chcú pochopiť základy kraniosakrálnej terapie a jej benefity.",
                    "author": {
                      "@type": "Person",
                      "name": "Mgr. Kika Nováková"
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