import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import designSolid from '@iconify-icons/clarity/design-solid';

export const Container = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 220,
  backgroundColor: theme.colors.dark100,
  color: theme.colors.primary100,
  width: '100%',
  fontSize: 40
}));

const ImagePlaceholder = () => {
  return (
    <Container>
      <Icon icon={designSolid} />
    </Container>
  );
};

export default ImagePlaceholder;
