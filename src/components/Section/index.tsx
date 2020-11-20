import React from 'react';
import styled from 'styled-components';

import Linker from 'components/Linker';
import { getValueForDevice } from 'styles/breakpoints';

const SIDE_PADDING = getValueForDevice({
  desktopLarge: 360,
  desktopMedium: 340,
  desktopSmall: 320,
  laptopLarge: 220,
  laptopMedium: 180
});

const TOP_PADDING = getValueForDevice({
  desktopLarge: 80,
  desktopMedium: 78,
  desktopSmall: 76,
  laptopLarge: 72,
  laptopMedium: 70
});

const BOTTOM_PADDING = getValueForDevice({
  desktopLarge: 110,
  desktopMedium: 105,
  desktopSmall: 100,
  laptopLarge: 95,
  laptopMedium: 90
});

export type SectionVariant = 'dark' | 'light';

export interface Props {
  variant: SectionVariant;
  withLinker?: boolean;
}

const SectionContainer = styled.div<Props>(({ theme, variant }) => ({
  padding: `${TOP_PADDING}px ${SIDE_PADDING}px ${BOTTOM_PADDING}px ${SIDE_PADDING}px`,
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
