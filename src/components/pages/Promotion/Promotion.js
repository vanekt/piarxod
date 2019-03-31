import React, { Fragment } from 'react';
import styles from './Promotion.module.scss';

export default () => (
  <Fragment>
    <div className={styles.top}>
      <img
        src={`${process.env.PUBLIC_URL}img/promotion/1x.jpg`}
        srcSet={`
          ${process.env.PUBLIC_URL}img/promotion/1x.jpg 1x,
          ${process.env.PUBLIC_URL}img/promotion/2x.jpg 2x`}
        alt="Баннеры"
      />
      <p className={styles.topText1}>С нашим продвижением Ваш бизнес полетит к вершинам!</p>
      <p className={styles.topText2}>
        Продвижение сайта - комплекс мер по обеспечению посещаемости сайта целевыми посетителями.
        Целевые посетители - это потенциальные потребители, которые заинтересованы в приобретении
        товаров или услуг, представленных на продвигаемом сайте.
      </p>
    </div>
    <div className={styles.bottom}>
      <div className={styles.bottomLeft}>
        <div className={styles.yellowBlock}>
          <p>
            Каналов привлечения посетителей в сети Интернет очень много в ПиарХоде мы владеем всеми!
            Вот их список:
          </p>
          <ul className={styles.starList}>
            <li>
              Поисковая оптимизация - оптимизация сайта с целью получения высоких рангов в поисковой
              системе по запросам, отвечающим тематике сайта;
            </li>
            <li>
              Контекстная реклама - показ рекламных объявлений пользователям, заинтересованным в них
              в данный момент;
              <br />
              Медийная реклама - показ рекламных баннеров на сайтах;
            </li>
            <li>
              Отраслевые и прайс-агрегаторы - представляют собой площадки с каталогами товаров от
              разных компаний;
              <br />
              Таргетированная реклама в социальных сетях позволяет показывать рекламные объявления в
              соответствии с демографическими характеристиками и персональными интересами
              пользователя;
            </li>
            <li>Партнерские программы;</li>
            <li>
              Видеореклама и мобильная реклама пока используется компаниями в качестве тестового
              канала, но постепенно набирает обороты, особенно мобильная реклама, темпы роста
              которой, по различным оценкам, превышают 40 % в год;
            </li>
            <li>
              Email-маркетинг - полезные рассылки по электронной почте пользователям, давшим на это
              добровольное согласие;
            </li>
            <li>
              Контент-маркетинг - привлечение пользователей за счёт публикации полезного контента.
              Это тот контент, который решает проблему читателя;
            </li>
            <li>
              SMM - создание лояльной аудитории в социальных сетях благодаря публикации полезной
              информации и общению с потенциальными потребителями.
            </li>
          </ul>
        </div>
        <a href="mailto:pr-khod@mail.ru" className={styles.buttonLink}>
          <div className={styles.button}>Получить продвижение!</div>
        </a>
      </div>
      <div className={styles.photo}>
        Наш генеральный директор одобряет продвижение нашего сайта! Вы можете быть таким же
        довольным!
      </div>
    </div>
  </Fragment>
);
