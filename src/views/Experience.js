import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Linker from '../components/Linker';
import Timeline from '../components/Timeline';
import expEN from '../assets/data/eduAndExpEN';
import expPL from '../assets/data/eduAndExpPL';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import getText from '../assets/data/text';

const Experience = ({ language }) => {
    let exp = expEN;
    if (language === 'PL') exp = expPL;
    return (
        <section className="section-experience section--light" name="section-experience">
            <Linker type="dark" />
            <SectionTitle>
                {getText(language).sectionTitles.experience} <MdKeyboardArrowDown className="title-icon" />
            </SectionTitle>
            <Timeline points={exp} language={language} />
            <div className="u-right">
                <SectionTitle>
                    {getText(language).sectionTitles.education} <MdKeyboardArrowUp className="title-icon" />
                </SectionTitle>
            </div>
        </section>
    );
};

export default Experience;
