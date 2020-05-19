import React from 'react';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import ExternalLink from '../components/ExternalLink';

const TwoSideCard = (props) => {
    let buttons = (
        <div className="two-side-card__links">
            <ExternalLink linkTo={props.githubLink} className="two-side-card__link" label="Github Repo">
                <FaGithub className="two-side-card__link-icon" />
            </ExternalLink>
        </div>
    );
    if (props.liveLink) {
        buttons = (
            <div className="two-side-card__links">
                <ExternalLink linkTo={props.githubLink} className="two-side-card__link" label="Github Repo">
                    <FaGithub className="two-side-card__link-icon" />
                </ExternalLink>
                <ExternalLink linkTo={props.liveLink} className="two-side-card__link" label="Live Demo">
                    <FaPlayCircle className="two-side-card__link-icon" />
                </ExternalLink>
            </div>
        );
    }

    const icons = props.icons
        .filter((el) => el)
        .map((el, i) => (
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
