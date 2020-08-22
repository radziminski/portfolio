import React from 'react';
import { FlexBox } from 'components/Box';
import Logo from 'components/Logo';

const Navbar = () => {
  return (
    <FlexBox
      width='100%'
      paddingX={220}
      justifyContent='space-between'
      position='absolute'
      top={50}
      left={0}
    >
      <Logo /> <FlexBox />
    </FlexBox>
  );
};

export default Navbar;
