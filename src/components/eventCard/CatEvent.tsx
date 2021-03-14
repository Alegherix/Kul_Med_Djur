import React from 'react';
import { catEvent } from '../../utils/eventData';
import Event from './Event';

// testImplementationOf an Event
const CatEvent = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url('/static/images/plates/light_blue_plate.svg')",
        }}
        className="py-20 bg-cover bg-center -mt-11"
      ></div>

      <div id="cats" className="bg-ice -mt-28 px-4 pb-10">
        <Event {...catEvent} />
      </div>

      <div
        style={{
          backgroundImage: "url('/static/images/plates/light_blue_plate.svg')",
        }}
        className="-mt-6 px-4 py-16 bg-cover bg-center"
      ></div>
    </section>
  );
};

export default CatEvent;
