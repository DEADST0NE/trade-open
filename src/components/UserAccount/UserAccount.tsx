import { FC } from 'react';
import { Avatar, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

import { DownOutlined } from '@ant-design/icons';

import Icon from '../gineric/Icon';

import { StateType } from '../../redux/reducers';

import './UserAccount.scss';

const UserAccount: FC = () => {
  const { userData } = useSelector((state: StateType) => state.user);
  return (
    <div className="user-account-page">
      <div className="user-account-wrapper">
        <div className="user">
          <div>
            <div className="user-avatar">
              <Avatar icon={<Icon name="user" />} />
            </div>
            <div className="user-name">{userData?.data.name}</div>
            <div className="user-info">
              Личные данные
              <DownOutlined />
            </div>
          </div>
        </div>
        <div className="user-account-control">
          <Row gutter={[10, 10]}>
            <Col span={12}>
              <Button icon={<Icon name="orders" className="anticon" />}>
                <div>
                  Заказы
                  <span className="btn-detail-info">Количество: 30 шт</span>
                </div>
              </Button>
            </Col>
            <Col span={12}>
              <Button icon={<Icon name="userDebt" className="anticon" />}>
                <div>
                  Задолжность
                  <span className="btn-detail-info">
                    Сумма:
                    <span className="danger">12316 ₽</span>
                  </span>
                </div>
              </Button>
            </Col>
            <Col span={24}>
              <Button icon={<Icon name="commpany" className="anticon" />}>
                <div>Компании</div>
              </Button>
            </Col>
            <Col span={24}>
              <Button icon={<Icon name="edit" className="anticon" />}>
                <div>Редактировать данные</div>
              </Button>
            </Col>
            <Col span={24}>
              <Button icon={<Icon name="lock" className="anticon" />}>
                <div>Изменить пароль</div>
              </Button>
            </Col>
            <Col span={24}>
              <Button icon={<Icon name="logout" className="anticon" />}>
                <div>Выйти</div>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
