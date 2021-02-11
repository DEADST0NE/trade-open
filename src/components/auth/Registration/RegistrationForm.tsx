import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import { LoginOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';

import InputWithMask from '../../gineric/InputWithMask';

import { StateType } from '../../../redux/reducers';
import { registrationUser } from '../../../redux/user/actions';

type valuesFormType = {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
};
const RegistrationForm: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error } = useSelector((state: StateType) => state.user);
  const onFinish = (values: valuesFormType) => {
    dispatch(registrationUser(values, history.push));
  };

  return (
    <Form
      name="registration"
      className="registration-form"
      layout="vertical"
      requiredMark={false}
      initialValues={{}}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свой фио',
          },
        ]}
      >
        <Input size="middle" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="ФИО" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свой Email',
          },
          {
            type: 'email',
            message: 'Email не соответствует формату',
          },
        ]}
        validateStatus={error?.email ? 'error' : undefined}
        help={error?.email}
      >
        <Input size="middle" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свой пароль',
          },
        ]}
        validateStatus={error?.password ? 'error' : undefined}
        help={error?.password}
      >
        <Input.Password
          size="middle"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свой телефон',
          },
        ]}
      >
        <InputWithMask
          mask="+7(999)-999-99-99"
          icon={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="Телефон"
        />
      </Form.Item>

      <Form.Item name="address">
        <Input.TextArea bordered allowClear size="middle" placeholder="Адресс доставки" />
      </Form.Item>

      <Form.Item className="submit-content">
        <Button
          type="primary"
          htmlType="submit"
          block
          size="middle"
          loading={loading}
          icon={<LoginOutlined />}
        >
          Регистрация
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
