import { UPDATE_CURRENT_CAT } from '../actions/ActionTypes';

export default function currentCat(state = null, action) {
  switch (action.type) {
    case UPDATE_CURRENT_CAT:
      return action.currentCat;
    default:
      return state;
  }
}
