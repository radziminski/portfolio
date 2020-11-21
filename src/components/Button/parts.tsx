import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';

interface StyleProps {
  margin?: string | number;
  padding?: string | number;
}

const FONT_SIZE = getValueForDevice({
  desktopLarge: 20,
  desktopMedium: 19,
  desktopSmall: 18,
  laptopLarge: 16,
  laptopMedium: 14,
  tabLarge: 14
});

const DEFAULT_HEIGHT = getValueForDevice({
  desktopLarge: 48,
  desktopMedium: 47,
  desktopSmall: 46,
  laptopLarge: 44,
  laptopMedium: 42,
  tabLarge: 38
});

const DEFAULT_PADDING = getValueForDevice({
  desktopLarge: '16px 26px',
  desktopMedium: '15px 24px',
  desktopSmall: '14px 22px',
  laptopLarge: '14px 20px',
  laptopMedium: '8px 20px',
  tabLarge: '8px 17px'
});

export const FullButton = styled.button<StyleProps>(
  ({ theme, padding, margin }) => ({
    backgroundColor: theme.colors.primary100,
    fontSize: FONT_SIZE,
    color: theme.colors.dark50,
    padding: padding || DEFAULT_PADDING,
    height: DEFAULT_HEIGHT,
    margin,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform .2s ease-in-out',
    fontWeight: theme.fontWeights.light,
    border: 'none',

    '&:hover:not(:disabled)': {
      transform: 'scale(1.1)'
    },
    '&:active:not(:disabled)': {
      transform: 'scale(1)'
    }
  })
);

export const GhostButton = styled.button<StyleProps>(
  ({ theme, padding, margin }) => ({
    backgroundColor: theme.colors.transparent,
    fontSize: FONT_SIZE,
    height: DEFAULT_HEIGHT,
    color: theme.colors.primary100,
    padding: padding || DEFAULT_PADDING,
    margin,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform .2s ease-in-out',
    fontWeight: theme.fontWeights.light,
    border: `2px solid ${theme.colors.primary100}`,

    '&:hover:not(:disabled)': {
      transform: 'scale(1.1)'
    },
    '&:active:not(:disabled)': {
      transform: 'scale(1)'
    }
  })
);
