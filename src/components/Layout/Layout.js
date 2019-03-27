import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default props => (
  <Fragment>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </Fragment>
);
