import styled from 'styled-components';

export const Paragraph = styled.p(({ theme }) => ({
  display: 'block',
  margin: '15px 0',
  fontSize: theme.fontSizes[4],
  textAlign: 'left',
  color: theme.colors.gray90
}));

export default Paragraph;
