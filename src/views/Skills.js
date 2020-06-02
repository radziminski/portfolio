import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Subtitle from '../components/Subtitle';
import ProgressBar from '../components/ProgressBar';
import { mainSkills, sideSkills } from '../assets/data/skills';
import Linker from '../components/Linker';
import getText from '../assets/data/text';

const Skills = ({ language }) => {
    const webBars = mainSkills.map((el, i) => {
        if (el.type !== 'web') return null;
        return <ProgressBar key={i} percentage={el.percentage} label={el.name} />;
    });

    const otherBars = mainSkills.map((el, i) => {
        if (el.type === 'web') return null;
        if (el.name.length > 15)
            return <ProgressBar key={i} percentage={el.percentage} label={el.name} isTextLong={true} />;
        return <ProgressBar key={i} percentage={el.percentage} label={el.name} />;
    });

    let parentContainerClass = 'section--col u-xx-margin-left';
    let firstChildContainerClass = 'col-1-of-2 u-m-padding-right';
    let midChildContainerClass = 'col-1-of-2 u-m-padding-left';
    let lastChildContainerClass = 'section-skills__others u-xx-margin-left';
    let titleType = 'left';
    let titleCenteringClass = '';
    if (window.innerWidth < 725) {
        parentContainerClass = 'section--row';
        firstChildContainerClass = 'row';
        midChildContainerClass = 'row';
        lastChildContainerClass = 'section-skills__others';
        titleType = 'center';
        titleCenteringClass = 'u-centered';
    }

    return (
        <section className="section-skills section--light" name="section-skills">
            <Linker type="dark" />
            <div className={`section-skills__title ${titleCenteringClass}`}>
                <SectionTitle type={titleType}>{getText(language).sectionTitles.skills}</SectionTitle>
            </div>
            <div className={parentContainerClass}>
                <div className={firstChildContainerClass}>
                    <Subtitle>{getText(language).sectionTitles.skillsSubFirst}:</Subtitle>
                    {webBars}
                </div>
                <div className={midChildContainerClass}>
                    <Subtitle>{getText(language).sectionTitles.skillsSubSecond}:</Subtitle>
                    {otherBars}
                </div>
            </div>
            <div className={lastChildContainerClass}>
                <span className="u-color-primary u-normal-wordspacing">
                    {getText(language).sectionTitles.skillsSubThird}:{' '}
                </span>
                {sideSkills.join(', ')}
            </div>
        </section>
    );
};

export default Skills;
