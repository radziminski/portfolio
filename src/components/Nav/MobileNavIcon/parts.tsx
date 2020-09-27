import styled from 'styled-components';

export const IconBar = styled.div<{ active: boolean }>(({ theme, active }) => ({
  width: '100%',
  display: 'block',
  height: '5px',
  backgroundColor: theme.colors.primary100,
  transition: 'opacity 0.2s, transform 0.2s',
  opacity: 1,

  ':not(:last-child)': {
    marginBottom: '7px'
  },

  ':first-child': {
    transform: active ? 'translateY(12px) rotate(45deg)' : undefined
  },

  ':nth-child(2)': {
    opacity: active ? 0 : undefined
  },
  ':last-child': {
    transform: active ? 'translateY(-12px) rotate(-45deg)' : undefined
  }

  // TODO: Update responsiveness (see old repo)
}));

export const Container = styled.div(() => ({
  display: 'block',
  width: '44px',
  height: '35px',
  cursor: 'pointer',
  zIndex: 180
}));
