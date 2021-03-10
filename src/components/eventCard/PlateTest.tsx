import React from 'react';
import { dogEvent } from '../../utils/eventData';
import Event from './Event';

// testImplementationOf an Event
const DogEvent = () => {
  return (
    <section className="">
      <div
        style={{ backgroundImage: "url('/dark_green_plate.svg')" }}
        className="py-20 bg-cover bg-center"
      ></div>

      <div className="bg-moss -mt-28 px-4">
        <Event {...dogEvent} />
      </div>

      <div
        style={{ backgroundImage: "url('/dark_bottom.svg')" }}
        className="px-4 py-16 bg-cover bg-center bg-moss"
      ></div>
    </section>
  );
};

export default DogEvent;
