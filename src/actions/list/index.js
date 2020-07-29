import * as actionTypes from '../actionTypes/list';

export const createOrEditShopping = (payload) => {
  return { type: actionTypes.CREATE_OR_EDIT_SHOPPING_RECORD, payload };
}

export const saveShopping = (payload) => {
  return { type: actionTypes.SAVE_SHOPPING_RECORD, payload };
}

export const deleteShopping = (name) => {
  return { type: actionTypes.DELETE_SHOPPING_RECORD, name };
}

export const onChangeFormData = (payload) => {
  return { type: actionTypes.ON_CHANGE_FORM_DATA, payload };
}

export const searchByName = (searchString) => {
  return { type: actionTypes.SEARCH_BY_NAME, searchString };
}