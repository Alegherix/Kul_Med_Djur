import EventProvider from '../src/hooks/useEvent';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <EventProvider>
      <Component {...pageProps} />
    </EventProvider>
  );
}

export default MyApp;
