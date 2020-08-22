import React from 'react';

interface Props {
  linkTo: string;
  label: string;
}

const ExternalLink: React.FC<Props> = ({
  linkTo,
  label = 'external-link',
  children
}) => {
  return (
    <a
      href={linkTo}
      aria-label={label}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};

export default ExternalLink;
