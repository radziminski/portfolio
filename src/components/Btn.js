import React from 'react';

const Btn = (props) => {
    return (
        <button className={`btn ${props.type ? 'btn--' + props.type : ''}`}>
            {props.children}
        </button>
    );
};

export default Btn;
