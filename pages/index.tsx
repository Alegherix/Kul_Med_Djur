import React from 'react';
import About from '../src/components/About';
import Collaboration from '../src/components/Collaborations';
import CatEvent from '../src/components/eventCard/CatEvent';
import DogEvent from '../src/components/eventCard/DogEvent';
import HorseEvent from '../src/components/eventCard/HorseEvent';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Location from '../src/components/Location';
import Meta from '../src/components/Meta';
import SignupForm from '../src/components/SignupForm';

export default function Home() {
  return (
    <>
      <Meta />
      <Hero />
      <About />
      <DogEvent />
      <CatEvent />
      <HorseEvent />
      <Collaboration />
      <Location />
      <SignupForm />
      <Footer />
    </>
  );
}
