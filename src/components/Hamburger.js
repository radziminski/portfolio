import React, { Component, createRef } from 'react';
import Moveit from '../vendors/Moveit';
export class Hamburger extends Component {
    top = createRef();
    middle = createRef();
    bottom = createRef();
    duration = 0.6;
    timing = 'cubic-bezier(0.7, 0, 0.3, 1)';
    state = {
        opened: false
    };

    componentDidMount() {
        Moveit.put(this.top.current, {
            start: '0%',
            end: '14%'
        });
        Moveit.put(this.bottom.current, {
            start: '0%',
            end: '6%'
        });
        Moveit.put(this.middle.current, {
            start: '30%',
            end: '100%'
        });
    }

    onOpen = () => {
        Moveit.animate(this.top.current, {
            start: '76%',
            end: '94%',
            duration: this.duration,
            delay: 0,
            timing: this.timing
        });
        Moveit.animate(this.bottom.current, {
            start: '81%',
            end: '95%',
            duration: this.duration,
            delay: 0,
            timing: this.timing
        });
        Moveit.animate(this.middle.current, {
            start: '50%',
            end: '50%',
            duration: this.duration,
            delay: 0,
            timing: this.timing
        });
    };

    onClose = () => {
        Moveit.animate(this.top.current, {
            start: '0%',
            end: '14%%',
            duration: this.duration,
            delay: 0,
            timing: this.timing
        });
        Moveit.animate(this.bottom.current, {
            start: '0%',
            end: '6%',
            duration: this.duration,
            delay: 0,
            timing: this.timing
        });
        Moveit.animate(this.middle.current, {
            start: '30%',
            end: '100%',
            duration: this.duration,
            delay: 0,
            timing: this.timing
        });
    };

    toggleOpen = () => {
        if (this.state.opened) this.onClose();
        else this.onOpen();
        this.setState({ opened: !this.state.opened });
    };

    render() {
        return (
            <div className="hamburger" onClick={this.toggleOpen}>
                <svg width="100px" height="150px">
                    <path
                        ref={this.top}
                        d="M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80"
                        className="hamburger__path"
                    ></path>
                    <path ref={this.middle} d="M 30 52 L 70 52" className="hamburger__path"></path>
                    <path
                        ref={this.bottom}
                        d="M 70 64 L 30 64 C 10 64 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20"
                        className="hamburger__path"
                    ></path>
                </svg>
            </div>
        );
    }
}

export default Hamburger;
