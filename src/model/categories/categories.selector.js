import { createSelector } from 'reselect';
const  categoriesReducer = (state) => state.categoriesReducer;

export const selectProductCategories = createSelector(
    [categoriesReducer],
    slice => slice.productCategories
)

export const selectLastID = createSelector(
    [categoriesReducer],
    slice => slice.lastID
)
