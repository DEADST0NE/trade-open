import { CATEGORYS_GET_REQUEST, CATEGORYS_GET_SUCCESS, CATEGORYS_GET_ERROR } from '../actions';

import { initStateType, CategoriesActionsType } from './types';

const INIT_STATE: initStateType = {
  categories: [],
  loading: false,
  error: null,
};

const reducer = (state = INIT_STATE, action: CategoriesActionsType): initStateType => {
  switch (action.type) {
    case CATEGORYS_GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CATEGORYS_GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CATEGORYS_GET_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
