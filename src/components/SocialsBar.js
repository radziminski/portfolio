import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';

const SocialsBar = (props) => {
    let listClass =
        (props.type === 'horizontal'
            ? 'socials-bar__list socials-bar__list--horizontal'
            : 'socials-bar__list socials-bar__list--vertical') +
        ' ' +
        props.className;
    return (
        <div className="socials-bar">
            <ul className={listClass}>
                <a href="/">
                    <li className="socials-bar__element">
                        <FaFacebookF />
                    </li>
                </a>
                <a href="/">
                    <li className="socials-bar__element">
                        <FiInstagram />
                    </li>
                </a>
                <a href="/">
                    <li className="socials-bar__element">
                        <AiOutlineLinkedin />
                    </li>
                </a>
                <a href="/">
                    <li className="socials-bar__element">
                        <AiFillGithub />
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialsBar;
