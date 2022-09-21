import { call, put, all, takeLeading, select } from 'redux-saga/effects';
import { onCheckOutFailed, onCheckOutSuccess } from '../model/cart/cart.action';
import { CART_ACTION_TYPES } from '../model/cart/cart.type';


export function* donHangHandle(cartItems, id) {
    try {
        let newPhanTu = {
            id: '',
            name: '',
            tongtruocthue: 0,
            tongthue: 0,
            tongtien: 0
        };
        newPhanTu.id = id;
        newPhanTu.name = `Đơn hàng ${id}`;
        cartItems.map(item => {
            newPhanTu.tongtruocthue += item.quantity * item.price;
            newPhanTu.tongthue += item.quantity * item.tax;
            newPhanTu.tongtien += item.quantity * item.price + item.quantity * item.tax;
        })
        return newPhanTu;
    } catch (error) {
        yield put(onCheckOutFailed(error));
    }
}

export function* dongDonHangHandle(cartItems, id) {
    const newDongDonHang = [];
    try {
        cartItems.map(item => {
            const newPhanTu = {
                id: '',
                idSP: '',
                quantity: '',
                price: '',
                tongtientruocthue: 0,
                tongtienthue: 0
            };
            newPhanTu.id = id;
            newPhanTu.idSP = item.id;
            newPhanTu.quantity = item.quantity;
            newPhanTu.price = item.price;
            newPhanTu.tongtientruocthue = item.price * item.quantity;
            newPhanTu.tongtienthue = item.quantity * item.price + item.quantity * item.tax;
            newDongDonHang.push({ ...newPhanTu })
            return newDongDonHang;
        })
        return newDongDonHang;
    } catch (error) {
        yield put(onCheckOutFailed(error));
    }
}

export function* checkOutHandle(props) {
    try {
        const { id, cartItems } = props.payload;
        const newDonHang = yield call(donHangHandle, cartItems, id);
        console.log(newDonHang)
        const newDongDonHang = yield call(dongDonHangHandle, cartItems, id);
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