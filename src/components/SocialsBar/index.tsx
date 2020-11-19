import React, { useMemo } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import ExternalLink from 'components/ExternalLink';
import { SocialsList, SocialsItem } from './parts';
import { getValueForDevice } from 'styles/breakpoints';

const ICON_SIZE = getValueForDevice({
  desktopLarge: 24,
  desktopMedium: 23,
  desktopSmall: 22,
  laptopLarge: 21,
  laptopMedium: 20
});

export type SocialsBarOrientation = 'vertical' | 'horizontal';

export interface Props {
  orientation: SocialsBarOrientation;
  elementDistance?: number;
  iconSize?: number;
}

const SocialsBar: React.FC<Props> = ({
  orientation,
  elementDistance,
  iconSize
}) => {
  const renderIconSize = iconSize || ICON_SIZE;
  const socialLinks = useMemo(
    () => [
      {
        linkTo: 'https://www.facebook.com/jradziminski',
        label: 'Facebook',
        icon: <FaFacebookF size={renderIconSize} />
      },
      {
        linkTo: 'https://www.instagram.com/jradziminski/',
        label: 'Instagram',
        icon: <FiInstagram size={renderIconSize} />
      },
      {
        linkTo: 'https://www.linkedin.com/in/jan-radzimi%C5%84ski-860707162/',
        label: 'Linkedin',
        icon: <AiOutlineLinkedin size={renderIconSize} />
      },
      {
        linkTo: 'https://github.com/radziminski',
        label: 'Github',
        icon: <AiFillGithub size={renderIconSize} />
      }
    ],
    [renderIconSize]
  );

  return (
    <SocialsList orientation={orientation}>
      {socialLinks.map((link) => (
        <SocialsItem
          key={link.label}
          orientation={orientation}
          elementDistance={elementDistance}
        >
          <ExternalLink linkTo={link.linkTo} label={link.label}>
            {link.icon}
          </ExternalLink>
        </SocialsItem>
      ))}
    </SocialsList>
  );
};

export default SocialsBar;
