import React from 'react';
import { Link } from 'react-scroll';

const Btn = (props) => {
    if (props.form) {
        return (
            <button type="submit" className={`btn ${props.type ? 'btn--' + props.type : ''}`} onClick={props.onClick}>
                {props.children}
            </button>
        );
    }

    if (props.linkTo) {
        return (
            <Link activeClass="active" to={props.linkTo} spy={true} smooth={true} offset={-130} duration={500}>
                <button
                    type="submit"
                    className={`btn ${props.type ? 'btn--' + props.type : ''}`}
                    onClick={props.onClick}
                >
                    {props.children}
                </button>
            </Link>
        );
    }

    return (
        <button className={`btn ${props.type ? 'btn--' + props.type : ''}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Btn;
