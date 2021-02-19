import { combineReducers } from 'redux';

import user from './user/reducer';
import product from './products/reducer';
import category from './category/reducer';

const reducers = combineReducers({
  user,
  product,
  category,
});

export type StateType = ReturnType<typeof reducers>;

export default reducers;
