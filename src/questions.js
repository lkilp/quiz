import carrots from './assets/pictures/carrots-pexels-photo-3650647.jpeg';
import animal from './assets/pictures/animal-bull-landscape-nature-mammal-139399.jpeg';
import bicycles from './assets/pictures/bicycles-pexels-photo-861014.jpeg';
import bridges from './assets/pictures/bridges-pexels-photo-2031706.jpeg';
import cheese from './assets/pictures/cheese-pexels-photo-5732760.jpeg';
import gin from './assets/pictures/gin-pexels-photo-2559722.jpeg';
import kisses from './assets/pictures/kisses-pexels-photo-3935572.jpeg';

import sea from './assets/pictures/sea-pexels-photo-1298684.jpeg';
import shoes from './assets/pictures/shoes-wood-tree-holland-615328.jpeg';
import tulips from './assets/pictures/tulips-pexels-photo-4278124.jpeg';

const createQuestion = (question, answerValues, image) => ({
  text: question,
  answers: answerValues.map((answer,i) => {
      let correct = false;
      if (i === 0) {
          correct = true;
      }
      return {
          correct,
          text: answer.toString(),
      }
  }),
  image,
})

const questions = [
  createQuestion('Orange carrots were bred in the Netherlands in the 16th century in honour of the house of Orange. Before then they were…',
    [ 'white, yellow, black, purple or red',
      'brown, yellow, black or purple',
      'brown, yellow, green, purple or red',
      'white, yellow, purple or red' ],
    carrots,
  ),
  createQuestion('How many bridges does Amsterdam have?',
    [ 1281,
      1171,
      1431,
      988 ],
    bridges,
  ),
  createQuestion('The Netherlands is the only country with a national…',
    [ 'dog',
      'cat',
      'cow',
      'wolf' ],
  animal,
  ),
  createQuestion('How much of the Dutch territory is below the sea level?',
    [ '1/3',
      '1/4',
      '1/2',
      '1/6' ],
  sea,
  ),
  createQuestion('What type of tree were the wooden shoes traditionally made of?',
    [ 'willow',
      'birch',
      'cherry',
      'apple' ],
  shoes,
  ),
  createQuestion('Where do tulips originate from?',
    [ 'Turkey',
      'The Netherlands',
      'India',
      'Venezuela' ],
  tulips,
  ),
  createQuestion('How many bicycles is the Netherlands a home to?',
    [ 'over 22 million',
      'over 13 million',
      'over 34 million',
      'over 28 million' ],
  bicycles,
  ),
  createQuestion('Who invented gin',
    [ 'The Dutch',
      'The English',
      'The Irish',
      'The Scottish' ],
  gin,
  ),
  createQuestion('How much cheese do the Dutch people eat on average per person per year?',
    [ '14.3 kilos',
      '7.8 kilos',
      '18.7 kilos', 
      '9.8 kilos' ],
  cheese,
  ),
  createQuestion('How many kisses do the Dutch greet each-other with?',
    [ 3,
      1,
      2,
      4 ],
  kisses,
  ),
];

export default questions;