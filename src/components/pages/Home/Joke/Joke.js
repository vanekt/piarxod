import React, { useEffect, useState } from 'react';
import styles from './Joke.module.scss';

const defaultJoke = `В глубине эдемских рощ отродясь не знали тёщ. Вот поэтому тот край назывался просто — рай.`;

export default () => {
  const [joke, setJoke] = useState('Загрузка...');

  const loadNewJoke = () => {
    fetch('https://urnpr.ciroue.com')
      .then(resp => resp.json())
      .then(j => setJoke(j.content))
      .catch(e => {
        console.warn('Joke loading failure', e);
        setJoke(defaultJoke);
      });
  };

  useEffect(loadNewJoke, []);

  return (
    <div className={styles.joke}>
      <h3>Анекдот дня!</h3>
      <p>{joke}</p>
      <img
        onClick={loadNewJoke}
        className={styles.smile}
        src={`${process.env.PUBLIC_URL}img/smile/1x.png`}
        srcSet={`
          ${process.env.PUBLIC_URL}img/smile/1x.png 1x,
          ${process.env.PUBLIC_URL}img/smile/2x.png 2x`}
        alt="smile"
        title="Смайл"
      />
    </div>
  );
};
