import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { IEventHeading } from '../../utils/eventData';
import { EventPeriod, EventType } from '../../utils/eventUtils';
import Card from './Card';

const items = [0];

// time,text,color,textContent, period, type

interface IFullEvent {
  time: string;
  text: string;
  color: string;
  textContent: string;
  period: EventPeriod;
  type: EventType;
}

const Event: React.FC<IEventHeading> = ({
  header,
  description,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <AnimateSharedLayout>
      <div className={`flex justify-center flex-col text-${secondaryColor}`}>
        <h3>{header}</h3>
        {description.map((d) => (
          <p key={d} className="text-sm text-center">
            {d}
          </p>
        ))}
      </div>
      {/* <motion.div
        style={{ maxWidth: '385px' }}
        layout
        initial={{ borderRadius: 10 }}
        className="bg-grass w-full flex flex-col gap-4  mx-auto"
      >
        {items.map((item) => (
          <Card key={item} />
        ))}
      </motion.div> */}
    </AnimateSharedLayout>
  );
};

export default Event;
