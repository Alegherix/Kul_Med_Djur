import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEventState } from '../hooks/useEvent';

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

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const SignupForm = () => {
  const {
    state: { firstEvent },
  } = useEventState();

  const [fNameFocus, setfNameFocus] = useState(false);
  const { register, handleSubmit, errors } = useForm<FormValues>();

  const submitForm = (e) => {
    console.log('Submitting form');
  };

  const fNameFocusEvent = (e) => {
    if (e.target.value.length === 0) setfNameFocus(false);
  };

  return (
    <section id="interest" className="text-moss px-8 mt-8 pb-4 flex flex-col">
      <h3>Anmälan</h3>
      <p className="text-center text-sm mx-auto mb-4">
        Här kan du anmäla dig och din fyrbenta vän till en eller fler av
        aktiviteterna.
      </p>

      <form
        className="grid grid-cols-2 gap-2 mb-4"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col w-full">
          <label
            className={`pointer-events-none transition duration-150 ease-in transform ${
              fNameFocus
                ? 'translate-y-0 translate-x-0'
                : 'translate-y-7 translate-x-2 scale-95'
            }`}
          >
            Förnamn
          </label>
          <input
            name="lastName"
            ref={register}
            onFocus={() => setfNameFocus(true)}
            onBlur={fNameFocusEvent}
          />
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

      <div className="mb-4">
        <p>Jag har anmält mig till följande aktiviteter:</p>
        {firstEvent !== '' ? <p>{firstEvent}</p> : 'No event yet'}
      </div>

      <button className="bg-moss px-8 py-3 text-melon rounded-3xl mx-auto w-40 mb-4">
        Skicka
      </button>

      <p className="pl-4 mx-auto text-sm text-center">
        När vi har bekräftat din anmälan skickas ett mejl till adressen du
        angett. I mejlet får du mer information om aktiviteterna som du har
        anmält dig till.
      </p>
    </section>
  );
};

export default SignupForm;
