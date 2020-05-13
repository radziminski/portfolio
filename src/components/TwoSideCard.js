import React from 'react';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';

const TwoSideCard = (props) => {
    let buttons = (
        <div className="two-side-card__links">
            <a href={props.githubLink} className="two-side-card__link">
                <FaGithub className="two-side-card__link-icon" />
            </a>
        </div>
    );
    if (props.liveLink) {
        buttons = (
            <div className="two-side-card__links">
                <a href={props.githubLink} className="two-side-card__link" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="two-side-card__link-icon" />
                </a>
                <a href={props.liveLink} className="two-side-card__link" target="_blank" rel="noopener noreferrer">
                    <FaPlayCircle className="two-side-card__link-icon" />
                </a>
            </div>
        );
    }

    const icons = props.icons.map((el, i) => (
        <div className="two-side-card__icon" key={i}>
            {el}
        </div>
    ));

    let className = 'two-side-card';
    if (props.className) className = 'two-side-card ' + props.className;
    return (
        <div className={className}>
            <div className="two-side-card__title-box">
                <h4 className="two-side-card__title">{props.title}</h4>
                <p className="two-side-card__sub-title">{props.subTitle}</p>
            </div>
            <div className="two-side-card__icons">{icons}</div>
            <p className="two-side-card__description">{props.description}</p>
            {buttons}
        </div>
    );
};

export default TwoSideCard;
