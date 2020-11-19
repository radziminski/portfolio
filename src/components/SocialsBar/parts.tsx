import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';
import { SocialsBarOrientation } from '.';

const DEFAULT_ELEMENT_DISTANCE = getValueForDevice({
  desktopLarge: 14,
  desktopMedium: 13,
  desktopSmall: 12,
  laptopLarge: 11,
  laptopMedium: 10
});

export interface SocialsListProps {
  orientation: SocialsBarOrientation;
  elementDistance?: number;
}
export const SocialsList = styled.ul<SocialsListProps>(({ orientation }) => ({
  display: 'flex',
  flexDirection: orientation === 'vertical' ? 'column' : 'row',

  '&:hover > :not(:hover)': {
    transform: 'scale(0.86)'
  }
}));

export const SocialsItem = styled.li<SocialsListProps>(
  ({ theme, orientation, elementDistance }) => ({
    margin:
      orientation === 'vertical'
        ? `${elementDistance || DEFAULT_ELEMENT_DISTANCE}px 0`
        : ` 0 ${elementDistance || DEFAULT_ELEMENT_DISTANCE}px`,
    transition: 'all 0.15s ease-in-out',
    color: theme.colors.gray90,

    '&:hover': {
      color: theme.colors.primary100,

      transform: 'scale(1.2)'
    }
  })
);
