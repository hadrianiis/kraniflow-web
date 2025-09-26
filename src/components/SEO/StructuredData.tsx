'use client'

import { generateStructuredData, SEOConfig } from '@/lib/seo'

interface StructuredDataProps extends SEOConfig {
  type?: 'WebSite' | 'Article' | 'Organization' | 'Service'
  breadcrumbs?: Array<{ name: string; url: string }>
}

export default function StructuredData({ 
  type = 'WebSite', 
  breadcrumbs = [],
  ...config 
}: StructuredDataProps) {
  const structuredData = generateStructuredData({
    ...config,
    type,
    breadcrumbs,
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  )
}
