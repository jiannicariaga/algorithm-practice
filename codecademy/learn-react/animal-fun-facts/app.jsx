import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const background = (
  <img
    className='background'
    src='/images/ocean.jpg'
    alt='ocean' />
);
const showBackground = true;
const displayFact = e => {
  const animal = animals[e.target.alt];
  const index = Math.floor(Math.random() * animal.facts.length);
  const fact = animal.facts[index];
  document.getElementById('fact').innerHTML = fact;
};
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      src={animals[animal].image}
      alt={animal}
      aria-label={animal}
      role='button'
      onClick={displayFact} />
  );
}

const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact'}</h1>
    {showBackground && background}
    <div className='animals'>
      {images}
    </div>
    <p id='fact' />
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));
