import * as types from './ActionTypes';

export function updateCatListData(catListData) {
  return {
    type: types.UPDATE_CAT_LIST_DATA,
    catListData,
  };
}

export function updateCat(catIndex, fieldsToUpdate) {
  return {
    type: types.UPDATE_CAT,
    catIndex,
    fieldsToUpdate,
  };
}


export function setCurrentCat(currentCat) {
  return {
    type: types.SET_CURRENT_CAT,
    currentCat,
  };
}

export function setCatIndex(index) {
  return {
    type: types.SET_CAT_INDEX,
    index,
  };
}
