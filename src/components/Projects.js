import React, { Component } from 'react';
import projects from '../assets/data/projects';
import TwoSideCard from './TwoSideCard';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact, DiMongodb, DiFirebase } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';
import Btn from './Btn';
import SelectInput from './SelectInput';

const filterOptions = [
    {
        id: 'all',
        name: 'All',
    },
    {
        id: 'html',
        name: 'HTML | CSS',
    },
    {
        id: 'js',
        name: 'Javascript',
    },
    {
        id: 'react',
        name: 'React | Redux',
    },
    {
        id: 'nodejs',
        name: 'Node.JS',
    },
    {
        id: 'other',
        name: 'Others',
    },
];

class Projects extends Component {
    getMaxCardsNum = () => {
        if (window.innerWidth <= 600) return 3;
        if (window.innerWidth <= 900) return 4;
        return 6;
    };

    state = {
        showCardsNum: this.getMaxCardsNum(),
        currFilter: 'all',
    };

    getTechIcon = (tech) => {
        switch (tech) {
            case 'html':
                return <AiFillHtml5 />;
            case 'css':
                return <DiCss3 />;
            case 'js':
                return <DiJavascript1 />;
            case 'react':
                return <DiReact />;
            case 'redux':
                return null;
            case 'nodejs':
                return <FaNode />;
            case 'mongodb':
                return <DiMongodb />;
            case 'firebase':
                return <DiFirebase />;
            default:
                return null;
        }
    };

    filter = (e) => {
        if (!e.target.id) return;
        if (e.target.id === this.state.currFilter) this.setState({ currFilter: 'all' });
        else this.setState({ currFilter: e.target.id });
    };

    loadMore = () => {
        this.setState({ showCardsNum: this.state.showCardsNum + 3 });
    };

    getFilterBtnClass = (name) => {
        if (this.state.currFilter === name) return 'projects__filter-btn projects__filter-btn--active';
        return 'projects__filter-btn';
    };

    render() {
        let filteredProjects = [...projects];

        if (this.state.currFilter && this.state.currFilter !== 'all') {
            filteredProjects = filteredProjects.filter((el) => el.stack.includes(this.state.currFilter));
        }

        const initLength = filteredProjects.length;

        filteredProjects = filteredProjects.slice(0, this.state.showCardsNum);
        const cards = filteredProjects.map((el, i) => {
            return (
                <TwoSideCard
                    key={i}
                    title={el.title}
                    subTitle={el.subTitle}
                    description={el.description}
                    githubLink={el.githubLink}
                    liveLink={el.liveLink}
                    icons={el.stack.map((el) => this.getTechIcon(el))}
                />
            );
        });

        let loadMoreBtn = (
            <div className="projects__btn ">
                <Btn onClick={this.loadMore} type="ghost">
                    Load more
                </Btn>
            </div>
        );

        let projectFilter = (
            <ul className="projects__filter" onClick={this.filter}>
                {filterOptions.map((el, id) => (
                    <li key={id} className={this.getFilterBtnClass(el.id)} id={el.id}>
                        {el.name}
                    </li>
                ))}
            </ul>
        );

        if (window.innerWidth < 600) {
            projectFilter = (
                <div className="u-centered u-m-margin-top">
                    <SelectInput title="Filter" list={filterOptions} filter={this.filter} />
                </div>
            );
        }

        if (filteredProjects.length === initLength) {
            loadMoreBtn = (
                <div className="projects__btn projects__btn">
                    <Btn onClick={this.loadMore} type="ghost-off">
                        Load more
                    </Btn>
                </div>
            );
        }

        return (
            <div className="projects">
                {projectFilter}
                <div className="projects__container">{cards}</div>
                {loadMoreBtn}
            </div>
        );
    }
}

export default Projects;
