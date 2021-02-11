/* eslint-disable no-unused-vars */
import jwtDecode from 'jwt-decode';

import axios from '../../services/apiService';
import { setAuthData, resetAuthData } from '../../services/authService';

import { errorType, loginUserParamType, userDataType } from './types';

import {
  SET_USER_DATA,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTRATION_USER_REQUEST,
  REGISTRATION_USER_SUCCESS,
  REGISTRATION_USER_ERROR,
  LOGOUT_USER,
  thunkType,
} from '../actions';

const setUserData = (token: string) => ({ type: SET_USER_DATA, payload: jwtDecode(token) });

// Вход

const loginUserRequested = () => ({
  type: LOGIN_USER_REQUEST,
});

const loginUserSuccess = (item: userDataType) => ({
  type: LOGIN_USER_SUCCESS,
  payload: item,
});

const loginUserError = (error: errorType) => ({
  type: LOGIN_USER_ERROR,
  payload: error,
});

type pathPushType = (path: string) => void;

const logoutUser = (pathPush: pathPushType) => {
  resetAuthData();
  pathPush('/');
  return {
    type: LOGOUT_USER,
  };
};

const loginUserRequest = async ({ email, password }: { email: string; password: string }) =>
  axios
    .post('auth/login', {
      email,
      password,
    })
    .then((response) => response.data);

const loginUser = (object: loginUserParamType, historyPush: pathPushType): thunkType => (dispatch) => {
  dispatch(loginUserRequested());
  loginUserRequest(object)
    .then((data) => {
      setAuthData(data);
      historyPush('/');
      return dispatch(loginUserSuccess(jwtDecode(data.token)));
    })
    .catch((err) => dispatch(loginUserError(err.response?.data)));
};

//-----

// Регистрация

const registrationUserRequested = () => ({
  type: REGISTRATION_USER_REQUEST,
});

const registrationUserSuccess = (item: userDataType) => ({
  type: REGISTRATION_USER_SUCCESS,
  payload: item,
});

const registrationUserError = (error: errorType) => ({
  type: REGISTRATION_USER_ERROR,
  payload: error,
});

interface registationParamType {
  email: string;
  password: string;
  name: string;
  phone: string;
  address: string;
}

const registrationUserRequest = async ({ email, password, name, phone, address }: registationParamType) =>
  axios
    .post('auth/registration', {
      email,
      password,
      name,
      phone,
      address,
    })
    .then((response) => response.data);

const registrationUser = (object: registationParamType, historyPush: pathPushType): thunkType => (
  dispatch,
) => {
  dispatch(registrationUserRequested());
  registrationUserRequest(object)
    .then((data) => {
      setAuthData(data);
      historyPush('/');
      return dispatch(registrationUserSuccess(jwtDecode(data.token)));
    })
    .catch((err) => dispatch(registrationUserError(err.response?.data)));
};

//------------

export { setUserData, loginUser, logoutUser, registrationUser };
