import React from 'react';
import { Icon } from '@iconify/react';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import playFilledAlt from '@iconify-icons/carbon/play-filled-alt';
import Box, { FlexBox } from 'components/Box';
import { ImageContainer, ImageBackOverlay, ImageMain, Title } from './parts';
import offMuseumScreenshot from 'assets/img/off_museum.jpg';
import Paragraph from 'components/Paragraph';
import Button from 'components/Button';
import {
  getValueForDevice,
  LAYOUT_ORIENTATION_BREAKPOINT
} from 'styles/breakpoints';

interface Props {
  side?: 'right' | 'left';
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
}

const ProjectCard: React.FC<Props> = ({
  side,
  title,
  description,
  liveLink,
  codeLink
}) => {
  const isMobile = window.innerWidth <= LAYOUT_ORIENTATION_BREAKPOINT;

  const paddingY = getValueForDevice({
    desktopLarge: 30,
    tabSmall: 30,
    mobileLarge: 18
  });

  return (
    <FlexBox
      paddingY={paddingY}
      marginX={isMobile ? 20 : 0}
      justifyContent={'space-between'}
      alignItems={isMobile ? 'center' : 'auto'}
      flexDirection={
        isMobile ? 'column' : side === 'right' ? 'row-reverse' : 'row'
      }
      marginY={!isMobile ? 20 : 0}
    >
      <Box>
        <ImageContainer>
          <ImageBackOverlay />
          <ImageMain>
            <img
              src={offMuseumScreenshot}
              style={{
                maxHeight: '100%',
                objectFit: 'cover'
              }}
              alt='Off Museum Website Preview'
            />
          </ImageMain>
        </ImageContainer>
      </Box>
      <FlexBox
        marginLeft={side === 'right' || isMobile ? 0 : 60}
        marginRight={side === 'left' || isMobile ? 0 : 60}
        flex={1}
        justifyContent='space-between'
        alignItems={isMobile ? 'center' : 'auto'}
        flexDirection='column'
      >
        <Title>{title}</Title>
        <Box marginBottom={isMobile ? '12px' : 0}>
          <Paragraph textAlign='justify'>{description}</Paragraph>
        </Box>
        <FlexBox marginTop='auto' marginBottom={22}>
          {codeLink && (
            <Button
              variant='ghost'
              onClick={() => window.open(codeLink, '_blank')}
            >
              <Icon
                icon={githubFilled}
                style={{
                  transform: 'scale(1.4)'
                }}
              />
              <Box marginLeft='10px'>Browse Code</Box>
            </Button>
          )}
          {liveLink && codeLink && <Box marginLeft='20px' />}
          {liveLink && (
            <Button
              variant='full'
              onClick={() => window.open(liveLink, '_blank')}
            >
              <Icon
                icon={playFilledAlt}
                style={{
                  transform: 'scale(1.4)'
                }}
              />
              <Box width='10px' />
              Live Demo
            </Button>
          )}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default ProjectCard;
