import React, { Fragment, useState } from 'react';
import styles from './Site.module.scss';

export default () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgClassNames = [styles.topImg];

  if (isLoaded) {
    imgClassNames.push(styles.loadingImg);
  }

  const onImgLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Fragment>
      <div className={styles.top}>
        <img
          src={`${process.env.PUBLIC_URL}img/site/1x.jpg`}
          srcSet={`
          ${process.env.PUBLIC_URL}img/site/1x.jpg 1x,
          ${process.env.PUBLIC_URL}img/site/2x.jpg 2x`}
          alt="Сайт-визитка"
          onLoad={onImgLoad}
          className={imgClassNames.join(' ')}
        />
        <p className={styles.topText}>
          Мы взломаем для Вас сеть Интернет с помощью
          <br />
          САЙТА-ВИЗИТКИ и приведем бесконечный поток клиентов!
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.greenBlock}>
          Сайт-визитка (англ. business card website) - небольшой сайт, как правило, состоящий из
          одной (или нескольких) веб-страниц и содержащий основную информацию об организации,
          частном лице, компании, товарах или услугах, прейскуранты, контактные данные.
          <br />
          <br />
          Часто сайт-визитку используют компании, которые не хотят нести большие затраты на создание
          отдельного сайта. Очень часто при покупке доменного имени для почты устанавливается
          сайт-заглушка или сайт-визитка.
          <br />
          <br />
          Сайт-визитка может быть как динамическим, так и статическим сайтом.
          <br />
          <br />
          Часто содержат значительные объёмы графики, в том числе анимации или Flash.
          <br />
          <br />
          Ещё одной разновидностью сайтов-визиток являются сайты, созданные с применением т. н.
          Flash-технологий, когда весь сайт-визитка располагается на одной веб-странице,
          предназначенной исключительно для загрузки Flash-приложения, а вся навигация и содержимое
          выполнены в самом Flash-ролике.
          <br />
          <br />
          Сайт-визитка сразу же придает Вашей компании веса и солидности! А также открывает для Вас
          совершенно новый поток клиентов, поток пользователей сети ИНТЕРНЕТ!!! Вам кажется, что это
          сложно? Вовсе НЕТ! С ПиарХодом, даже такая операция, как создание сайта, будет легкой и
          приятной, как бриз на Ялтинском берегу!
        </div>
        <a href="mailto:pr-khod@mail.ru" className={styles.buttonLink}>
          <div className={styles.button}>
            Нажмите, чтобы занять место для Вашей
            <br />
            компании в сети ИНТЕРНЕТ
          </div>
        </a>
        <div className={styles.photo}>
          Наш генеральный директор уже готов лично отправить Вашу компанию в ИНТЕРНЕТ
        </div>
      </div>
    </Fragment>
  );
};
