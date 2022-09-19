import { createAction } from '../../utils/Reducer';
import { CATEGORIES_ACTION_TYPES } from './categories.type';

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATGORIES_START);

export const fetchCategoriesSuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
