import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import store from './reducers';

export type thunkType = ThunkAction<void, typeof store, unknown, Action<string>>;

// Авторизация
export const SET_USER_DATA = 'SET_USER_DATA';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const REGISTRATION_USER_REQUEST = 'REGISTRATION_USER_REQUEST';
export const REGISTRATION_USER_SUCCESS = 'REGISTRATION_USER_SUCCESS';
export const REGISTRATION_USER_ERROR = 'REGISTRATION_USER_ERROR';

export const LOGOUT_USER = 'LOGOUT_USER';

// Список продуктов

export const PRODUCTS_GET_REQUEST = 'PRODUCTS_GET_REQUEST';
export const PRODUCTS_GET_SUCCESS = 'PRODUCTS_GET_SUCCESS';
export const PRODUCTS_GET_ERROR = 'PRODUCTS_GET_ERROR';

export const DITAIL_PRODUCT_GET_SUCCESS = 'DITAIL_PRODUCT_GET_SUCCESS';

export const OTHER_PRODUCTS_GET_SUCCESS = 'OTHER_PRODUCTS_GET_SUCCESS';
export const OTHER_PRODUCTS_GET_REQUEST = 'OTHER_PRODUCTS_GET_REQUEST';
export const OTHER_PRODUCTS_GET_ERROR = 'OTHER_PRODUCTS_GET_ERROR';

// Категории продукта

export const CATEGORYS_GET_SUCCESS = 'CATEGORYS_GET_SUCCESS';
export const CATEGORYS_GET_REQUEST = 'CATEGORYS_GET_REQUEST';
export const CATEGORYS_GET_ERROR = 'CATEGORYS_GET_ERROR';
