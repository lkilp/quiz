import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';


import './App.scss';
import ImageBlock from './components/ImageBlock';
import PageSlider from './components/PageSlider';
import createScreens from './create-screens';
import { selectCorrect, selectIncorrect, reset } from './store/score';


const App = () => {
  const correct = useSelector(selectCorrect);
  const incorrect = useSelector(selectIncorrect);
  const dispatch = useDispatch();

  const [newScreenIndex, setNewScreenIndex] = useState(0);

  const goToNextScreen = () => {
    if (newScreenIndex === 0 || newScreenIndex === screens.length - 1) {
      dispatch(reset());
      setNewScreenIndex(1);
    } else {
      setNewScreenIndex(newScreenIndex + 1);
    }
  }

  const screens = createScreens(goToNextScreen, { correct, incorrect});
  const newScreen = screens[newScreenIndex];


  return (
    <div className="App">
      <ImageBlock newImage={newScreen.image} />
      <PageSlider newPage={newScreen.page} />
    </div>
  );
}

export default App;
