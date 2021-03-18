import React from 'react';
import GMap from './GMap';

const Location = () => {
  return (
    <section
      id="location"
      style={{ background: "url('/static/images/plates/green_plate.svg')" }}
      className="text-moss -mt-12 py-16 px-6 text-center flex flex-col h-full relative"
    >
      <div className="max-w-6xl md:flex flex-row-reverse  items-center md:mx-auto">
        <div className="md:w-full md:ml-2 xl:text-left xl:pl-14">
          <h3 className="xl:text-left xl:px-7 pt-6">Hitta hit!</h3>
          <p className="mb-7 descText md:w-bigger  md:px-8 lg:px-7 xl:pl-7 xl:w-full">
            Alla aktiviteter som sker under dagen kommer äga rum runt Stora
            Delsjön i Göteborg. Vi utgår från Delsjöbadet, där Folksam kommer
            att finnas på plats med info.
          </p>
        </div>

        <div className="flex flex-col md:w-full items-center descText w-full">
          <div className="w-full flex items-center justify-center md:w-72 lg:w-bigger xl:w-[500px]">
            <GMap />
          </div>
          <p className="textLocation mt-4 font-bold text-center">Delsjöbadet</p>
          <p className="font-bold text-center">416 55 Göteborg</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
