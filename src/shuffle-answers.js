import { shuffle } from 'shufflr';

const shuffleAnswers = (questions) => {
    const newQuestions = questions.map(question => {
        const newQuestion = {};
        newQuestion.text = question.text;
        newQuestion.image = question.image;
        newQuestion.answers = shuffle(question.answers);
        return newQuestion;

    });
    return newQuestions;
}

export default shuffleAnswers;