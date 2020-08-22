import React from 'react';
import { FlexBox } from 'components/Box';
import Navbar from 'components/Navbar';
import Button from 'components/Button';

const HomeView: React.FC = () => {
  return (
    <>
      <Navbar />

      <Button onClick={() => console.log('e')}>Contact Me</Button>
      <Button variant='ghost' onClick={() => console.log('e')}>
        About
      </Button>
    </>
  );
};

export default HomeView;
