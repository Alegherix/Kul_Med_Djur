import dynamic from 'next/dynamic';
import CatEvent from '../src/components/eventCard/CatEvent';
import DogEvent from '../src/components/eventCard/DogEvent';
import HorseEvent from '../src/components/eventCard/HorseEvent';
import Meta from '../src/components/Meta';
import Location from '../src/components/Location';

const SignupForm = dynamic(() => import('../src/components/SignupForm'));
const About = dynamic(() => import('../src/components/About'));
const Hero = dynamic(() => import('../src/components/Hero'));
const Footer = dynamic(() => import('../src/components/Footer'));
const Collaboration = dynamic(() => import('../src/components/Collaborations'));

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
