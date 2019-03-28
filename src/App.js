import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import {
  FLIERS_PAGE_PATH,
  BANNERS_PAGE_PATH,
  SITE_PAGE_PATH,
  PROMOTION_PAGE_PATH,
  SEO_PAGE_PATH
} from './constants';

const Home = lazy(() => import('./components/pages/Home'));
const Fliers = lazy(() => import('./components/pages/Fliers'));
const Banners = lazy(() => import('./components/pages/Banners'));
const Site = lazy(() => import('./components/pages/Site'));
const Promotion = lazy(() => import('./components/pages/Promotion'));
const Seo = lazy(() => import('./components/pages/Seo'));

export default () => (
  <Layout>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={FLIERS_PAGE_PATH} component={Fliers} />
        <Route path={BANNERS_PAGE_PATH} component={Banners} />
        <Route path={SITE_PAGE_PATH} component={Site} />
        <Route path={PROMOTION_PAGE_PATH} component={Promotion} />
        <Route path={SEO_PAGE_PATH} component={Seo} />
      </Switch>
    </Suspense>
  </Layout>
);
