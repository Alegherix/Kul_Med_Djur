import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import useMatchMedia from '../../hooks/useMatchMedia';
import { IFullEventDetails } from '../../utils/eventData';
import Content from './Content';
import Overview from './Overview';

const Card: React.FC<IFullEventDetails> = ({
  time,
  text,
  colorScheme,
  textContent,
  period,
  type,
  summary,
}) => {
  const { secondaryColor, tertiaryColor } = colorScheme;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const tablet = useMatchMedia('(min-width: 768px)');

  return (
    <motion.div
      layout
      initial={{ borderRadius: 10 }}
      className={`bg-${secondaryColor} px-2 md:p-4`}
    >
      <Overview
        toggleOpen={toggleOpen}
        time={time}
        text={text}
        color={tertiaryColor}
        isOpen={isOpen}
      />
      <AnimatePresence>
        {(tablet || isOpen) && (
          <Content
            textContent={textContent}
            period={period}
            summary={summary}
            type={type}
            color={colorScheme}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
