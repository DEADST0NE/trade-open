/* eslint-disable react/jsx-props-no-spreading */
import { FC, ReactElement } from 'react';
import { Input } from 'antd';
import ReactInputMask from 'react-input-mask';

interface inputWithMaskProps {
  mask: string;
  icon?: ReactElement;
  placeholder?: string;
}
interface inputProps {
  icon?: ReactElement;
  id?: string;
  placeholder?: string;
}

const InputWithMask: FC<inputWithMaskProps> = (props) => (
  <ReactInputMask {...props}>
    {({ id, icon, placeholder }: inputProps) => (
      <Input size="middle" prefix={icon} placeholder={placeholder} id={id} />
    )}
  </ReactInputMask>
);

export default InputWithMask;
