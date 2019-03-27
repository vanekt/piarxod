import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const onMenuItemClick = () => alert('Раздел находится в разработке');
const menuItems = ['Листовки', 'Баннеры', 'Сайт-визитка', 'Продвижение', 'СЕО'];

export default () => (
  <header className={styles.header}>
    <Link to={`/`}>
      <img
        className={styles.logo}
        src={`${process.env.PUBLIC_URL}img/header/1x.png`}
        srcSet={`
        ${process.env.PUBLIC_URL}img/header/1x.png 1x,
        ${process.env.PUBLIC_URL}img/header/2x.png 2x`}
        alt="logo"
        title="Пиар Ход"
      />
    </Link>
    <nav>
      <ul className={styles.menu}>
        {menuItems.map(item => {
          return (
            <li key={item}>
              {/*eslint-disable-next-line*/}
              <a href="#" onClick={onMenuItemClick}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
    <p className={styles.ourEmail}>
      Наша почта: <span className={styles.email}>pr-khod@mail.ru</span>
    </p>
  </header>
);
