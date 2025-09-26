import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noIndex?: boolean
  noFollow?: boolean
}

const defaultSEO = {
  siteName: 'Kranioflow',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://kranioflow.com',
  defaultTitle: 'Kranioflow | Kraniosakrálna terapia',
  defaultDescription: 'Uvoľnite stres, zmiernite bolesť a obnovte vnútorný pokoj. Profesionálna kraniosakrálna terapia pre celé rodiny v Brezne a na celom Slovensku.',
  defaultKeywords: [
    'kraniosakrálna terapia',
    'kranioflow',
    'terapia Brezno',
    'terapia Banska Bystrica',
    'terapia Bratislava',
    'terapia Slovensko',
    'uvoľnenie stresu',
    'zmiernenie bolesti',
    'alternatívna medicína',
    'holistická terapia',
    'relaxácia',
    'wellness',
    'zdravie'
  ],
  defaultOgImage: '/graphQl.svg',
  twitterHandle: '@kranioflow',
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage,
    ogType = 'website',
    publishedTime,
    modifiedTime,
    author = 'Kranioflow',
    section,
    tags = [],
    noIndex = false,
    noFollow = false,
  } = config

  const fullTitle = title.includes(defaultSEO.siteName) 
    ? title 
    : `${title} | ${defaultSEO.siteName}`

  const fullDescription = description || defaultSEO.defaultDescription
  const allKeywords = [...defaultSEO.defaultKeywords, ...keywords]
  const canonicalUrl = canonical || `${defaultSEO.siteUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`
  const ogImageUrl = ogImage ? `${defaultSEO.siteUrl}${ogImage}` : `${defaultSEO.siteUrl}${defaultSEO.defaultOgImage}`

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: defaultSEO.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(defaultSEO.siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: 'sk_SK',
      url: canonicalUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: defaultSEO.siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(ogType === 'article' && {
        publishedTime,
        modifiedTime,
        authors: [author],
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      site: defaultSEO.twitterHandle,
      creator: defaultSEO.twitterHandle,
      title: fullTitle,
      description: fullDescription,
      images: [ogImageUrl],
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
    category: 'health',
  }

  return metadata
}

export function generateStructuredData(config: SEOConfig & { 
  type?: 'WebSite' | 'Article' | 'Organization' | 'Service'
  breadcrumbs?: Array<{ name: string; url: string }>
}) {
  const {
    title,
    description,
    canonical,
    publishedTime,
    modifiedTime,
    author = 'Kranioflow',
    type = 'WebSite',
    breadcrumbs = [],
  } = config

  const canonicalUrl = canonical || `${defaultSEO.siteUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`

  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url: canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: defaultSEO.siteName,
      url: defaultSEO.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${defaultSEO.siteUrl}/kranioflow-logo-optimized.svg`,
      },
    },
  }

  if (type === 'Article') {
    return {
      ...baseStructuredData,
      '@type': 'Article',
      headline: title,
      author: {
        '@type': 'Person',
        name: author,
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      ...(breadcrumbs.length > 0 && {
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        },
      }),
    }
  }

  if (type === 'Service') {
    return {
      ...baseStructuredData,
      '@type': 'Service',
      serviceType: 'Kraniosakrálna terapia',
        areaServed: [
          {
            '@type': 'City',
            name: 'Brezno',
            addressCountry: 'SK'
          },
          {
            '@type': 'Country',
            name: 'Slovensko',
            addressCountry: 'SK'
          }
        ],
      provider: {
        '@type': 'Organization',
        name: defaultSEO.siteName,
        url: defaultSEO.siteUrl,
      },
    }
  }

  return baseStructuredData
}

export const seoDefaults = defaultSEO
