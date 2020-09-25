import React from 'react';
import { Container, IconBar } from './parts';

interface Props {
  onClick: () => void;
  active: boolean;
}

const MobileNavIcon: React.FC<Props> = ({ onClick, active }) => {
  return (
    <Container onClick={onClick}>
      <IconBar active={active} />
      <IconBar active={active} />
      <IconBar active={active} />
    </Container>
  );
};

export default MobileNavIcon;
