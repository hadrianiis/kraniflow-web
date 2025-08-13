# Blog Sekcia - Raft Landing Page

## Prehľad

Blog sekcia je moderná, plne funkčná časť webovej aplikácie postavená na Next.js 14 s App Router. Poskytuje kompletné riešenie pre správu a zobrazovanie blog článkov s pokročilými funkciami.

## Funkcie

### 🎯 Hlavné funkcie
- **Hlavná blog stránka** (`/blog`) - prehľad všetkých článkov
- **Detail článku** (`/blog/[slug]`) - zobrazenie jednotlivých článkov
- **Vyhľadávanie** (`/blog/search`) - pokročilé vyhľadávanie v článkoch
- **Filtrovanie podľa tagov** (`/blog/tag/[tag]`) - články podľa tagov
- **Filtrovanie podľa autora** (`/blog/author/[author]`) - články podľa autora

### 🔍 Vyhľadávanie a filtrovanie
- Real-time vyhľadávanie v nadpisoch, obsahu a tagoch
- Filtrovanie podľa kategórií
- Tag-based navigácia
- Autor-based navigácia
- Pokročilé vyhľadávacie tipy

### 📱 UX/UI Features
- Responzívny dizajn pre všetky zariadenia
- Smooth animácie s Framer Motion
- Moderný glassmorphism dizajn
- Hover efekty a transitions
- Loading states a error handling

### 🚀 Performance
- Server-side rendering (SSR)
- Static generation kde je možné
- Optimizované obrázky
- Lazy loading komponentov
- Efficient re-rendering

## Architektúra

### 📁 Štruktúra súborov
```
src/app/blog/
├── page.tsx              # Hlavná blog stránka
├── layout.tsx            # Blog layout s SEO
├── not-found.tsx         # 404 stránka
├── sitemap.ts            # SEO sitemap
├── search/
│   └── page.tsx          # Vyhľadávacia stránka
├── [slug]/
│   └── page.tsx          # Detail článku
├── tag/[tag]/
│   └── page.tsx          # Články podľa tagu
└── author/[author]/
    └── page.tsx          # Články podľa autora
```

### 🧩 Komponenty
```
src/components/UI/Blog/
├── index.ts              # Export všetkých komponentov
├── BlogHero/             # Hero sekcia blogu
├── BlogGrid/             # Grid článkov s filtrami
├── BlogSidebar/          # Sidebar s populárnymi článkami
├── BlogPostDetail/       # Detail článku
├── RelatedPosts/         # Súvisiace články
└── BlogGrid/
    ├── index.tsx         # Hlavný grid komponent
    └── types.ts          # TypeScript typy
```

### 📚 API Layer
```
src/lib/blog.ts           # Blog API funkcie
├── getBlogPosts()        # Získanie všetkých článkov
├── getBlogPost()         # Získanie konkrétneho článku
├── getRelatedPosts()     # Súvisiace články
├── searchBlogPosts()     # Vyhľadávanie
└── Filtering funkcie     # Podľa kategórií, tagov, autorov
```

## Technológie

### 🛠️ Core
- **Next.js 14** - App Router, Server Components
- **TypeScript** - Type safety a IntelliSense
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animácie a transitions

### 🎨 UI/UX
- **Lucide React** - Ikony
- **Glassmorphism** - Moderný dizajn trend
- **Responsive Design** - Mobile-first prístup
- **Accessibility** - WCAG compliance

### 📊 SEO & Performance
- **Metadata API** - Dynamic SEO
- **Structured Data** - Schema.org markup
- **Sitemap** - Automatická generácia
- **Open Graph** - Social media sharing

## Použitie

### 📝 Vytvorenie nového článku
1. Pridajte článok do `src/lib/blog.ts` mock dát
2. Vytvorte slug pre URL
3. Pridajte obrázok do `public/images/`
4. Nastavte metadata a tagy

### 🔧 Customizácia
- Upravte farby v Tailwind config
- Zmeňte animácie v Framer Motion
- Pridajte nové kategórie
- Upravte layout komponentov

### 📱 Responzívnosť
- Mobile-first prístup
- Breakpointy: sm, md, lg, xl
- Touch-friendly interakcie
- Optimizované pre všetky zariadenia

## SEO Optimalizácia

### 🎯 Metadata
- Dynamické titulky a popisy
- Open Graph tagy pre social media
- Twitter Cards
- Structured data (Schema.org)

### 🔍 Sitemap
- Automatická generácia
- Priorita článkov
- Change frequency
- Last modified dates

### 📊 Performance
- Core Web Vitals optimalizácia
- Lazy loading
- Image optimization
- Efficient caching

## Deployment

### 🚀 Vercel
- Optimalizované pre Vercel
- Edge Functions podpora
- Automatic deployments
- Performance monitoring

### 📈 Analytics
- Vercel Analytics ready
- Performance metrics
- User behavior tracking
- SEO monitoring

## Budúce rozšírenia

### 🔮 Plánované funkcie
- **CMS Integration** - Headless CMS podpora
- **Comments System** - Užívateľské komentáre
- **Newsletter Integration** - Email marketing
- **Social Sharing** - Pokročilé sharing
- **Related Content AI** - AI-powered recommendations
- **Multi-language** - Internationalization
- **Dark Mode** - Theme switching
- **Reading Progress** - Progress bar
- **Bookmarking** - Uloženie článkov
- **Reading Time** - Presný čas čítania

### 🧪 Testing
- **Unit Tests** - Jest + React Testing Library
- **E2E Tests** - Playwright
- **Performance Tests** - Lighthouse CI
- **Accessibility Tests** - axe-core

## Podpora

### 📞 Kontakt
- **Developer**: Raft Team
- **Documentation**: Tento README
- **Issues**: GitHub Issues
- **Updates**: Regular maintenance

### 🔧 Troubleshooting
- **Build Errors**: Check TypeScript types
- **Styling Issues**: Verify Tailwind classes
- **Performance**: Monitor Core Web Vitals
- **SEO**: Validate structured data

---

**Vytvorené s ❤️ pre Raft Landing Page** 