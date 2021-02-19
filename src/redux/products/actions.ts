import axios from '../../services/apiService';

import { productType } from './types';

import {
  PRODUCTS_GET_REQUEST,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_GET_ERROR,
  DITAIL_PRODUCT_GET_SUCCESS,
  OTHER_PRODUCTS_GET_SUCCESS,
  OTHER_PRODUCTS_GET_REQUEST,
  OTHER_PRODUCTS_GET_ERROR,
  thunkType,
} from '../actions';

// Список продуктов
const getProductsRequested = () => ({
  type: PRODUCTS_GET_REQUEST,
});

const getProductsSuccess = (item: productType[]) => ({
  type: PRODUCTS_GET_SUCCESS,
  payload: item,
});

const getProductsError = (error: string) => ({
  type: PRODUCTS_GET_ERROR,
  payload: error,
});

const getProductsRequest = async (clientId: string) =>
  axios
    .get('product/client', {
      params: { clientId },
    })
    .then((response) => response.data);

export const getProducts = (id: string): thunkType => (dispatch) => {
  dispatch(getProductsRequested());
  getProductsRequest(id)
    .then((data) => {
      dispatch(getProductsSuccess(data));
    })
    .catch((err) => dispatch(getProductsError(err)));
};
// -------------------------
// Список похожих продуктов компании
const getOtherProductsRequested = () => ({
  type: OTHER_PRODUCTS_GET_REQUEST,
});

const getOtherProductsSuccess = (item: productType[]) => ({
  type: OTHER_PRODUCTS_GET_SUCCESS,
  payload: item,
});

const getOtherProductsError = (error: string) => ({
  type: OTHER_PRODUCTS_GET_ERROR,
  payload: error,
});

const getOtherProductsRequest = async (categoryClientId: string) =>
  axios
    .get('/product/client/ditail/other', {
      params: { categoryClientId },
    })
    .then((response) => response.data);

export const getOherProducts = (categoryClientId: string): thunkType => (dispatch) => {
  dispatch(getOtherProductsRequested());
  getOtherProductsRequest(categoryClientId)
    .then((data) => {
      dispatch(getOtherProductsSuccess(data));
    })
    .catch((err) => dispatch(getOtherProductsError(err)));
};
// -------------------------

// Детали о продукте

const getDitailProductSuccess = (item: any) => ({
  type: DITAIL_PRODUCT_GET_SUCCESS,
  payload: item,
});

const getDitailProductRequest = async (productId: string, categoryClientId: string) =>
  axios
    .get('product/client/ditail', {
      params: { productId, categoryClientId },
    })
    .then((response) => response.data);

export const getDitailProduct = (productId: string, categoryClientId: string): thunkType => (dispatch) => {
  dispatch(getProductsRequested());
  getDitailProductRequest(productId, categoryClientId)
    .then((data) => {
      dispatch(getDitailProductSuccess(data));
    })
    .catch((err) => dispatch(getProductsError(err)));
};

//---------------------------
