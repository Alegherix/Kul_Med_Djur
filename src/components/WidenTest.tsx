import React from 'react';
import Image from 'next/image';

interface WidenTestProps {}

const WidenTest: React.FC<WidenTestProps> = ({}) => {
  return (
    <>
      <div className="relative">
        <img
          style={{ width: 1920, height: 600, zIndex: -1 }}
          className="absolute top-0 left-0"
          src="/light_blue_plate.svg"
        />
        <div className="h-96">
          <p>hi</p>
        </div>
      </div>
    </>
  );
};

export default WidenTest;
