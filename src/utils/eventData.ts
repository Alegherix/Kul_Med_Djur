import CatMobileSVG from '../components/svg/CatMobileSVG';
import CatSVG from '../components/svg/CatSVG';
import DogMobileSVG from '../components/svg/DogMobileSVG';
import DogSVG from '../components/svg/DogSVG';
import HorseMobileSVG from '../components/svg/HorseMobileSVG';
import HorseSVG from '../components/svg/HorseSVG';
import { EventPeriod, EventType } from './eventUtils';

export interface IEventHeading {
  header: string;
  description: string[];
  colorScheme: ColorScheme;
}

export interface IFullEventDetails {
  time: string;
  text: string;
  textContent: string;
  summary: string;
  period: EventPeriod;
  type: EventType;
  colorScheme: ColorScheme;
}

export interface ColorScheme {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

export interface IEvent {
  heading: IEventHeading;
  details: IFullEventDetails[];
  SVG: React.FC;
  MobileSVG?: React.FC;
  reverse?: boolean;
}

const dogColorScheme: ColorScheme = {
  primaryColor: 'melon',
  secondaryColor: 'grass',
  tertiaryColor: 'moss',
};

const catColorScheme: ColorScheme = {
  primaryColor: 'lake',
  secondaryColor: 'lake',
  tertiaryColor: 'white',
};

const horseColorScheme: ColorScheme = {
  primaryColor: 'mound',
  secondaryColor: 'melon',
  tertiaryColor: 'mound',
};

const dogEventHeading: IEventHeading = {
  header: 'Hundägare?',
  description: [
    'Eller går du i tankarna att skaffa en fyrbent kompis?',
    'Passa på att delta i någon av våra aktiviteter för just hundar',
  ],
  colorScheme: dogColorScheme,
};

const catEventHeading: IEventHeading = {
  header: 'Kattägare?',
  description: [
    'Eller drömmer du om att skaffa en lurvig rumskamrat?',
    'Passa på att delta i någon av våra aktiviteter för just katter',
  ],
  colorScheme: catColorScheme,
};

const horseEventHeading: IEventHeading = {
  header: 'Hästägare?',
  description: [
    'Eller alltid varit lite nyfiken på vad det innebär?',
    'Passa på att delta i någon av våra aktiviteter för just hästar',
  ],
  colorScheme: horseColorScheme,
};

const dogEventDetails: IFullEventDetails[] = [
  {
    time: '10.00',
    text: 'Testa på agility med Anna Andersson',
    textContent:
      'Testa på agility med Anna Andersson, ta med din fyrbenta kompis och öva tillsammans eller kom ensam och lär dig mer om hur agility fungerar',
    period: 'first',
    type: 'dog',
    colorScheme: dogColorScheme,
    summary: 'Agility',
  },
  {
    time: '11.00',
    text: 'Föreläsning om hundars beteende',
    textContent:
      'Hundars beteende är mer komplext än vad de flesta någonsin kunnat föreställa sig, lär dig mer om hur hundar fungerar och ta eran relation till en ny nivå.',
    period: 'second',
    type: 'dog',
    colorScheme: dogColorScheme,
    summary: 'Föreläsning: Hundars beteende',
  },
  {
    time: '13.00',
    text: 'Kloklippning och pälsvård',
    textContent:
      'Hundars beteende är mer komplext än vad de flesta någonsin kunnat föreställa sig, lär dig mer om hur hundar fungerar och ta eran relation till en ny nivå.',
    period: 'third',
    type: 'dog',
    colorScheme: dogColorScheme,
    summary: 'Klolippning & Pälsvård',
  },
  {
    time: '14.00',
    text: 'Testa på lydnas med Jan Jansson',
    textContent:
      'Hundars beteende är mer komplext än vad de flesta någonsin kunnat föreställa sig, lär dig mer om hur hundar fungerar och ta eran relation till en ny nivå.',
    period: 'fourth',
    type: 'dog',
    colorScheme: dogColorScheme,
    summary: 'Lydnadsträning',
  },
];

const catEventDetails: IFullEventDetails[] = [
  {
    time: '10.00',
    text: 'Utställningstips med Anna Andersson',
    textContent:
      'Testa på agility med Anna Andersson, ta med din fyrbenta kompis och öva tillsammans eller kom ensam och lär dig mer om hur agility fungerar',
    period: 'first',
    type: 'cat',
    colorScheme: catColorScheme,
    summary: 'Agility',
  },
  {
    time: '11.00',
    text: 'Föreläsning om katters beteende',
    textContent:
      'Hundars beteende är mer komplext än vad de flesta någonsin kunnat föreställa sig, lär dig mer om hur hundar fungerar och ta eran relation till en ny nivå.',
    period: 'second',
    type: 'cat',
    colorScheme: catColorScheme,
    summary: 'Föreläsning: Katters beteende',
  },
  {
    time: '13.00',
    text: 'Katt Café med medhavd fika',
    textContent:
      'Hundars beteende är mer komplext än vad de flesta någonsin kunnat föreställa sig, lär dig mer om hur hundar fungerar och ta eran relation till en ny nivå.',
    period: 'third',
    type: 'cat',
    colorScheme: catColorScheme,
    summary: 'Katt Café',
  },
  {
    time: '14.00',
    text: 'Träffa uppfödare av olika raser',
    textContent:
      'Hundars beteende är mer komplext än vad de flesta någonsin kunnat föreställa sig, lär dig mer om hur hundar fungerar och ta eran relation till en ny nivå.',
    period: 'fourth',
    type: 'cat',
    colorScheme: catColorScheme,
    summary: 'Meet & Greet med kattuppfödare',
  },
];

const horseEventDetails: IFullEventDetails[] = [
  {
    time: '10.00',
    text: 'Hästvård med Anders Karlsson',
    textContent:
      'Att ta hand om sin häst på rätt sätt är en av de absolut viktigaste delarna för att få din häst att må bra. Anders Karlsson håller därför en föreläsning om hur du tar hand om din häst på bästa sätt med allt ifrån tänder till hovar.',
    period: 'first',
    type: 'horse',
    colorScheme: horseColorScheme,
    summary: 'Hästvård',
  },
  {
    time: '11.00',
    text: 'Skritt teknik med Johanna Svensson',
    textContent:
      'Hundars beteende är mer komplext än vad de flesta någonsin kunnat föreställa sig, lär dig mer om hur hundar fungerar och ta eran relation till en ny nivå.',
    period: 'second',
    type: 'horse',
    colorScheme: horseColorScheme,
    summary: 'Skritt teknik',
  },
  {
    time: '13.00',
    text: 'Travövningar inför tävling',
    textContent:
      'Hundars beteende är mer komplext än vad de flesta någonsin kunnat föreställa sig, lär dig mer om hur hundar fungerar och ta eran relation till en ny nivå.',
    period: 'third',
    type: 'horse',
    colorScheme: horseColorScheme,
    summary: 'Travövningar',
  },
  {
    time: '14.00',
    text: 'Föreläsning om hästars beteende',
    textContent:
      'Hundars beteende är mer komplext än vad de flesta någonsin kunnat föreställa sig, lär dig mer om hur hundar fungerar och ta eran relation till en ny nivå.',
    period: 'fourth',
    type: 'horse',
    colorScheme: horseColorScheme,
    summary: 'Föreläsning: Hästars beteende',
  },
];

export const dogEvent: IEvent = {
  heading: dogEventHeading,
  details: dogEventDetails,
  SVG: DogSVG,
  MobileSVG: DogMobileSVG,
};

export const catEvent: IEvent = {
  heading: catEventHeading,
  details: catEventDetails,
  SVG: CatSVG,
  MobileSVG: CatMobileSVG,
  reverse: true,
};

export const horseEvent: IEvent = {
  heading: horseEventHeading,
  details: horseEventDetails,
  SVG: HorseSVG,
  MobileSVG: HorseMobileSVG,
};
