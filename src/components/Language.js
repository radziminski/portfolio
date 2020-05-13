import React from 'react';

const Language = () => {
    return (
        <div className="language">
            <button className="language__btn language__btn--selected">EN</button> |{' '}
            <button className="language__btn">PL</button>
        </div>
    );
};

export default Language;
