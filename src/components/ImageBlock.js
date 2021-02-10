import React from 'react';
import './ImageBlock.scss';

import netherlands from '../assets/pictures/netherlands-pexels-photo-952632.jpeg';

const ImageBlock = () => {
    return (
        <div className="ImageBlock">
            <img alt="" src={netherlands} />
        </div>
    )
}

export default ImageBlock;