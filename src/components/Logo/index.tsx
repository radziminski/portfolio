import React from 'react';
import { FlexBox } from 'components/Box';
import Text from 'components/Text';

export const LOGO_TEXT = 'RADZIMIŃSKI';

const Logo: React.FC = () => {
  return (
    <FlexBox
      height={40}
      justifyContent='center'
      alignItems='center'
      background='white'
      color='dark50'
      paddingX={2}
    >
      <Text fontSize={30} fontWeight='bold'>
        {LOGO_TEXT.toUpperCase()}
      </Text>
    </FlexBox>
  );
};

export default Logo;
