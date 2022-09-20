import { createAction } from '../../utils/Reducer/Reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categories.type';

export const addingProductStart = (productToAdd, id) => createAction(CATEGORIES_ACTION_TYPES.UPDATE_ADD_PRODUCT_START, { productToAdd, id});

export const addingProductSuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.UPDATE_ADD_PRODUCT_SUCCESS, categories);

export const addingProductFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.UPDATE_ADD_PRODUCT_FAILED, error);

export const uppdateId = (id) => createAction(CATEGORIES_ACTION_TYPES.UPDATE_ID, id);
