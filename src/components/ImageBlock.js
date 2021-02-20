import React from 'react';
import './ImageBlock.scss';

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