import { motion } from 'framer-motion';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Overview = ({ toggleOpen, time, text, color, isOpen }) => {
  return (
    <motion.div layout className={`flex p-2 items-center text-${color}`}>
      <div className="font-bold">{time}</div>
      <div
        style={{ width: '1px' }}
        className="h-4 rounded-lg bg-moss mx-2"
      ></div>
      <div className="w-full">{text}</div>
      <FaChevronDown
        onClick={toggleOpen}
        className={`mr-2 cursor-pointer flex-grow transition transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </motion.div>
  );
};

export default Overview;
