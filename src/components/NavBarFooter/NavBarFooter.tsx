import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Icon from '../gineric/Icon';

import './NavBarFooter.scss';

const NavBarFooter: FC = () => {
  const location = useLocation();

  return (
    <div className="sidebar-footer">
      <div className="tabs-sidebar-footer-wrapper">
        <div className="tab-sidebar">
          <div className="tab-sidebar-item">
            <NavLink to="/applications">
              <div className="tab-sidebar-item-icon">
                <Icon name="applications" />
              </div>
              <p className="tab-sidebar-item-title">Заявки</p>
            </NavLink>
          </div>
          <div className="tab-sidebar-item">
            <NavLink to="/create-application">
              <div className="tab-sidebar-item-icon">
                <Icon name="plus" />
              </div>
              <p className="tab-sidebar-item-title">Создать заявку</p>
            </NavLink>
          </div>
          <div className="tab-sidebar-item">
            <NavLink to="/lk">
              <div className="tab-sidebar-item-icon">
                <Icon name="user" />
              </div>
              <p className="tab-sidebar-item-title">Кабинет</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarFooter;
