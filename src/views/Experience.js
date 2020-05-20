import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Linker from '../components/Linker';
import Timeline from '../components/Timeline';
import exp from '../assets/data/eduAndExp';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import getText from '../assets/data/text';

const Experience = () => {
    return (
        <section className="section-experience section--light" name="section-experience">
            <Linker type="dark" />
            <SectionTitle>
                {getText('EN').sectionTitles.experience} <MdKeyboardArrowDown className="title-icon" />
            </SectionTitle>
            <Timeline points={exp} />
            <div className="u-right">
                <SectionTitle>
                    {getText('EN').sectionTitles.education} <MdKeyboardArrowUp className="title-icon" />
                </SectionTitle>
            </div>
        </section>
    );
};

export default Experience;
