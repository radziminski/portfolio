import React from 'react';
import Box, { FlexBox } from 'components/Box';

const ProjectCard: React.FC = () => {
  return (
    <FlexBox>
      <Box width='40%'>
        <Box
          position='absolute'
          top={0}
          left={0}
          width='100%'
          height={300}
        ></Box>
      </Box>
    </FlexBox>
  );
};

export default ProjectCard;
