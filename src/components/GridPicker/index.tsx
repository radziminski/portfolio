import Box, { FlexBox } from 'components/Box';
import Paragraph from 'components/Paragraph';
import React, { useState } from 'react';
import { ColumnTitle, Container, Grid, IconWrapper, Title } from './parts';
import { Icon, IconifyIcon } from '@iconify/react';
import { getValueForDevice } from 'styles/breakpoints';
import AnimatedInView from 'components/AnimatedInView';
import { REGULAR_ANIMATION_TIME_S } from 'app-constants/animations';

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
    laptopSmall: 68,
    tabLarge: 66,
    mobileLarge: 60,
    mobileMedium: 52,
    mobileSmall: 32
  });
  const iconMarginRight = getValueForDevice({
    desktopLarge: 50,
    desktopMedium: 46,
    desktopSmall: 42,
    laptopLarge: 38,
    tabSmall: 20,
    mobileLarge: '16px',
    mobileMedium: 0
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
    laptopMedium: 20,
    tabSmall: 0
  });

  const textWidth = getValueForDevice({
    desktopLarge: 600,
    laptopLarge: 500,
    laptopMedium: 480,
    laptopSmall: 460,
    tabLarge: 440,
    tabSmall: 390,
    mobileLarge: 280,
    mobileMedium: 230
  });

  const columnsFlexDirection = getValueForDevice({
    desktopLarge: 'row',
    tabSmall: 'row',
    mobileLarge: 'column'
  });

  return (
    <Container>
      <FlexBox
        paddingX={paddingX}
        marginBottom={marginBottom}
        justifyContent='center'
        alignItems='center'
      >
        <Box
          marginRight={iconMarginRight}
          width={iconBoxWidth}
          overflow='hidden'
        >
          <AnimatedInView
            animation={`fade-in ${REGULAR_ANIMATION_TIME_S}s ease-out`}
          >
            <Icon
              icon={chosenItem.icon}
              style={{
                fontSize: iconSize,
                transform: `scale(${chosenItem.iconScaleFactor || 1.0})`
              }}
            />
          </AnimatedInView>
        </Box>

        <Box style={{ width: textWidth }}>
          <AnimatedInView
            animation={`move-in-right-short ${REGULAR_ANIMATION_TIME_S}s ease-out`}
          >
            <Title>{chosenItem.title}</Title>
            <Paragraph color='gray90' style={{ margin: '4px 0' }}>
              {chosenItem.description}
            </Paragraph>
          </AnimatedInView>
        </Box>
      </FlexBox>

      <FlexBox
        justifyContent={'space-between'}
        alignItems={columnsFlexDirection === 'column' ? 'center' : undefined}
        width='100%'
        flexDirection={columnsFlexDirection}
      >
        {columns.map((columnTitle, columnNumber) => (
          <FlexBox
            key={columnTitle}
            width={
              columnsFlexDirection === 'column'
                ? '100%'
                : `${86 / columns.length}%`
            }
            marginLeft={columnNumber === 0 ? marginLeft : undefined}
            marginBottom={
              columnsFlexDirection === 'column' &&
              columnNumber !== columns.length - 1
                ? 30
                : 0
            }
          >
            <AnimatedInView
              animation={`fade-in ${REGULAR_ANIMATION_TIME_S}s ease-out ${
                columnNumber * 0.3 + 0.2
              }s`}
              style={{ width: '100%' }}
            >
              <FlexBox flexDirection='column' alignItems='center' width='100%'>
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
            </AnimatedInView>
          </FlexBox>
        ))}
      </FlexBox>
    </Container>
  );
};

export default GridPicker;
