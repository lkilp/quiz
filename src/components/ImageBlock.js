import React from 'react';
import './ImageBlock.scss';

import netherlands from '../assets/pictures/netherlands-pexels-photo-952632.jpeg';
import IntroBlock from './IntroBlock';
import PageSlider from './PageSlider';

const ImageBlock = () => {
    const style = {
        backgroundImage: `url(${netherlands})`,
    };

    return (
        <div className="ImageBlock" style={style}>
            <PageSlider />
        </div>
    )
}

export default ImageBlock;