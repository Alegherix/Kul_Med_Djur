import React from 'react';
import LocationSVG from './svg/LocationSVG';

export const Location = () => {
  return (
    <section
      style={{ background: "url('/green_plate.svg')" }}
      className="text-moss -mt-9 py-12 px-6 text-center flex flex-col h-full"
    >
      <div>
        <h3>Hitta hit!</h3>
        <p className="text-sm mb-7">
          Alla aktiviteter som sker under dagen kommer äga rum runt Stora
          Delsjön i Göteborg. Vi utgår från Delsjöbadet, där Folksam kommer att
          finnas på plats med info.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="w-80 h-80">
          <LocationSVG />
        </div>
        <p className="mt-4 font-bold text-center">Delsjöbadet</p>
        <p className="font-bold text-center">416 55 Göteborg</p>
      </div>
    </section>
  );
};
