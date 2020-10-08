import Box, { FlexBox } from 'components/Box';
import Paragraph from 'components/Paragraph';
import React, { useState } from 'react';
import { ColumnTitle, Container, Grid, IconWrapper, Title } from './parts';
import { Icon, IconifyIcon } from '@iconify/react';

interface GridItem {
  icon: IconifyIcon;
  title: string;
  description: string;
  iconScaleFactor?: number;
  column: string;
}

interface Props {
  columns: string[];
  gridItems: GridItem[];
}

const GridPicker: React.FC<Props> = ({ columns, gridItems }) => {
  const [chosenItem, setChosenItem] = useState(gridItems[0]);

  return (
    <Container>
      <FlexBox
        paddingX={110}
        marginBottom={50}
        justifyContent='space-around'
        alignItems='center'
      >
        <Box marginRight={50} width={100} overflow='hidden'>
          <Icon
            icon={chosenItem.icon}
            style={{
              fontSize: 84,
              transform: `scale(${chosenItem.iconScaleFactor || 1.0})`
            }}
          />
        </Box>
        <Box style={{ width: 600 }}>
          <Title>{chosenItem.title}</Title>
          <Paragraph color='gray90' style={{ margin: '4px 0' }}>
            {chosenItem.description}
          </Paragraph>
        </Box>
      </FlexBox>

      <FlexBox justifyContent='space-between' width='100%'>
        {columns.map((columnTitle, columnNumber) => (
          <FlexBox
            key={columnTitle}
            flexDirection='column'
            alignItems='center'
            width={`${86 / columns.length}%`}
            marginLeft={columnNumber === 0 ? '50px' : undefined}
          >
            <ColumnTitle>{columnTitle}</ColumnTitle>
            <Grid>
              {gridItems
                ?.filter((item) => item.column === columnTitle)
                .map((item, index) => (
                  <IconWrapper key={index} onClick={() => setChosenItem(item)}>
                    <Icon
                      icon={item.icon}
                      style={{
                        transform: `scale(${item.iconScaleFactor || 1.0})`
                      }}
                    />
                  </IconWrapper>
                ))}
            </Grid>
          </FlexBox>
        ))}
      </FlexBox>
    </Container>
  );
};

export default GridPicker;
