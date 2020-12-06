import React, { useEffect, useRef, useState } from 'react';
import Box, { FlexBox } from 'components/Box';
import Text from 'components/Text';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Title } from './parts';

const CONTENT_HEIGHT_OFFSET = 34;

interface Props {
  title: string;
  textAlign?: 'left' | 'center' | 'right';
  content: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ExpandableParagraph: React.FC<Props> = ({
  title,
  content,
  textAlign,
  isOpen,
  setIsOpen
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const [titleHeight, setTitleHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef && contentRef.current)
      setContentHeight(contentRef.current.clientHeight + CONTENT_HEIGHT_OFFSET);
  }, [contentRef, content]);

  useEffect(() => {
    if (titleRef && titleRef.current)
      setTitleHeight(titleRef.current.clientHeight);
  }, [titleRef, title]);

  return (
    <Box
      color='gray90'
      width='68%'
      textAlign={textAlign || 'center'}
      style={{ wordWrap: 'break-word' }}
      overflow='hidden'
      height={contentHeight + titleHeight}
      onClick={() => setIsOpen(!isOpen)}
      cursor='pointer'
    >
      <FlexBox
        ref={titleRef}
        color={isOpen ? 'primary100' : 'gray90'}
        marginTop={`${
          isOpen ? 0 : (contentHeight + titleHeight) / 2 + 1 + 'px'
        }`}
        paddingBottom={isOpen ? 1 : 0}
        transform={isOpen ? '' : 'translateY(-50%)'}
        transition='all 0.2s'
        textAlign={textAlign || 'left'}
        justifyContent={
          textAlign === 'right'
            ? 'flex-end'
            : textAlign === 'center'
            ? 'center'
            : 'flex-start'
        }
        alignItems='center'
      >
        <Title isOpen={isOpen}>{title}</Title>
        <FlexBox
          marginLeft={2}
          marginTop={'2px'}
          align-items='center'
          transform={isOpen ? 'rotate(180deg)' : ''}
          transition='all 0.35s'
          height={20}
        >
          <MdKeyboardArrowDown size={24} />
        </FlexBox>
      </FlexBox>
      <Box ref={contentRef} opacity={isOpen ? 1 : 0} transition='all 0.4s'>
        <Text
          lineHeight={1.6}
          textAlign={content.length > 80 ? 'justify' : textAlign || 'left'}
        >
          {content}
        </Text>
      </Box>
    </Box>
  );
};

export default ExpandableParagraph;
