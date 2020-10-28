import React, { useEffect, useRef, useState } from 'react';
import Box, { FlexBox } from 'components/Box';
import Text from 'components/Text';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  title: string;
  textAlign?: 'left' | 'center' | 'right';
  content: string;
}

const ExpandableParagraph: React.FC<Props> = ({
  title,
  content,
  textAlign
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const [titleHeight, setTitleHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef && contentRef.current)
      setContentHeight(contentRef.current.clientHeight);
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
      onClick={() => setIsOpen((prevState) => !prevState)}
      cursor='pointer'
    >
      <FlexBox
        ref={titleRef}
        color={isOpen ? 'primary100' : 'gray90'}
        marginTop={`${isOpen ? 0 : (contentHeight + titleHeight) / 2 + 'px'}`}
        paddingBottom={1}
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
        {title}
        <FlexBox
          marginLeft={2}
          marginTop={'2px'}
          align-items='center'
          transform={isOpen ? 'rotate(180deg)' : ''}
          transition='all 0.2s'
        >
          <MdKeyboardArrowDown size={24} />
        </FlexBox>
      </FlexBox>
      <Box ref={contentRef} opacity={isOpen ? 1 : 0} transition='all 0.15s'>
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
