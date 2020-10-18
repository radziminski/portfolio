import React from 'react';
import { Container, Image } from './parts';

interface Props {
  src: string;
  alt: string;
}

const Photo: React.FC<Props> = ({ src, alt }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  );
};

export default Photo;
