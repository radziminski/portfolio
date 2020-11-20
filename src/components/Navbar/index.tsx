import React from 'react';
import { FlexBox } from 'components/Box';
import Logo from 'components/Logo';
import DesktopNav from 'components/Nav/DesktopHomeNav';
import DesktopStickedNav from 'components/Nav/DesktopStickedNav';
import { useToggleStickedNav } from './hooks';
import { LanguageDropdown } from './parts';
import { getValueForDevice } from 'styles/breakpoints';

const Navbar = () => {
  const showStickedNav = useToggleStickedNav();

  // const paddingHorizontal;

  const paddingX = getValueForDevice({
    desktopLarge: 220,
    desktopMedium: 200,
    desktopSmall: 160,
    laptopLarge: 140,
    laptopMedium: 130,
    laptopSmall: 60
  });

  const top = getValueForDevice({
    desktopLarge: 50,
    laptopLarge: 40,
    laptopMedium: 30
  });

  return (
    <FlexBox
      width='100%'
      paddingX={paddingX}
      justifyContent='space-between'
      alignItems='center'
      position='absolute'
      top={top}
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
