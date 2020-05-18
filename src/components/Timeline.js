import React, { Fragment } from 'react';

const Timeline = (props) => {
    return (
        <div className="timeline">
            {props.points.map((el, i) => {
                let classNameCircle = 'timeline__point-circle';
                let classNameText = 'timeline__point-text';
                let classNameLabel = 'timeline__point-label';
                if (i === 0) classNameCircle = 'timeline__point-circle timeline__point-circle--start';
                if (i % 2 === 1) {
                    classNameText = 'timeline__point-text timeline__point-text--left';
                    classNameLabel = 'timeline__point-label timeline__point-label--left';
                }
                let line = null;
                if (i < props.points.length - 1) line = <div className="timeline__line"></div>;
                return (
                    <Fragment key={i}>
                        <div className="timeline__point">
                            <div className={classNameCircle}></div>
                            <div className={classNameText}>
                                <div className="timeline__point-dates">
                                    {el.start} - {el.end}
                                </div>
                                <p className={classNameLabel}>{el.description}</p>
                            </div>
                        </div>
                        {line}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Timeline;
