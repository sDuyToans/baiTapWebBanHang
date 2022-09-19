import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { CATEGORIES_ACTION_TYPES } from './categories.type';
import { addingProductSuccess, addingProductFailed } from './categories.action';
import { selectProductCategories } from './categories.selector';

var id = 3;

export function* handleAddProduct(props) {
    try { 
        id ++;
        const categories = yield select(selectProductCategories);
        const tax = props.payload.price / 100 * 5;
        const newProduct = {id, ...props.payload, tax};
        const newArrProduct = [newProduct, ...categories];
        yield put(addingProductSuccess(newArrProduct));
    } catch (error) {
        yield put(addingProductFailed(error));
    }
}

export function* onAddProductStart() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.ADD_PRODUCT_START, handleAddProduct)
}

export function* categoriesSaga() {
    yield all([call(onAddProductStart)])
}