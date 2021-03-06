import { motion } from 'framer-motion';
import { useEventDispatch, useEventState } from '../../hooks/useEvent';
import { EventPeriod, EventType } from '../../utils/eventUtils';

interface IContent {
  textContent: string;
  period: EventPeriod;
  type: EventType;
}

const Content: React.FC<IContent> = ({ textContent, type, period }) => {
  const { dispatch } = useEventDispatch();
  const { state } = useEventState();

  const toggleSubscribed = () => {
    dispatch({ period, type });
  };

  const findCorrectPeriod = () => {
    if (period === 'first') return state.first;
    if (period === 'second') return state.second;
    if (period === 'third') return state.third;
    if (period === 'fourth') return state.fourth;
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
      {/* <div>
        <p>Anmäld? {JSON.stringify(state)}</p>
      </div> */}
      <div className="row w-full rounded-md text-moss mb-6">{textContent}</div>
      <div className="row w-full flex gap-2 justify-end">
        <p>Jag anmäler mig</p>
        <motion.div
          layout
          onClick={toggleSubscribed}
          className="w-16 h-8 p-1 bg-gray-700 rounded-md flex flex-col cursor-pointer"
          style={{}}
        >
          {findCorrectPeriod().type !== type ? (
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

export default Content;
