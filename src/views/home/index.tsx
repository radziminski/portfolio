import React from 'react';
import Navbar from 'components/Navbar';
import { HeroBox, ArrowDownWrapper } from './parts';
import Box from 'components/Box';
import { FiArrowDownCircle } from 'react-icons/fi';
import SocialsBar from 'components/SocialsBar';
import { getValueForDevice } from 'styles/breakpoints';

const HomeView: React.FC = () => {
  const iconSize = getValueForDevice({
    desktopLarge: 42,
    desktopMedium: 38,
    desktopSmall: 34,
    laptopLarge: 28,
    laptopMedium: 26
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
        top='50%'
        right='110px'
        transform='translate(50%, -50%)'
      >
        <SocialsBar orientation='vertical' />
      </Box>
    </Box>
  );
};

export default HomeView;
