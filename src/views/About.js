import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Paragraph from '../components/Paragraph';
import Placeholder from '../components/Placeholder';
import Linker from '../components/Linker';
import getText from '../assets/data/text';

const stringToParagraph = (string) => string.split('\n').map((el, id) => <Paragraph key={id}>{el}</Paragraph>);

const About = () => {
    return (
        <section className={`section-about section--dark section--col-tab-wrap`} name="section-about">
            <Linker type="light" />
            <div className="col-1-of-3 col-1-of-3--tab-wrap">
                <Placeholder width="100%" height="100%" />
            </div>
            <div className="col-2-of-3 col-2-of-3--tab-wrap u-b-margin-left">
                <SectionTitle>About</SectionTitle>
                {stringToParagraph(getText('EN').about)}
            </div>
        </section>
    );
};

export default About;
