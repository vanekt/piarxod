import React, { Fragment } from 'react';
import styles from './Banners.module.scss';

export default () => (
  <Fragment>
    <div className={styles.top}>
      <img
        className={styles.leftPin}
        src={`${process.env.PUBLIC_URL}img/banners/1x.jpg`}
        srcSet={`
          ${process.env.PUBLIC_URL}img/banners/1x.jpg 1x,
          ${process.env.PUBLIC_URL}img/banners/2x.jpg 2x`}
        alt="Баннеры"
      />
    </div>

    <div className={styles.bottom}>
      <div className={styles.redBlock}>
        Баннер должен быть у любой уважаюшей себя компании, если Вы конечно хотите, чтобы у Вас были
        КЛИЕНТЫ!
        <br />
        Если хотите, то Вам определнно к нам! ПиарХод сделает самый запоминающийся и продающий
        баннер, который просто прихлопнет Ваших конкурентов своей эффективностью!
      </div>

      <a href="mailto:pr-khod@mail.ru" className={styles.buttonLink}>
        <div className={styles.button}>
          Получить прекрасный
          <br />
          баннер!!!
        </div>
      </a>
    </div>
  </Fragment>
);
