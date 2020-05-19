import React from 'react';

const ExternalLink = ({ className = '', linkTo, label = 'external-link', children }) => {
    return (
        <a href={linkTo} aria-label={label} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
        </a>
    );
};

export default ExternalLink;
