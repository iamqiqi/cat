import { combineReducers } from 'redux';

import catListData from './catListData';
import catIndex from './catIndex';
import adminEditingFilter from './adminEditingFilter';

const rootReducer = combineReducers({
  catListData,
  catIndex,
  adminEditingFilter,
});

export default rootReducer;
