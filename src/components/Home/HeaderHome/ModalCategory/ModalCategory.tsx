import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Drawer, Button, Tree, Avatar } from 'antd';

import { DownOutlined } from '@ant-design/icons';

import Icon from '../../../gineric/Icon';

import { getCategory } from '../../../../redux/category/actions';
import { StateType } from '../../../../redux/reducers';

import './ModalCategory.scss';

const ModalCategory: FC = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
  const { userData } = useSelector((state: StateType) => state.user);
  const { categories, loading, error } = useSelector((state: StateType) => state.category);

  console.log(categories, loading, error);

  useEffect(() => {
    if (userData?.data.id) {
      dispatch(getCategory(userData?.data.id));
    }
  }, [dispatch, userData?.data.id]);

  const treeData = categories?.map((item: any) => ({
    title: (
      <div className="category-item">
        <Avatar />
        <div className="category-title">
          <p>{item.name}</p>
          <span>{item.address}</span>
        </div>
      </div>
    ),
    key: item.id,
    children: item.categories.map((category: any) => ({
      title: category.name,
      key: category.id,
    })),
  }));

  return (
    <div className="home-category">
      <Button
        className="btn-category"
        type="text"
        onClick={() => setVisible(true)}
        icon={<Icon name="burgerMenu" />}
      />
      <Drawer
        className="modal-category-home"
        title="Компании"
        placement="right"
        closable
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <div className="modal-category-home-body">
          {loading ? (
            <div>...Loading</div>
          ) : (
            <Tree.DirectoryTree
              showIcon={false}
              expandedKeys={selectedKeys}
              switcherIcon={<DownOutlined />}
              onSelect={(keys) => setSelectedKeys(keys)}
              treeData={categories.length ? treeData : []}
            />
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default ModalCategory;
