import React from 'react';
import styles from './Clippy.module.scss';

export default () => (
  <div className={styles.clippyWrapper}>
    <a href="mailto:pr-khod@mail.ru">
      <div className={styles.dialog}>
        Привет! НАПИШИТЕ НАМ
        <br />
        ПИСЬМО
      </div>
      <img
        className={styles.clippy}
        src={`${process.env.PUBLIC_URL}img/clippy.png`}
        alt="Скрепыш"
        title="Скрепыш"
      />
    </a>
  </div>
);
