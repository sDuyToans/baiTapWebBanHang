import { CART_ACTION_TYPES } from "./cart.type";

const initialState = {
    cartItems: [],
    isCartOpen: null
}

export const cartReducer = (state = initialState, action = {} ) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.UPDATE_SET_CART_ITEMS:
            return { ...state, cartItems: payload }
        case CART_ACTION_TYPES.OPT_SELECT_IS_CART_OPEN: 
            return { ...state, isCartOpen: payload};
        case CART_ACTION_TYPES.UPDATE_ON_CHECHOUT_START:
            return {...state, cartItems: []}
        default: 
            return state;
    }
}