import styled from 'styled-components';

export const Container = styled.div(({ theme }) => ({
  display: 'block',
  marginLeft: '10%',
  width: '90%',
  backgroundColor: theme.colors.dark50,
  boxShadow: `0 10px 20px rgba(${theme.colors.black}, 0.3)`,
  padding: '55px 50px 40px 50px'
}));
