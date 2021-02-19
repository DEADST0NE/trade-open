import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../gineric/Icon';

import './NavBarFooter.scss';

const NavBarFooter: FC = () => (
  <div className="nav-bar-footer">
    <div className="nav-bar-footer-wrapper">
      <div className="nav-bar-items">
        <div className="nav-bar-item">
          <NavLink to="/home">
            <div className="nav-bar-item-icon">
              <Icon name="home" />
            </div>
            <p className="nav-bar-item-title">Главная</p>
          </NavLink>
        </div>
        <div className="nav-bar-item">
          <NavLink to="/create-application">
            <div className="nav-bar-item-icon">
              <Icon name="shopBasket" />
            </div>
            <p className="nav-bar-item-title">Корзина</p>
          </NavLink>
        </div>
        <div className="nav-bar-item">
          <NavLink to="/lk">
            <div className="nav-bar-item-icon">
              <Icon name="user" />
            </div>
            <p className="nav-bar-item-title">Кабинет</p>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default NavBarFooter;
