import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FLIERS_PAGE_PATH,
  BANNERS_PAGE_PATH,
  SITE_PAGE_PATH,
  PROMOTION_PAGE_PATH,
  SEO_PAGE_PATH
} from '../../constants';
import styles from './Header.module.scss';

const menuItems = [
  {
    path: FLIERS_PAGE_PATH,
    label: 'Листовки',
    activeStyle: { backgroundColor: '#01F829' }
  },
  {
    path: BANNERS_PAGE_PATH,
    label: 'Баннеры',
    activeStyle: { backgroundColor: '#D41818' }
  },
  {
    path: SITE_PAGE_PATH,
    label: 'Сайт-визитка',
    activeStyle: { backgroundColor: '#21DDC6' }
  },
  {
    path: PROMOTION_PAGE_PATH,
    label: 'Продвижение',
    activeStyle: { backgroundColor: '#BE0DEA' }
  },
  {
    path: SEO_PAGE_PATH,
    label: 'СЕО',
    activeStyle: { backgroundColor: '#E2E618' }
  }
];

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
            <li key={item.path}>
              <NavLink to={item.path} activeStyle={item.activeStyle}>
                {item.label}
              </NavLink>
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
