import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Paragraph from '../components/Paragraph';
import Linker from '../components/Linker';
import getText from '../assets/data/text';
import SelfPhoto from '../components/SelfPhoto';

const stringToParagraph = (string) => string.split('\n').map((el, id) => <Paragraph key={id}>{el}</Paragraph>);

const About = () => {
    return (
        <section className={`section-about section--dark section--col-tab-wrap`} name="section-about">
            <Linker type="light" />
            <div className="col-1-of-3 col-1-of-3--tab-wrap u-flex-center">
                <SelfPhoto />
            </div>
            <div className="col-2-of-3 col-2-of-3--tab-wrap u-b-margin-left">
                <SectionTitle>{getText('EN').sectionTitles.about}</SectionTitle>
                {stringToParagraph(getText('EN').about)}
            </div>
        </section>
    );
};

export default About;
