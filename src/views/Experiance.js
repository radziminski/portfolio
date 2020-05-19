import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Linker from '../components/Linker';
import Timeline from '../components/Timeline';
import exp from '../assets/data/eduAndExp';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Experiance = () => {
    return (
        <section className="section-experiance section--light" name="section-experiance">
            <Linker type="dark" />
            <SectionTitle>
                Experiance <MdKeyboardArrowDown className="title-icon" />
            </SectionTitle>
            <Timeline points={exp} />
            <div className="u-right">
                <SectionTitle>
                    Education <MdKeyboardArrowUp className="title-icon" />
                </SectionTitle>
            </div>
        </section>
    );
};

export default Experiance;
