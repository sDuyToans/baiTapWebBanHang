import { createAction } from '../../utils/Reducer/Reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categories.type';

export const addingProductStart = (productToAdd) => createAction(CATEGORIES_ACTION_TYPES.ADD_PRODUCT_START, productToAdd);

export const addingProductSuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.ADD_PRODUCT_SUCCESS, categories);

export const addingProductFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.ADD_PRODUCT_FAILED, error);
