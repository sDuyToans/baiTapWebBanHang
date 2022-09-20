import { call, put , all, takeLeading} from 'redux-saga/effects';
import { onCheckOutFailed, onCheckOutSuccess } from '../model/cart/cart.action';
import { CART_ACTION_TYPES } from '../model/cart/cart.type';


export function* donHangHandle(cartItems){
    try {
        const newDonHang = [];
        cartItems.map(item => {
            const newPhanTu = {
                id: '',
                name: '',
                tongtruocthue: 0,
                tongthue: 0,
                tongtien: 0
            };
            newPhanTu.id = item.id;
            newPhanTu.name = item.name;
            newPhanTu.tongtruocthue = item.quantity * item.price;
            newPhanTu.tongthue = item.quantity * item.tax;
            newPhanTu.tongtien = item.quantity * item.price + item.quantity * item.tax;
            newDonHang.push({...newPhanTu});
            return newDonHang;
        })
        return newDonHang;
    } catch (error) {
        yield put(onCheckOutFailed(error));
    }
}

export function* dongDonHangHandle(cartItems){
    const newDongDonHang = [];
    try {
        cartItems.map(item => {
            const newPhanTu = {
                id: '',
                quantity: '',
                price: '',
                tongtientruocthue: 0,
                tongtienthue: 0
            };
            newPhanTu.id = item.id;
            newPhanTu.quantity = item.quantity;
            newPhanTu.price = item.price;
            newPhanTu.tongtientruocthue = item.price * item.quantity;
            newPhanTu.tongtienthue = item.quantity * item.price + item.quantity * item.tax;
            newDongDonHang.push({...newPhanTu})
            return newDongDonHang;
        })
        return newDongDonHang;
    } catch (error) {
        yield put(onCheckOutFailed(error));
    }
}

export function* checkOutHandle(props) {
    try {
        const newDonHang = yield call(donHangHandle, props.payload);
        const newDongDonHang = yield call(dongDonHangHandle, props.payload);
        yield put(onCheckOutSuccess(newDonHang, newDongDonHang));
    } catch (error) {
        yield put(onCheckOutFailed(error));
    }
}

export function* onCheckOut() {
    yield takeLeading(CART_ACTION_TYPES.UPDATE_ON_CHECHOUT_START, checkOutHandle)
}

export function* cartSaga() {
    yield all([call(onCheckOut)])
}