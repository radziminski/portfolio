import styled from 'styled-components';

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
  padding: 25,
  textAlign: 'center',
  backgroundColor: theme.colors.dark50,
  fontSize: theme.fontSizes[5],

  cursor: 'pointer',

  '&:nth-child(odd)': {
    backgroundColor: theme.colors.dark80
  }
}));

export const LanguageContainer = styled.div<{ active?: boolean }>(
  ({ theme, active }) => ({
    width: '50%',
    textAlign: 'center',
    padding: 12,
    fontSize: theme.fontSizes[6],
    color: active ? theme.colors.dark80 : theme.colors.primary100,
    backgroundColor: active ? theme.colors.primary100 : theme.colors.dark80
  })
);
