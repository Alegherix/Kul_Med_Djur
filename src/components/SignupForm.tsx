import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { useEventDispatch, useEventState } from '../hooks/useEvent';
import {
  capitalizeFirstLetter,
  EventPeriod,
  EventType,
} from '../utils/eventUtils';
import FlowerSVG from './svg/FlowerSVG';
import { motion, AnimateSharedLayout } from 'framer-motion';

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
    <motion.div
      layout
      exit={{ opacity: 0 }}
      className="p-2 rounded-full bg-white shadow-md text-moss  inline-block mr-2 my-2"
    >
      <motion.div className="flex items-center">
        <p className="ml-2 mr-4">{text}</p>
        <IoClose
          onClick={removeEvent}
          className="flex-1 cursor-pointer"
          color="#1a431f"
          size="18px"
        />
      </motion.div>
    </motion.div>
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
    mail: queryEmail,
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
      if (number) setPhoneNumber(number);
    } catch (err) {}
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
    <AnimateSharedLayout>
      <motion.section
        id="interest"
        className="text-moss px-8 mt-8 pb-4 flex flex-col"
      >
        <motion.h3>Anmälan</motion.h3>
        <motion.p className="text-center mx-auto mb-4 descText md:mb-8 md:w-96">
          Här kan du anmäla dig och din fyrbenta vän till en eller fler av
          aktiviteterna.
        </motion.p>

        <motion.div
          layout
          className="xl:flex mx-auto gap-8 w-full max-w-5xl xl:gap-0"
        >
          <motion.form
            layout
            className="grid grid-cols-2 gap-2 mb-4 w-full max-w-2xl mx-auto otherText xl:mr-8"
          >
            <div className="flex flex-col w-full">
              <label htmlFor="firstName">Förnamn</label>
              <input
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="lastName">Efternamn</label>
              <input
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label htmlFor="email">E-postadress</label>
              <input
                name="email"
                id="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Mobilnummer</label>
              <input
                id="phone"
                type="number"
                name="phone"
                min="0"
                value={phoneNumber || ''}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
          </motion.form>
          <motion.div layout className="mb-4 w-full max-w-2xl mx-auto">
            {!hasSubscribedForEvent() ? (
              <motion.p layout>
                Du har inte anmält dig till något event ännu.
              </motion.p>
            ) : (
              <>
                <motion.p layout>
                  Du har anmält mig till följande aktiviteter:
                </motion.p>
                <SubscribedEvents />
              </>
            )}
          </motion.div>
        </motion.div>

        <motion.button
          layout
          onClick={submitFromBtn}
          className="bg-moss px-8 py-3 text-melon rounded-3xl 
      mx-auto w-40 mb-4 md:py-5 md:px-8 md:rounded-full md:text-xl disabled:opacity-50"
          disabled={!hasEnteredSufficentDetails()}
        >
          Skicka
        </motion.button>

        <motion.div layout className="flex max-w-md mx-auto">
          <motion.p
            layout
            className="text-sm md:text-base text-center md:pb-8 pr-8"
          >
            När vi har bekräftat din anmälan skickas ett mejl till adressen du
            angett. I mejlet får du mer information om aktiviteterna som du har
            anmält dig till.
          </motion.p>
          <div className="relative hidden md:flex">
            <FlowerSVG />
          </div>
        </motion.div>
      </motion.section>
    </AnimateSharedLayout>
  );
};

export default SignupForm;
