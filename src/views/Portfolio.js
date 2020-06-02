import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectsBox from '../components/Projects';
import Linker from '../components/Linker';
import getText from '../assets/data/text';

const Projects = ({ language }) => {
    return (
        <section className="section-projects section--dark" name="section-projects">
            <Linker type="light" />
            <div className="u-centered">
                <SectionTitle type="center">{getText(language).sectionTitles.projects}</SectionTitle>
            </div>
            <ProjectsBox language={language} />
        </section>
    );
};

export default Projects;
