import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/kika-photo.avif';
import esther_howard from '../../../../public/images/kika1.avif';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Kraniosakrálna terapia mi pomohla uvoľniť chronické napätie v chrbte. Po niekoľkých sedeniach som sa cítila oveľa lepšie a spím pokojnejšie. Terapeutka je veľmi jemná a profesionálna.",
    person: 'Mária Nováková',
    avatar: robert_fox,
  },
  {
    testimony:
      "Trpel som migrénami už roky a nič mi nepomohlo. Po BCST sedeniach sa moje bolesti hlavy výrazne zmenšili. Terapia je jemná a príjemná, odporúčam ju každému.",
    person: 'Peter Kováč',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Po pôrode som sa cítila vyčerpaná a bez energie. Kraniosakrálna terapia mi pomohla obnoviť rovnováhu a cítim sa oveľa lepšie. Je to skutočne zázračná metóda.",
    person: 'Anna Svobodová',
    avatar: esther_howard,
  },
  {
    testimony:
      "Ako senior som mal problémy s pohyblivosťou a spánkom. BCST mi pomohla zlepšiť kvalitu spánku a cítim sa oveľa energickejší. Terapeutka je veľmi trpezlivá.",
    person: 'Ján Horváth',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Stres z práce ma doslova zničil. Po kraniosakrálnej terapii sa cítim oveľa pokojnejší a vyrovnanejší. Je to investícia do môjho zdravia, ktorú neľutujem.",
    person: 'Eva Králová',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Rezervujte si termín', 'a doprajte si chvíľu'];
