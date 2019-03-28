import React, { Fragment } from 'react';
import styles from './Fliers.module.scss';

export default () => (
  <Fragment>
    <div className={styles.top}>
      <h1 className={styles.topText}>
        Бумага - неустаревающий и доступный способ сделать эффективную и качественную
        <br />
        рекламу для Вашего бизнеса!
      </h1>
    </div>
    <div className={styles.flier}>
      <img
        className={styles.leftPin}
        src={`${process.env.PUBLIC_URL}img/pin/1x.png`}
        srcSet={`
          ${process.env.PUBLIC_URL}img/pin/1x.png 1x,
          ${process.env.PUBLIC_URL}img/pin/2x.png 2x`}
        alt="Кнопка"
      />
      <img
        className={styles.rightPin}
        src={`${process.env.PUBLIC_URL}img/pin/1x.png`}
        srcSet={`
          ${process.env.PUBLIC_URL}img/pin/1x.png 1x,
          ${process.env.PUBLIC_URL}img/pin/2x.png 2x`}
        alt="Кнопка"
      />
      <p className={styles.flierText}>
        Разумеется, ПиарХод современная компания и владеет техниками рекламы в интернете в
        совершенстве, но мы не забываем о наших корнях! Ничто не заменит нам профессионально
        сделанную яркую листовку на бумаге класса ЛЮКС! Если Вы не хотите переплачивать за сложное
        продвижение в сети Интернет - вы всегда можете купить у нас высококлассный дизайн и печать
        листовок и охватить свою целевую аудиторию, где бы она не находилась!
        <br />
        <br />
        P.S. кстати даже этот текст Вы читаете на листовке, как мы Вас провели!
      </p>
      <div className={styles.flierBottom}>
        {Array.apply(null, { length: 25 }).map((_, idx) => {
          return (
            <div key={idx} className={styles.flierBottomText}>
              Заказать яркую
              <br />
              листовку на бумаге
              <br />
              класса ЛЮКС
            </div>
          );
        })}
      </div>
    </div>
  </Fragment>
);
