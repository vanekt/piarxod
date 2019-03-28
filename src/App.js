import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { FLIERS_PAGE_PATH } from './constants';

const Home = lazy(() => import('./components/pages/Home'));
const Fliers = lazy(() => import('./components/pages/Fliers'));

export default () => (
  <Layout>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={FLIERS_PAGE_PATH} component={Fliers} />
      </Switch>
    </Suspense>
  </Layout>
);
