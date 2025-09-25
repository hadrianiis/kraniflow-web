import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Blog | KranioFlow - Kraniosakrálna terapia',
    template: '%s | KranioFlow Blog'
  },
  description: 'Objavte najnovšie články o kraniosakrálnej terapii, zdraví a wellness. Expertné rady a tipy od našich terapeutov.',
  keywords: 'blog, kraniosakrálna terapia, zdravie, wellness, alternatívna medicína, relaxácia, liečba, terapeut',
  authors: [{ name: 'KranioFlow Team' }],
  creator: 'KranioFlow',
  publisher: 'KranioFlow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kranioflow.sk'),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://kranioflow.sk/blog',
    title: 'Blog | KranioFlow - Kraniosakrálna terapia',
    description: 'Objavte najnovšie články o kraniosakrálnej terapii, zdraví a wellness.',
    siteName: 'KranioFlow Blog',
    images: [
      {
        url: '/images/featured_img1.avif',
        width: 1200,
        height: 630,
        alt: 'KranioFlow Blog - Kraniosakrálna terapia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | KranioFlow - Kraniosakrálna terapia',
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
            "name": "KranioFlow Blog",
            "description": "Blog o kraniosakrálnej terapii, zdraví a wellness",
            "url": "https://kranioflow.sk/blog",
            "publisher": {
              "@type": "Organization",
              "name": "KranioFlow",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kranioflow.sk/kranioflow-logo-optimized.svg"
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