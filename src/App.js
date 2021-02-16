import React, { useState } from 'react';

import './App.scss';
import ImageBlock from './components/ImageBlock';
import IntroBlock from './components/IntroBlock';
import PageSlider from './components/PageSlider';
import QuestionBlock from './components/QuestionBlock';
import ResultBlock from './components/ResultBlock';
import questions from './questions.js';


import netherlands from './assets/pictures/netherlands-pexels-photo-952632.jpeg';

const createScreen = (page, image) => ({
  page,
  image,
})

const createScreens = (goToNextScreen) => {
  const screens = [];
  screens.push(createScreen(<IntroBlock goToNextScreen={goToNextScreen} />, netherlands));
  questions.forEach(question => {
    screens.push(createScreen(<QuestionBlock goToNextScreen={goToNextScreen} question={question}  />, question.image));
  })
  screens.push(createScreen(<ResultBlock goToNextScreen={goToNextScreen} />, netherlands));
  return screens;
}


const App = () => {
  const [newScreenIndex, setNewScreenIndex] = useState(0);

  const goToNextScreen = () => {
    if (newScreenIndex === screens.length - 1) {
      setNewScreenIndex(1);
    } else {
      setNewScreenIndex(newScreenIndex + 1);
    }
  }

  const screens = createScreens(goToNextScreen);
  const newScreen = screens[newScreenIndex];


  return (
    <div className="App">
      <ImageBlock newImage={newScreen.image} />
      <PageSlider newPage={newScreen.page} />
    </div>
  );
}

export default App;
