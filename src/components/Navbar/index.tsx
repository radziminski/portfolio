import React from 'react';
import { FlexBox } from 'components/Box';
import Logo from 'components/Logo';
import DesktopNav from 'components/Nav/DesktopHomeNav';
import DesktopStickedNav from 'components/Nav/DesktopStickedNav';
import { useToggleStickedNav } from './hooks';
import { LanguageDropdown } from './parts';

const Navbar = () => {
  const showStickedNav = useToggleStickedNav();

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

      {showStickedNav && <DesktopStickedNav />}
    </FlexBox>
  );
};

export default Navbar;
