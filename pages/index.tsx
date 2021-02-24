import About from '../src/components/About';
import ColorIncluderTest from '../src/components/ColorIncluderTest';
import {
  CatContainer,
  DogContainer,
  HorseContainer,
} from '../src/components/Event';
import Hero from '../src/components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <DogContainer />
      <CatContainer />
      <HorseContainer />
      <ColorIncluderTest />
    </main>
  );
}
