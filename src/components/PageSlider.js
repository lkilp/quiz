import React from 'react';
import './PageSlider.scss';

const PageSlider = (props) => {
    const { newPage } = props;
    return (
        <div className="PageSlider">
            <div className="page">
                {newPage}
            </div>
        </div>
    )
}

export default PageSlider;