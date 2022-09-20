import { CART_ACTION_TYPES } from "../cart/cart.type";

const inititalState = {
    dongDonHang: []
}
export const dongDonHangReducer = (state = inititalState , action = {}) => {
    const { type, payload } = action;
    switch (type)  {
        case CART_ACTION_TYPES.UPDATE_ON_CHECHOUT_SUCCESS: 
        const newDongDonHang = [...state.dongDonHang, ...payload.newDongDonHang]
            return {
                ...state,
                dongDonHang: newDongDonHang
            }
        default: 
            return state; 
    }
 }