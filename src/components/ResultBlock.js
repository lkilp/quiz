import React from 'react';
import Button from './Button';
import './ResultBlock.scss';

const ResultBlock = (props) => {
    return (
        <div className="ResultBlock">
            <h1>Well done!</h1>
            <h2>You got <strong>100%</strong></h2>
            <h2>You are the Netherlands expert!</h2>
            <Button title="TRY AGAIN " onClick={props.goToNextScreen} />
        </div>
    )
}

export default ResultBlock;