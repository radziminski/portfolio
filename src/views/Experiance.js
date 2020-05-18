import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Linker from '../components/Linker';
import Timeline from '../components/Timeline';
import exp from '../assets/data/eduAndExp';

const Experiance = () => {
    return (
        <section className="section-experiance section--light">
            <Linker type="dark" />
            <SectionTitle>Experiance</SectionTitle>
            <Timeline points={exp} />
            <div className="u-right">
                <SectionTitle>Education</SectionTitle>
            </div>
        </section>
    );
};

export default Experiance;
