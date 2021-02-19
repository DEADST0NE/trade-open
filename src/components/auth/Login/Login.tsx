import { FC } from 'react';

import { Button } from 'antd';
import LoginForm from './LoginForm';
import logo from '../../../images/logo.svg';

import './Login.scss';

const Login: FC = () => (
  <div className="login">
    <div className="login-wrapper">
      <div className="login-left">
        <div className="login-left-content">
          <div className="login-left-header">
            <img src={logo} alt="logo" />
            <span>RADE</span>
          </div>
          <div className="login-left-body">
            <div className="login-left-title-wrapper">
              <span className="login-left-title">
                <span>Авторизация</span>
              </span>
            </div>
            <LoginForm />
            <div className="navigation-link">
              <Button type="text" href="/registration">
                Создать акаунт
              </Button>
              <Button type="text" href="#">
                Забыли пароль
              </Button>
            </div>
          </div>
          <div className="login-left-footer">© 2021 WebSystems</div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
