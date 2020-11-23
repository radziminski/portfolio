import React from 'react';
import { Icon } from '@iconify/react';
import gitIcon from '@iconify/icons-fa-brands/git-alt';
import Box, { FlexBox } from 'components/Box';
import { ImageContainer, ImageBackOverlay, ImageMain, Title } from './parts';
import offMusem from 'assets/img/off_museum.jpg';
import Paragraph from 'components/Paragraph';
import Button from 'components/Button';

const ProjectCard: React.FC = () => {
  return (
    <FlexBox padding='30px 0' justifyContent='flex-start'>
      <Box>
        <ImageContainer>
          <ImageBackOverlay />
          <ImageMain>
            <img
              src={offMusem}
              style={{ maxHeight: '100%', objectFit: 'cover' }}
              alt='Off Museum Website Preview'
            />
          </ImageMain>
        </ImageContainer>
      </Box>
      <Box marginLeft={60} flex={1}>
        <Title>OFF Museum</Title>
        <Paragraph textAlign='justify'>
          Id proident est eu Lorem ex incididunt ipsum cupidatat dolor nostrud.
          Non veniam enim in magna duis tempor enim ullamco ipsum dolore.
          Adipisicing duis officia deserunt nisi. Dolore enim ipsum ex aliquip
          ullamco cillum eu commodo veniam eiusmod nulla.
        </Paragraph>
        <FlexBox>
          <Button variant='ghost'>
            <Icon
              icon={gitIcon}
              style={{
                transform: 'scale(1.6)'
              }}
            ></Icon>
          </Button>
          <Button variant='full'>Live Demo</Button>
        </FlexBox>
      </Box>
    </FlexBox>
  );
};

export default ProjectCard;
