import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';

export const Container = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.gray90,
  marginBottom: getValueForDevice({
    desktopLarge: '30px',
    tabMedium: '30px',
    tabSmall: '12px'
  }),
  cursor: 'pointer',
  userSelect: 'none',

  ':hover': {
    color: theme.colors.white
  }
}));

export const CopyContainer = styled.div<{ showMessage: boolean }>(
  ({ theme, showMessage }) => ({
    color: theme.colors.dark80,
    background: theme.colors.primary100,
    marginLeft: '20px',
    opacity: showMessage ? 1 : 0,
    transition: 'all 0.2s',
    fontSize: theme.fontSizes[3],
    fontWeight: 400,
    padding: '4px 8px'
  })
);
