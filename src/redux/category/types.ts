import { CATEGORYS_GET_REQUEST, CATEGORYS_GET_SUCCESS, CATEGORYS_GET_ERROR } from '../actions';

export interface errorType {
  message: string;
}

export type initStateType = {
  categories: any | null;
  loading: boolean;
  error: errorType | null;
};

interface categoriesGetErrorType {
  type: typeof CATEGORYS_GET_ERROR;
  payload: errorType;
}
interface categoriesGetSuccessType {
  type: typeof CATEGORYS_GET_SUCCESS;
  payload: any;
}
interface categoriesGetRequestType {
  type: typeof CATEGORYS_GET_REQUEST;
}

export type CategoriesActionsType =
  | categoriesGetErrorType
  | categoriesGetSuccessType
  | categoriesGetRequestType;
