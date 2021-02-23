import About from '../src/components/About';
import Event, { IEvent } from '../src/components/Event';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import { SucessPopup, ErrorPopup } from '../src/components/SignupForm';
import { EventContainer } from '../src/components/Event';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <EventContainer />
    </main>
  );
}
