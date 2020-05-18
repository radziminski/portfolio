import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Paragraph from '../components/Paragraph';
import Placeholder from '../components/Placeholder';
import Linker from '../components/Linker';

const About = () => {
    return (
        <section className={`section-about section--dark section--col-tab-wrap`}>
            <Linker type="light" />
            <div className="col-1-of-3 col-1-of-3--tab-wrap">
                <Placeholder width="100%" height="100%" />
            </div>
            <div className="col-2-of-3 col-2-of-3--tab-wrap u-b-margin-left">
                <SectionTitle>About</SectionTitle>
                <Paragraph>
                    Laborum officia veniam voluptate commodo est excepteur dolore pariatur voluptate elit tempor. Irure
                    qui nostrud culpa tempor tempor.
                </Paragraph>
                <Paragraph>
                    In in veniam eiusmod labore culpa nostrud ea. Labore laboris tempor dolor in exercitation id
                    voluptate veniam qui quis. Culpa ad mollit nulla nostrud ullamco eu non ea qui commodo commodo anim.
                    Tempor pariatur enim culpa cupidatat qui adipisicing anim deserunt laborum
                </Paragraph>
                <Paragraph>
                    In in veniam eiusmod labore culpa nostrud ea. Labore laboris tempor dolor in exercitation id
                    voluptate veniam qui quis. Culpa ad mollit nulla nostrud ullamco eu non ea.
                </Paragraph>
            </div>
        </section>
    );
};

export default About;
