type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Často kladené', 'otázky'];
export const mobileHeaderPhrase = ['Často', 'kladené', 'otázky'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'Ako dlho trvá jedno sedenie?',
    answer:
      'Jedno sedenie trvá približne 60-90 minút. Prvé sedenie je dlhšie, pretože sa zoznamujeme a zisťujeme vaše potreby.',
  },
  {
    question: 'Koľko sedení potrebujem?',
    answer:
      'Počet sedení závisí od vašich problémov a ako na ne telo reaguje. Odporúčam minimálne 3-5 sedení pre viditeľné výsledky.',
  },
  {
    question: 'Je terapia vhodná pre tehotné ženy?',
    answer:
      'Áno, BCST je veľmi bezpečná a vhodná pre tehotné ženy. Pomáha zmierniť ťažkosti tehotenstva a pripraviť telo na pôrod.',
  },
  {
    question: 'Môžem chodiť na terapiu s deťmi?',
    answer:
      'Áno, kraniosakrálna terapia je vhodná aj pre deti. Je jemná a bezpečná, pomáha pri problémoch so spánkom, úzkosti a poruchách správania.',
  },
];
