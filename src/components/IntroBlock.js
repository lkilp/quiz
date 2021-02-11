import React from 'react';
import Button from './Button';
import './IntroBlock.scss';

const IntroBlock = () => {
    return (
        <div className="IntroBlock">
            <div className="introBlockContent">
                <div className="introBlockText">
                    <h1>Hallo! Welkom!</h1>
                    <h2>Find out how well you know the Netherlands.</h2>
                </div>
                <Button />
            </div>
            
        </div>
    )
}

export default IntroBlock;