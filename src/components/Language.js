import React from 'react';

const Language = ({ language, toggleLanguage, type = null }) => {
    let className = type || 'language';

    if (language === 'EN')
        return (
            <div className={className}>
                <button className={`${className}__btn ${className}__btn--selected`}>EN</button> {type ? '' : '|'}{' '}
                <button className={`${className}__btn`} onClick={toggleLanguage}>
                    PL
                </button>
            </div>
        );
    return (
        <div className={className}>
            <button className={`${className}__btn`} onClick={toggleLanguage}>
                EN
            </button>{' '}
            {type ? '' : '|'} <button className={`${className}__btn ${className}__btn--selected`}>PL</button>
        </div>
    );
};

export default Language;
