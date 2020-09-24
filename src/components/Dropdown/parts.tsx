import styled from 'styled-components';

export const DropdownContainer = styled.div(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative'
}));

export const SelectedOptionContainer = styled.div(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.colors.gray90,
  padding: '8px 12px',
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.colors.gray90
}));

export const SelectedOptionText = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes[3]
}));

export const DropdownOptionsList = styled.ul(({ theme }) => ({
  position: 'absolute',
  top: '140%',
  left: 0,
  width: '100%'
}));

export const DropdownOptionItem = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: '8px 12px',
  fontSize: theme.fontSizes[3],
  color: theme.colors.gray90,
  backgroundColor: theme.colors.dark80,
  borderTopColor: theme.colors.transparent,
  borderBottomColor: theme.colors.transparent,
  transition: 'all 0.2s',

  ':hover': {
    transform: 'scale(1.08)'
  },

  ':nth-child(even)': {
    backgroundColor: theme.colors.dark100
  }
}));
