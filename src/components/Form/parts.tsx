import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';

export const Container = styled.form(({ theme }) => ({
  display: 'block',
  backgroundColor: theme.colors.dark50,
  padding: getValueForDevice({
    desktopLarge: '55px 50px 40px 50px',
    laptopLarge: '50px 45px 35px 45px',
    laptopSmall: '46px 42px 32px 42px',
    tabLarge: '44px 40px 30px 40px',
    tabMedium: '40px 32px 28px 32px'
  })
}));
