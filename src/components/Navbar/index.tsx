import React from 'react';
import { FlexBox } from 'components/Box';
import Logo from 'components/Logo';

const Navbar = () => {
  return (
    <FlexBox marginX={220} marginTop={50}>
      <Logo />
    </FlexBox>
  );
};

export default Navbar;
