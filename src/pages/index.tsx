import { Suspense, FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import NavBarFooter from '../components/NavBarFooter';

import LoadingIndicator from '../components/gineric/LoadingIndicator';

import NotFoundPage from '../components/gineric/NotFoundPage';

import './Pages.scss';

const Pages: FC = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Layout className="site-layout">
      <Layout className="site-layout">
        <Layout.Content>
          <Suspense fallback={<LoadingIndicator />}>
            <Switch>
              <Redirect from="/" to="/applications" exact />
              <Route path="/all-application" exact>
                Заявки все
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </Suspense>
        </Layout.Content>
      </Layout>
      <NavBarFooter />
    </Layout>
  </Layout>
);

export default Pages;
