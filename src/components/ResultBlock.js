import React from 'react';
import Button from './Button';
import './ResultBlock.scss';

const ResultBlock = () => {
    return (
        <div className="ResultBlock">
            <h1>Well done!</h1>
            <h2>You got <strong>100%</strong></h2>
            <h2>You are the Netherlands expert!</h2>
            <Button title="TRY AGAIN "/>
        </div>
    )
}

export default ResultBlock;