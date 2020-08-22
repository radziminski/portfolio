import React from 'react';
import { FlexBox } from 'components/Box';
import Logo from 'components/Logo';

const Navbar = () => {
  return (
    <FlexBox
      width='100%'
      paddingX={220}
      marginTop={50}
      justifyContent='space-between'
    >
      <Logo /> <Logo />
    </FlexBox>
  );
};

export default Navbar;
