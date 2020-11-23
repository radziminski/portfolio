import React, { useEffect, useRef, useState } from 'react';
import { FlexBox } from 'components/Box';
import Logo from 'components/Logo';
import DesktopNav from 'components/Nav/DesktopHomeNav';
import DesktopStickedNav from 'components/Nav/DesktopStickedNav';
import { useToggleStickedNav } from './hooks';
import { DarkOverlay, LanguageDropdown } from './parts';
import BREAKPOINTS, { getValueForDevice } from 'styles/breakpoints';
import MobileNavIcon from 'components/Nav/MobileNavIcon';
import { useTheme } from 'styled-components';
import MobileNav from 'components/Nav/MobileNav';
import useOutsideClick from 'hooks/useOutsideClick';

const Navbar = () => {
  const showStickedNav = useToggleStickedNav();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useTheme();
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);
  const navRef = useRef(null);
  useOutsideClick(navRef, () => {
    setIsMobileNavOpened(false);
  });

  const MOBILE_NAV_BREAKPOINT = BREAKPOINTS.tabLarge;

  const paddingX = getValueForDevice({
    desktopLarge: 220,
    desktopMedium: 160,
    desktopSmall: 150,
    laptopLarge: 140,
    laptopMedium: 130,
    laptopSmall: 70,
    tabSmall: 50,
    mobileMedium: 26
  });
  const paddingY = getValueForDevice({
    desktopLarge: 0,
    laptopMedium: 0,
    laptopSmall: 0,
    tabLarge: 42,
    mobileMedium: 34
  });

  const topPosition = getValueForDevice({
    desktopLarge: 50,
    desktopMedium: 40,
    laptopLarge: 40,
    laptopMedium: 30,
    tabLarge: 0
  });

  const isMobile = window.innerWidth <= MOBILE_NAV_BREAKPOINT;

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
    // eslint-disable-next-line
  }, [isScrollAtTop]);

  const toggleMobileNav = () => setIsMobileNavOpened((prev) => !prev);

  return (
    <>
      <FlexBox
        width='100%'
        paddingX={paddingX}
        paddingY={isScrollAtTop ? paddingY : paddingY - 10}
        justifyContent='space-between'
        alignItems='center'
        position={!isMobile ? 'absolute' : 'fixed'}
        top={topPosition}
        left={0}
        zIndex={9999}
        transition='all 0.2s'
        backgroundColor={theme.colors['dark50']}
        boxShadow={
          !isScrollAtTop && isMobile ? '0 15px 20px rgba(0,0,0,.25)' : undefined
        }
        ref={navRef}
      >
        <Logo />
        {!isMobile && (
          <>
            <DesktopNav />
            <LanguageDropdown />
            {showStickedNav && <DesktopStickedNav />}
          </>
        )}
        {isMobile && (
          <>
            <MobileNavIcon
              onClick={toggleMobileNav}
              active={isMobileNavOpened}
            />
            {isMobileNavOpened && (
              <MobileNav
                onClick={() => {
                  setIsMobileNavOpened(false);
                }}
              />
            )}
          </>
        )}
      </FlexBox>
      {isMobileNavOpened && <DarkOverlay />}
    </>
  );
};

export default Navbar;
