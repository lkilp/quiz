import React from 'react';
import './QuestionBlock.scss';

const QuestionBlock = () => {
    return (
        <div className="QuestionBlock">
            <h1>Question</h1>
            <div>
                <input type="radio" id="answer 1" name="answer" />
                <label htmlFor="answer 1">Answer 1</label>
            </div>
            <div>
                <input type="radio" id="answer 2" name="answer" />
                <label htmlFor="answer 2">Answer 2</label>
            </div>
            <div>
                <input type="radio" id="answer 3" name="answer" />
                <label htmlFor="answer 3">Answer 3</label>
            </div>
            <div>
                <input type="radio" id="answer 4" name="answer" />
                <label htmlFor="answer 4">Answer 4</label>
            </div>
        </div>
    )
}

export default QuestionBlock;