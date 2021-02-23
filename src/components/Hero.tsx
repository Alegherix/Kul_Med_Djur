import React from 'react';
import Navbar from './Navbar';
import HeroSVG from './svg/Hero';
import Image from 'next/image';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      <main
        style={{ height: '80vh' }}
        className="rel flex flex-col bg-hero bg-cover bg-center"
      >
        <Navbar />
        <div className="mt-10 text-center text-white">
          <h1
            style={{ textShadow: '1px 4px 7px rgba(0,0,0,0.2)' }}
            className="text-5xl mb-2 font-bold"
          >
            Kul med Djur
          </h1>
          <p
            style={{ textShadow: '1px 4px 7px rgba(0,0,0,0.2)' }}
            className="text-xl"
          >
            Delsjön runt
          </p>
        </div>
      </main>
    </>
  );
};

export default Hero;
