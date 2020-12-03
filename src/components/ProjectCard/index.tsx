import React from 'react';
import { Icon } from '@iconify/react';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import playFilledAlt from '@iconify-icons/carbon/play-filled-alt';
import Box, { FlexBox } from 'components/Box';
import { ImageContainer, ImageBackOverlay, ImageMain, Title } from './parts';
import Paragraph from 'components/Paragraph';
import Button from 'components/Button';
import {
  getValueForDevice,
  LAYOUT_ORIENTATION_BREAKPOINT
} from 'styles/breakpoints';
import AnimatedInView from 'components/AnimatedInView';
import { REGULAR_ANIMATION_TIME_S } from 'app-constants/animations';
import ImagePlaceholder from 'components/ImagePlaceholder';

interface Props {
  side?: 'right' | 'left';
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
  image: string;
}

const ProjectCard: React.FC<Props> = ({
  side,
  title,
  description,
  liveLink,
  codeLink,
  image
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
          <AnimatedInView
            animation={`move-in-top-left ${REGULAR_ANIMATION_TIME_S}s ease-out`}
          >
            <ImageBackOverlay />
          </AnimatedInView>
          <AnimatedInView
            animation={`move-in-bottom-right ${REGULAR_ANIMATION_TIME_S}s ease-out`}
          >
            <ImageMain>
              {image ? (
                <img
                  src={image}
                  style={{
                    maxHeight: '100%',
                    objectFit: 'cover'
                  }}
                  alt='Off Museum Website Preview'
                />
              ) : (
                <ImagePlaceholder />
              )}
            </ImageMain>
          </AnimatedInView>
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
        <AnimatedInView
          animation={`move-in-${side}-short ${REGULAR_ANIMATION_TIME_S}s ease-out`}
        >
          <Title>{title}</Title>
        </AnimatedInView>
        <AnimatedInView
          animation={`move-in-${side}-short ${REGULAR_ANIMATION_TIME_S}s ease-out`}
        >
          <Box marginBottom={isMobile ? '12px' : 0}>
            <Paragraph textAlign='justify'>{description}</Paragraph>
          </Box>
        </AnimatedInView>

        <FlexBox marginTop='auto' marginBottom={22}>
          {codeLink && (
            <AnimatedInView
              animation={`move-in-${side}-short ${REGULAR_ANIMATION_TIME_S}s ease-out`}
              rootMarginY={0}
            >
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
            </AnimatedInView>
          )}
          {liveLink && codeLink && <Box marginLeft='20px' />}
          {liveLink && (
            <AnimatedInView
              animation={`move-in-${side}-short ${REGULAR_ANIMATION_TIME_S}s ease-out`}
              rootMarginY={0}
            >
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
            </AnimatedInView>
          )}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default ProjectCard;
