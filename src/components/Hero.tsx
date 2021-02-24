import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <>
      <main
        style={{ height: '80vh' }}
        className="rel flex flex-col bg-hero bg-cover bg-center"
      >
        <Navbar />
        <div className="mt-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ textShadow: '1px 4px 7px rgba(0,0,0,0.2)' }}
            className="text-5xl mb-2 font-bold"
          >
            Kul med Djur
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            style={{ textShadow: '1px 4px 7px rgba(0,0,0,0.2)' }}
            className="text-xl"
          >
            Delsjön runt
          </motion.p>
        </div>
      </main>
    </>
  );
};

export default Hero;
