import { motion } from 'framer-motion';
import { useEventDispatch, useEventState } from '../../hooks/useEvent';
import { ColorScheme } from '../../utils/eventData';
import { EventPeriod, EventType } from '../../utils/eventUtils';

interface IContent {
  textContent: string;
  period: EventPeriod;
  type: EventType;
  color: ColorScheme;
  summary: string;
}

const Content: React.FC<IContent> = ({
  textContent,
  type,
  period,
  color: { tertiaryColor },
  summary,
}) => {
  const { dispatch } = useEventDispatch();
  const { state } = useEventState();

  const toggleSubscribed = () => {
    dispatch({ period, type, summary });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      style={{ height: 'calc(100% - 44px)' }}
      layout
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="w-full px-2 pb-2"
    >
      <motion.div
        style={{ height: '1px' }}
        className={`w-full bg-${tertiaryColor} rounded-md mb-2`}
      />

      <motion.div className="flex flex-col h-full pb-2">
        <motion.div
          variants={item}
          className={`row w-full rounded-md mb-6 text-${tertiaryColor} flex-1`}
        >
          {textContent}
        </motion.div>
        <motion.div
          variants={item}
          className="row w-full flex items-center justify-end "
        >
          <motion.p variants={item} className={`text-${tertiaryColor} mr-4`}>
            Jag anmäler mig
          </motion.p>
          <motion.div
            variants={item}
            layout
            onClick={toggleSubscribed}
            className="w-16 h-8 p-1 bg-gray-700 rounded-md flex flex-col cursor-pointer"
          >
            {state[period].type !== type ? (
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
    </motion.div>
  );
};

export default Content;
