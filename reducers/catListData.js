import { UPDATE_CAT_LIST_DATA, UPDATE_CAT } from '../actions/ActionTypes';

export default function catListData(state = [], action) {
  switch (action.type) {
    case UPDATE_CAT_LIST_DATA:
      return action.catListData;
    case UPDATE_CAT:
      return [
        ...state.slice(0, action.catIndex),
        {
          ...state[action.catIndex],
          ...action.fieldsToUpdate,
        },
        ...state.slice(action.catIndex + 1),
      ];
    default:
      return state;
  }
}
