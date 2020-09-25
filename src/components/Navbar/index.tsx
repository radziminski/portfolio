import React, { useEffect, useState } from 'react';
import { FlexBox } from 'components/Box';
import Logo from 'components/Logo';
import DesktopNav from 'components/Nav/DesktopHomeNav';
import Dropdown from 'components/Dropdown';
import DesktopStickedNav from 'components/Nav/DesktopStickedNav';

const SHOW_STICKED_NAV_OFFSET = window.innerHeight - 300;

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
  const [showStickedNav, setShowStickedNav] = useState(false);

  useEffect(() => {
    // TODO: Probably can be better with intersection observer
    const checkIfShowStickedNav = () => {
      if (window.scrollY > SHOW_STICKED_NAV_OFFSET && !showStickedNav)
        setShowStickedNav(true);
      else if (window.scrollY <= SHOW_STICKED_NAV_OFFSET && showStickedNav)
        setShowStickedNav(false);
    };

    window.addEventListener('scroll', checkIfShowStickedNav);

    return () => window.removeEventListener('scroll', checkIfShowStickedNav);
  }, [showStickedNav, setShowStickedNav]);

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
