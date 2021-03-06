import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';

export const Container = styled.div(({ theme }) => ({
  width: '100%',
  position: 'relative',
  paddingTop: '15px',
  marginBottom: '40px',
  height: getValueForDevice({
    desktopLarge: 105,
    desktopMedium: 95,
    desktopSmall: 90,
    laptopLarge: 85,
    laptopMedium: 80
  })
}));

export const Textarea = styled.textarea(({ theme }) => ({
  height: '100%',
  zIndex: 100,
  width: '100%',
  border: 'none',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  font: 'inherit',
  fontSize: theme.fontSizes[5],
  outline: 'none',
  borderBottom: '2px solid',
  borderColor: theme.colors.gray10,
  color: theme.colors.gray90,
  position: 'absolute',
  top: 0,
  left: 0,

  transition: 'all 0.2s',
  resize: 'none',
  overflow: 'visible',

  ':focus': {
    borderBottom: '2px solid',
    borderColor: theme.colors.gray90
  }
}));

export const Label = styled.label<{ selected: boolean }>(
  ({ theme, selected }) => ({
    position: 'absolute',
    fontSize: selected ? theme.fontSizes[4] : theme.fontSizes[6],
    bottom: '2px',
    left: 0,
    color: selected ? theme.colors.primary100 : theme.colors.gray50,
    zIndex: 0,
    userSelect: 'none',
    transform: selected
      ? ` translateY(-${getValueForDevice({
          desktopLarge: '100px',
          desktopMedium: '95px',
          desktopSmall: '90px',
          laptopLarge: '85px',
          laptopMedium: '80px'
        })})`
      : 'translateY(-4px)',
    transition: 'all 0.2s'
  })
);
