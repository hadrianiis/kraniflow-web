import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ['Prečo vyskúšať', 'BCST'];
export const desktopParagraphPhrase = [
  'Biodynamická kraniosakrálna terapia je jemná a účinná metóda,',
  'ktorá harmonizuje telo aj myseľ, pomáha zmierniť bolesti a stres',
  'a podporuje prirodzené samoliečebné procesy organizmu.',
];

// For mobile
export const mobileHeaderPhrase = ['Prečo vyskúšať', 'BCST'];
export const mobileParagraphPhrase = [
  'Biodynamická kraniosakrálna terapia je jemná',
  'a účinná metóda, ktorá harmonizuje telo aj myseľ,',
  'pomáha zmierniť bolesti a stres a podporuje',
  'prirodzené samoliečebné procesy organizmu.',
];

export const edges = [
  {
    point: 'Uvoľňuje fyzické aj emočné napätie',
    details:
      'Jemný dotyk pomáha uvoľniť svalové napätie a emočné bloky, čo vedie k pocitu hlbokého uvoľnenia.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Pomáha pri bolestiach a stresoch',
    details:
      'Účinná pri bolestiach hlavy, chrbta, kĺbov a pri znižovaní stresu a úzkosti.',
    icon: ic_identification,
  },
  {
    point: 'Vhodná pre všetkých',
    details:
      'Bezpečná pre dospelých, deti, tehotné ženy aj seniorov. Podporuje regeneráciu po zraneniach.',
    icon: ic_lock_closed,
  },
];
