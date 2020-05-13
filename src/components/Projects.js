import React, { Component } from 'react';
import projects from '../assets/data/projects';
import TwoSideCard from './TwoSideCard';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact, DiMongodb, DiFirebase } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';
import Btn from './Btn';

class Projects extends Component {
    maxCardsNum = 6;
    state = {
        showCardsNum: this.maxCardsNum,
        currFilter: null,
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
        if (e.target.id === 'all' || e.target.id === this.state.currFilter) this.setState({ currFilter: null });
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

        if (this.state.currFilter) {
            filteredProjects = filteredProjects.filter((el) => el.stack.includes(this.state.currFilter));
        }

        const initLength = filteredProjects.length;

        filteredProjects = filteredProjects.slice(0, this.state.showCardsNum);
        const cards = filteredProjects.map((el, i) => (
            <TwoSideCard
                key={i}
                title={el.title}
                subTitle={el.subTitle}
                description={el.description}
                githubLink={el.githubLink}
                liveLink={el.liveLink}
                icons={el.stack.map((el) => this.getTechIcon(el))}
            />
        ));

        let loadMoreBtn = (
            <div className="projects__btn ">
                <Btn onClick={this.loadMore} type="ghost">
                    Load more
                </Btn>
            </div>
        );

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
                <ul className="projects__filter" onClick={this.filter}>
                    <li className={this.getFilterBtnClass(null)} id="all">
                        All
                    </li>
                    <li className={this.getFilterBtnClass('html')} id="html">
                        HTML&nbsp;|&nbsp;CSS
                    </li>
                    <li className={this.getFilterBtnClass('js')} id="js">
                        Javascript
                    </li>
                    <li className={this.getFilterBtnClass('react')} id="react">
                        React&nbsp;|&nbsp;Redux
                    </li>
                    <li className={this.getFilterBtnClass('nodejs')} id="nodejs">
                        Node.JS
                    </li>
                    <li className={this.getFilterBtnClass('other')} id="other">
                        Others
                    </li>
                </ul>
                <div className="projects__container">{cards}</div>
                {loadMoreBtn}
            </div>
        );
    }
}

export default Projects;
