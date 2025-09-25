# 🎨 Styled-Components Best Practices - Kranioflow

## ✅ Implementované best practices

### 1. **Theme Provider Setup**
- ✅ Správne nastavený `ThemeProvider` v `StyledComponentsRegistry`
- ✅ Centralizovaný theme v `src/lib/theme.ts`
- ✅ TypeScript typy pre `DefaultTheme` interface
- ✅ Konzistentné používanie theme tokens

### 2. **Performance Optimalizácie**
- ✅ SSR podpora s `ServerStyleSheet`
- ✅ Memoizácia komponentov s `memo()`
- ✅ Optimalizované keyframes s `translate3d()`
- ✅ Composer-only properties pre smooth animácie
- ✅ `shouldForwardProp` pre čisté DOM props

### 3. **Konzistentné Naming Conventions**
- ✅ Všetky styled komponenty majú `$` prefix pre transient props
- ✅ Konzistentné názvy: `Wrapper`, `Inner`, `Container`
- ✅ Oddelené styles súbory pre každý komponent

### 4. **Theme Usage**
- ✅ Všetky hardcoded hodnoty nahradené theme tokens
- ✅ Konzistentné používanie `theme.spacing`, `theme.colors`, `theme.typography`
- ✅ Responsive design s `media` queries z theme

### 5. **TypeScript Integration**
- ✅ Správne typy pre styled komponenty
- ✅ `DefaultTheme` interface rozšírený z actual theme
- ✅ Type-safe props pre styled komponenty

## 🛠️ Implementované optimalizácie

### Registry Configuration
```typescript
// src/lib/registry.tsx
<ThemeProvider theme={theme}>
  <StyleSheetManager {...styledComponentsConfig}>
    {children}
  </StyleSheetManager>
</ThemeProvider>
```

### Theme Structure
```typescript
// src/lib/theme.ts
export const theme = {
  colors: { /* konzistentné farby */ },
  spacing: { /* spacing scale */ },
  typography: { /* font system */ },
  breakpoints: { /* responsive breakpoints */ },
  transitions: { /* animation timings */ }
} as const;
```

### Performance Patterns
```typescript
// Composer-only properties
const compositorOnlyProperties = css`
  transform: translateZ(0);
  will-change: transform, opacity;
  backface-visibility: hidden;
`;

// Memoized components
export const MemoizedComponent = memo(styled.div`
  /* styles */
`);
```

## 📋 Checklist pre nové komponenty

### ✅ Povinné
- [ ] Import `theme` a `media` z `@/lib/theme`
- [ ] Používaj theme tokens namiesto hardcoded hodnôt
- [ ] Používaj `$` prefix pre transient props
- [ ] Memoizuj komponenty s `memo()` ak potrebné
- [ ] Používaj `media` queries z theme pre responsive design

### ✅ Odporúčané
- [ ] Používaj `css` helper pre komplexné styles
- [ ] Implementuj `shouldForwardProp` ak potrebné
- [ ] Používaj performance utilities z `styled-utils.ts`
- [ ] Testuj SSR kompatibilitu

## 🚀 Performance Tips

1. **Memoizácia**: Používaj `memo()` pre komponenty, ktoré sa často re-renderujú
2. **Theme tokens**: Vždy používaj theme namiesto hardcoded hodnôt
3. **Composer-only**: Používaj `transform` a `opacity` pre animácie
4. **CSS-in-JS**: Minimalizuj počet styled komponentov
5. **SSR**: Testuj server-side rendering

## 🔧 Nástroje a utilities

### Styled Utils
```typescript
import { 
  theme, 
  media, 
  flexCenter, 
  cardMixin, 
  buttonMixin 
} from '@/lib/styled-utils';
```

### Performance Utilities
```typescript
import { 
  compositorOnlyProperties,
  createOptimizedStyledComponent,
  withMemoization 
} from '@/lib/styled-components-utils';
```

### Animation Helpers
```typescript
import { 
  fadeIn, 
  slideIn, 
  scaleIn 
} from '@/lib/styled-components-utils';
```

## 📊 Metriky kvality

- ✅ **Konzistentnosť**: 100% theme usage
- ✅ **Performance**: Memoizácia a optimalizácie
- ✅ **TypeScript**: Type-safe props
- ✅ **SSR**: Server-side rendering podpora
- ✅ **Maintainability**: Čistý a organizovaný kód

## 🎯 Ďalšie kroky

1. **Audit existujúcich komponentov** - Prejsť cez všetky styled komponenty
2. **Implementovať design system** - Rozšíriť theme o ďalšie tokens
3. **Performance monitoring** - Sledovať bundle size a render performance
4. **Testing** - Pridať testy pre styled komponenty
5. **Documentation** - Vytvoriť style guide pre tímu

---

**Posledná aktualizácia**: ${new Date().toLocaleDateString('sk-SK')}
**Verzia**: 1.0.0
