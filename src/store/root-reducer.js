import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { donHangReducer } from './donHang/donHang.reducer';
import { dongDonHangReducer } from './dongDonHang/dongDonHang.reducer';

export const rootReducer = combineReducers({
    categoriesReducer: categoriesReducer,
    cartReducer: cartReducer,
    donHangReducer: donHangReducer,
    dongDonHangReducer: dongDonHangReducer
})