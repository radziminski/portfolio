import React from 'react';
import { FlexBox } from 'components/Box';
import Text from 'components/Text';
import { getValueForDevice } from 'styles/breakpoints';

export const LOGO_TEXT = 'RADZIMIŃSKI';

const Logo: React.FC = () => {
  const fontSize = getValueForDevice({
    desktopLarge: 30,
    laptopLarge: 26,
    laptopMedium: 22
  });

  const height = getValueForDevice({
    desktopLarge: 46,
    laptopLarge: 42,
    laptopMedium: 38
  });
  return (
    <FlexBox
      height={height}
      justifyContent='center'
      alignItems='center'
      background='white'
      color='dark50'
      paddingX={2}
    >
      <Text fontSize={fontSize} fontWeight='bold'>
        {LOGO_TEXT.toUpperCase()}
      </Text>
    </FlexBox>
  );
};

export default Logo;
