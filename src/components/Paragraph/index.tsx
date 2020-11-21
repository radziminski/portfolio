import styled from 'styled-components';

interface Props {
  fontSize?: number;
  lineHeight?: number;
  color?: string;
}

export const Paragraph = styled.p<Props>(
  ({ theme, fontSize, lineHeight, color }) => ({
    display: 'block',
    margin: '15px 0',
    lineHeight,
    fontSize:
      (fontSize &&
        (fontSize > theme.fontSizes.length
          ? fontSize
          : theme.fontSizes[fontSize])) ||
      theme.fontSizes[4],
    textAlign: 'left',
    wordWrap: 'break-word',
    color: (color && theme.colors[color]) || theme.colors.gray90
  })
);

export default Paragraph;
