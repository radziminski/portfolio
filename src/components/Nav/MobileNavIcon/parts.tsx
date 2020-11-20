import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';

export const IconBar = styled.div<{ active: boolean }>(({ theme, active }) => ({
  width: '100%',
  display: 'block',
  height: getValueForDevice({
    desktopLarge: 5,
    laptopLarge: 4
  }),
  backgroundColor: theme.colors.primary100,
  transition: 'opacity 0.2s, transform 0.2s',
  opacity: 1,

  ':not(:last-child)': {
    marginBottom: getValueForDevice({
      desktopLarge: '7px',
      laptopLarge: '6px'
    })
  },

  ':first-child': {
    transform: active
      ? `translateY(${getValueForDevice({
          desktopLarge: '12px',
          laptopLarge: '10px'
        })}) rotate(45deg)`
      : undefined
  },

  ':nth-child(2)': {
    opacity: active ? 0 : undefined
  },
  ':last-child': {
    transform: active
      ? `translateY(${getValueForDevice({
          desktopLarge: '-12px',
          laptopLarge: '-10px'
        })}) rotate(-45deg)`
      : undefined
  }

  // TODO: Update responsiveness (see old repo)
}));

export const Container = styled.div(() => ({
  display: 'block',
  width: getValueForDevice({
    desktopLarge: 44,
    laptopLarge: 42
  }),
  height: '35px',
  cursor: 'pointer',
  zIndex: 180
}));
