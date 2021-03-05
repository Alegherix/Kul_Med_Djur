import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useEventDispatch, useEventState } from '../hooks/useEvent';
import { EventType } from '../utils/eventUtils';

const items = [0];

export interface IEventDescription {
  time: string;
  text: string;
}

const Event = () => {
  return (
    <AnimateSharedLayout>
      <motion.div
        style={{ maxWidth: '385px' }}
        layout
        initial={{ borderRadius: 10 }}
        className="bg-grass w-full flex flex-col gap-4  mx-auto"
      >
        {items.map((item) => (
          <Card key={item} />
        ))}
      </motion.div>
    </AnimateSharedLayout>
  );
};

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const textContent =
    'Testa på agility med Anna Andersson, ta med din fyrbenta kompis och öva tillsammans eller kom ensam och lär dig mer om hur agility fungerar.';

  return (
    <motion.div layout initial={{ borderRadius: 10 }}>
      <Overview
        toggleOpen={toggleOpen}
        time="10.00"
        text="Testa på agility med Anna Andersson"
        color="moss"
        isOpen={isOpen}
      />
      <AnimatePresence>
        {isOpen && <Content textContent={textContent} />}
      </AnimatePresence>
    </motion.div>
  );
};

const Overview = ({ toggleOpen, time, text, color, isOpen }) => {
  return (
    <motion.div layout className={`flex p-2 items-center text-${color}`}>
      <div className="font-bold mr-2">{time}</div>
      <div
        style={{ width: '1px' }}
        className="h-6 rounded-lg bg-moss mx-2"
      ></div>
      <div className="">{text}</div>
      <FaChevronDown
        onClick={toggleOpen}
        className={`cursor-pointer flex-grow transition transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </motion.div>
  );
};

interface IContent {
  textContent: string;
  period: string;
  type: EventType;
}

const Content: React.FC<IContent> = ({ textContent, type, period }) => {
  const { dispatch } = useEventDispatch();
  const { state } = useEventState();

  const toggleSubscribed = () => {
    dispatch({ period: 'first', type: 'dog' });
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full p-2 text-moss"
    >
      <div
        style={{ height: '1px' }}
        className="w-full bg-moss rounded-md mb-2"
      />
      <div>
        <p>Anmäld? {JSON.stringify(state)}</p>
      </div>
      <div className="row w-full rounded-md text-moss mb-6">{textContent}</div>
      <div className="row w-full flex gap-2 justify-end">
        <p>Jag anmäler mig</p>
        <motion.div
          layout
          onClick={toggleSubscribed}
          className="w-16 h-8 p-1 bg-gray-700 rounded-md flex flex-col cursor-pointer"
          style={{}}
        >
          {state.first.type !== 'dog' ? (
            <motion.div
              layout
              className="h-full w-6 bg-red-400 rounded-sm"
            ></motion.div>
          ) : (
            <motion.div
              layout
              className="h-full w-6 bg-green-400 self-end rounded-sm"
            ></motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const PlateTest = () => {
  return (
    <section className="">
      <div
        style={{ backgroundImage: "url('/dark_green_plate.svg')" }}
        className="text-melon px-4 py-16 -mt-6 bg-cover bg-center"
      ></div>
      <div className="bg-moss -mt-3 px-4">
        <Event />
      </div>
      <div
        style={{ backgroundImage: "url('/dark_bottom.svg')" }}
        className="text-melon px-4 py-16 bg-cover bg-center"
      ></div>
    </section>
  );
};

export default PlateTest;
