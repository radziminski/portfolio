import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';

export const Container = styled.nav(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  zIndex: 9999,
  animation: 'move-in-down 0.15s ease-out',
  color: theme.colors.primary100,
  backgroundColor: theme.colors.dark50
}));

export const NavList = styled.div(() => ({
  width: '100%'
}));

export const NavElement = styled.div(({ theme }) => ({
  display: 'block',
  width: '100%',
  padding: getValueForDevice({
    tabLarge: 25,
    mobileLarge: 24,
    mobileMedium: 20
  }),
  textAlign: 'center',
  backgroundColor: theme.colors.dark50,
  fontSize: getValueForDevice({
    tabLarge: theme.fontSizes[5],
    mobileLarge: theme.fontSizes[5],
    mobileMedium: theme.fontSizes[4]
  }),

  cursor: 'pointer',

  '&:nth-child(odd)': {
    backgroundColor: theme.colors.dark80
  }
}));

export const LanguageContainer = styled.div<{ active?: boolean }>(
  ({ theme, active }) => ({
    width: '50%',
    textAlign: 'center',
    padding: getValueForDevice({
      tabLarge: 12,
      mobileLarge: 12,
      mobileMedium: 8
    }),
    fontSize: getValueForDevice({
      tabLarge: theme.fontSizes[6],
      mobileLarge: theme.fontSizes[6],
      mobileMedium: theme.fontSizes[5]
    }),
    color: active ? theme.colors.dark80 : theme.colors.primary100,
    backgroundColor: active ? theme.colors.primary100 : theme.colors.dark80
  })
);
