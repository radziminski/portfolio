import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Subtitle from '../components/Subtitle';
import ProgressBar from '../components/ProgressBar';
import skills from '../assets/data/skills';
import Linker from '../components/Linker';

const Skills = () => {
    const webBars = skills.map((el, i) => {
        if (el.type !== 'web') return null;
        return <ProgressBar key={i} percentage={el.percentage} label={el.name} />;
    });

    const otherBars = skills.map((el, i) => {
        if (el.type === 'web') return null;
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
        <section className="section-skills section--light">
            <Linker type="dark" />
            <div className={`section-skills__title ${titleCenteringClass}`}>
                <SectionTitle type={titleType}>My Skills</SectionTitle>
            </div>
            <div className={parentContainerClass}>
                <div className={firstChildContainerClass}>
                    <Subtitle>Web Technologies</Subtitle>
                    {webBars}
                </div>
                <div className={midChildContainerClass}>
                    <Subtitle>Other Technologies</Subtitle>
                    {otherBars}
                </div>
            </div>
            <div className={lastChildContainerClass}>
                <span className="u-color-primary u-normal-wordspacing">I have also worked with:</span> git, github,
                webpack, npm, django, c#, ASP.NET, regex, QT, 8051 assembly, Matlab, FL Studio, Pro Tools, Adobe
                Photoshop, Adobe After Effects.
            </div>
        </section>
    );
};

export default Skills;
