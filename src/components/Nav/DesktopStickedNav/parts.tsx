import styled from 'styled-components';

export const MainContainer = styled.div({
  display: 'block',
  position: 'fixed',
  right: '7%',
  top: '80px',
  width: '100px',
  height: '100px',
  zIndex: 200,
  animation: 'fade-in 0.3s ease-out'
});

export const ListContainer = styled.ul({
  position: 'absolute',
  top: 0,
  right: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',

  marginTop: '-8px',
  marginRight: '30px',
  animation: 'move-in-left 0.2s ease-out'
});

export const ListElement = styled.li(({ theme }) => ({
  fontSize: '20px',

  color: theme.colors.gray90,
  backgroundColor: theme.colors.dark50,
  backfaceVisibility: 'hidden',
  cursor: 'pointer',
  userSelect: 'none',

  transition: 'color 0.2s, transform 0.2s',

  ':nth-child(even)': {
    backgroundColor: theme.colors.dark80
  },

  ':hover': {
    color: theme.colors.primary100,
    transform: 'scale(1.1)'
  },
  display: 'flex'
}));
