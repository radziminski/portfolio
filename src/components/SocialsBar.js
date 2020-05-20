import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import ExternalLink from '../components/ExternalLink';

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
                <li className="socials-bar__element">
                    <ExternalLink linkTo="https://www.facebook.com/jradziminski" label="Facebook">
                        <FaFacebookF />
                    </ExternalLink>
                </li>
                <li className="socials-bar__element">
                    <ExternalLink linkTo="https://www.instagram.com/jradziminski/" label="Instagram">
                        <FiInstagram />
                    </ExternalLink>
                </li>
                <li className="socials-bar__element">
                    <ExternalLink linkTo="https://www.linkedin.com/in/jan-radzimi%C5%84ski-860707162/" label="Linkedin">
                        <AiOutlineLinkedin />
                    </ExternalLink>
                </li>
                <li className="socials-bar__element">
                    <ExternalLink linkTo="https://github.com/radziminski" label="Github">
                        <AiFillGithub />
                    </ExternalLink>
                </li>
            </ul>
        </div>
    );
};

export default SocialsBar;
