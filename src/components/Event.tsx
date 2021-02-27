import React from 'react';
import Image from 'next/image';
import Position from './svg/Position';

export interface IEventDescription {
  time: string;
  text: string;
}

export interface IEvent extends IEventDescription {
  fontColor: string;
  bgColor: string;
}

interface IEventContainer {
  events: IEventDescription[];
  title: string;
  description: string[];
  fontColor: string;
  bgColor: string;
}

const dogEvents: IEventDescription[] = [
  {
    text: 'Testa på agility med Anna Andersson',
    time: '10.00',
  },

  {
    text: 'Föreläsning om hundars beteende',
    time: '11.00',
  },

  {
    text: 'Kloklippning och pälsvård',
    time: '13.00',
  },

  {
    text: 'Testad på lydnas med Jan Jansson',
    time: '13.00',
  },
];

const catEvents: IEventDescription[] = [
  {
    text: 'Utställningstips med Karin Johansson',
    time: '10.00',
  },
  {
    text: 'Föreläsning om katters beteende',
    time: '11.00',
  },
  {
    text: 'Kattkafé med tillhörande fika',
    time: '13.00',
  },
  {
    text: 'Träffa uppfödare av olika raser',
    time: '14.00',
  },
];

const horseEvents: IEventDescription[] = [
  {
    text: 'Utställningstips med Siv Svensson',
    time: '10.00',
  },
  {
    text: 'Föreläsning om trav & skritt teknik',
    time: '11.00',
  },
  {
    text: 'Hästvård och hur du tar hand om stallet',
    time: '13.00',
  },
  {
    text: 'Hästägande och dess möjligheter',
    time: '14.00',
  },
];

const Event: React.FC<IEvent> = ({ time, text, fontColor, bgColor }) => {
  return (
    <>
      <div
        className={`flex p-2 pl-3 gap-2 rounded-2xl items-center justify-between text-${fontColor} bg-${bgColor} shadow-md`}
      >
        <p className="font-bold">{time}</p>
        <div className={`w-smallest h-4 bg-${fontColor} rounded-md`}></div>
        <p className="flex-1">{text}</p>
      </div>
    </>
  );
};

export const EventContainer: React.FC<IEventContainer> = ({
  events,
  title,
  description,
  fontColor,
  bgColor,
}) => {
  return (
    <>
      <h3>{title}</h3>
      {description.map((d) => (
        <p key={d} className="text-sm text-center">
          {d}
        </p>
      ))}
      <div className="flex flex-col gap-4 pb-2 mt-4">
        {events.map((event) => (
          <Event
            key={event.text}
            {...event}
            fontColor={fontColor}
            bgColor={bgColor}
          />
        ))}
      </div>
    </>
  );
};

export const DogContainer = () => {
  const desc = [
    'Eller går du i tankarna att skaffa en fyrbent kompis?',
    'Passa på att delta i någon av våra aktiviteter för just hundar',
  ];
  return (
    <section
      style={{ backgroundImage: "url('/dark_green_plate.svg')" }}
      className="text-melon px-4 py-16 -mt-6 bg-cover bg-center"
    >
      <EventContainer
        title="Hundägare?"
        description={desc}
        events={dogEvents}
        bgColor="grass"
        fontColor="moss"
      />
    </section>
  );
};

export const CatContainer = () => {
  const desc = [
    'Eller drömmer du om att skaffa en lurvig rumskamrat?',
    'Passa på att delta i någon av våra aktiviteter för just katter',
  ];
  return (
    <section
      style={{ backgroundImage: "url('/light_blue_plate.svg')" }}
      className="text-lake px-4 py-16 -mt-9 bg-cover bg-center"
    >
      <EventContainer
        title="Kattägare?"
        description={desc}
        events={catEvents}
        bgColor="lake"
        fontColor="white"
      />
    </section>
  );
};

export const HorseContainer = () => {
  const desc = [
    'Eller alltid varit lite nyfiken på vad det innebär?',
    'Passa på att delta i någon av våra aktiviteter för just hästar',
  ];
  return (
    <section className="relative -mt-7">
      <div
        style={{ zIndex: -1, minHeight: '500px' }}
        className="absolute w-full overflow-hidden"
      >
        <Image src="/light_brown_plate.svg" layout="fill" />
      </div>
      <div
        style={{ minHeight: '500px' }}
        className=" flex flex-col items-center justify-center"
      >
        <EventContainer
          title="Hästägare?"
          description={desc}
          events={horseEvents}
          bgColor="melon"
          fontColor="mound"
        />
      </div>
    </section>
  );

  // style={{ backgroundImage: "url('/light_brown_plate.svg')" }}
  // className="text-moss px-4 py-16 -mt-7 bg-cover bg-center"
};

export const Collaboration = () => {
  return (
    <section
      style={{ background: "url('/light_pink_plate.svg')", height: '60vh' }}
      className="text-wine px-6 bg-cover bg-center -mt-10 py-16 text-center"
    >
      <h3>Samarbetspartners</h3>
      <p className="text-sm">
        Vi är stolta över att kunna presentera de samarbetspartners som hjälper
        oss att anordna eventet!
      </p>
      <div className="grid grid-cols-2 "></div>
    </section>
  );
};

export const FindUs = () => {
  return (
    <section
      style={{ background: "url('/green_plate.svg')", height: '60vh' }}
      className="text-moss -mt-9 pt-12 px-6 text-center flex flex-col"
    >
      <div>
        <h3>Hitta hit!</h3>
        <p className="text-sm">
          Alla aktiviteter som sker under dagen kommer äga rum runt Stora
          Delsjön i Göteborg. Vi utgår från Delsjöbadet, där Folksam kommer att
          finnas på plats med info.
        </p>
      </div>

      <div className="flex flex-col">
        <Position />
      </div>
    </section>
  );
};

export default Event;
