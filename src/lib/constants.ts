/**
 * Centralized constants for the application
 * Provides type-safe constants and reduces code duplication
 */

// ============================================================================
// BREAKPOINTS & RESPONSIVE
// ============================================================================
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
  wide: 1536,
} as const;

// ============================================================================
// NAVIGATION
// ============================================================================
export interface NavigationLink {
  url: string;
  label: string;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  { url: '/', label: 'Domov' },
  { url: '/about', label: 'O mne' },
  { url: '/terapia', label: 'O terapii' },
  { url: '/blog', label: 'Blog' },
] as const;

// ============================================================================
// ANIMATIONS & TRANSITIONS
// ============================================================================
export const ANIMATIONS = {
  duration: {
    fast: 0.1,
    normal: 0.2,
    slow: 0.3,
    verySlow: 0.75,
  },
  easing: {
    ease: [0.33, 1, 0.68, 1] as const,
    easeInOut: [0.76, 0, 0.24, 1] as const,
  },
} as const;

// ============================================================================
// CONTENT PHRASES
// ============================================================================
export interface ContentPhrase {
  desktop: string[];
  mobile: string[];
}

export const HERO_PHRASES: ContentPhrase = {
  desktop: ['Biodynamická ', 'kraniosakrálna terapia'],
  mobile: ['Biodynamická kraniosakrálna terapia'],
} as const;

export const HERO_SUBTITLE = 'Cesta k dlhodobému zdraviu';

export const BRIEF_NOTE_PHRASES: ContentPhrase = {
  desktop: [
    'Biodynamická kraniosakrálna terapia je jemná a účinná metóda,',
    'ktorá harmonizuje telo aj myseľ, pomáha zmierniť bolesti a stres',
    'a podporuje prirodzené samoliečebné procesy organizmu.',
  ],
  mobile: [
    'Biodynamická kraniosakrálna',
    'terapia je jemná a účinná metóda,',
    'ktorá harmonizuje telo aj myseľ,',
    'pomáha zmierniť bolesti a stres',
    'a podporuje prirodzené',
    'samoliečebné procesy organizmu.',
  ],
} as const;

export const OFFERS_HEADER_PHRASES: ContentPhrase = {
  desktop: ['Pri čom pomáha BCST'],
  mobile: ['Pri čom pomáha BCST'],
} as const;

export const OFFERS_DESCRIPTION_PHRASES: ContentPhrase = {
  desktop: [
    'Biodynamická kraniosakrálna terapia pracuje s pohybom mozgovomiechovej tekutiny. Využíva dotyk na konkrétnych miestach tela, ktoré pomáhajú harmonizovať nervový systém, uvoľniť napätie a zmierniť stres. ',
    'Tento prístup je ideálny pre všetky vekové kategórie – od tehotných mamičie, detičiek až po seniorov..',
  ],
  mobile: [
    'Biodynamická kraniosakrálna terapia pracuje',
    's pohybom mozgovomiechovej tekutiny a uvoľňuje',
    'napätie vo svaloch, kostiach a nervovom systéme.',
  ],
} as const;

export const INTRO_HEADER_PHRASES: ContentPhrase = {
  desktop: ['Prečo vyskúšať', 'BCST'],
  mobile: ['Prečo vyskúšať', 'BCST'],
} as const;

export const INTRO_DESCRIPTION_PHRASES: ContentPhrase = {
  desktop: [
    'Kraniosakrálna terapia nie je len o liečbe. Je to cesta k prevenčnému zdraviu, ktorá pomáha udržiavať telo a myseľ v rovnováhe. Či už máte konkrétny zdravotný problém, alebo si jednoducho chcete dopriať relaxáciu a prevenciu.',
  ],
  mobile: [
    'Biodynamická kraniosakrálna terapia je jemná',
    'a účinná metóda, ktorá harmonizuje telo aj myseľ,',
    'pomáha zmierniť bolesti a stres a podporuje',
    'prirodzené samoliečebné procesy organizmu.',
  ],
} as const;

export const FAQ_HEADER_PHRASES: ContentPhrase = {
  desktop: ['Často kladené', 'otázky'],
  mobile: ['Často', 'kladené', 'otázky'],
} as const;

export const TESTIMONIALS_HEADER_PHRASES: ContentPhrase = {
  desktop: ['Recenzie'],
  mobile: ['Recenzie'],
} as const;

export const ABOUT_HERO_PHRASES: ContentPhrase = {
  desktop: ['O mne a mojej ceste'],
  mobile: ['O mne a mojej ceste'],
} as const;

// ============================================================================
// FEATURES & SERVICES
// ============================================================================
export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const FEATURES: Feature[] = [
  {
    id: 'chronic-pain',
    title: 'Chronické bolesti',
    description: 'Účinná metóda na pomoc pri chronických bolestiach, akútnych stavoch, migrénach a napätí v tele.',
    iconName: 'IconUserBolt',
  },
  {
    id: 'stress-balance',
    title: 'Stres a psychická rovnováha',
    description: 'Pomáha zmierniť stavy úzkosti, depresie a vyčerpania. Umožňuje spracovanie PTSD, zlepšuje spánok a koncentráciu.',
    iconName: 'IconBrain',
  },
  {
    id: 'injuries-surgery',
    title: 'Úrazy a operácie',
    description: 'Podpora regenerácie po vážnych úrazoch a chirurgických zákrokoch. Podporuje zlepšenie energetických tokov v tele a odbúravanie zápalových procesov.',
    iconName: 'IconBandage',
  },
  {
    id: 'pregnancy-birth',
    title: 'Tehotenstvo a pôrod',
    description: 'Zmierňovanie bolesti a napätia počas tehotenstva. Uvoľnenie svalového a fasciálneho napätia. Príprava na pôrod a popôrodná starostlivosť.',
    iconName: 'IconBabyCarriage',
  },
  {
    id: 'children-support',
    title: 'Podpora detí a novorodencov',
    description: 'Terapia je bezpečná a účinná pre novorodencov a malé deti. Pomáha pri neurologických poruchách a vývojových problémoch. Je to aj pomoc pri regulovaní emociálnych reakcii.',
    iconName: 'IconMoodKid',
  },
  {
    id: 'prevention-health',
    title: 'Prevencia a zdravie',
    description: 'BCST zlepšuje celkovú vitalitu a pohodu. Pomáha obnoviť správne fungovanie tela, zlepšiť držanie tela, flexibilitu a rovnováhu. Zlepšuje energetickú úroveň v tele a mentálnu jasnosť.',
    iconName: 'IconPlant2',
  },
  {
    id: 'support-24-7',
    title: '24/7 podpora',
    description: 'Dostupná pomoc a konzultácie kedykoľvek potrebujete.',
    iconName: 'IconClockCheck',
  },
  {
    id: 'comprehensive-care',
    title: 'Komplexná starostlivosť',
    description: 'Holistický prístup k zdraviu tela, mysle a ducha. Kombinácia rôznych metód pri terapii s dôrazom na potreby klienta.',
    iconName: 'IconHeartHandshake',
  },
] as const;

// ============================================================================
// FAQ DATA
// ============================================================================
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'session-duration',
    question: 'Ako dlho trvá jedno sedenie?',
    answer: 'Jedno sedenie trvá približne 60-90 minút. Prvé sedenie je dlhšie, pretože sa zoznamujeme a zisťujeme vaše potreby.',
  },
  {
    id: 'sessions-needed',
    question: 'Koľko sedení potrebujem?',
    answer: 'Počet sedení závisí od vašich problémov a ako na ne telo reaguje. Odporúčam minimálne 3-5 sedení pre viditeľné výsledky.',
  },
  {
    id: 'pregnancy-safe',
    question: 'Je terapia vhodná pre tehotné ženy?',
    answer: 'Áno, BCST je veľmi bezpečná a vhodná pre tehotné ženy. Pomáha zmierniť ťažkosti tehotenstva a pripraviť telo na pôrod.',
  },
  {
    id: 'children-safe',
    question: 'Môžem chodiť na terapiu s deťmi?',
    answer: 'Áno, kraniosakrálna terapia je vhodná aj pre deti. Je jemná a bezpečná, pomáha pri problémoch so spánkom, úzkosti a poruchách správania.',
  },
] as const;

// ============================================================================
// TESTIMONIALS
// ============================================================================
export interface Testimonial {
  id: string;
  testimony: string;
  person: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'katka-b',
    testimony: "Ako Marek mi vravel, že liečis dotykom len ja som si nevedela predstaviť ako. Ako dotykom? Teraz už viem... Cítila som sa pri tebe veľmi dobre, kľudne by som ostala ďalších 5 hodín. Tak sa mi nechcelo vstať z toho lôžka.. achhhh. A tie tvoje zázračné teplé ruky, joooj veľmi príjemné a ja verím tomu, že aj veľmi liečivé rúčky máš Kristínka. Si zlatý človiečik. Určite by som k tebe ešte chcela prísť. Cítila som to tak, že netreba hovoriť a ty aj tak vieš.. ako by si cez tie tvoje teplé ruky vnímala všetko. Teraz mi je tak nejako ľahko, momentálne ma nič nebolí, trošku ma bolela hlava na ľavej strane ale už to nejako ustupuje. Cítim sa tak nejak novo.",
    person: 'Katka B.',
  },
  {
    id: 'erika-s',
    testimony: "Kristínka, chcela by som Ti zo srdca poďakovať 🙏. Prišla som k Tebe, keď som sa trápila s postraumatickou stresovou poruchou. Roky som cítila, že moje telo je v neustálom napätí, nedokázala som poriadne spať ani si oddýchnuť. U Teba som prvýkrát po dlhej dobe zažila pocit pokoja a bezpečia. Tvoj jemný dotyk a prítomnosť mi dovolili uvoľniť sa a znova sa spojiť so sebou. Po niekoľkých sedeniach si všímam, že mám viac energie, zvládam stres inak a pomaly sa mi vracia dôvera v život. Si pre mňa veľkou oporou a veľmi si vážim, že robíš túto prácu. Ďakujem Ti, že mi pomáhaš nájsť cestu späť k sebe.",
    person: 'Erika S.',
  },
  {
    id: 'dominika-k',
    testimony: "Ja o tebe rozprávam všetkým mojim kolegom! Ide z teba neskutočná energia a čo je ešte lepšie cítila som sa ako keby som kráľovná pri tebe. Dokážeš smerovať pozornosť na človeka takým štýlom, že sa cíti vypočutý a videný 🥹 a ja ti ďakujem že som sa tak mohla pri tebe cítiť. Mení sa mi život zakaždým keď ku tebe prídem.",
    person: 'Dominika K.',
  },
] as const;

// ============================================================================
// STATISTICS
// ============================================================================
export interface Statistic {
  id: string;
  number: string;
  subtitle: string;
}

export const STATISTICS: Statistic[] = [
  {
    id: 'experience',
    number: '10+',
    subtitle: 'rokov skúseností',
  },
  {
    id: 'clients',
    number: '300+',
    subtitle: 'spokojných klientov',
  },
  {
    id: 'rating',
    number: '5.0',
    subtitle: 'hodnotenie klientov',
  },
] as const;

// ============================================================================
// THERAPY INFORMATION
// ============================================================================
export interface TherapyInfo {
  title: string;
  description: string;
}

export const THERAPY_INFO: TherapyInfo[] = [
  {
    title: 'Ako prebieha sedenie',
    description: 'Počas terapie ležíte pohodlne oblečení na stabilnom lehátku, v pokojnej a tichej miestnosti. Terapeut jemne položí ruky na rôzne časti tela – napríklad na hlavu, hrudník či chodidlá – a citlivo sleduje jemné pohyby, napätia a rytmus vášho organizmu. Dotyk je veľmi jemný, bez akéhokoľvek tlaku, skôr ako tiché „počúvanie" tela, ktoré mu umožňuje uvoľniť sa a prirodzene obnovovať svoju rovnováhu.',
  },
  {
    title: 'Nejde o masáž',
    description: 'Nejde o masáž, manipuláciu ani fyzické pretváranie tela. Nepoužívajú sa žiadne oleje ani mechanické techniky. Terapeut tu nie je na to, aby „napravil" telo, ale aby mu vytvoril bezpečný priestor, v ktorom môže samo hľadať rovnováhu. Je sprievodcom procesu, ktorý podporuje prirodzenú schopnosť organizmu regenerovať sa a uvoľňovať nahromadené napätia.',
  },
] as const;

export interface TherapyEdge {
  point: string;
  details: string;
  icon: string;
}

export const THERAPY_EDGES: TherapyEdge[] = [
  {
    point: 'Uvoľňuje fyzické aj emočné napätie',
    details: 'Jemný dotyk pomáha uvoľniť svalové napätie a emočné bloky, čo vedie k pocitu hlbokého uvoľnenia.',
    icon: '/svgs/meditation.svg',
  },
  {
    point: 'Pomáha pri bolestiach a stresoch',
    details: 'Účinná pri bolestiach hlavy, chrbta, kĺbov a pri znižovaní stresu a úzkosti.',
    icon: '/svgs/pain_icon.svg',
  },
  {
    point: 'Vhodná pre všetkých',
    details: 'Bezpečná pre dospelých, deti, tehotné ženy aj seniorov. Podporuje regeneráciu po zraneniach.',
    icon: '/svgs/for_all.svg',
  },
] as const;

// ============================================================================
// IMAGES & ASSETS
// ============================================================================
export const IMAGES = {
  hero: {
    desktop: '/images/featured_img.avif',
    mobile: '/images/featured_img1.avif',
  },
  background: {
    grid: '/images/grid_background.png',
  },
  icons: {
    meditation: '/svgs/meditation.svg',
    pain: '/svgs/pain_icon.svg',
    forAll: '/svgs/for_all.svg',
  },
} as const;

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { y: '100%', opacity: 0 },
    animate: (i: number) => ({
      y: '0%',
      opacity: 1,
      transition: { 
        duration: 1, 
        delay: 0.1 * i, 
        ease: ANIMATIONS.easing.ease 
      },
    }),
  },
  menu: {
    open: {
      width: '250px',
      height: '300px',
      top: '-25px',
      right: '-25px',
      transition: { 
        duration: ANIMATIONS.duration.verySlow, 
        type: 'tween' as const, 
        ease: ANIMATIONS.easing.easeInOut 
      },
    },
    closed: {
      width: '55px',
      height: '40px',
      top: '0px',
      right: '-4px',
      transition: {
        duration: ANIMATIONS.duration.verySlow,
        delay: 0.35,
        type: 'tween' as const,
        ease: ANIMATIONS.easing.easeInOut,
      },
    },
  },
} as const;
