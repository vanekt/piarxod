import React, { Fragment, useState } from 'react';
import styles from './Seo.module.scss';

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
          src={`${process.env.PUBLIC_URL}img/seo/1x.jpg`}
          srcSet={`
          ${process.env.PUBLIC_URL}img/seo/1x.jpg 1x,
          ${process.env.PUBLIC_URL}img/seo/2x.jpg 2x`}
          alt="СЕО"
          onLoad={onImgLoad}
          className={imgClassNames.join(' ')}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.grayBlock}>
          <p className={styles.whiteText}>
            Поиско́вая оптимиза́ция (англ. search engine optimization, SEO) - комплекс мер по
            внутренней и внешней оптимизации для поднятия позиций сайта в результатах выдачи
            поисковых систем по определённым запросам пользователей, с целью увеличения сетевого
            трафика (для информационных ресурсов) и потенциальных клиентов (для коммерческих
            ресурсов) и последующей монетизации (получение дохода) этого трафика.
            <br />
            <br />
            Обычно чем выше позиция сайта в результатах поиска, тем больше заинтересованных
            посетителей переходит на него с поисковых систем. При анализе эффективности поисковой
            оптимизации оценивается стоимость целевого посетителя с учётом времени вывода сайта на
            указанные позиции и конверсии сайта.
          </p>
          <p className={styles.blackText}>
            СЕО - это очень сложная и тонкая наука, но у нас в ПиарХоде уже есть не одна степень в
            ней! Мы, как говорится, съели на этом собаку и с нами Ваш сайт вознесется к вершинам
            поисковиков! Наши специалисты укротят Яндекс и Гугл как йоги укрощают хитрых змеев и Вы
            будете первыми даже в сети Интернет!
            <br />
            <br />
            Чего же Вы ждете СКОРЕЕ НАЖИМАЙТЕ КНОПКУ ПОД ЭТИМ ТЕКСТОМ И ПОЛУЧАЙТЕ АУДИТ САЙТА В
            ПОДАРОК!!!!!
          </p>

          <a href="mailto:pr-khod@mail.ru" className={styles.buttonLink}>
            <div className={styles.button}>
              Получить аудит сайта и поднять свой сайт в поиске ПРЯМО СЕЙЧАС!
            </div>
          </a>
        </div>
        <div className={styles.photo} />
        <p className={styles.photoCaption}>
          Наш генеральный директор перед выступлением на тему “Как делать рекламу для Кубанцев” на
          уважаемой конференции
        </p>
      </div>
    </Fragment>
  );
};
