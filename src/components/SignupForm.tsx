import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEventDispatch, useEventState } from '../hooks/useEvent';
import Swal from 'sweetalert2';
import { IoClose } from 'react-icons/io5';
import { EventPeriod, EventType } from '../utils/eventUtils';

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

// Used for showing activites that user is signed up for.
const Activites: React.FC<IActivites> = ({ text, period, type }) => {
  const { dispatch } = useEventDispatch();

  const removeEvent = () => {
    dispatch({ period, type, summary: '' });
  };

  return (
    <div className="p-2 rounded-full bg-white shadow-md text-moss  inline-block m-2">
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

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const SignupForm = () => {
  const {
    state: { first, second, third, fourth },
  } = useEventState();
  const { register, handleSubmit, errors, reset } = useForm<FormValues>();

  const [submit, setSubmit] = useState(false);

  const submitFromBtn = () => {
    setSubmit(true);
    document.querySelector<HTMLFormElement>('form')?.reset();
    Swal.fire('Strålande!', 'Din anmälan är nu registrerad', 'success');
  };

  const SubscribedEvents = () => {
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

  const hasSubscribedForEvent = (): boolean => {
    return (
      first.type !== '' ||
      second.type !== '' ||
      third.type !== '' ||
      fourth.type !== ''
    );
  };

  return (
    <section id="interest" className="text-moss px-8 mt-8 pb-4 flex flex-col">
      <h3>Anmälan</h3>
      <p className="text-center mx-auto mb-4 descText md:mb-8 md:w-96">
        Här kan du anmäla dig och din fyrbenta vän till en eller fler av
        aktiviteterna.
      </p>

      <div className="xl:flex mx-auto gap-8 w-full max-w-5xl">
        <form className="grid grid-cols-2 gap-2 mb-4 w-full max-w-2xl mx-auto otherText">
          <div className="flex flex-col w-full">
            <label>Förnamn</label>
            <input name="lastName" ref={register} />
          </div>

          <div className="flex flex-col w-full">
            <label>Efternamn</label>
            <input name="lastName" ref={register} />
          </div>

          <div className="col-span-2 flex flex-col">
            <label>E-postadress</label>
            <input name="email" ref={register} />
          </div>
          <div className="flex flex-col">
            <label>Mobilnummer</label>
            <input name="cellphone" ref={register} />
          </div>
        </form>
        <div className="mb-4 w-full max-w-2xl mx-auto">
          <p>Jag har anmält mig till följande aktiviteter:</p>
          {!hasSubscribedForEvent() ? (
            <p>No event yet</p>
          ) : (
            <SubscribedEvents />
          )}
        </div>
      </div>

      <button
        onClick={submitFromBtn}
        className="bg-moss px-8 py-3 text-melon rounded-3xl 
      mx-auto w-40 mb-4 md:py-5 md:px-8 md:rounded-full md:text-xl disabled:opacity-50"
        // TODO - Byt ut mot att formuläret ska vara ifyllt och att minst ett event finns med.
        disabled={!hasSubscribedForEvent()}
      >
        Skicka
      </button>

      <p className="pl-4 mx-auto text-center max-w-md otherText md:pb-8">
        När vi har bekräftat din anmälan skickas ett mejl till adressen du
        angett. I mejlet får du mer information om aktiviteterna som du har
        anmält dig till.
      </p>
    </section>
  );
};

export default SignupForm;
