import { motion } from 'framer-motion';
import { useEventDispatch, useEventState } from '../../hooks/useEvent';
import { ColorScheme } from '../../utils/eventData';
import { EventPeriod, EventType } from '../../utils/eventUtils';

interface IContent {
  textContent: string;
  period: EventPeriod;
  type: EventType;
  color: ColorScheme;
}

const Content: React.FC<IContent> = ({
  textContent,
  type,
  period,
  color: { tertiaryColor },
}) => {
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      layout
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="w-full px-2 pb-2"
    >
      <motion.div
        style={{ height: '1px' }}
        className={`w-full bg-${tertiaryColor} rounded-md mb-2`}
      />
      <motion.div
        variants={item}
        className={`row w-full rounded-md text-${tertiaryColor} mb-6`}
      >
        {textContent}
      </motion.div>
      <motion.div variants={item} className="row w-full flex gap-2 justify-end">
        <motion.p variants={item} className={`text-${tertiaryColor}`}>
          Jag anmäler mig
        </motion.p>
        <motion.div
          variants={item}
          layout
          onClick={toggleSubscribed}
          className="w-16 h-8 p-1 bg-gray-700 rounded-md flex flex-col cursor-pointer"
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
      </motion.div>
    </motion.div>
  );
};

export default Content;
