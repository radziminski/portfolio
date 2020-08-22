import styled from 'styled-components';

export const FullButton = styled.button(({ theme }) => ({
  backgroundColor: theme.colors.primary100,
  fontSize: '20px',
  color: theme.colors.dark50,
  padding: '16px 26px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform .2s ease-in-out',
  fontWeight: theme.fontWeights.light,
  border: 'none',

  '&:hover:not(:disabled)': {
    transform: 'scale(1.1)'
  },
  '&:active:not(:disabled)': {
    transform: 'scale(1)'
  }
}));

export const GhostButton = styled.button(({ theme }) => ({
  backgroundColor: theme.colors.transparent,
  fontSize: '20px',
  color: theme.colors.primary100,
  padding: '14px 24px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform .2s ease-in-out',
  fontWeight: theme.fontWeights.light,
  border: `2px solid ${theme.colors.primary100}`,

  '&:hover:not(:disabled)': {
    transform: 'scale(1.1)'
  },
  '&:active:not(:disabled)': {
    transform: 'scale(1)'
  }
}));
