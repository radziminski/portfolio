import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';

const containerPadding = getValueForDevice({
  desktopLarge: '55px 50px 40px 50px',
  laptopLarge: '50px 45px 35px 45px',
  laptopSmall: '46px 42px 32px 42px'
});

export const Container = styled.form(({ theme }) => ({
  display: 'block',
  backgroundColor: theme.colors.dark50,
  padding: containerPadding
}));
