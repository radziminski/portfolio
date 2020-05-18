import React from 'react';

const MobileNavIcon = ({ onClick, active }) => {
    const className = !active ? 'mobile-nav-icon' : 'mobile-nav-icon mobile-nav-icon--active';
    return (
        <div className={className} onClick={onClick}>
            <div className="mobile-nav-icon__bar" />
            <div className="mobile-nav-icon__bar" />
            <div className="mobile-nav-icon__bar" />
        </div>
    );
};

export default MobileNavIcon;
