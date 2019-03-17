import React, { Fragment } from 'react';
import styles from './Index.module.scss';

export default () => (
  <Fragment>
    <div className={styles.welcome}>
      <p className={styles.welcomeText}>Добро пожаловать в</p>
      <img
        className={styles.largeLogo}
        src={`${process.env.PUBLIC_URL}img/logo-large/1x.png`}
        srcSet={`
          ${process.env.PUBLIC_URL}img/logo-large/1x.png 1x,
          ${process.env.PUBLIC_URL}img/logo-large/2x.png 2x`}
        alt="Пиар Ход"
        title="Пиар Ход"
      />
    </div>
    {/* eslint-disable-next-line */}
    <marquee className={styles.desc}>
      ПиарХод это лидеры на рынке юга россии по производству рекламно-полиграфической
      промышленности, банеров и дизайнов сайтов.
    </marquee>
    <div className={styles.content}>
      <a
        className={styles.youtube}
        href="//www.youtube.com/channel/UCZvlwWhMIHcY6P5BD2TcNew"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.youtubeImage}
          src={`${process.env.PUBLIC_URL}img/youtube/1x.png`}
          srcSet={`
          ${process.env.PUBLIC_URL}img/youtube/1x.png 1x,
          ${process.env.PUBLIC_URL}img/youtube/2x.png 2x`}
          alt="youtube"
          title="Видеосервис Ютубе"
        />
        <p className={styles.greenText}>
          !!! Наши видео на популярном <br /> видеосервисе !!!!
        </p>
      </a>
      <img
        className={styles.mainPhoto}
        src={`${process.env.PUBLIC_URL}img/main-photo/1x.png`}
        srcSet={`
          ${process.env.PUBLIC_URL}img/main-photo/1x.png 1x,
          ${process.env.PUBLIC_URL}img/main-photo/2x.png 2x`}
        alt="success"
        title="Успех"
      />
      <a
        className={styles.telegram}
        href="//www.instagram.com/piarxod/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.telegramImage}
          src={`${process.env.PUBLIC_URL}img/telegram/1x.png`}
          srcSet={`
          ${process.env.PUBLIC_URL}img/telegram/1x.png 1x,
          ${process.env.PUBLIC_URL}img/telegram/2x.png 2x`}
          alt="instagram"
          title="Инстаграм"
        />
        <p className={styles.greenText}>
          Наша текстовая информационная
          <br />
          страничка в инновационном
          <br />
          сервисе для обмена
          <br />
          фотографиями!!!!
        </p>
      </a>
    </div>
    <p className={styles.instagram}>
      Наш телеграм:
      <a href="//t.me/pr_khod" target="_blank" rel="noopener noreferrer">
        t.me/pr_khod
      </a>
    </p>
  </Fragment>
);
