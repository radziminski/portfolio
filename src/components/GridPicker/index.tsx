import Box, { FlexBox } from 'components/Box';
import Paragraph from 'components/Paragraph';
import React, { useState } from 'react';
import { ColumnTitle, Container, Grid, IconWrapper, Title } from './parts';
import { Icon, IconifyIcon } from '@iconify/react';
import { getValueForDevice } from 'styles/breakpoints';

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
  initiallySelectedElement?: number;
}

const GridPicker: React.FC<Props> = ({
  columns,
  gridItems,
  initiallySelectedElement = 0
}) => {
  const [chosenItem, setChosenItem] = useState(
    gridItems[initiallySelectedElement]
  );

  const iconSize = getValueForDevice({
    desktopLarge: 84,
    desktopMedium: 80,
    desktopSmall: 78,
    laptopLarge: 74,
    laptopMedium: 72,
    laptopSmall: 68
  });
  const iconMarginRight = getValueForDevice({
    desktopLarge: 50,
    desktopMedium: 46,
    desktopSmall: 42,
    laptopLarge: 38
  });
  const iconBoxWidth = getValueForDevice({
    desktopLarge: 100,
    desktopMedium: 90,
    desktopSmall: 80,
    laptopLarge: 75
  });

  const paddingX = getValueForDevice({
    desktopLarge: 110,
    laptopLarge: 0
  });
  const marginBottom = getValueForDevice({
    desktopLarge: 50,
    laptopLarge: 35
  });
  const marginLeft = getValueForDevice({
    desktopLarge: 50,
    laptopLarge: 30,
    laptopMedium: 20
  });

  const textWidth = getValueForDevice({
    desktopLarge: 600,
    laptopLarge: 500,
    laptopMedium: 480,
    laptopSmall: 460
  });

  return (
    <Container>
      <FlexBox
        paddingX={paddingX}
        marginBottom={marginBottom}
        justifyContent='space-around'
        alignItems='center'
      >
        <Box
          marginRight={iconMarginRight}
          width={iconBoxWidth}
          overflow='hidden'
        >
          <Icon
            icon={chosenItem.icon}
            style={{
              fontSize: iconSize,
              transform: `scale(${chosenItem.iconScaleFactor || 1.0})`
            }}
          />
        </Box>
        <Box style={{ width: textWidth }}>
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
            marginLeft={columnNumber === 0 ? marginLeft : undefined}
          >
            <ColumnTitle>{columnTitle}</ColumnTitle>
            <Grid>
              {gridItems
                ?.filter((item) => item.column === columnTitle)
                .map((item, index) => (
                  <IconWrapper
                    key={index}
                    onClick={() => setChosenItem(item)}
                    selected={item === chosenItem}
                  >
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
