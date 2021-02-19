import { FC, useMemo } from 'react';

import { Input } from 'antd';

import ModalCategory from './ModalCategory';

import Icon from '../../gineric/Icon';

import './HeaderHome.scss';

const HeaderHome: FC = () => (
  <div className="header-home-page">
    <div className="header-search">
      <Input
        className="search-input"
        placeholder="Искать на Trade"
        allowClear
        prefix={<Icon name="search" className="search-icon" />}
      />
      {useMemo(
        () => (
          <ModalCategory />
        ),
        [],
      )}
    </div>
  </div>
);

export default HeaderHome;
