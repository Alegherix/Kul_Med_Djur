import { dogEvent } from '../../utils/eventData';
import Event from './Event';

const DogEvent = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url('/static/images/plates/dark_green_plate.svg')",
        }}
        className="py-20 bg-cover bg-center"
      ></div>
      <div id="dogs" className="bg-moss -mt-28 px-4 md:pb-10">
        <Event {...dogEvent} />
      </div>

      <div
        style={{
          backgroundImage: "url('/static/images/plates/dark_green_plate.svg')",
        }}
        className="px-4 py-16 bg-cover bg-center bg-moss"
      ></div>
    </section>
  );
};

export default DogEvent;
