import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.footer(({ theme }) => ({
  textAlign: 'center',
  padding: '18px 10px',
  backgroundColor: theme.colors.dark50,
  color: theme.colors.gray90
}));

export const UpperText = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes[3],
  marginBottom: '8px'
}));

export const LowerText = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes[2]
}));

export const HighlightedText = styled.span(({ theme }) => ({
  color: theme.colors.primary100
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <UpperText>&copy; Copyright 2020</UpperText>
      <LowerText>
        Created by <HighlightedText>Jan Radzimiński</HighlightedText>
      </LowerText>
    </FooterContainer>
  );
};

export default Footer;
