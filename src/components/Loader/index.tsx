import { FlexBox } from 'components/Box';
import React from 'react';
import { Dot } from './parts';

const DEFAULT_WIDTH = 72;

const Loader: React.FC<{ width?: number }> = ({ width }) => {
  const dotSize = width ? width / 9 : DEFAULT_WIDTH / 9;
  return (
    <FlexBox
      justifyContent='space-between'
      alignItems='center'
      width={`${width || DEFAULT_WIDTH}px`}
    >
      <Dot size={dotSize} />
      <Dot size={dotSize} />
      <Dot size={dotSize} />
    </FlexBox>
  );
};

export default Loader;
