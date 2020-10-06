import Box, { FlexBox } from 'components/Box';
import Paragraph from 'components/Paragraph';
import React from 'react';
import { ColumnTitle, Container, Grid } from './parts';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-fa-brands/react';
import logoJavascript from '@iconify/icons-ion/logo-javascript';

const GridPicker = () => {
  return (
    <Container>
      <FlexBox
        paddingX={110}
        marginBottom={50}
        justifyContent='space-around'
        alignItems='center'
      >
        <Box marginRight={50}>
          <Icon icon={reactIcon} style={{ fontSize: 90 }} />
        </Box>
        <Paragraph color='gray90'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut molestias
          obcaecati atque. Sit accusamus eligendi culpa modi vero placeat.
        </Paragraph>
      </FlexBox>
      <FlexBox justifyContent='space-between' width='100%'>
        <FlexBox
          flexDirection='column'
          alignItems='center'
          width='43%'
          marginLeft='50px'
        >
          <ColumnTitle>Web Technologies:</ColumnTitle>
          <Grid>
            <Icon icon={reactIcon} style={{ fontSize: 75 }} />
            <Icon icon={logoJavascript} style={{ fontSize: 75 }} />
            <Icon icon={reactIcon} style={{ fontSize: 75 }} />
            <Icon icon={logoJavascript} style={{ fontSize: 75 }} />
            <Icon icon={logoJavascript} style={{ fontSize: 75 }} />
            <Icon icon={reactIcon} style={{ fontSize: 75 }} />
            <Icon icon={logoJavascript} style={{ fontSize: 75 }} />
          </Grid>
        </FlexBox>
        <FlexBox flexDirection='column' alignItems='center' width='43%'>
          <ColumnTitle>Other Technologies:</ColumnTitle>
          <Grid>
            <Icon icon={logoJavascript} style={{ fontSize: 75 }} />
            <Icon icon={reactIcon} style={{ fontSize: 75 }} />
            <Icon icon={logoJavascript} style={{ fontSize: 75 }} />
            <Icon icon={logoJavascript} style={{ fontSize: 75 }} />
          </Grid>
        </FlexBox>
      </FlexBox>
    </Container>
  );
};

export default GridPicker;
