import React from 'react';
import './IntroBlock.scss';

const IntroBlock = () => {
    return (
        <div className="IntroBlock">
            <div className="introBlockContent">
                <div clasName="introBlockText">
                    <h1>Hallo! Welkom!</h1>
                    <h2>Find out how well you know the Netherlands.</h2>
                </div>
                <button class="startButton">START</button>
            </div>
            
        </div>
    )
}

export default IntroBlock;