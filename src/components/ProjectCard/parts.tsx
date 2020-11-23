import styled from 'styled-components';

export const ImageBackOverlay = styled.div(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.colors.dark30,
  height: 220,
  width: 340,
  position: 'absolute',
  top: 0,
  left: 0
}));

export const ImageContainer = styled.div(({ theme }) => ({
  display: 'flex',
  height: 240,
  width: 360,
  position: 'relative'
}));

export const ImageMain = styled.div(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'white',
  height: 220,
  width: 340,
  position: 'absolute',
  bottom: 0,
  right: 0,
  overflow: 'hidden'
}));

export const Title = styled.h3(({ theme }) => ({
  color: theme.colors.primary100,
  fontSize: theme.fontSizes[7],
  fontWeight: 600,
  opacity: '88%',
  marginTop: 20,
  marginBottom: 0
}));
