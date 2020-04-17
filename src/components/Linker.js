import React, { Component, Fragment, useRef, createRef } from 'react';

export class Linker extends Component {
    canvas = createRef();

    componentDidMount() {
        // const canvas = this.canvas.current;
        // canvas.width = window.innerWidth;
        // canvas.height = 2 * window.innerHeight;
        // const ctx = canvas.getContext('2d');
        // ctx.beginPath();
        // ctx.moveTo(60, 0);
        // ctx.lineTo(60, window.innerHeight - 50);
        // ctx.strokeStyle = '#555';
        // const radius = 50;
        // ctx.arcTo(60, window.innerHeight + 50, 220, window.innerHeight + 50, 50);
        // ctx.lineTo(window.innerWidth - 60, window.innerHeight + 150);
        // ctx.stroke();
    }

    render() {
        return (
            <Fragment>
                <div className="linker">
                    <div className="linker__line" />
                    <div className="linker__line" />
                </div>
                <canvas ref={this.canvas}></canvas>
            </Fragment>
        );
    }
}

export default Linker;
