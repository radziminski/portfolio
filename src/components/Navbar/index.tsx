import React, { useEffect, useState } from 'react';
import { FlexBox } from 'components/Box';
import Logo from 'components/Logo';
import DesktopNav from 'components/Nav/DesktopHomeNav';
import DesktopStickedNav from 'components/Nav/DesktopStickedNav';
import { useToggleStickedNav } from './hooks';
import { LanguageDropdown } from './parts';
import BREAKPOINTS, { getValueForDevice } from 'styles/breakpoints';
import MobileNavIcon from 'components/Nav/MobileNavIcon';
import { useTheme } from 'styled-components';

const MOBILE_NAV_BREAKPOINT = BREAKPOINTS.tabLarge;

const DEFAULT_PADDING_X = getValueForDevice({
  desktopLarge: 220,
  desktopMedium: 200,
  desktopSmall: 160,
  laptopLarge: 140,
  laptopMedium: 130,
  laptopSmall: 60
});
const DEFAULT_PADDING_Y = getValueForDevice({
  desktopLarge: 0,
  laptopMedium: 0,
  laptopSmall: 0,
  tabLarge: 34
});

const DEFAULT_TOP = getValueForDevice({
  desktopLarge: 50,
  laptopLarge: 40,
  laptopMedium: 30,
  tabLarge: 0
});

const IS_MOBILE = window.innerWidth <= MOBILE_NAV_BREAKPOINT;
console.log(IS_MOBILE, window.innerWidth, MOBILE_NAV_BREAKPOINT);

const Navbar = () => {
  const showStickedNav = useToggleStickedNav();
  const theme: any = useTheme();
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);
  console.log(theme);

  const onScroll = () => {
    if (window.scrollY > 20) {
      if (isScrollAtTop) setIsScrollAtTop(false);
    } else {
      if (!isScrollAtTop) setIsScrollAtTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isScrollAtTop]);

  const toggleMobileNav = () => setIsMobileNavOpened((prev) => !prev);

  return (
    <FlexBox
      width='100%'
      paddingX={DEFAULT_PADDING_X}
      paddingY={isScrollAtTop ? DEFAULT_PADDING_Y : DEFAULT_PADDING_Y - 8}
      justifyContent='space-between'
      alignItems='center'
      position={!IS_MOBILE ? 'absolute' : 'fixed'}
      top={DEFAULT_TOP}
      left={0}
      zIndex={9999}
      transition='all 0.2s'
      backgroundColor={theme.colors['dark50']}
      boxShadow={
        !isScrollAtTop && IS_MOBILE ? '0 15px 20px rgba(0,0,0,.25)' : undefined
      }
    >
      <Logo />
      {!IS_MOBILE && (
        <>
          <DesktopNav language='EN' />
          <LanguageDropdown />
          {showStickedNav && <DesktopStickedNav />}
        </>
      )}
      {IS_MOBILE && (
        <MobileNavIcon onClick={toggleMobileNav} active={isMobileNavOpened} />
      )}
    </FlexBox>
  );
};

export default Navbar;
