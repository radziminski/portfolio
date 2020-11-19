import React from 'react';
import styled from 'styled-components';

import Linker from 'components/Linker';
import { getValueForDevice } from 'styles/breakpoints';

const SIDE_PADDING = getValueForDevice({
  desktopLarge: 360,
  desktopMedium: 340,
  desktopSmall: 320,
  laptopLarge: 280,
  laptopMedium: 200
});

export type SectionVariant = 'dark' | 'light';

export interface Props {
  variant: SectionVariant;
  withLinker?: boolean;
}

const SectionContainer = styled.div<Props>(({ theme, variant }) => ({
  padding: `80px ${SIDE_PADDING}px 110px ${SIDE_PADDING}px`,
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
