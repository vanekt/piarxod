import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.scss';

export default props => (
  <Fragment>
    <Header />
    <main className={styles.main}>{props.children}</main>
    <Footer />
  </Fragment>
);
