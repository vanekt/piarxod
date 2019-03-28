import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { FLIERS_PAGE_PATH, BANNERS_PAGE_PATH } from './constants';

const Home = lazy(() => import('./components/pages/Home'));
const Fliers = lazy(() => import('./components/pages/Fliers'));
const Banners = lazy(() => import('./components/pages/Banners'));

export default () => (
  <Layout>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={FLIERS_PAGE_PATH} component={Fliers} />
        <Route path={BANNERS_PAGE_PATH} component={Banners} />
      </Switch>
    </Suspense>
  </Layout>
);
