import { SET_ADMIN_FILTER, ADMIN_EDITING_VISIBILITY } from '../actions/ActionTypes';

export default function adminEditingFilter(state = ADMIN_EDITING_VISIBILITY.SHOW_ADMIN, action) {
  switch (action.type) {
    case SET_ADMIN_FILTER:
      return action.adminOrEditing;
    default:
      return state;
  }
}
