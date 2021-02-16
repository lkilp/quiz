import React from 'react';
import './QuestionBlock.scss';

const QuestionBlock = (props) => {
    return (
        <div className="QuestionBlock">
            <h1>{props.question.text}</h1>
            {
                props.question.answers.map((answer,i) => {
                    const id = 'answer-'+i;
                    return (
                        <div className="answer" onClick={props.goToNextScreen} >
                            {answer}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuestionBlock;