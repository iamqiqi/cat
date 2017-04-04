import { SET_CAT_INDEX } from '../actions/ActionTypes';

export default function catIndex(state = null, action) {
  switch (action.type) {
    case SET_CAT_INDEX:
      return action.index;
    default:
      return state;
  }
}
