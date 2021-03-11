import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import React, { useEffect, useState } from 'react';
import useIsomorphicLayoutEffect from '../hooks/UseIsomorphicLayoutEffect';
import LocationSVG from './svg/LocationSVG';

gsap.registerPlugin(ScrollTrigger);

const pinAnimation = (part: string) => {
  const anim = gsap.from(`${part}`, {
    scrollTrigger: {
      trigger: `${part}`,
      start: 'top center',
    },
    opacity: 0,
    y: -400,
    duration: 0.8,
  });
  return anim;
};

const FindUsAnimation = () => {
  const tl = gsap.timeline();

  const makeVisible = gsap.from('.findUs', {
    scrollTrigger: {
      trigger: `.pin`,
      start: 'top center',
    },
    delay: 1,
    opacity: 0,
    duration: 0.6,
  });

  const shakeTl = gsap
    .timeline({ repeat: 2 })
    .to('.findUs', {
      rotate: 15,
      x: 5,
      scale: 1.05,
      duration: 0.1,
    })
    .to('.findUs', {
      rotate: -15,
      x: 0,
      duration: 0.1,
    });
  tl.add(makeVisible);
  tl.add(shakeTl);
  return tl;
};

export const Location = () => {
  useIsomorphicLayoutEffect(() => {
    pinAnimation('.pin');
    pinAnimation('.pinShadow');
  }, []);

  return (
    <section
      style={{ background: "url('/green_plate.svg')" }}
      className="text-moss -mt-9 py-12 px-6 text-center flex flex-col h-full relative"
    >
      <div className="max-w-5xl md:flex flex-row-reverse  items-center md:mx-auto">
        <div className="md:w-full md:ml-2 xl:text-left xl:pl-14">
          <h3 className="xl:text-left xl:px-7">Hitta hit!</h3>
          <p className="mb-7 descText md:w-bigger  md:px-8 lg:px-7 xl:pl-7 xl:w-full">
            Alla aktiviteter som sker under dagen kommer äga rum runt Stora
            Delsjön i Göteborg. Vi utgår från Delsjöbadet, där Folksam kommer
            att finnas på plats med info.
          </p>
        </div>

        <div className="flex flex-col md:w-full items-center descText">
          <div
            style={{ maxWidth: '450px' }}
            className="w-full flex items-center justify-center md:w-72 xl:w-bigger"
          >
            <LocationSVG />
          </div>
          <p className="textLocation mt-4 font-bold text-center">Delsjöbadet</p>
          <p className="font-bold text-center">416 55 Göteborg</p>
        </div>
      </div>
    </section>
  );
};
