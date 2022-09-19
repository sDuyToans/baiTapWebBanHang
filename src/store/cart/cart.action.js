import { createAction } from '../../utils/Reducer/Reducer.utils'
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