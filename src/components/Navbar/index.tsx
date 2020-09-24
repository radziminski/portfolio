import React from 'react';
import { FlexBox } from 'components/Box';
import Logo from 'components/Logo';
import DesktopNav from 'components/Nav/DesktopHomeNav';
import Dropdown from 'components/Dropdown';

export const LanguageDropdown: React.FC = () => {
  return (
    <Dropdown
      options={['English', 'Polski']}
      value='English'
      onChange={() => {
        console.log('will change language');
      }}
    />
  );
};

const Navbar = () => {
  return (
    <FlexBox
      width='100%'
      paddingX={220}
      justifyContent='space-between'
      alignItems='center'
      position='absolute'
      top={50}
      left={0}
    >
      <Logo />
      <DesktopNav language='EN' />
      <LanguageDropdown />
    </FlexBox>
  );
};

export default Navbar;
