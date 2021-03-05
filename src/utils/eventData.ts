import { EventPeriod, EventType } from './eventUtils';

export interface IEventHeading {
  header: string;
  description: string[];
  primaryColor: string;
  secondaryColor: string;
}

export const dogEventHeading: IEventHeading = {
  header: 'Hundägare?',
  description: [
    'Eller går du i tankarna att skaffa en fyrbent kompis?',
    'Passa på att delta i någon av våra aktiviteter för just hundar',
  ],
  primaryColor: 'moss',
  secondaryColor: 'melon',
};

interface IFullEvent {
  time: string;
  text: string;
  color: string;
  textContent: string;
  period: EventPeriod;
  type: EventType;
}

export const dogEvents: IFullEvent[] = [
  {
    time: '10.00',
    text: '',
    color: '',
    textContent: '',
    period: 'first',
    type: 'dog',
  },
];
