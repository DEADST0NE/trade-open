import { FC } from 'react';

import { Button } from 'antd';
import RegistrationForm from './RegistrationForm';

import loginPagesImg from '../../../images/login-pages.png';
import logo from '../../../images/logo.svg';

import './Registration.scss';

const Registration: FC = () => (
  <div className="registration">
    <div className="registration-wrapper">
      <div className="registration-left">
        <div className="registration-left-content">
          <div className="registration-left-header">
            <img src={logo} alt="logo" />
            <span>RADE</span>
          </div>
          <div className="registration-left-body">
            <div className="registration-left-title-wrapper">
              <span className="registration-left-title">
                <span>Регистрация</span>
              </span>
            </div>
            <RegistrationForm />
            <div className="navigation-link">
              <Button type="text" href="/login">
                Войти
              </Button>
              <Button type="text" href="#">
                Забыли пароль
              </Button>
            </div>
          </div>
          <div className="registration-left-footer">© 2021 WebSystems</div>
        </div>
      </div>
      <div className="registration-right">
        <img src={loginPagesImg} alt="img" />
      </div>
    </div>
  </div>
);

export default Registration;
