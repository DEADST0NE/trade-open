/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, useHistory } from 'react-router-dom';

import { Breadcrumb, Button, Avatar } from 'antd';

import { getDitailProduct, getOherProducts } from '../../../redux/products/actions';
import { StateType } from '../../../redux/reducers';

import './DitailProduct.scss';

const DitailProduct: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { ditailProduct, loading, error, otherProducts, oPLoading } = useSelector(
    (state: StateType) => state.product,
  );

  const { productId, categoryClientId } = useParams<{ productId: string; categoryClientId: string }>();
  useEffect(() => {
    if (categoryClientId && productId) {
      dispatch(getDitailProduct(productId, categoryClientId));
      dispatch(getOherProducts(categoryClientId));
    }
  }, [dispatch, productId, categoryClientId]);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error....</div>;
  }

  return (
    <div className="ditail-product-page">
      <div className="ditail-product-wrapper">
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/home">Главная</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="">{ditailProduct?.name}</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ditail-product-body">
          <div className="ditail-product-img">
            <img src={ditailProduct?.avatarProduct} data-src="image.jpg" alt="product-img" />
          </div>
          <div className="ditail-product-info">
            <div className="ditil-product-name">
              {ditailProduct?.manufacturer.name}, {ditailProduct?.name},{' '}
              {ditailProduct?.weight ? (
                <>
                  {ditailProduct?.weight} {ditailProduct?.measure}
                </>
              ) : (
                ''
              )}
            </div>
            <div className="ditil-product-description">
              <h4 className="description-title">Описание:</h4>
              <span className="description">
                {ditailProduct?.description ? ditailProduct?.description : 'Описание товара отсутствует'}
              </span>
            </div>
            <div className="ditail-product-price">
              <div className="count">{ditailProduct?.price.count} ₽</div>{' '}
              <Button type="primary" className="basket-add">
                Добавить в корзину
              </Button>
            </div>
            <hr />
            <div className="ditail-product-company">
              <div className="company-info">
                <h5 className="company-title">Компания:</h5>
                <div className="company-name">{ditailProduct?.company.name}</div>
                <div className="company-other-data">
                  <div>
                    <span>Адресс:</span>
                    <span>{ditailProduct?.company.address}</span>
                  </div>
                  <div>
                    <span>Телефон:</span>
                    <span>{ditailProduct?.company.phone}</span>
                  </div>
                </div>
              </div>
              <div className="company-img">
                <Avatar size={70} />
              </div>
            </div>
            <hr />
          </div>
          <div className="ditail-product-similar">
            <h2> Товары от компании </h2>
            <div className="ditail-product-similar-wrapper">
              {oPLoading ? (
                <div>...loading</div>
              ) : (
                <>
                  {Object.keys(otherProducts).map((item: string) => (
                    <div
                      className="product-item"
                      key={otherProducts[item].id}
                      onClick={() =>
                        history.push(
                          `/product/ditail/${otherProducts[item].id}/${otherProducts[item].price.id}`,
                        )
                      }
                    >
                      <div className="product-img">
                        <img src={otherProducts[item].avatarProduct} alt="avatar-product" />
                      </div>
                      <div className="product-info">
                        <div className="product-name">
                          {otherProducts[item].name}
                          {otherProducts[item].weight
                            ? `, ${otherProducts[item].weight} ${otherProducts[item].measure}`
                            : null}
                        </div>
                        <div className="product-price">
                          <div className="count"> {otherProducts[item].price.count} ₽</div>
                          <div className="add-btn">
                            <Button type="primary">В корзину</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DitailProduct;
