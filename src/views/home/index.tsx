import React from 'react';
import Navbar from 'components/Navbar';
import { HeroBox, ArrowDownWrapper } from './parts';
import Box from 'components/Box';
import { FiArrowDownCircle } from 'react-icons/fi';
import SocialsBar, { SocialsBarOrientation } from 'components/SocialsBar';
import BREAKPOINTS, { getValueForDevice } from 'styles/breakpoints';

const HomeView: React.FC = () => {
  const iconSize = getValueForDevice({
    desktopLarge: 42,
    desktopMedium: 38,
    desktopSmall: 34,
    laptopLarge: 28,
    laptopMedium: 26,
    tabLarge: 36
  });

  const socialsBarTop = getValueForDevice({
    desktopLarge: '50%',
    laptopSmall: '50%',
    tabLarge: 'auto'
  });
  const socialsBarBottom = getValueForDevice({
    desktopLarge: 'auto',
    laptopSmall: 'auto',
    tabLarge: 44
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
    tabLarge: 30
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
    tabLarge: 18
  });

  return (
    <Box width='100%' height='100vh' position='relative'>
      <Navbar />
      <HeroBox />
      <ArrowDownWrapper>
        <FiArrowDownCircle size={iconSize} />
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
    </Box>
  );
};

export default HomeView;
