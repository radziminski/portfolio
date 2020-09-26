import styled from 'styled-components';

export const Container = styled.form(({ theme }) => ({
  display: 'block',
  backgroundColor: theme.colors.dark50,
  padding: '55px 50px 40px 50px'
}));
