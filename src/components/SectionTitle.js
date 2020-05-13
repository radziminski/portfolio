import React from 'react';

const SectionTitle = (props) => {
    if (props.type) {
        return <h2 className={'section-title section-title--' + props.type}>{props.children}</h2>;
    }
    return <h2 className="section-title">{props.children}</h2>;
};

export default SectionTitle;
