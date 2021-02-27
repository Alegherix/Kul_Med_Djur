import About from '../src/components/About';
import ColorIncluderTest from '../src/components/ColorIncluderTest';
import {
  CatContainer,
  DogContainer,
  HorseContainer,
  Collaboration,
  FindUs,
} from '../src/components/Event';
import HeroSVG from '../src/components/svg/HeroSVG';
import Hero from '../src/components/Hero';
import TestHero from '../src/components/TestHero';

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <TestHero />
      <About />
      <DogContainer />
      <CatContainer />
      <HorseContainer />
      <Collaboration />
      <FindUs />

      <ColorIncluderTest />
      {/* <HeroSVG /> */}
    </main>
  );
}
