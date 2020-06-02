import React from 'react';

const Language = ({ language, toggleLanguage }) => {
    if (language === 'EN')
        return (
            <div className="language">
                <button className="language__btn language__btn--selected">EN</button> |{' '}
                <button className="language__btn" onClick={toggleLanguage}>
                    PL
                </button>
            </div>
        );
    return (
        <div className="language">
            <button className="language__btn" onClick={toggleLanguage}>
                EN
            </button>{' '}
            | <button className="language__btn language__btn--selected">PL</button>
        </div>
    );
};

export default Language;
