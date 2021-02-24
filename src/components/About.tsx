import React from 'react';
import Image from 'next/image';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <section
      style={{
        height: '35vh',
        backgroundImage: "url('/light_green_plate.svg')",
      }}
      className="text-center text-moss -mt-10 flex items-center justify-center flex-col h-full py-8 bg-cover bg-center"
    >
      <h2 className="text-3xl font-bold mb-3">Eventbeskrivning här</h2>
      <p className="mb-4 w-96 mx-auto ">
        Lite ytterligare text om eventet här och ännu mer info och beskrivning
        av syfte med evenmanget...
      </p>
      <button className=" bg-grass py-3 px-5 rounded-3xl shadow-md hover:bg-overgrownGrass">
        Till anmälan
      </button>
    </section>
  );
};

export default About;
