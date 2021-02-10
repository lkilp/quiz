import React from 'react';
import './IntroBlock.scss';

const IntroBlock = () => {
    return (
        <div className="IntroBlock">
            <div className="introBlockContent">
                <div className="introBlockText">
                    <h1>Hallo! Welkom!</h1>
                    <h2>Find out how well you know the Netherlands.</h2>
                </div>
                <button className="startButton">
                    <span>START </span>
                </button>
            </div>
            
        </div>
    )
}

export default IntroBlock;