/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';

import { StateType } from '../../../redux/reducers';

import './Products.scss';

const Products: FC = () => {
  const { products, loading, error } = useSelector((state: StateType) => state.product);
  const history = useHistory();

  if (loading) {
    return <>loading....</>;
  }

  if (error) {
    return <>Error....</>;
  }

  return (
    <div className="products">
      <div className="products-list">
        {Object.keys(products)?.map((item) => (
          <div
            className="product-item"
            key={products[item].id}
            onClick={() => history.push(`/product/ditail/${products[item].id}/${products[item].price.id}`)}
          >
            <div className="product-img">
              <img src={products[item].avatarProduct} alt="avatar-product" />
            </div>
            <div className="product-info">
              <div className="product-name">
                {products[item].name}
                {products[item].weight ? `, ${products[item].weight} ${products[item].measure}` : null}
              </div>
              <div className="product-price">
                <div className="count"> {products[item].price.count} ₽</div>
                <div className="add-btn">
                  <Button type="primary">В корзину</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
