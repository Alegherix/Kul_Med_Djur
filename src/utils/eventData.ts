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
    'Eller går du i tankarna att skaffa en fyrbent kompis? Vill du testa på agility, lära dig mer om hundars beteende eller bara träffa andra hundägare?',
  ],
  colorScheme: dogColorScheme,
};

const catEventHeading: IEventHeading = {
  header: 'Kattägare?',
  description: [
    'Eller drömmer du om att ta hand om en mysig spinnande kisse? Här kan du träffa uppfödare, lära dig mer om katters beteende och prata med andra kattägare!',
  ],
  colorScheme: catColorScheme,
};

const horseEventHeading: IEventHeading = {
  header: 'Hästägare?',
  description: [
    'Eller alltid varit lite nyfiken på vad det innebär att äga eller ta hand om en häst? Under dagen finns det bland annat möjlighet att lära sig om hästvård och lyssna på en föreläsning om hästars beteende! ',
  ],
  colorScheme: horseColorScheme,
};

const dogEventDetails: IFullEventDetails[] = [
  {
    time: '10.00',
    text: 'Agility med Anna',
    textContent:
      'Testa på agility med Anna Andersson. Ta med din fyrbenta kompis och öva tillsammans eller kom ensam och lär dig mer om hur agility fungerar. Anna kommer tillsammans med sin prisbelönta hund Viggo att visa hur de tränar agility.',
    period: 'first',
    type: 'dog',
    colorScheme: dogColorScheme,
    summary: 'Agility',
  },
  {
    time: '11.00',
    text: 'Hundars beteende',
    textContent:
      'Välkommen på en föreläsning om hundars beteende tillsammans med Viktor Johansson. Hundars beteende är mer komplext än du kan tro. Nu kan du lära dig mer om hur just din hund fungerar i olika situationer och ta er relation till en ny nivå.',
    period: 'second',
    type: 'dog',
    colorScheme: dogColorScheme,
    summary: 'Föreläsning: Hundars beteende',
  },
  {
    time: '13.00',
    text: 'Vårda vovven',
    textContent:
      'Alla hundar behöver vård för att må bra. Johanna Johansson som är hundfrisör kommer att visa och berätta om hur du bäst vårdar din hund när det kommer till det yttre. Under dagen så kommer hon prata om både pälsvård och kloklippning för olika sorters raser.',
    period: 'third',
    type: 'dog',
    colorScheme: dogColorScheme,
    summary: 'Klolippning & Pälsvård',
  },
  {
    time: '14.00',
    text: 'Lydnad med Jan',
    textContent:
      'Nu har du chansen att få testa på lydnadsträning tillsammans med Jan Jansson. Jan har tillsammans med hunden Fluffis vunnit flera priser inom rallylydnad och nu ska han dela med sig av sina bästa tips. Ta med din hund och träna eller kom ensam och inspireras.',
    period: 'fourth',
    type: 'dog',
    colorScheme: dogColorScheme,
    summary: 'Lydnadsträning',
  },
];

const catEventDetails: IFullEventDetails[] = [
  {
    time: '10.00',
    text: 'Utställningstips',
    textContent:
      'Lär dig mer om kattutställning tillsammans med Eva Nilsson och hennes katt Uffe. Ta med din fluffiga kompis och testa tillsammans eller kom ensam och lär dig mer om hur en utställning fungerar. Det kommer även finnas tid till att ställa frågor till Eva, så ta chansen!',
    period: 'first',
    type: 'cat',
    colorScheme: catColorScheme,
    summary: 'Utställningstips',
  },
  {
    time: '11.00',
    text: 'Katters beteende',
    textContent:
      'Välkommen på en föreläsning om katters beteende tillsammans med Stefan Karlsson. Katters beteende är mer komplext än du kan tro. Nu kan du lära dig mer om hur just din kisse fungerar i olika situationer och ta er relation till en ny nivå.',
    period: 'second',
    type: 'cat',
    colorScheme: catColorScheme,
    summary: 'Föreläsning: Katters beteende',
  },
  {
    time: '13.00',
    text: 'Kattkafé',
    textContent:
      'Fika + katter = sant! Passa på att delta i vårt kattkafé. Här bjuder vi på kaffe och kaka samtidigt som du får möjligheten att umgås med detta fantastiska djur. Ta med din egna lilla älskling eller njut av att få hälsa på alla andra katter som finns på plats.',
    period: 'third',
    type: 'cat',
    colorScheme: catColorScheme,
    summary: 'Kattkafé',
  },
  {
    time: '14.00',
    text: 'Träffa uppfödare',
    textContent:
      'Funderar du på att skaffa katt men inte vet vilket ras som skulle passa just dig? Eller är du en kattuppfödare som vill lära känna fler inom området? Nu har du chansen att få träffa kattuppfödare av olika raser. Här kan du mingla och ställa frågor om olika raser.',
    period: 'fourth',
    type: 'cat',
    colorScheme: catColorScheme,
    summary: 'Meet & Greet med kattuppfödare',
  },
];

const horseEventDetails: IFullEventDetails[] = [
  {
    time: '10.00',
    text: 'Dressyr med Maja',
    textContent:
      'Maja Olsson har vunnit flera priser inom dressyr med sin häst Champion. Nu berättar hon om hur det är att tävla tillsammans med en häst och ger tips och råd till de som är sugna på att börja med dressyr. Här har du chansen att ställa frågor och lära dig mer om grenen.',
    period: 'first',
    type: 'horse',
    colorScheme: horseColorScheme,
    summary: 'Dressyr',
  },
  {
    time: '11.00',
    text: 'Hästars beteende',
    textContent:
      'Välkommen på en föreläsning om hästars beteende tillsammans med Viktoria Johansson. Hästars beteende är mer komplext än du kan tro. Nu kan du lära dig mer om hur just din häst fungerar i olika situationer och ta er relation till en ny nivå.',
    period: 'second',
    type: 'horse',
    colorScheme: horseColorScheme,
    summary: 'Föreläsning: hästars beteende',
  },
  {
    time: '13.00',
    text: 'Vårda din häst',
    textContent:
      'Att ta hand om sin häst på rätt sätt är en av de viktigaste delarna för att få din häst att må bra inifrån och ut. Nu har du chansen att lyssna på Anders Karlsson när han berättar om hur du tar hand om din häst på bästa sätt med allt från tänder till hovar.',
    period: 'third',
    type: 'horse',
    colorScheme: horseColorScheme,
    summary: 'Hästvård',
  },

  {
    time: '14.00',
    text: 'Träffa uppfödare',
    textContent:
      'Funderar du på att skaffa häst men inte vet vilket ras som skulle passa just dig och ditt liv? Eller är du en hästuppfödare som vill lära känna fler inom området? Nu har du chansen att få träffa hästuppfödare av olika raser. Här kan du mingla och ställa frågor om olika raser.',
    period: 'fourth',
    type: 'horse',
    colorScheme: horseColorScheme,
    summary: 'Meet & Greet med hästuppfödare',
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
