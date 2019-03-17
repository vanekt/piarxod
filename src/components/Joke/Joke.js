import React from 'react';
import styles from './Joke.module.scss';

export default () => (
  <div className={styles.joke}>
    <h3>Анекдот дня!</h3>
    <p>
      В глубине эдемских рощ отродясь не знали тёщ. Вот поэтому тот край назывался просто — рай.
    </p>
    <img
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
