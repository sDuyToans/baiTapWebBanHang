import { CART_ACTION_TYPES } from "../cart/cart.type";

const inititalState = {
    donHang: []
}
export const donHangReducer = (state = inititalState , action = {}) => {
    const { type, payload } = action;
    switch (type)  {
        case CART_ACTION_TYPES.UPDATE_ON_CHECHOUT_SUCCESS:
            const newArrDonHang = [...state.donHang, {...payload.newDonHang}]
            return {...state, donHang: newArrDonHang}
        default: 
            return state;
    }
 }