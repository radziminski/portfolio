import React, { ReactElement, useState } from 'react';
import Box from 'components/Box';
import Text from 'components/Text';
import { Container, CopyContainer } from './parts';

interface Props {
  icon: ReactElement;
  text: string;
}

const MESSAGE_APPEAR_DURATION_MS = 1800;

const CopyIconField: React.FC<Props> = ({ text, icon }) => {
  const [showMessage, setShowMessage] = useState(false);

  const copyText = async () => {
    try {
      setShowMessage(true);
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        setShowMessage(false);
      }, MESSAGE_APPEAR_DURATION_MS);
    } catch (error) {
      console.error(
        'The browser does not support copying text to clipboard: ' + error
      );
      setShowMessage(false);
    }
  };

  return (
    <Container onClick={copyText}>
      <Box marginRight={4} color='gray90' opacity={0.7}>
        <Text fontSize={5}>{icon}</Text>
      </Box>
      <Text fontSize={5}>{text}</Text>
      <CopyContainer showMessage={showMessage}>Copied</CopyContainer>
    </Container>
  );
};

export default CopyIconField;
