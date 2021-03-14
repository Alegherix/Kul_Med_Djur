import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const router = useRouter();
  const { name, lastname, petname } = router.query;

  return (
    <section
      id="about"
      style={{
        height: '35vh',
        backgroundImage: "url('/light_green_plate.svg')",
      }}
      className="text-center text-moss -mt-4 flex items-center justify-center flex-col h-full py-8 bg-cover bg-center"
    >
      <h2 className="mb-3">Eventbeskrivning här</h2>
      <p className="mb-4 w-full md:w-bigger mx-auto md:text-xl md:mb-8">
        Lite ytterligare text om eventet här och ännu mer info och beskrivning
        av syfte med evenmanget...
      </p>

      <Link
        className="cursor-pointer p-2 hover:underline"
        to="interest"
        smooth={true}
        duration={500}
      >
        <button className=" bg-grass py-3 px-5 rounded-3xl shadow-md hover:bg-overgrownGrass md:py-5 md:px-8 md:rounded-full md:text-xl">
          Till anmälan
        </button>
      </Link>
    </section>
  );
};

export default About;
