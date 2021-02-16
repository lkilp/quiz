import React, { useState } from 'react';

import './App.scss';
import ImageBlock from './components/ImageBlock';
import PageSlider from './components/PageSlider';
import createScreens from './create-screens';

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
