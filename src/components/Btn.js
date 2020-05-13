import React from 'react';

const Btn = (props) => {
    if (props.form) {
        return (
            <button type="submit" className={`btn ${props.type ? 'btn--' + props.type : ''}`} onClick={props.onClick}>
                {props.children}
            </button>
        );
    }

    return (
        <button className={`btn ${props.type ? 'btn--' + props.type : ''}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Btn;
