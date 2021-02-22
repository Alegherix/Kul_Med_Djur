import Navbar from '../src/components/Navbar';
import { SucessPopup, ErrorPopup } from '../src/components/SignupForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-500">
      <Navbar />
      <p className="text-white">Hello World</p>
      <SucessPopup />
      <ErrorPopup />
    </main>
  );
}
