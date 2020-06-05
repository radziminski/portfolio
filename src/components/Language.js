import React from 'react';

const Language = ({ language, toggleLanguage, type }) => {
    let className = type || 'language';
    if (type === 'mobile') {
    }
    if (language === 'EN')
        return (
            <div className={className}>
                <button className={`${className}__btn ${className}__btn--selected`}>EN</button> |{' '}
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
            | <button className={`${className}__btn ${className}__btn--selected`}>PL</button>
        </div>
    );
};

export default Language;
