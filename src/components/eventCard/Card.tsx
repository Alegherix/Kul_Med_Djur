import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { IFullEventDetails } from '../../utils/eventData';
import Content from './Content';
import Overview from './Overview';

const Card: React.FC<IFullEventDetails> = ({
  time,
  text,
  primaryColor,
  textContent,
  period,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div layout initial={{ borderRadius: 10 }}>
      <Overview
        toggleOpen={toggleOpen}
        time={time}
        text={text}
        color={primaryColor}
        isOpen={isOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <Content textContent={textContent} period={period} type={type} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
