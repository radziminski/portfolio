import styled from 'styled-components';

export const Container = styled.div(() => ({}));

export const ColumnTitle = styled.h3(({ theme }) => ({
  display: 'flex',
  color: theme.colors.primary100,
  fontSize: theme.fontSizes[5],
  textAlign: 'center',
  fontWeight: 500,
  marginBottom: '30px'
}));

export const Title = styled.h3(({ theme }) => ({
  fontSize: theme.fontSizes[4],
  color: theme.colors.primary100,
  fontWeight: 400,
  margin: 0
}));

export const Grid = styled.div(() => ({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '18px',
  gridTemplateRows: 'auto'
}));

export const IconWrapper = styled.div<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    color: theme.colors.white,
    opacity: selected ? 1 : 0.5,
    fontSize: 60,
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':hover': {
      color: theme.colors.primary100,
      opacity: 1
    }
  })
);
