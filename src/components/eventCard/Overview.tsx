import { motion } from 'framer-motion';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Overview = ({ toggleOpen, time, text, color, isOpen }) => {
  return (
    <motion.div layout className={`flex p-2 items-center text-${color}`}>
      <div className="font-bold mr-2">{time}</div>
      <div
        style={{ width: '1px' }}
        className="h-6 rounded-lg bg-moss mx-2"
      ></div>
      <div className="">{text}</div>
      <FaChevronDown
        onClick={toggleOpen}
        className={`cursor-pointer flex-grow transition transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </motion.div>
  );
};

export default Overview;
