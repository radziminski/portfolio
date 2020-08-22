import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import ExternalLink from 'components/ExternalLink';
import { SocialsList, SocialsItem } from './parts';

const ICON_SIZE = 24;

export type SocialsBarOrientation = 'vertical' | 'horizontal';

export interface Props {
  orientation: SocialsBarOrientation;
}

const SocialsBar: React.FC<Props> = ({ orientation }) => {
  return (
    <SocialsList orientation={orientation}>
      <SocialsItem orientation={orientation}>
        <ExternalLink
          linkTo='https://www.facebook.com/jradziminski'
          label='Facebook'
        >
          <FaFacebookF size={ICON_SIZE} />
        </ExternalLink>
      </SocialsItem>
      <SocialsItem orientation={orientation}>
        <ExternalLink
          linkTo='https://www.instagram.com/jradziminski/'
          label='Instagram'
        >
          <FiInstagram size={ICON_SIZE} />
        </ExternalLink>
      </SocialsItem>
      <SocialsItem orientation={orientation}>
        <ExternalLink
          linkTo='https://www.linkedin.com/in/jan-radzimi%C5%84ski-860707162/'
          label='Linkedin'
        >
          <AiOutlineLinkedin size={ICON_SIZE} />
        </ExternalLink>
      </SocialsItem>
      <SocialsItem orientation={orientation}>
        <ExternalLink linkTo='https://github.com/radziminski' label='Github'>
          <AiFillGithub size={ICON_SIZE} />
        </ExternalLink>
      </SocialsItem>
    </SocialsList>
  );
};

export default SocialsBar;
