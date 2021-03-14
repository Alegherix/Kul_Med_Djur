import { useState } from 'react';
import { useEventDispatch, useEventState } from '../hooks/useEvent';
import Swal from 'sweetalert2';
import { IoClose } from 'react-icons/io5';
import {
  capitalizeFirstLetter,
  EventPeriod,
  EventType,
} from '../utils/eventUtils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import FlowerSVG from './svg/FlowerSVG';
import FlowerMobileSVG from './svg/FlowerMobileSVG';

export const SucessPopup = () => {
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-center w-12 bg-green-500">
        <svg
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
      </div>

      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className="font-semibold text-green-500 dark:text-green-400">
            Success
          </span>
          <p className="text text-gray-600 dark:text-gray-200">
            Din anmälan har nu registrerats!
          </p>
        </div>
      </div>
    </div>
  );
};

export const ErrorPopup = () => {
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-center w-12 bg-red-500">
        <svg
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
        </svg>
      </div>

      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className="font-semibold text-red-500 dark:text-red-400 tracking-wider">
            Error
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-200 ">
            Någonting gick fel, vänligen försök igen.
          </p>
        </div>
      </div>
    </div>
  );
};

interface IActivites {
  text: string;
  period: EventPeriod;
  type: EventType;
}

// Used for rendering a single acitvity that the user has subscribed to.
const Activites: React.FC<IActivites> = ({ text, period, type }) => {
  const { dispatch } = useEventDispatch();

  const removeEvent = () => {
    dispatch({ period, type, summary: '' });
  };

  return (
    <div className="p-2 rounded-full bg-white shadow-md text-moss  inline-block mr-2 my-2">
      <div className="flex items-center">
        <p className="ml-2 mr-4">{text}</p>
        <IoClose
          onClick={removeEvent}
          className="flex-1 cursor-pointer"
          color="#1a431f"
          size="18px"
        />
      </div>
    </div>
  );
};

// Used for rendering all activites that the user has subscribed to.
const SubscribedEvents = () => {
  const {
    state: { first, second, third, fourth },
  } = useEventState();

  return (
    <div>
      {first.type !== '' && (
        <Activites text={first.summary} period="first" type={first.type} />
      )}
      {second.type !== '' && (
        <Activites text={second.summary} period="second" type={second.type} />
      )}
      {third.type !== '' && (
        <Activites text={third.summary} period="third" type={third.type} />
      )}
      {fourth.type !== '' && (
        <Activites text={fourth.summary} period="fourth" type={fourth.type} />
      )}
    </div>
  );
};

const SignupForm = () => {
  const { state } = useEventState();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [mail, setMail] = useState<string>('');

  // parseInt refuses to parse 0 and update state, so no <number|undefined>.
  const [phoneNumber, setPhoneNumber] = useState(undefined);

  // Fetches data from query string,
  const router = useRouter();
  const {
    name: queryFirstName,
    lastname: queryLastName,
    email: queryEmail,
    phone: queryPhone,
  } = router.query;

  // Sets the different name states when query is loaded, otherwise useEffect runs first
  // Needs to have useEffect to handle both personalized and non personalized usage the same way
  useEffect(() => {
    if (!router.isReady) return;

    setFirstName(
      queryFirstName ? capitalizeFirstLetter(queryFirstName as string) : ''
    );
    setLastName(
      queryLastName ? capitalizeFirstLetter(queryLastName as string) : ''
    );
    setMail(queryEmail ? (queryEmail as string) : '');

    let number;
    try {
      number = queryPhone ?? parseInt(queryPhone as string);
    } catch (err) {}
    if (number) setPhoneNumber(number);
  }, [router.query]);

  // Resets form when submiting
  const submitFromBtn = () => {
    Swal.fire(
      `Strålande ${firstName}!`,
      'Din anmälan är nu registrerad',
      'success'
    );
    setFirstName('');
    setLastName('');
    setMail('');
    setPhoneNumber(undefined);
  };

  // Used for deciding how we should render if events are subscribed to or not
  const hasSubscribedForEvent = (): boolean => {
    return Object.keys(state).some((key) => state[key].type !== '');
  };

  // Used for deciding if user should be able to submit form or not
  const hasEnteredSufficentDetails = (): boolean =>
    firstName && lastName && (mail || phoneNumber) && hasSubscribedForEvent();

  return (
    <section id="interest" className="text-moss px-8 mt-8 pb-4 flex flex-col">
      <h3>Anmälan</h3>
      <p className="text-center mx-auto mb-4 descText md:mb-8 md:w-96">
        Här kan du anmäla dig och din fyrbenta vän till en eller fler av
        aktiviteterna.
      </p>

      <div className="xl:flex mx-auto gap-8 w-full max-w-5xl xl:gap-0">
        <form className="grid grid-cols-2 gap-2 mb-4 w-full max-w-2xl mx-auto otherText xl:mr-8">
          <div className="flex flex-col w-full">
            <label>Förnamn</label>
            <input
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Efternamn</label>
            <input
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label>E-postadress</label>
            <input
              name="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Mobilnummer</label>
            <input
              type="number"
              name="phone"
              min="0"
              value={phoneNumber || ''}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
        </form>
        <div className="mb-4 w-full max-w-2xl mx-auto">
          {!hasSubscribedForEvent() ? (
            <p>Du har inte anmält dig till något event ännu.</p>
          ) : (
            <>
              <p>Du har anmält mig till följande aktiviteter:</p>
              <SubscribedEvents />
            </>
          )}
        </div>
      </div>

      <button
        onClick={submitFromBtn}
        className="bg-moss px-8 py-3 text-melon rounded-3xl 
      mx-auto w-40 mb-4 md:py-5 md:px-8 md:rounded-full md:text-xl disabled:opacity-50"
        disabled={!hasEnteredSufficentDetails()}
      >
        Skicka
      </button>

      <div className="flex max-w-md mx-auto">
        <p className="text-sm md:text-base text-center md:pb-8 pr-8">
          När vi har bekräftat din anmälan skickas ett mejl till adressen du
          angett. I mejlet får du mer information om aktiviteterna som du har
          anmält dig till.
        </p>
        <div className="relative hidden md:flex">
          <FlowerSVG />
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
