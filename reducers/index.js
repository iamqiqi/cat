import { combineReducers } from 'redux';

import catListData from './catListData';
import currentCat from './currentCat';
import catIndex from './catIndex';

const rootReducer = combineReducers({
  catListData,
  currentCat,
  catIndex,
});

export default rootReducer;
