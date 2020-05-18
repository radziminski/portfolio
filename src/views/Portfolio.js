import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectsBox from '../components/Projects';
import Linker from '../components/Linker';

const Projects = () => {
    return (
        <section className="section-projects section--dark">
            <Linker type="light" />
            <div className="u-centered">
                <SectionTitle type="center">Projects</SectionTitle>
            </div>
            <ProjectsBox />
        </section>
    );
};

export default Projects;
