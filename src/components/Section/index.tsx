import React from 'react';
import styled from 'styled-components';

import Linker from 'components/Linker';
import { getValueForDevice } from 'styles/breakpoints';

export type SectionVariant = 'dark' | 'light';

export interface Props {
  variant: SectionVariant;
  withLinker?: boolean;
}

const PADDING_SIDE = {
  desktopLarge: 360,
  desktopMedium: 340,
  desktopSmall: 320,
  laptopLarge: 220,
  laptopMedium: 180,
  laptopSmall: 100,
  tabLarge: 60,
  tabMedium: 50,
  tabSmall: 48,
  mobileLarge: 40,
  mobileMedium: 26,
  mobileSmall: 22
};

const PADDING_TOP = {
  desktopLarge: 80,
  desktopMedium: 78,
  desktopSmall: 76,
  laptopLarge: 72,
  laptopMedium: 70
};

const PADDING_BOTTOM = {
  desktopLarge: 110,
  desktopMedium: 105,
  desktopSmall: 100,
  laptopLarge: 95,
  laptopMedium: 90,
  tabLarge: 85,
  tabSmall: 70
};

const SectionContainer = styled.div<Props>(({ theme, variant }) => ({
  padding: `${getValueForDevice(PADDING_TOP)}px ${getValueForDevice(
    PADDING_SIDE
  )}px ${getValueForDevice(PADDING_BOTTOM)}px ${getValueForDevice(
    PADDING_SIDE
  )}px`,
  backgroundColor:
    variant === 'light' ? theme.colors.dark50 : theme.colors.dark80,
  position: 'relative'
}));

export const Section: React.FC<Props> = ({ variant, withLinker, children }) => (
  <SectionContainer variant={variant}>
    {withLinker && <Linker type={variant === 'light' ? 'dark' : 'light'} />}
    {children}
  </SectionContainer>
);

export default Section;
