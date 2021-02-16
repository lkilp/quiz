import React from 'react';
import IntroBlock from './IntroBlock';

import './PageSlider.scss';
import QuestionBlock from './QuestionBlock';
import ResultBlock from './ResultBlock';

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