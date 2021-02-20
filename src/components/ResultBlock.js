import React from 'react';
import Button from './Button';
import './ResultBlock.scss';

const ResultBlock = (props) => {
    const { correct, incorrect } = props;
    const result = Math.round(correct / ( correct + incorrect) * 100);
    const message = () => {
        if (result <= 20) {
            return 'Flapdrol! You should really try again ehh...';
        } 
        if (result <= 40) {
            return 'Pannenkoek! I really expected more from you...';
        }
        if (result <= 60) {
            return 'Halve bak! I can see you are trying...';
        }
        if (result <= 80) {
            return 'Toppertje Kate! You are really getting there...'
        }
        return 'Helemaal perfect mooi! You are the Netherlands expert!';
    }
    return (
        <div className="ResultBlock">
            <h1>Well done!</h1>
            <h2>You got <strong>{result}%</strong></h2>
            <h2>{message()}</h2>
            <Button title="TRY AGAIN " onClick={props.goToNextScreen} />
        </div>
    )
}

export default ResultBlock;