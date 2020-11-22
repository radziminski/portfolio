import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';

interface StyleProps {
  margin?: string | number;
  padding?: string | number;
}

const FONT_SIZE = {
  desktopLarge: 20,
  desktopMedium: 19,
  desktopSmall: 18,
  laptopLarge: 16,
  laptopMedium: 14,
  tabLarge: 14,
  mobileMedium: 12
};

const PADDING = {
  desktopLarge: '16px 26px',
  desktopMedium: '15px 24px',
  desktopSmall: '14px 22px',
  laptopLarge: '14px 20px',
  laptopMedium: '8px 20px',
  tabLarge: '8px 17px',
  mobileMedium: '9px 15px'
};

const HEIGHT = {
  desktopLarge: 48,
  desktopMedium: 47,
  desktopSmall: 46,
  laptopLarge: 44,
  laptopMedium: 42,
  tabLarge: 38,
  mobileMedium: 34
};

export const FullButton = styled.button<StyleProps>(
  ({ theme, padding, margin }) => ({
    backgroundColor: theme.colors.primary100,
    fontSize: getValueForDevice(FONT_SIZE),
    color: theme.colors.dark50,
    padding: padding || getValueForDevice(PADDING),
    height: getValueForDevice(HEIGHT),
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
    fontSize: getValueForDevice(FONT_SIZE),
    height: getValueForDevice(HEIGHT),
    color: theme.colors.primary100,
    padding: padding || getValueForDevice(PADDING),
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
