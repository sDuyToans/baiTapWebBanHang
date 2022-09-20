import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { CATEGORIES_ACTION_TYPES } from '../model/categories/categories.type';
import { addingProductSuccess, addingProductFailed, uppdateId } from '../model/categories/categories.action';
import { selectProductCategories } from '../model/categories/categories.selector';


export function* handleAddProduct(props) {
    const { id, productToAdd } = props.payload;
    try { 
        const categories = yield select(selectProductCategories);
        const tax = productToAdd.price / 100 * 5;
        const newProduct = {id, ...productToAdd, tax};
        const newArrProduct = [newProduct, ...categories];
        yield put(addingProductSuccess(newArrProduct));
        yield put(uppdateId(id + 1));
    } catch (error) {
        yield put(addingProductFailed(error));
    }
}

export function* onAddProductStart() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.UPDATE_ADD_PRODUCT_START, handleAddProduct)
}

export function* categoriesSaga() {
    yield all([call(onAddProductStart)])
}