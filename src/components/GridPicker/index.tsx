import Box, { FlexBox } from 'components/Box';
import React from 'react';
import { ColumnTitle, Container, Grid } from './parts';

const GridPicker = () => {
  return (
    <Container>
      <FlexBox
        paddingX={150}
        marginBottom={50}
        justifyContent='space-around'
        alignItems='center'
      >
        <Box
          height={100}
          width={100}
          style={{ backgroundColor: 'white' }}
          marginRight={50}
        ></Box>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut molestias
        obcaecati atque. Sit accusamus eligendi culpa modi vero placeat.
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
            <Box
              height={80}
              width={'100%'}
              style={{ backgroundColor: 'white' }}
            />
            <Box
              height={80}
              width={'100%'}
              style={{ backgroundColor: 'white' }}
            />
            <Box
              height={80}
              width={'100%'}
              style={{ backgroundColor: 'white' }}
            />
            <Box
              height={80}
              width={'100%'}
              style={{ backgroundColor: 'white' }}
            />
            <Box
              height={80}
              width={'100%'}
              style={{ backgroundColor: 'white' }}
            />
          </Grid>
        </FlexBox>
        <FlexBox flexDirection='column' alignItems='center' width='43%'>
          <ColumnTitle>Other Technologies:</ColumnTitle>
          <Grid>
            <Box
              height={80}
              width={'100%'}
              style={{ backgroundColor: 'white' }}
            />
            <Box
              height={80}
              width={'100%'}
              style={{ backgroundColor: 'white' }}
            />
            <Box
              height={80}
              width={'100%'}
              style={{ backgroundColor: 'white' }}
            />
            <Box
              height={80}
              width={'100%'}
              style={{ backgroundColor: 'white' }}
            />
            <Box
              height={80}
              width={'100%'}
              style={{ backgroundColor: 'white' }}
            />
          </Grid>
        </FlexBox>
      </FlexBox>
    </Container>
  );
};

export default GridPicker;
