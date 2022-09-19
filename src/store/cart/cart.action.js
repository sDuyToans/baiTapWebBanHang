import { createAction } from '../../utils/Reducer/Reducer.utils'
import { CATEGORIES_ACTION_TYPES } from '../categories/categories.type';
import { CART_ACTION_TYPES } from './cart.type';

export const addItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (item) => item.id === productToAdd.id
    );
    if (existingCartItem) {
      return cartItems.map((item) =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

export const addItemToCart = (cartItems, itemToAdd) => {
    const newCartItems = addItem(cartItems, itemToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const setIsCartOpen = boolean => createAction(CART_ACTION_TYPES.SELECT_IS_CART_OPEN, boolean);

export const onCheckOutStart = (cartItems) => createAction(CART_ACTION_TYPES.ON_CHECHOUT_START, cartItems);

export const onCheckOutSuccess = (cartItems) => createAction(CART_ACTION_TYPES.ON_CHECHOUT_SUCCESS, cartItems) ;

export const onCheckOutFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.ADD_PRODUCT_FAILED, error);