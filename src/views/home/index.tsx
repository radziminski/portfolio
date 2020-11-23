import React from 'react';
import Navbar from 'components/Navbar';
import { HeroBox, ArrowDownWrapper, Container } from './parts';
import Box from 'components/Box';
import { FiArrowDownCircle } from 'react-icons/fi';
import SocialsBar, { SocialsBarOrientation } from 'components/SocialsBar';
import BREAKPOINTS, { getValueForDevice } from 'styles/breakpoints';
import NavLinkWrapper from 'components/Nav/NavLinkWrapper';

const HomeView: React.FC = () => {
  const iconSize = getValueForDevice({
    desktopLarge: 42,
    desktopMedium: 38,
    desktopSmall: 34,
    laptopLarge: 28,
    laptopMedium: 26,
    tabLarge: 36,
    mobileMedium: 28
  });

  const socialsBarTop = getValueForDevice({
    desktopLarge: '50%',
    laptopSmall: '50%',
    tabLarge: 'auto'
  });
  const socialsBarBottom = getValueForDevice({
    desktopLarge: 'auto',
    laptopSmall: 'auto',
    tabLarge: 70,
    tabMedium: 60,
    tabSmall: 44,
    mobileLarge: 86
  });
  const socialsBarRight = getValueForDevice({
    desktopLarge: 110,
    laptopLarge: 105,
    laptopSmall: 80,
    tabLarge: 'auto'
  });
  const socialsBarLeft = getValueForDevice({
    desktopLarge: 'auto',
    laptopLarge: 'auto',
    laptopSmall: 'auto',
    tabLarge: 30,
    mobileMedium: '20px'
  });

  const socialsBarTransform = getValueForDevice({
    desktopLarge: 'translate(50%, -50%)',
    laptopLarge: 'translate(50%, -50%)',
    laptopSmall: 'translate(50%, -50%)',
    tabLarge: 'none'
  });

  const socialsBarOrientation: SocialsBarOrientation =
    window.innerWidth <= BREAKPOINTS.tabLarge ? 'horizontal' : 'vertical';

  const socialsDistance = getValueForDevice({
    desktopLarge: 14,
    laptopSmall: 14,
    tabLarge: 18,
    mobileMedium: 10
  });

  return (
    <Container name='home'>
      <Navbar />
      <HeroBox />
      <ArrowDownWrapper>
        <NavLinkWrapper linkTo='section-about'>
          <FiArrowDownCircle size={iconSize} />
        </NavLinkWrapper>
      </ArrowDownWrapper>
      <Box
        position='absolute'
        top={socialsBarTop}
        right={socialsBarRight}
        bottom={socialsBarBottom}
        left={socialsBarLeft}
        transform={socialsBarTransform}
      >
        <SocialsBar
          orientation={socialsBarOrientation}
          elementDistance={socialsDistance}
        />
      </Box>
    </Container>
  );
};

export default HomeView;
