import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectsBox from '../components/Projects';
import Linker from '../components/Linker';
import getText from '../assets/data/text';

const Projects = () => {
    return (
        <section className="section-projects section--dark" name="section-projects">
            <Linker type="light" />
            <div className="u-centered">
                <SectionTitle type="center">{getText('EN').sectionTitles.projects}</SectionTitle>
            </div>
            <ProjectsBox />
        </section>
    );
};

export default Projects;
