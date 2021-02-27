import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import HeroSVG from './svg/HeroSVG';
import Image from 'next/image';
import Navbar from './Navbar';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

interface TestHeroProps {}

const TestHero: React.FC<TestHeroProps> = ({}) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 6], [0, -1], {
    clamp: false,
  });

  useEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, []);

  return (
    <main ref={ref} className="relative " style={{ height: '80vh' }}>
      <HeroSVG refHook={{ ref }} />
      <Navbar />
      <motion.div style={{ y }} className="mt-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            textShadow: '1px 4px 7px rgba(0,0,0,0.2)',
          }}
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
      </motion.div>
    </main>
  );
};

export default TestHero;
