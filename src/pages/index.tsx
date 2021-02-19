import { Suspense, FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import UserAccount from '../components/UserAccount';
import DitailProduct from '../components/Home/DitailProduct';
import Home from '../components/Home';

import NavBarFooter from '../components/NavBarFooter';

import LoadingIndicator from '../components/gineric/LoadingIndicator';

import NotFoundPage from '../components/gineric/NotFoundPage';

import './Pages.scss';

const Pages: FC = () => (
  <Layout style={{ minHeight: '100vh', height: '100%' }}>
    <Layout className="site-layout" style={{ height: '100%' }}>
      <Layout className="site-layout" style={{ height: '100%' }}>
        <Layout.Content>
          <Suspense fallback={<LoadingIndicator />}>
            <Switch>
              <Redirect from="/" to="/home" exact />
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/product/ditail/:productId?/:categoryClientId?" exact>
                <DitailProduct />
              </Route>
              <Route path="/lk" exact>
                <UserAccount />
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
