import React from 'react';
import './ImageBlock.scss';

import netherlands from '../assets/pictures/netherlands-pexels-photo-952632.jpeg';
import PageSlider from './PageSlider';

const ImageBlock = (props) => {
    const style = {
        backgroundImage: `url(${props.newImage})`,
    };

    return (
        <div className="ImageBlock" style={style}>
        </div>
    )
}

export default ImageBlock;