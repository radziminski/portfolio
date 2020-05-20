import React from 'react';
import photo from '../assets/img/photo.jpg';

const SelfPhoto = () => {
    return (
        <div className="selfphoto">
            <img src={photo} className="selfphoto__img" alt="Me" />
        </div>
    );
};

export default SelfPhoto;
