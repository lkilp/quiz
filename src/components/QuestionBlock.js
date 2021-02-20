import React from 'react';

import { useDispatch } from 'react-redux';

import { incrementCorrect, incrementIncorrect } from '../store/score';

import './QuestionBlock.scss';

const QuestionBlock = (props) => {
    const  dispatch = useDispatch();
    const answerClick = (answer) => {
        if(answer.correct) {
            dispatch(incrementCorrect());
        } else {
            dispatch(incrementIncorrect());
        }
        props.goToNextScreen();
    }
    return (
        <div className="QuestionBlock">
            <h1>{props.question.text}</h1>
            {
                props.question.answers.map((answer,i) => {
                    const id = 'answer-'+i;
                    return (
                        <div className="answer" key={id} id={id} onClick={() => answerClick(answer)} >
                            {answer.text}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuestionBlock;