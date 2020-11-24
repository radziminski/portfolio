import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';

const imgSingleHeight = {
  desktopLarge: 220,
  tabSmall: 220,
  mobileLarge: 180
};

const imgSingleWidth = {
  desktopLarge: 340,
  tabSmall: 340,
  mobileLarge: 280
};

export const ImageBackOverlay = styled.div(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.colors.dark30,
  height: getValueForDevice(imgSingleHeight),
  width: getValueForDevice(imgSingleWidth),
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0.85
}));

export const ImageContainer = styled.div(({ theme }) => ({
  display: 'flex',
  height: getValueForDevice({
    desktopLarge: 240,
    tabSmall: 240,
    mobileLarge: 200
  }),
  width: getValueForDevice({
    desktopLarge: 360,
    tabSmall: 360,
    mobileLarge: 300
  }),
  position: 'relative'
}));

export const ImageMain = styled.div(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'white',
  height: getValueForDevice(imgSingleHeight),
  width: getValueForDevice(imgSingleWidth),
  position: 'absolute',
  bottom: 0,
  right: 0,
  overflow: 'hidden',
  justifyContent: 'center'
}));

export const Title = styled.h3(({ theme }) => ({
  color: theme.colors.primary100,
  fontSize: theme.fontSizes[7],
  fontWeight: 600,
  opacity: '88%',
  marginTop: 20,
  marginBottom: 0
}));
