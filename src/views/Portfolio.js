import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectsBox from '../components/Projects';

const Projects = () => {
    return (
        <section className="section-projects section--dark">
            <div className="u-centered">
                <SectionTitle type="centered">Projects</SectionTitle>
            </div>
            <ProjectsBox />
        </section>
    );
};

export default Projects;
