import {
  PRODUCTS_GET_REQUEST,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_GET_ERROR,
  DITAIL_PRODUCT_GET_SUCCESS,
  OTHER_PRODUCTS_GET_SUCCESS,
  OTHER_PRODUCTS_GET_REQUEST,
  OTHER_PRODUCTS_GET_ERROR,
} from '../actions';

export interface productType {
  id: string;
  name: string;
  weight: number | null;
  avatarProduct: any;
  categoryId: string;
  description: string | null;
  code: string;
  manufacturer: {
    id: string;
    name: string;
  };
  measure: {
    value: string;
    label: string;
  };
  price: {
    id: string;
    name: string;
  };
}

export interface errorType {
  message: string;
}

export type initStateType = {
  products: any | null;
  loading: boolean;
  error: errorType | null;
  showHeader: boolean;
  ditailProduct: any;
  otherProducts: any | null;
  oPLoading: boolean;
  oPError: errorType | null;
};

interface productGetErrorType {
  type: typeof PRODUCTS_GET_ERROR;
  payload: errorType;
}
interface productGetSuccessType {
  type: typeof PRODUCTS_GET_SUCCESS;
  payload: any;
}
interface productGetRequestType {
  type: typeof PRODUCTS_GET_REQUEST;
}

interface productDitailGetSuccessType {
  type: typeof DITAIL_PRODUCT_GET_SUCCESS;
  payload: any;
}

interface oherProductGetErrorType {
  type: typeof OTHER_PRODUCTS_GET_ERROR;
  payload: errorType;
}
interface otherProductGetSuccessType {
  type: typeof OTHER_PRODUCTS_GET_SUCCESS;
  payload: any;
}
interface otherProductGetRequestType {
  type: typeof OTHER_PRODUCTS_GET_REQUEST;
}

export type ProductActionsType =
  | productGetErrorType
  | productGetSuccessType
  | productGetRequestType
  | productDitailGetSuccessType
  | oherProductGetErrorType
  | otherProductGetSuccessType
  | otherProductGetRequestType;
