import React from 'react';
import { motion } from 'framer-motion';

export default function RightCloudSVG() {
  return (
    <motion.svg
      initial={{ x: 0, opacity: 1 }}
      animate={{ x: '20%', opacity: 0, transition: { duration: 1 } }}
      viewBox="0 0 50.23 28.18"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Lager 1"
      className="w-64 top-[-55%]  absolute right-[8%] md:w-80 md:right-[calc(60%-320px)] lg:md:right-[calc(50%-320px)] lg:w-96"
    >
      <path
        d="M8.23 28.05a14.25 14.25 0 01-5.21-.79c-1.62-.68-3-2.13-3-3.78 0-1.83 1.83-3.33 3.78-3.62a8.69 8.69 0 015.59 1.39c-3.34-2.56-4.58-7.46-2.25-10.84s8.27-4.13 11.14-1.11a5 5 0 011.71-7.21 5.92 5.92 0 017.63 2.09c1.66-1.62 3.43-3.29 5.74-4s5.27.1 6.15 2.19c1.27 3-2.24 6.42-.85 9.36a6.35 6.35 0 017.23.66c1.8 1.76 1.54 5.11-.75 6.27 1.19-.6 3.29.75 4 1.52a4 4 0 01.93 4c-1.1 3.61-5.28 3.8-8.66 4a62.46 62.46 0 01-7.24-.36 106 106 0 00-11 .16q-7.48.23-14.94.07z"
        fill="#fff"
      />
    </motion.svg>
  );
}
