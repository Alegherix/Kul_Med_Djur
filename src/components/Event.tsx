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
        className={`flex p-2 gap-2 rounded-2xl items-center justify-between text-${fontColor} bg-${bgColor}`}
      >
        <p className="font-bold">{time}</p>
        <div className={`w-smallest h-4 bg-${fontColor} rounded-md`}></div>
        <p className="flex-1">{text}</p>
      </div>
    </>
  );
};

const dogEvents: IEvent[] = [
  {
    text: 'Testa på agility med Anna Andersson',
    time: '10.00',
    bgColor: 'grass',
    fontColor: 'moss',
  },

  {
    text: 'Föreläsning om hundars beteende',
    time: '11.00',
    bgColor: 'grass',
    fontColor: 'moss',
  },

  {
    text: 'Kloklippning och pälsvård',
    time: '13.00',
    bgColor: 'grass',
    fontColor: 'moss',
  },

  {
    text: 'Testad på lydnas med Jan Jansson',
    time: '13.00',
    bgColor: 'grass',
    fontColor: 'moss',
  },
];

interface IEventContainer {
  svgName: string;
  events: IEvent[];
  title: string;
  description: string;
}

export const EventContainer = () => {
  return (
    <section
      style={{ backgroundImage: "url('/dark_green_plate.svg')" }}
      className="text-melon px-4 py-16 -mt-6 bg-cover bg-center"
    >
      <h3 className="text-center mb-3 text-3xl font-bold">Hundägare?</h3>
      <p className="text-sm text-center mb-4">
        Eller går du i tankarna att skaffa en fyrbent kompis?
        <br />
        Passa på att delta i någon av våra aktiviteter för just hundar
      </p>
      <div className="flex flex-col gap-4 pb-2">
        {dogEvents.map((dogEvent) => (
          <Event key={dogEvent.text} {...dogEvent} />
        ))}
      </div>
    </section>
  );
};

const DogContainer = () => {
  return (
    <section
      style={{ backgroundImage: "url('/dark_green_plate.svg')" }}
      className="text-melon px-4 py-16 -mt-6 bg-cover bg-center"
    >
      <h3 className="text-center mb-3 text-3xl font-bold">Hundägare?</h3>
      <p className="text-sm text-center mb-4">
        Eller går du i tankarna att skaffa en fyrbent kompis?
        <br />
        Passa på att delta i någon av våra aktiviteter för just hundar
      </p>
      <div className="flex flex-col gap-4 pb-2">
        {dogEvents.map((dogEvent) => (
          <Event key={dogEvent.text} {...dogEvent} />
        ))}
      </div>
    </section>
  );
};

export default Event;
