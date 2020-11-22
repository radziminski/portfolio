import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';

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
  gridTemplateColumns: getValueForDevice({
    desktopLarge: 'repeat(4, 1fr)',
    tabSmall: 'repeat(4, 1fr)',
    mobileLarge: 'repeat(5, 1fr)'
  }),
  gridGap: '18px',
  gridTemplateRows: 'auto'
}));

export const IconWrapper = styled.div<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    color: theme.colors.white,
    opacity: selected ? 1 : 0.5,
    fontSize: getValueForDevice({
      desktopLarge: 60,
      desktopMedium: 58,
      desktopSmall: 56,
      laptopLarge: 52,
      laptopMedium: 50,
      laptopSmall: 46,
      tabLarge: 44,
      tabMedium: 42,
      mobileLarge: 44,
      mobileMedium: 36,
      mobileSmall: 28
    }),
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
