import {
  PRODUCTS_GET_REQUEST,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_GET_ERROR,
  DITAIL_PRODUCT_GET_SUCCESS,
  OTHER_PRODUCTS_GET_SUCCESS,
  OTHER_PRODUCTS_GET_REQUEST,
  OTHER_PRODUCTS_GET_ERROR,
} from '../actions';

import { initStateType, ProductActionsType } from './types';

const INIT_STATE: initStateType = {
  products: {},
  loading: false,
  error: null,
  showHeader: false,
  ditailProduct: null,
  otherProducts: {},
  oPLoading: false,
  oPError: null,
};

const reducer = (state = INIT_STATE, action: ProductActionsType): initStateType => {
  switch (action.type) {
    case PRODUCTS_GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PRODUCTS_GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case PRODUCTS_GET_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };

    case DITAIL_PRODUCT_GET_SUCCESS:
      return {
        ...state,
        ditailProduct: action.payload,
        loading: false,
        error: null,
      };

    case OTHER_PRODUCTS_GET_ERROR:
      return {
        ...state,
        oPLoading: false,
        oPError: action.payload,
      };

    case OTHER_PRODUCTS_GET_REQUEST:
      return {
        ...state,
        oPLoading: true,
        oPError: null,
      };

    case OTHER_PRODUCTS_GET_SUCCESS:
      return {
        ...state,
        otherProducts: action.payload,
        oPLoading: false,
        oPError: null,
      };
    default:
      return state;
  }
};

export default reducer;
