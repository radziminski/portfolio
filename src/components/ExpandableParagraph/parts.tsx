import styled from 'styled-components';

export const Title = styled.h3<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  color: isOpen ? theme.colors.primary100 : theme.colors.gray90,
  fontWeight: 300,
  fontSize: 'inherit',
  margin: 0,
  transition: 'color 0.2s',

  ':hover': {
    color: isOpen ? theme.colors.primary100 : theme.colors.white
  }
}));
