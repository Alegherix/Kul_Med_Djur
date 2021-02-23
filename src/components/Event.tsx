import React from 'react';

export interface IEvent {
  time: string;
  text: string;
  fontColor: string;
  bgColor: string;
}

const Event: React.FC<IEvent> = ({ time, text, fontColor, bgColor }) => {
  return (
    <>
      <div
        className={`flex p-2 rounded-2xl items-center justify-between text-${fontColor} bg-${bgColor}`}
      >
        <p className="font-bold">{time}</p>
        <div className={`w-1 h-full bg-white`}></div>
        <p>{text}</p>
      </div>
    </>
  );
};

const dogEvents: IEvent[] = [
  {
    text: 'Testa på agility med Anna Andersson',
    time: '10:00',
    bgColor: 'moss',
    fontColor: 'grass',
  },

  {
    text: 'Föreläsning om hundars beteende',
    time: '11:00',
    bgColor: 'moss',
    fontColor: 'grass',
  },

  {
    text: 'Kloklippning och pälsvård',
    time: '13:00',
    bgColor: 'moss',
    fontColor: 'grass',
  },

  {
    text: 'Testad på lydnas med Jan Jansson',
    time: '13:00',
    bgColor: 'moss',
    fontColor: 'grass',
  },
];

const EventContainer = () => {
  <section className="bg-moss text-white px-4">
    <h3 className="text-center mb-3 text-3xl">Hundägare?</h3>
    <p className="text-sm">
      Eller går du i tankarna att skaffa en fyrbent kompis?
      <br />
      Passa på att delta i någon av våra aktiviteter för just hundar
    </p>
    {dogEvents.map((dogEvent) => (
      <Event key={dogEvent.text} {...dogEvent} />
    ))}
  </section>;
};

export default Event;
