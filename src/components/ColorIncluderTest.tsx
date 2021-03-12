import React from 'react';

interface ColorIncluderTestProps {}

// only used for exporting tailwind colors that is sent as props
// and otherwise not exported due to them being set at runtime
const ColorIncluderTest: React.FC<ColorIncluderTestProps> = ({}) => {
  return (
    <>
      <div className="bg-moss bg-lake bg-melon bg-mound text-mound"></div>
    </>
  );
};

export default ColorIncluderTest;
