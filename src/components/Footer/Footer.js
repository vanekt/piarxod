import React from 'react';
import styles from './Footer.module.scss';

const staff = [
  {
    title: 'Разработка дизайна',
    name: 'Антон',
    link: 'mailto:a.brenchev@yandex.ru'
  },
  {
    title: 'Программирование и поддержка портала',
    name: 'Иван',
    link: 'tg://resolve?domain=TkachenkoIS'
  }
];

export default () => (
  <footer className={styles.footer}>
    <ul className={styles.staff}>
      {staff.map((item, idx) => {
        return (
          <li key={idx}>
            {item.title}: <a href={item.link}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  </footer>
);
