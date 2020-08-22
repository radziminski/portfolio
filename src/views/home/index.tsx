import React from 'react';
import { FlexBox } from 'components/Box';
import Navbar from 'components/Navbar';

const HomeView: React.FC = () => {
  return (
    <FlexBox justifyContent='center'>
      <Navbar />
    </FlexBox>
  );
};

export default HomeView;
