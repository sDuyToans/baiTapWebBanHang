import { createSelector } from 'reselect';

const selectcartReducer = state => state.cartReducer;

export const selectIsCartOpen = createSelector(
    [selectcartReducer],
    slice => slice.isCartOpen
);

export const selectCartItems = createSelector(
    [selectcartReducer],
    slice => slice.cartItems
);

export const selectCartCount = createSelector(
    [selectCartItems],
    cartItems => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }
)
