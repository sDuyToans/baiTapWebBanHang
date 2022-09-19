import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/categories.reducer';

export const rootReducer = combineReducers({
    categoriesReducer: categoriesReducer,
    cartReducer: cartReducer
})