# SEO Optimalizácia - Kranioflow.com

## Implementované SEO funkcie

### ✅ Automatický Sitemap
- **Súbor**: `src/app/sitemap.ts`
- **URL**: `https://kranioflow.com/sitemap.xml`
- Automaticky generuje sitemap pre všetky stránky a blog články
- Aktualizuje sa každú hodinu (ISR)

### ✅ Robots.txt
- **Súbor**: `src/app/robots.ts`
- **URL**: `https://kranioflow.com/robots.txt`
- Povoluje indexovanie všetkých verejných stránok
- Blokuje API endpointy a admin sekcie

### ✅ Pokročilé Meta Tagy
- **Súbor**: `src/lib/seo.ts`
- Automatické generovanie meta tagov pre všetky stránky
- Open Graph a Twitter Cards
- Structured Data (JSON-LD)
- Kanonické URL

### ⏸️ Google Analytics & Tag Manager (zatiaľ neaktívne)
- **Súbor**: `src/components/SEO/GoogleAnalytics.tsx`
- Podpora pre GA4 a GTM (pripravené na budúce použitie)
- Optimalizované načítanie

## Nastavenie Google Search Console

### 1. Pridajte svoju doménu
1. Choďte na [Google Search Console](https://search.google.com/search-console)
2. Pridajte `https://kranioflow.com`
3. Vyberte "HTML tag" metódu verifikácie

### 2. Nastavte environment premenné
Vytvorte `.env.local` súbor:
```env
NEXT_PUBLIC_SITE_URL=https://kranioflow.com
GOOGLE_SITE_VERIFICATION=your_verification_code_here
# Analytika zatiaľ neaktívna
# NEXT_PUBLIC_GA_ID=your_google_analytics_id_here
# NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id_here
```

### 3. Odoslať sitemap
1. V Google Search Console choďte na "Sitemaps"
2. Pridajte: `https://kranioflow.com/sitemap.xml`
3. Odoslať na indexovanie

## SEO Checklist

### ✅ Technické SEO
- [x] Sitemap.xml automaticky generovaný
- [x] Robots.txt správne nakonfigurovaný
- [x] Meta tagy optimalizované
- [x] Structured Data implementované
- [x] Kanonické URL nastavené
- [x] Open Graph tagy
- [x] Twitter Cards
- [x] Mobile-friendly design
- [x] Fast loading (Next.js optimalizácie)

### ✅ Obsahové SEO
- [x] Unikátne title tagy pre každú stránku
- [x] Meta descriptions optimalizované
- [x] Keywords relevantné pre kraniosakrálnu terapiu
- [x] Lokálne SEO (Brezno + celé Slovensko)
- [x] H1-H6 štruktúra
- [x] Alt texty pre obrázky
- [x] Interné linkovanie

### ✅ Performance SEO
- [x] Next.js Image optimalizácia
- [x] Lazy loading
- [x] Code splitting
- [x] Compression
- [x] Caching headers
- [x] Core Web Vitals optimalizácia

## Monitoring a Analytics

### Google Search Console
- Monitorujte indexovanie stránok
- Sledujte Core Web Vitals
- Kontrolujte chyby v indexovaní
- Analyzujte search queries

### Google Analytics (zatiaľ neaktívne)
- Sledujte návštevnosť
- Analyzujte bounce rate
- Monitorujte conversion rate
- Sledujte user behavior
- *Pripravené na budúce aktivovanie*

## Ďalšie odporúčania

### 1. Pravidelný obsah
- Publikujte nové blog články
- Aktualizujte existujúci obsah
- Pridávajte nové služby

### 2. Lokálne SEO
- Google My Business profil (Brezno)
- Lokálne adresáre (Brezno + Slovensko)
- Recenzie a hodnotenia
- Lokálne keywords: "kraniosakrálna terapia Brezno", "terapia Slovensko"

### 3. Link Building
- Partnerstvo s wellness centrami
- Guest posting na relevantných blogoch
- Sociálne médiá

### 4. Technické vylepšenia
- HTTPS (už implementované)
- Page Speed optimalizácia
- Mobile-first design
- Accessibility (WCAG)

## Troubleshooting

### Ak Google neindexuje stránky:
1. Skontrolujte robots.txt
2. Overte sitemap.xml
3. Použite Google Search Console "Request Indexing"
4. Skontrolujte meta robots tagy

### Ak sú problémy s Core Web Vitals:
1. Optimalizujte obrázky
2. Minimalizujte JavaScript
3. Použite lazy loading
4. Optimalizujte CSS

## Kontakt
Pre otázky ohľadom SEO implementácie kontaktujte vývojára.
