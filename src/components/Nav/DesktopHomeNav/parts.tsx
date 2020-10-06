import styled from 'styled-components';

const HOVER_UNDERLINE_WIDTH = 20;

export const NavList = styled.ul(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  color: theme.colors.white,
  transform: 'translateY(5px)'
}));

export const NavItem = styled.li(({ theme }) => ({
  textDecoration: 'none',
  color: theme.colors.gray90,

  fontSize: theme.fontSizes[3],
  textTransform: 'uppercase',
  letterSpacing: '1px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

  transition: 'all 0.2s',
  userSelect: 'none',
  alignItems: 'center',
  height: 'auto',

  // @include respond(tab-land) {
  //     padding: 1rem 1.2rem,
  //     font-size: 1.6rem,
  // }

  '&:after': {
    // eslint-disable-next-line quotes
    content: `''`,
    display: 'block',
    margin: '4px auto',
    width: 0,
    backfaceVisibility: 'hidden',
    height: '1px',
    backgroundColor: theme.colors.primary100,
    transition: 'width 0.2s',
    transform: 'translateY(-7px)'
  },
  '&:hover': {
    color: theme.colors.primary100,

    '&:after': {
      width: `${HOVER_UNDERLINE_WIDTH}px`,
      opacity: 1
    }
  }
}));
