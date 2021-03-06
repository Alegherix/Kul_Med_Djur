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
};

export interface IEvent {
  heading: IEventHeading;
  details: IFullEventDetails[];
}

const dogColorScheme: ColorScheme = {
  primaryColor: 'melon',
  secondaryColor: 'grass',
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
    text: '',
    textContent: '',
    period: 'first',
    type: 'dog',
    colorScheme: dogColorScheme,
  },
];

export const dogEvent: IEvent = {
  heading: dogEventHeading,
  details: dogEventDetails,
};
