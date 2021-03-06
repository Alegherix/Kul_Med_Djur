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
  period: EventPeriod;
  type: EventType;
  colorScheme: ColorScheme;
}

type ColorScheme = {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
};

export interface IEvent {
  heading: IEventHeading;
  details: IFullEventDetails[];
}

const dogColorScheme: ColorScheme = {
  primaryColor: 'melon',
  secondaryColor: 'grass',
  tertiaryColor: 'moss',
};

const dogEventHeading: IEventHeading = {
  header: 'Hundägare?',
  description: [
    'Eller går du i tankarna att skaffa en fyrbent kompis?',
    'Passa på att delta i någon av våra aktiviteter för just hundar',
  ],
  colorScheme: dogColorScheme,
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
  },
  {
    time: '11.00',
    text: 'Föreläsning om hundars beteende',
    textContent:
      'Hundars beteende är mer komplext än vad de flesta någonsin kunnat föreställa sig, lär dig mer om hur hundar fungerar och ta eran relation till en ny nivå.',
    period: 'second',
    type: 'dog',
    colorScheme: dogColorScheme,
  },
];

export const dogEvent: IEvent = {
  heading: dogEventHeading,
  details: dogEventDetails,
};
