import IntroBlock from './components/IntroBlock';
import QuestionBlock from './components/QuestionBlock';
import ResultBlock from './components/ResultBlock';
import questions from './questions.js';

import netherlands from './assets/pictures/netherlands-pexels-photo-952632.jpeg';



const createScreen = (page, image) => ({
    page,
    image,
  })
  
  const createScreens = (goToNextScreen, { correct, incorrect }) => {
    const screens = [];
    screens.push(createScreen(<IntroBlock goToNextScreen={goToNextScreen} />, netherlands));
    questions.forEach(question => {
      screens.push(createScreen(<QuestionBlock goToNextScreen={goToNextScreen} question={question}  />, question.image));
    })
    screens.push(createScreen(<ResultBlock
        correct={correct}
        incorrect={incorrect}
        goToNextScreen={goToNextScreen} />, netherlands));
    return screens;
  }

  
  export default createScreens;