import styled from 'styled-components';

export const Dot = styled.div<{ size?: number }>(({ theme, size }) => ({
  width: `${size}px` || '8px',
  height: `${size}px` || '8px',
  backgroundColor: theme.colors.primary100,
  clipPath: 'circle()',
  animation: 'fade-in-fade-out 1s ease-in-out',
  animationIterationCount: 'infinite',

  ':nth-child(2)': {
    animationDelay: '0.25s'
  },
  ':last-child': {
    animationDelay: '0.5s'
  }
}));
