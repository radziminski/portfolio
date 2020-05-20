import React from 'react';

const ProgressBar = (props) => {
    const smallLabelClass = props.isTextLong ? 'u-mobile-small' : '';
    return (
        <div className="progressbar">
            <div className={`progressbar__label ${smallLabelClass}`}>{props.label}</div>
            <div className="progressbar__bar">
                <div className="progressbar__filled" style={{ width: `${props.percentage}%` }}>
                    <div className="progressbar__percentage-label">{props.percentage}%</div>
                </div>
                <div className="progressbar__empty" style={{ width: `${100 - props.percentage}%` }} />
            </div>
        </div>
    );
};

export default ProgressBar;
