import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { IEvent } from '../../utils/eventData';
import Card from './Card';

const Event: React.FC<IEvent> = ({
  heading: {
    description,
    header,
    colorScheme: { primaryColor },
  },
  details,
  SVG,
  MobileSVG,
  reverse,
}) => {
  return (
    <AnimateSharedLayout>
      <div
        className={`flex justify-center relative max-w-5xl md:h-40 md:mx-auto xl:h-56 ${
          reverse && 'flex-row-reverse'
        }`}
      >
        <div
          className={`flex justify-center flex-col text-${primaryColor} mb-3 w-full md:pb-5 ${
            reverse && 'xl:pl-8'
          }`}
        >
          <h3 className="xl:text-left">{header}</h3>
          {description.map((d) => (
            <p
              key={d}
              className="text-center text-sm xl:text-left md:text-base lg:text-lg"
            >
              {d}
            </p>
          ))}
        </div>
        <div
          className={`absolute md:hidden -top-28 ${
            reverse ? '-left-4' : '-right-4'
          }`}
        >
          <MobileSVG />
        </div>
        <div className="w-full -my-28 absolute md:relative hidden md:flex">
          <SVG />
        </div>
      </div>

      <motion.div
        layout
        initial={{ borderRadius: 10 }}
        className={`max-w-sm w-full mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:max-w-5xl xl:gap-10`}
      >
        {details.map((item) => (
          <Card key={item.text} {...item} />
        ))}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Event;
