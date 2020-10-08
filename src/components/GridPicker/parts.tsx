import styled from 'styled-components';

export const Container = styled.div(({ theme }) => ({}));

export const ColumnTitle = styled.h3(({ theme }) => ({
  display: 'flex',
  color: theme.colors.primary100,
  fontSize: theme.fontSizes[5],
  textAlign: 'center',
  fontWeight: 500,
  marginBottom: '30px'
}));

export const Grid = styled.div(({ theme }) => ({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '18px',
  gridTemplateRows: 'auto'
}));

export const IconWrapper = styled.div(({ theme }) => ({
  color: theme.colors.gray90,
  fontSize: 62,
  cursor: 'pointer',
  transition: 'all 0.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  ':hover': {
    color: theme.colors.white
  }
}));
