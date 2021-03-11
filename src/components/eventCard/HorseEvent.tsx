import React from 'react';
import { horseEvent } from '../../utils/eventData';
import Event from './Event';

interface HorseEventProps {}

const HorseEvent: React.FC<HorseEventProps> = ({}) => {
  return (
    <section>
      <div
        style={{ backgroundImage: "url('/light_brown_plate.svg')" }}
        className="py-20 bg-cover bg-center -mt-11"
      ></div>

      <div className="bg-dirt -mt-28 px-4">
        <Event {...horseEvent} />
      </div>

      <div
        style={{ backgroundImage: "url('/light_brown_plate.svg')" }}
        className="-mt-6 px-4 py-16 bg-cover bg-center"
      ></div>
    </section>
  );
};

export default HorseEvent;
