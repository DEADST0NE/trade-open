import axios from '../../services/apiService';

import { CATEGORYS_GET_REQUEST, CATEGORYS_GET_SUCCESS, CATEGORYS_GET_ERROR, thunkType } from '../actions';

// Список категорий компаний
const getCategotysRequested = () => ({
  type: CATEGORYS_GET_REQUEST,
});

const getCategotysSuccess = (item: any) => ({
  type: CATEGORYS_GET_SUCCESS,
  payload: item,
});

const getCategotysError = (error: string) => ({
  type: CATEGORYS_GET_ERROR,
  payload: error,
});

const getCategorysRequest = async (clientId: string) =>
  axios
    .get('categories/client', {
      params: { clientId },
    })
    .then((response) => response.data);

export const getCategory = (id: string): thunkType => (dispatch) => {
  dispatch(getCategotysRequested());
  getCategorysRequest(id)
    .then((data) => {
      dispatch(getCategotysSuccess(data));
    })
    .catch((err) => dispatch(getCategotysError(err)));
};
// -------------------------
