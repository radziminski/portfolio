import { getValueForDevice } from 'styles/breakpoints';
import { DefaultTheme } from 'styled-components';
import { BREAKPOINTS } from './breakpoints';

export const SPACE = getValueForDevice({
  desktopLarge: [0, 6, 12, 18, 22, 30, 36, 42, 48, 54, 60, 66, 72, 80, 88],
  laptopLarge: [0, 6, 12, 18, 22, 30, 36, 42, 48, 54, 60, 66, 72, 80, 88],
  laptopSmall: [0, 6, 12, 18, 22, 30, 36, 42, 48, 54, 60, 66, 72, 80, 88],
  tabLarge: [0, 4, 10, 16, 20, 28, 34, 38, 44, 50, 52, 56, 58, 76, 82]
});

export const COLORS = {
  black: '#000',
  blackRgb: '0,0,0',
  transparent: 'transparent',
  white: '#fff',
  primary100: '#ffcc73',
  primary50: '#a0814c',
  dark30: '#222838',
  dark50: '#191d28',
  dark80: '#161922',
  dark100: '#0f1118',
  gray10: '#333',
  gray90: 'rgb(197, 197, 197)',
  gray50: '#555'
};

export const RADII = {
  regular: 2,
  medium: 6,
  big: 20,
  fullCircle: '100%'
};

export const FONT_SIZES = getValueForDevice({
  desktopLarge: [0, 12, 14, 16, 18, 20, 24, 30, 36, 55],
  desktopMedium: [0, 11, 13, 15, 17, 19, 23, 28, 34, 52],
  laptopLarge: [0, 10, 11, 12, 14, 16, 18, 22, 26, 38],
  laptopSmall: [0, 9, 10, 11, 13, 15, 17, 21, 24, 36],
  mobileMedium: [0, 9, 10, 11, 13, 15, 17, 21, 24, 36],
  mobileSmall: [0, 8, 9, 10, 12, 14, 16, 20, 22, 32]
});

export const FONT_WEIGHTS = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};

export const TRANSITIONS = {
  default: 'all .3s ease-in-out'
};

export const SHADOWS = {};

export const TEXT_VARIANTS = {};

export const Z_INDICES = [0, 1, 5, 10, 50, 100, 500, 1000];

export const BUTTON_VARIANTS = {
  primary: {
    backgroundColor: COLORS.primary100,
    color: COLORS.white,
    ':hover:not(:disabled)': {
      transform: 'scale(1.1)'
    },
    ':active:not(:disabled)': {
      transform: 'translateY(2px)'
    },
    ':disabled': {
      backgroundColor: COLORS.primary50,
      cursor: 'not-allowed'
    }
  }
};

export const DEFAULTS = {
  duration_ms: 300,
  duration: '.3',
  easing: 'ease-in-out',
  transition: 'all .3s ease-in-out'
};

export const defaultTheme: DefaultTheme = {
  breakpoints: BREAKPOINTS,
  space: SPACE,
  fontSizes: FONT_SIZES,
  fontWeights: FONT_WEIGHTS,
  colors: COLORS,
  radii: RADII,
  shadows: SHADOWS,
  textVariants: TEXT_VARIANTS,
  buttonVariants: BUTTON_VARIANTS,
  zIndices: Z_INDICES,
  transitions: TRANSITIONS
};
