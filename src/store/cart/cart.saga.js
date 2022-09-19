import { call, put , all, takeLeading, select } from 'redux-saga/effects';
import { onCheckOutFailed, onCheckOutSuccess } from './cart.action';
import { CART_ACTION_TYPES } from './cart.type';


const handleCartItems = () => {
    
}

export function* checkOutHandle(props) {
    try {
        const donHang = yield select(state => state.donHangReducer.donHang);
        const dongDonHang = yield select(state => state.dongDonHangReducer.dongDonHang);
        yield put(onCheckOutSuccess());
    } catch (error) {
        yield put(onCheckOutFailed(error));
    }
}

export function* onCheckOutStart() {
    yield takeLeading(CART_ACTION_TYPES.ON_CHECHOUT_START, checkOutHandle)
}

export function* cartSaga() {
    yield all([call()])
}