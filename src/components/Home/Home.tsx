import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../redux/reducers';

import { getProducts } from '../../redux/products/actions';

import './Home.scss';

import HeaderHome from './HeaderHome';
import Products from './Products';

const Home: FC = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: StateType) => state.user);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (userData?.data.id) {
      dispatch(getProducts(userData?.data.id));
    }
  }, [dispatch, userData?.data.id]);

  const scrollCount = useRef(0);

  const discoverScrollDirection = (event: any) => {
    if (event.target.scrollTop % 2 === 0) {
      if (scrollCount.current === 0 || scrollCount.current < event.target.scrollTop) {
        setShow(false);
      } else if (scrollCount.current > event.target.scrollTop) {
        setShow(true);
      }
    }
    scrollCount.current = event.target.scrollTop;
  };

  return (
    <div
      className="home-page"
      onScroll={(event) => discoverScrollDirection(event)}
      onTouchMove={(e) => {
        console.log(e);
      }}
    >
      <div className={!show ? 'd-none' : ''}>
        <HeaderHome />
      </div>
      <Products />
    </div>
  );
};

export default Home;
