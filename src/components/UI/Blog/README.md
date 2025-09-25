# Blog Components

Táto sekcia obsahuje optimalizované blog komponenty pre Next.js aplikáciu s dôrazom na performance, clean code a best practices.

## Komponenty

### BlogCard
Základný komponent pre zobrazenie blog článku v karte.

**Props:**
- `post: BlogPost` - objekt blog článku
- `index?: number` - index článku (pre priority loading)
- `variant?: 'default' | 'compact'` - variant karty
- `className?: string` - CSS trieda

**Použitie:**
```tsx
import { BlogCard } from '@/components/UI/Blog';

<BlogCard 
  post={post} 
  index={0} 
  variant="default" 
/>
```


### BlogPostDetail
Komponent pre zobrazenie detailu blog článku.

**Props:**
- `post: BlogPost` - objekt blog článku
- `relatedPosts?: BlogPost[]` - súvisiace články

### BlogGrid
Grid komponent pre zobrazenie zoznamu blog článkov.

**Props:**
- `posts: BlogPost[]` - pole blog článkov
- `className?: string` - CSS trieda

### RelatedPostsSection
Sekcia pre zobrazenie súvisiacich článkov.

**Props:**
- `posts: BlogPost[]` - pole súvisiacich článkov

### BlogErrorBoundary
Error boundary pre blog komponenty.

**Props:**
- `children: ReactNode` - deti komponenty
- `fallback?: ReactNode` - fallback UI

## Utility funkcie

### blog-utils.ts
Obsahuje utility funkcie pre blog komponenty:

- `formatDate(dateString: string)` - formátovanie dátumu
- `calculateReadTime(content: string)` - výpočet času čítania
- `getImageSizes()` - optimalizované image sizes
- `DEFAULT_BLUR_DATA_URL` - default blur placeholder
- `handleImageError(e)` - error handler pre obrázky
- `handleImageLoad(src)` - load handler pre obrázky

## Performance optimalizácie

1. **Memoization** - všetky komponenty sú memoizované
2. **Image optimization** - používa Next.js Image komponent s optimalizáciou
3. **Lazy loading** - obrázky sa načítavajú lazy (okrem prvého)
4. **Priority loading** - prvý obrázok má priority
5. **Blur placeholder** - smooth loading experience
6. **Responsive images** - optimalizované sizes pre rôzne breakpointy

## Best Practices

1. **TypeScript** - striktné typovanie
2. **Clean code** - čistý, čitateľný kód
3. **Separation of concerns** - oddelenie logiky a UI
4. **Reusability** - komponenty sú znovu použiteľné
5. **Performance** - optimalizované pre rýchlosť
6. **Accessibility** - prístupnosť pre všetkých používateľov

## Použitie

```tsx
import { 
  BlogCard, 
  BlogPostDetail, 
  BlogGrid, 
  RelatedPostsSection,
  BlogErrorBoundary 
} from '@/components/UI/Blog';

// Zobrazenie gridu článkov
<BlogGrid posts={posts} />

// Detail článku
<BlogPostDetail post={post} relatedPosts={relatedPosts} />

// Súvisiace články
<RelatedPostsSection posts={relatedPosts} />

// Error boundary
<BlogErrorBoundary>
  <BlogComponent />
</BlogErrorBoundary>
```
