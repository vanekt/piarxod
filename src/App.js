import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./components/pages/Home'));

export default () => (
  <Layout>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  </Layout>
);
